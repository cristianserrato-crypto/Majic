#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

set -a
. ./.env
set +a

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is not installed."
  exit 1
fi

if docker info >/dev/null 2>&1; then
  DOCKER=(docker)
else
  DOCKER=(sudo docker)
fi

"${DOCKER[@]}" compose ps

echo
echo "Checking local n8n HTTP response..."
curl -fsS -I "http://127.0.0.1:${N8N_PORT:-5678}/" || {
  echo
  echo "n8n did not answer on localhost. Recent logs:"
  "${DOCKER[@]}" compose logs --tail=80 n8n
  exit 1
}

echo
echo "n8n is responding locally."

echo
echo "Checking local dashboard HTTP response..."
curl -fsS -I "http://127.0.0.1:${DASHBOARD_PORT:-8021}/" || {
  echo
  echo "Dashboard did not answer on localhost. Recent logs:"
  "${DOCKER[@]}" compose logs --tail=80 dashboard
  exit 1
}

echo
echo "Dashboard is responding locally."
