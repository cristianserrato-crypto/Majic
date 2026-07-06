#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

set -a
. ./.env
set +a

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is not installed. Run: ./scripts/install-docker-ubuntu.sh" >&2
  exit 1
fi

if docker info >/dev/null 2>&1; then
  DOCKER=(docker)
else
  DOCKER=(sudo docker)
fi

mkdir -p backups
STAMP="$(date +%Y%m%d-%H%M%S)"

"${DOCKER[@]}" compose exec -T postgres pg_dump -U "$POSTGRES_USER" "$POSTGRES_DB" > "backups/postgres-$STAMP.sql"
N8N_VOLUME="${COMPOSE_PROJECT_NAME:-n8n}_n8n_data"
"${DOCKER[@]}" run --rm -v "$N8N_VOLUME:/data" -v "$PWD/backups:/backups" alpine tar czf "/backups/n8n-data-$STAMP.tgz" -C /data .

echo "Backup created in $PWD/backups"
