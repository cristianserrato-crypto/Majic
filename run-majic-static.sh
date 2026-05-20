#!/bin/bash
# Sirve la landing estática en 0.0.0.0:8020 (LAN e Internet si abres el puerto o usas túnel).
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"
exec python3 -m http.server 8020 --bind 0.0.0.0
