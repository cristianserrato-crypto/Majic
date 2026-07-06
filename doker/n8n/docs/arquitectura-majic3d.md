# Arquitectura propuesta - Majic3D gestion comercial

Objetivo: recibir conversaciones entrantes de WhatsApp Business, Instagram y TikTok, responder automaticamente con ayuda de un LLM, gestionar cotizaciones/pagos/produccion y visualizar el estado en un dashboard basico bajo `majic3d.online`.

## Arquitectura recomendada

```text
Cliente
  -> WhatsApp / Instagram / TikTok
  -> Webhooks publicos HTTPS
  -> n8n
  -> Normalizacion de mensaje
  -> Base de datos comercial
  -> LLM + reglas de catalogo
  -> Respuesta por API del canal
  -> Dashboard Majic3D
```

## Servicios Docker

Todos los servicios deben vivir en `/var/www/projects/doker/n8n`.

- `n8n`: motor de automatizaciones y webhooks.
- `postgres`: base de datos de n8n y base comercial.
- `redis`: cola para n8n cuando pasemos a modo workers.
- `n8n-worker`: procesos de trabajo para tareas lentas.
- `ollama`: LLM local opcional si no se quiere depender de APIs externas.
- `dashboard`: pagina web de gestion para mensajes, pagos y produccion.
- `api`: backend pequeno para que el dashboard lea/escriba datos comerciales.

Para la primera version se puede iniciar con `n8n + postgres + dashboard + api`. Redis, workers y Ollama pueden activarse despues.

## Base de datos comercial

Tablas minimas:

- `channels`: canales conectados, por ejemplo whatsapp, instagram, tiktok.
- `conversations`: conversacion por cliente/canal.
- `messages`: mensajes entrantes y salientes.
- `leads`: solicitud comercial detectada.
- `quotes`: cotizaciones generadas.
- `payments`: confirmaciones de pago.
- `jobs`: trabajos de impresion 3D en cola.
- `catalog_items`: catalogo de productos/servicios.
- `automation_events`: trazabilidad de cada flujo n8n.

## Flujo de mensajes

1. El cliente escribe por una red social.
2. La red social envia el webhook a n8n.
3. n8n guarda el mensaje en PostgreSQL.
4. n8n clasifica la intencion: saludo, cotizacion, estado pedido, archivo 3D, pago, humano.
5. n8n consulta catalogo, reglas de precios y tiempos.
6. n8n envia contexto al LLM.
7. n8n valida que la respuesta cumpla reglas del negocio.
8. n8n responde por la API del canal.
9. El dashboard muestra mensaje, estado y accion tomada.

## APIs a consumir

### WhatsApp Business

- Meta WhatsApp Cloud API.
- Webhooks para mensajes entrantes y estados.
- Graph API para enviar respuestas.
- Requiere Meta Business, numero de WhatsApp Business, app Meta, token y verificacion webhook.

### Instagram

- Instagram Messaging API mediante Meta Messenger Platform.
- Webhooks para mensajes de Instagram.
- Graph API para respuestas.
- Requiere cuenta profesional de Instagram conectada a una pagina de Facebook.

### TikTok

Hay dos caminos posibles:

- TikTok Shop Customer Service API, si la empresa opera como tienda en TikTok Shop.
- TikTok Business Messaging API, si la cuenta tiene acceso aprobado a mensajeria business.

TikTok es el canal con mas restricciones. No conviene prometer DMs generales hasta confirmar el tipo de cuenta, region y permisos disponibles.

## LLM

Opciones:

- OpenAI API: mejor calidad, menos mantenimiento, costo por uso.
- Ollama local: sin costo por token, mas lento, requiere RAM/CPU/GPU segun modelo.

Como no importa tanto la velocidad, una opcion viable para universidad es Ollama con un modelo pequeno/mediano y reglas estrictas de catalogo. Para respuestas comerciales mas confiables, OpenAI o un proveedor cloud suele dar mejores resultados.

## Dashboard inicial

Pantallas minimas:

- Mensajes recientes: canal, cliente, fecha, texto, estado de respuesta.
- Solicitudes/cotizaciones: estado, valor estimado, tiempo de entrega, siguiente accion.
- Pagos: checkbox para confirmar pago recibido.
- Cola de trabajos: orden sugerido de entrega segun pago confirmado, urgencia y fecha.

El dashboard no debe hablar directo con las APIs sociales. Debe leer/escribir en el backend comercial, y n8n se encarga de las integraciones.

## Dominio y tunel

Estado encontrado en el servidor:

- `majic3d.online` y `www.majic3d.online` apuntan por el tunel activo de Cloudflare hacia `http://127.0.0.1:8021`.
- El dashboard Docker responde localmente en `http://127.0.0.1:8021`.
- La carpeta estatica antigua `/var/www/projects/majic` ya no gobierna el dominio; la gestion del proyecto vive en `/var/www/projects/doker/n8n`.
- Nginx aun conserva un bloque local para `majic3d.online` que proxya a `127.0.0.1:8020`; no es la ruta usada por el tunel activo.
- El servicio systemd de `cloudflared` puede aparecer inactivo, pero hay un proceso manual corriendo con `/home/cristians/.cloudflared/config.yml`.

Plan recomendado:

1. Mantener el dashboard Docker en `127.0.0.1:8021`.
2. Mantener `majic3d.online` y `www.majic3d.online` apuntando a `localhost:8021` en Cloudflare Tunnel.
3. Si se reactiva Nginx para este dominio, alinear su `proxy_pass` con `127.0.0.1:8021`.
4. Mover n8n a un subdominio separado, por ejemplo `n8n.majic3d.online`.
5. Crear webhook publico en `https://n8n.majic3d.online/webhook/...`.
6. Dejar `cloudflared` como servicio systemd real, no como proceso manual.

## Fases

### Fase 1 - Base funcional

- Instalar Docker.
- Levantar n8n + PostgreSQL.
- Crear dashboard basico.
- Crear tablas comerciales.
- Crear flujo manual de prueba con webhook generico.

### Fase 2 - WhatsApp e Instagram

- Configurar app Meta.
- Conectar WhatsApp Cloud API.
- Conectar Instagram Messaging API.
- Guardar mensajes reales.
- Enviar respuestas automaticas con plantillas y LLM.

### Fase 3 - Gestion comercial

- Catalogo de impresion 3D.
- Reglas de cotizacion.
- Confirmacion manual de pagos.
- Cola de produccion.
- Escalamiento a humano.

### Fase 4 - TikTok

- Confirmar tipo de cuenta y permisos.
- Solicitar acceso a API disponible.
- Conectar mensajes si TikTok lo permite para la cuenta.

### Fase 5 - Robustez

- Redis + n8n workers.
- Backups automaticos.
- Logs y monitoreo.
- Roles de usuarios del equipo.
- HTTPS estable via Cloudflare Tunnel.
