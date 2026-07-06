#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is not installed. Run: ./scripts/install-docker-ubuntu.sh" >&2
  exit 1
fi

if docker info >/dev/null 2>&1; then
  DOCKER=(docker)
else
  DOCKER=(sudo docker)
fi

"${DOCKER[@]}" compose pull postgres n8n
"${DOCKER[@]}" compose up -d --build
"${DOCKER[@]}" compose ps
