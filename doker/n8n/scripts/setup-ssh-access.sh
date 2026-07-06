#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-/var/www/projects/doker/n8n}"
PROJECT_GROUP="${PROJECT_GROUP:-majic3d}"
SSH_HOST="${SSH_HOST:-ssh.majic3d.online}"
SSH_ORIGIN="${SSH_ORIGIN:-127.0.0.1:22}"
DIRECT_SSH_HOST="${DIRECT_SSH_HOST:-186.194.62.46}"
SSHD_DROPIN="${SSHD_DROPIN:-/etc/ssh/sshd_config.d/99-majic3d-team-access.conf}"
CLOUDFLARED_CONFIG="${CLOUDFLARED_CONFIG:-/etc/cloudflared/config.yml}"
SOURCE_CLOUDFLARED_CONFIG="${SOURCE_CLOUDFLARED_CONFIG:-/home/${SUDO_USER:-cristians}/.cloudflared/config.yml}"
DISABLE_DUPLICATE_USER_TUNNEL="${DISABLE_DUPLICATE_USER_TUNNEL:-1}"

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run this script with sudo." >&2
  exit 1
fi

echo "== Installing base SSH packages =="
if command -v apt-get >/dev/null 2>&1; then
  export DEBIAN_FRONTEND=noninteractive
  apt-get update
  apt-get install -y openssh-server openssh-client ufw curl ca-certificates
else
  echo "apt-get was not found; skipping package installation."
fi

echo
echo "== Configuring sshd for key-only access on port 22 =="
install -d -m 755 /etc/ssh/sshd_config.d
cat >"$SSHD_DROPIN" <<'EOF'
# Managed for Majic3D team SSH access.
Port 22
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
PasswordAuthentication no
KbdInteractiveAuthentication no
PermitRootLogin no
UsePAM yes
AllowTcpForwarding yes
X11Forwarding no
EOF

sshd -t
systemctl daemon-reload
systemctl enable --now ssh.socket
systemctl restart ssh.socket
systemctl reload ssh.service 2>/dev/null || systemctl restart ssh.service

echo
echo "== Allowing SSH through ufw if ufw is present =="
if command -v ufw >/dev/null 2>&1; then
  ufw allow 22/tcp comment "Majic3D team SSH" || ufw allow OpenSSH || true
  if ufw status | grep -q '^Status: active'; then
    ufw reload
  fi
else
  echo "ufw is not installed."
fi

echo
echo "== Ensuring project group and permissions =="
getent group "$PROJECT_GROUP" >/dev/null || groupadd "$PROJECT_GROUP"
if [[ -d "$PROJECT_DIR" ]]; then
  chgrp -R "$PROJECT_GROUP" "$PROJECT_DIR"
  find "$PROJECT_DIR" -type d -exec chmod 2770 {} +
  find "$PROJECT_DIR" -type f -exec chmod 660 {} +
  find "$PROJECT_DIR/scripts" -type f -name '*.sh' -exec chmod 770 {} +
fi

echo
echo "== Checking cloudflared tunnel service =="
if command -v apt-get >/dev/null 2>&1 && apt-cache show cloudflared >/dev/null 2>&1; then
  apt-get install -y cloudflared
elif ! command -v cloudflared >/dev/null 2>&1; then
  echo "cloudflared is not installed or not available in apt."
  echo "Install it from Cloudflare, then rerun this script."
fi

if command -v cloudflared >/dev/null 2>&1; then
  if [[ ! -f "$CLOUDFLARED_CONFIG" && -f "$SOURCE_CLOUDFLARED_CONFIG" ]]; then
    install -D -m 600 -o root -g root "$SOURCE_CLOUDFLARED_CONFIG" "$CLOUDFLARED_CONFIG"
  fi

  if [[ -f "$CLOUDFLARED_CONFIG" ]]; then
    if ! grep -Fq "hostname: $SSH_HOST" "$CLOUDFLARED_CONFIG"; then
      echo "WARNING: $CLOUDFLARED_CONFIG does not mention hostname: $SSH_HOST"
    fi
    if ! grep -Fq "service: ssh://$SSH_ORIGIN" "$CLOUDFLARED_CONFIG"; then
      echo "WARNING: $CLOUDFLARED_CONFIG does not mention service: ssh://$SSH_ORIGIN"
    fi
    systemctl enable --now cloudflared.service || true
    systemctl restart cloudflared.service || true

    if [[ "$DISABLE_DUPLICATE_USER_TUNNEL" == "1" && -n "${SUDO_USER:-}" && -f "$SOURCE_CLOUDFLARED_CONFIG" ]]; then
      if cmp -s "$CLOUDFLARED_CONFIG" "$SOURCE_CLOUDFLARED_CONFIG"; then
        USER_UID="$(id -u "$SUDO_USER")"
        if [[ -d "/run/user/$USER_UID" ]] && command -v runuser >/dev/null 2>&1; then
          echo "Disabling duplicate user cloudflared.service for $SUDO_USER."
          XDG_RUNTIME_DIR="/run/user/$USER_UID" runuser -u "$SUDO_USER" -- \
            systemctl --user disable --now cloudflared.service || true
        fi
      else
        echo "User and system cloudflared configs differ; leaving user service untouched."
      fi
    fi
  else
    echo "WARNING: $CLOUDFLARED_CONFIG was not found."
  fi
fi

echo
echo "== Runtime checks =="
ss -tlnp | grep -E '(^|[[:space:]])(0.0.0.0|\[::\]|\*):22[[:space:]]' || ss -tlnp | grep ':22' || true
if timeout 4 bash -lc 'cat < /dev/null > /dev/tcp/127.0.0.1/22'; then
  echo "Local SSH is reachable on 127.0.0.1:22."
else
  echo "WARNING: Local SSH did not answer on 127.0.0.1:22."
fi

mapfile -t TUNNEL_PROCESSES < <(pgrep -af 'cloudflared .*tunnel run' || true)
if ((${#TUNNEL_PROCESSES[@]} > 1)); then
  echo
  echo "WARNING: more than one cloudflared tunnel process is running:"
  printf '  %s\n' "${TUNNEL_PROCESSES[@]}"
  echo "Prefer one managed systemd service unless you intentionally run replicas."
  echo "If the configs differ, compare them before disabling either service."
fi

cat <<EOF

Setup finished.

Add each teammate key with:
  cd $PROJECT_DIR
  sudo ./scripts/add-ssh-team-user.sh usuario 'ssh-ed25519 AAAA... comentario' --docker

Client ~/.ssh/config for Cloudflare Tunnel:
  Host $SSH_HOST
    ProxyCommand cloudflared access ssh --hostname %h
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

Connect through the tunnel:
  ssh usuario@$SSH_HOST

Direct IP fallback, only if port 22 is forwarded/open:
  ssh usuario@$DIRECT_SSH_HOST
EOF
