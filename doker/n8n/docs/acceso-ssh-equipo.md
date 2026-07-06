# Acceso SSH para equipo Majic3D

Objetivo: que cada companero pueda entrar al servidor por SSH y trabajar en `/var/www/projects/doker/n8n`.

Estado actual revisado:

- OpenSSH escucha localmente en `127.0.0.1:22`, `0.0.0.0:22` y `:::22`.
- El tunel Cloudflare publica `ssh.majic3d.online` hacia `ssh://127.0.0.1:22`.
- `ssh.majic3d.online` no funciona como SSH directo por puerto 22 normal; se entra con `cloudflared access ssh` como `ProxyCommand`.
- La IP directa `186.194.62.46` solo sirve si el router/firewall permite entrada al puerto 22.

## Regla importante

No se debe compartir una misma llave SSH. Cada persona debe tener su propia llave publica. La llave privada nunca se envia por WhatsApp, correo ni chat.

## 1. Cada companero crea su llave en su computador

En Windows PowerShell, macOS Terminal o Linux:

```bash
ssh-keygen -t ed25519 -C "nombre@majic3d"
```

Cuando pregunte donde guardar, puede presionar `Enter`.

Luego debe copiar la llave publica:

```bash
cat ~/.ssh/id_ed25519.pub
```

En Windows PowerShell:

```powershell
type $env:USERPROFILE\.ssh\id_ed25519.pub
```

Esa linea completa es la que debe enviar al administrador del servidor. Debe empezar por algo como `ssh-ed25519`.

## 2. El administrador agrega al companero en el servidor

Primero se puede reforzar la configuracion del servidor y activar el servicio del tunel:

```bash
cd /var/www/projects/doker/n8n
sudo ./scripts/setup-ssh-access.sh
```

Ese script habilita `ssh.socket`, valida `sshd`, revisa `cloudflared.service` y, si el config de `/etc/cloudflared` es identico al de usuario, apaga el `cloudflared` duplicado de usuario para dejar un solo conector estable.

Desde el servidor:

```bash
cd /var/www/projects/doker/n8n
sudo ./scripts/add-ssh-team-user.sh nombre_usuario 'ssh-ed25519 AAAA... comentario'
```

Si esa persona tambien debe administrar Docker:

```bash
cd /var/www/projects/doker/n8n
sudo ./scripts/add-ssh-team-user.sh nombre_usuario 'ssh-ed25519 AAAA... comentario' --docker
```

Importante: dar acceso al grupo `docker` permite administrar contenedores y equivale a permisos altos sobre el servidor. Usarlo solo con companeros de confianza.

## 3. El companero se conecta

Cada companero debe instalar `cloudflared` en su computador y agregar esto una sola vez en `~/.ssh/config`:

```sshconfig
Host ssh.majic3d.online
  ProxyCommand cloudflared access ssh --hostname %h
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```

Luego se conecta por el tunel:

```bash
ssh nombre_usuario@ssh.majic3d.online
cd /var/www/projects/doker/n8n
```

La primera vez, `cloudflared` puede abrir el navegador para autenticar al usuario en Cloudflare Access.

Si se quiere usar SSH directo sin Cloudflare, debe existir una regla de NAT/firewall hacia el puerto 22 del servidor y un DNS sin proxy de Cloudflare. En ese caso:

```bash
ssh nombre_usuario@186.194.62.46
```

No usar `ssh nombre_usuario@ssh.majic3d.online` como directo sin `ProxyCommand`, porque ese hostname esta publicado por Cloudflare Tunnel.

## 4. Comandos utiles dentro del proyecto

Ver estado:

```bash
docker compose ps
```

Levantar cambios:

```bash
docker compose up -d --build
```

Ver logs:

```bash
docker compose logs -f
```

Si el usuario aun no cargo el grupo docker en la sesion actual:

```bash
sg docker -c 'docker compose ps'
```

## 5. Seguridad recomendada

- Mantener SSH por llaves, no por contrasena.
- No compartir el usuario `cristians`.
- Crear un usuario por cada companero.
- Revocar acceso borrando su llave o eliminando el usuario.
- No publicar `.env` en GitHub porque contiene secretos.
- Hacer backups antes de cambiar flujos de n8n o base de datos.
- Mantener el servicio `cloudflared.service` habilitado y evitar procesos duplicados del mismo tunel en la misma maquina, salvo que se busquen replicas intencionalmente.

## 6. Revocar acceso

Bloquear acceso SSH de un usuario:

```bash
sudo usermod -L nombre_usuario
sudo gpasswd -d nombre_usuario majic3d
sudo gpasswd -d nombre_usuario docker
```

Eliminar usuario y su carpeta home:

```bash
sudo userdel -r nombre_usuario
```

## 7. Referencias Cloudflare

- SSH con `cloudflared` del lado del cliente: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/use-cases/ssh/ssh-cloudflared-authentication/
- Descargas de `cloudflared`: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/
