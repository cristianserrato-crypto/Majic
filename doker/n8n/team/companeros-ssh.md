# Companeros con acceso SSH pendiente

Usuarios definidos:

- `daniel`
- `jhon`
- `jonatan`

Cada companero debe enviar su llave publica SSH. Debe verse parecida a:

```text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... nombre@pc
```

Nunca deben enviar la llave privada. La llave privada queda en el computador de cada persona.

## Comandos para crear acceso

Reemplaza `PEGAR_LLAVE_PUBLICA_AQUI` por la llave publica real de cada companero.

### Daniel

```bash
cd /var/www/projects/doker/n8n
sudo ./scripts/add-ssh-team-user.sh daniel 'PEGAR_LLAVE_PUBLICA_AQUI' --docker
```

### Jhon

```bash
cd /var/www/projects/doker/n8n
sudo ./scripts/add-ssh-team-user.sh jhon 'PEGAR_LLAVE_PUBLICA_AQUI' --docker
```

### Jonatan

```bash
cd /var/www/projects/doker/n8n
sudo ./scripts/add-ssh-team-user.sh jonatan 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHMs8bwzAOmAq1Sad5+E5IhBBLm8JRlAMpiFO/emrDb4' --docker
```

## Comando de conexion para ellos

Primero deben instalar `cloudflared` y agregar a `~/.ssh/config`:

```sshconfig
Host ssh.majic3d.online
  ProxyCommand cloudflared access ssh --hostname %h
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```

Luego se conectan por el tunel:

```bash
ssh daniel@ssh.majic3d.online
ssh jhon@ssh.majic3d.online
ssh jonatan@ssh.majic3d.online
```

Luego:

```bash
cd /var/www/projects/doker/n8n
```

## Comandos utiles

```bash
docker compose ps
docker compose logs -f
docker compose up -d --build
```

Si el grupo Docker aun no cargo en la sesion:

```bash
sg docker -c 'docker compose ps'
```

Si se usa la IP directa `186.194.62.46`, el router/firewall debe tener abierto y redirigido el puerto 22 al servidor.
