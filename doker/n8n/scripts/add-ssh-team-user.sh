#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="/var/www/projects/doker/n8n"
PROJECT_GROUP="majic3d"
DIRECT_SSH_HOST="${DIRECT_SSH_HOST:-186.194.62.46}"
CLOUDFLARE_SSH_HOST="${CLOUDFLARE_SSH_HOST:-ssh.majic3d.online}"

usage() {
  cat <<'USAGE'
Usage:
  sudo ./scripts/add-ssh-team-user.sh <usuario> '<llave-publica-ssh>' [--docker]

Example:
  sudo ./scripts/add-ssh-team-user.sh ana 'ssh-ed25519 AAAAC3Nza... ana@pc' --docker

Notes:
  - Cada companero debe enviar su propia llave publica, no una llave privada.
  - --docker agrega el usuario al grupo docker. Eso permite administrar contenedores
    y equivale a permisos muy altos sobre el servidor.
  - El acceso por ssh.majic3d.online usa Cloudflare Access; el cliente debe tener
    cloudflared configurado como ProxyCommand.
USAGE
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" || $# -lt 2 ]]; then
  usage
  exit 0
fi

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run this script with sudo." >&2
  exit 1
fi

USERNAME="$1"
PUBLIC_KEY="$2"
ADD_DOCKER="${3:-}"

if [[ ! "$USERNAME" =~ ^[a-z_][a-z0-9_-]{1,31}$ ]]; then
  echo "Invalid username: $USERNAME" >&2
  exit 1
fi

if ! ssh-keygen -l -f <(printf '%s\n' "$PUBLIC_KEY") >/dev/null 2>&1; then
  echo "The second argument does not look like a valid SSH public key." >&2
  exit 1
fi

getent group "$PROJECT_GROUP" >/dev/null || groupadd "$PROJECT_GROUP"

if ! id "$USERNAME" >/dev/null 2>&1; then
  useradd -m -s /bin/bash "$USERNAME"
  passwd -l "$USERNAME" >/dev/null
fi

usermod -aG "$PROJECT_GROUP" "$USERNAME"

if [[ "$ADD_DOCKER" == "--docker" ]]; then
  usermod -aG docker "$USERNAME"
fi

USER_HOME="$(getent passwd "$USERNAME" | cut -d: -f6)"
install -d -m 700 -o "$USERNAME" -g "$USERNAME" "$USER_HOME/.ssh"

AUTHORIZED_KEYS="$USER_HOME/.ssh/authorized_keys"
touch "$AUTHORIZED_KEYS"
chown "$USERNAME:$USERNAME" "$AUTHORIZED_KEYS"
chmod 600 "$AUTHORIZED_KEYS"

if ! grep -qxF "$PUBLIC_KEY" "$AUTHORIZED_KEYS"; then
  printf '%s\n' "$PUBLIC_KEY" >> "$AUTHORIZED_KEYS"
fi

chgrp -R "$PROJECT_GROUP" "$PROJECT_DIR"
find "$PROJECT_DIR" -type d -exec chmod 2770 {} +
find "$PROJECT_DIR" -type f -exec chmod 660 {} +
find "$PROJECT_DIR/scripts" -type f -name '*.sh' -exec chmod 770 {} +
find "$PROJECT_DIR/dashboard" -type f -name 'Dockerfile' -exec chmod 660 {} +

cat <<EOF
User ready: $USERNAME
Project group: $PROJECT_GROUP
Project folder: $PROJECT_DIR

Connection command:
  ssh $USERNAME@$CLOUDFLARE_SSH_HOST

Client ~/.ssh/config for Cloudflare Tunnel:
  Host $CLOUDFLARE_SSH_HOST
    ProxyCommand cloudflared access ssh --hostname %h
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

Direct IP fallback, only if port 22 is open in the router/firewall:
  ssh $USERNAME@$DIRECT_SSH_HOST

Project command after login:
  cd $PROJECT_DIR
EOF

if [[ "$ADD_DOCKER" == "--docker" ]]; then
  cat <<EOF

Docker access enabled for $USERNAME.
The user must reconnect SSH before Docker group permissions are active.
EOF
fi
