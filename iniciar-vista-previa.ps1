# Vista previa local (PowerShell). No uses && en la misma linea; ejecuta este script.
Set-Location $PSScriptRoot
$port = 8765
Write-Host ""
Write-Host "  Majic.3D - servidor local" -ForegroundColor Cyan
Write-Host "  En el navegador abre: http://127.0.0.1:$port" -ForegroundColor Green
Write-Host "  (Desde el movil en la misma WiFi: http://TU_IP_LOCAL:$port con --bind 0.0.0.0)" -ForegroundColor DarkGray
Write-Host "  Ctrl+C para detener." -ForegroundColor DarkGray
Write-Host ""
python -m http.server $port --bind 127.0.0.1
