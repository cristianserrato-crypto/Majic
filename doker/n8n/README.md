# n8n Docker Stack

Ubicacion: `/var/www/projects/doker/n8n`

Este stack ejecuta:

- n8n en `http://186.194.62.46:5678`
- Dashboard basico en `https://majic3d.online`
- Dashboard local en `http://127.0.0.1:8021`
- PostgreSQL 16 como base de datos
- Volumen persistente para datos de n8n
- Volumen persistente para PostgreSQL

## Instalar Docker

```bash
cd /var/www/projects/doker/n8n
./scripts/install-docker-ubuntu.sh
```

El script necesita permisos `sudo`.

## Iniciar n8n

```bash
cd /var/www/projects/doker/n8n
./scripts/start.sh
```

## Verificar

```bash
cd /var/www/projects/doker/n8n
./scripts/verify.sh
```

## Dashboard Majic3D

La primera version de la pagina esta en:

```text
/var/www/projects/doker/n8n/dashboard
```

Incluye vistas basicas para:

- Mensajes recientes por WhatsApp Business, Instagram y TikTok.
- Solicitudes y cotizaciones.
- Confirmacion manual de pagos.
- Flujo de trabajos por orden de entrega.

Por ahora usa datos de prueba y almacenamiento local del navegador. Cuando conectemos n8n con la API interna, el dashboard leera los datos reales desde PostgreSQL.

## Ver logs

```bash
cd /var/www/projects/doker/n8n
docker compose logs -f n8n
```

Si tu usuario aun no tiene permisos para Docker, usa:

```bash
sudo docker compose logs -f n8n
```

## Backup manual

```bash
cd /var/www/projects/doker/n8n
./scripts/backup.sh
```

## Acceso del equipo

La clave definida para PostgreSQL en este proyecto es:

```text
grupo3ia_2025
```

La clave `N8N_ENCRYPTION_KEY` no debe cambiarse despues de empezar a guardar credenciales en n8n, porque n8n la usa para cifrar datos internos.

Para que otros companeros trabajen en esta carpeta, lo recomendado es darles acceso SSH por llave publica y agregarlos al grupo `docker` cuando Docker ya este instalado. No compartan la contrasena personal del usuario del servidor.

Guia detallada:

```text
/var/www/projects/doker/n8n/docs/acceso-ssh-equipo.md
```

Companeros definidos para acceso:

```text
/var/www/projects/doker/n8n/team/companeros-ssh.md
```

## Notas

El puerto 80 ya esta ocupado en este servidor, por eso n8n queda publicado en el puerto 5678. Para produccion con dominio y HTTPS, lo ideal es conectar `n8n.tudominio.com` mediante Nginx, Traefik o Cloudflare Tunnel y cambiar `N8N_PROTOCOL`, `WEBHOOK_URL`, `N8N_EDITOR_BASE_URL` y `N8N_SECURE_COOKIE`.

## Estado actual del despliegue

- Docker y Docker Compose estan instalados.
- `n8n`, `postgres` y `dashboard` estan corriendo por Docker Compose.
- `https://majic3d.online` y `https://www.majic3d.online` muestran el dashboard nuevo.
- El tunel activo usa `/home/cristians/.cloudflared/config.yml`.
- Falta crear correctamente el DNS `n8n.majic3d.online` en Cloudflare para acceder a n8n por HTTPS.

Registro DNS recomendado para n8n:

```text
Tipo: CNAME
Nombre: n8n
Destino: 88c9c0f9-ec7c-4b6a-abb7-82b21b4edce0.cfargotunnel.com
Proxy: Activado
```

Despues de crear ese DNS, actualizar `.env` con:

```env
N8N_HOST=n8n.majic3d.online
N8N_PROTOCOL=https
N8N_EDITOR_BASE_URL=https://n8n.majic3d.online/
WEBHOOK_URL=https://n8n.majic3d.online/
N8N_SECURE_COOKIE=true
```

Luego reiniciar:

```bash
cd /var/www/projects/doker/n8n
sg docker -c 'docker compose up -d'
```
