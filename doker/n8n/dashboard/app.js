const DB_VERSION = 3;
const STORAGE_KEY = "majic3d-crm-v3";
const LEGACY_STORAGE_KEYS = ["majic3d-dashboard-v1", "majic3d-crm-v2"];

const app = document.querySelector("#app");

const modules = [
  { id: "dashboard", label: "Inicio", icon: "home", search: "Buscar clientes, pedidos, cotizaciones..." },
  { id: "customers", label: "Clientes", icon: "users", search: "Buscar clientes..." },
  { id: "quotations", label: "Cotizaciones", icon: "file", search: "Buscar cotizaciones..." },
  { id: "orders", label: "Pedidos", icon: "package", search: "Buscar pedidos..." },
  { id: "automations", label: "Automatizaciones", icon: "bot", search: "Buscar automatizaciones..." },
  { id: "reports", label: "Reportes", icon: "chart", search: "Buscar reportes..." },
  { id: "settings", label: "Configuracion", icon: "settings", search: "Buscar configuracion..." }
];

const icons = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/>',
  package: '<path d="m21 16-9 5-9-5V8l9-5 9 5v8Z"/><path d="m3.3 7.5 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  bot: '<path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-3"/>',
  settings: '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6h.1A1.7 1.7 0 0 0 10 4a1.7 1.7 0 0 0 .4-1.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.1a1.7 1.7 0 0 0 .6 1 1.7 1.7 0 0 0 1.1.4H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4"/><path d="M12 17h.01"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  filter: '<path d="M22 3H2l8 9.5V20l4 2v-9.5L22 3Z"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.27-1.25a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.92Z"/>',
  mail: '<path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  play: '<path d="m8 5 11 7-11 7Z"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  sparkles: '<path d="m12 3-1.7 5.1L5 10l5.3 1.9L12 17l1.7-5.1L19 10l-5.3-1.9Z"/><path d="m5 3 .8 2.2L8 6l-2.2.8L5 9l-.8-2.2L2 6l2.2-.8Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>',
  dollar: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  trendUp: '<path d="m6 15 6-6 6 6"/><path d="M12 9v10"/>',
  trendDown: '<path d="m6 9 6 6 6-6"/><path d="M12 5v10"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  building: '<path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h7v18"/><path d="M19 21V9h-5"/><path d="M9 7h1"/><path d="M9 11h1"/><path d="M9 15h1"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><path d="M7.5 7.5h.01"/>'
};

const statusMeta = {
  active: { label: "Activo", tone: "success", icon: "check" },
  prospect: { label: "Prospecto", tone: "info", icon: "eye" },
  quotation: { label: "Cotizacion", tone: "warning", icon: "file" },
  inactive: { label: "Inactivo", tone: "neutral", icon: "clock" },
  sent: { label: "Enviada", tone: "info", icon: "send" },
  pending: { label: "Pendiente", tone: "warning", icon: "clock" },
  accepted: { label: "Aceptada", tone: "success", icon: "check" },
  rejected: { label: "Rechazada", tone: "error", icon: "x" },
  draft: { label: "Borrador", tone: "neutral", icon: "edit" },
  expired: { label: "Expirada", tone: "neutral", icon: "clock" },
  standby: { label: "Pendiente", tone: "warning", icon: "clock" },
  production: { label: "En produccion", tone: "info", icon: "package" },
  ready: { label: "Listo", tone: "success", icon: "check" },
  delivered: { label: "Entregado", tone: "violet", icon: "check" },
  canceled: { label: "Cancelado", tone: "error", icon: "x" },
  delayed: { label: "Atrasado", tone: "error", icon: "alert" },
  enabled: { label: "Activa", tone: "success", icon: "check" },
  disabled: { label: "Inactiva", tone: "neutral", icon: "clock" },
  success: { label: "Exito", tone: "success", icon: "check" },
  failed: { label: "Fallida", tone: "error", icon: "alert" },
  processing: { label: "Procesando", tone: "info", icon: "clock" }
};

const seedDatabase = {
  version: DB_VERSION,
  company: { name: "Majic 3D", subtitle: "Gestion Comercial" },
  user: { name: "Elian Martinez", initials: "E", role: "Propietario" },
  summary: {
    newCustomers: 24,
    activeCustomers: 124,
    quotesSent: 37,
    quotesTotal: 58,
    ordersInProduction: 12,
    monthlyRevenue: 8450000,
    pendingPayments: 2700000,
    responseTime: "2h 15m",
    conversionRate: 10.7,
    acceptanceRate: 29.7,
    timeSaved: "45,6 h",
    automations: 12
  },
  customers: [
    { id: "cus-001", name: "Maria Perez", company: "Disenos MP", phone: "321 456 7890", email: "maria@disenosmp.com", city: "Bogota, Colombia", status: "active", source: "WhatsApp", lastContact: "2026-05-15T10:30:00-05:00", value: 540000, tags: ["Decoracion", "Impresion 3D", "Frecuente"], notes: "Cliente interesado en impresion 3D para piezas de decoracion.", color: "green" },
    { id: "cus-002", name: "Juan Carlos Ruiz", company: "JC Ingenierias", phone: "310 223 4455", email: "juan.ruiz@jcingenierias.com", city: "Medellin, Colombia", status: "active", source: "WhatsApp", lastContact: "2026-05-14T16:15:00-05:00", value: 280000, tags: ["Ingenieria", "Repuestos"], notes: "Solicita piezas tecnicas de bajo volumen.", color: "violet" },
    { id: "cus-003", name: "Ana Gomez", company: "Gomez Arquitectos", phone: "300 987 6543", email: "ana@gomezarquitectos.com", city: "Cali, Colombia", status: "prospect", source: "Instagram", lastContact: "2026-05-13T09:20:00-05:00", value: 1250000, tags: ["Arquitectura", "Maquetas"], notes: "Busca una maqueta para presentacion comercial.", color: "cyan" },
    { id: "cus-004", name: "Laura Torres", company: "Torres Creativos", phone: "322 778 8899", email: "laura@torrescreativos.com", city: "Bogota, Colombia", status: "quotation", source: "WhatsApp", lastContact: "2026-05-12T14:00:00-05:00", value: 360000, tags: ["Eventos", "Souvenirs"], notes: "Cotizacion en curso para llaveros personalizados.", color: "amber" },
    { id: "cus-005", name: "Ricardo Fernandez", company: "RF Solutions", phone: "315 556 6677", email: "ricardo@rfsolutions.com", city: "Barranquilla, Colombia", status: "inactive", source: "Referido", lastContact: "2026-05-10T11:00:00-05:00", value: 190000, tags: ["Prototipo"], notes: "Esperando confirmacion del diseno final.", color: "green" },
    { id: "cus-006", name: "Valentina Suarez", company: "Suarez Studio", phone: "312 445 6678", email: "valentina@suarezstudio.com", city: "Bogota, Colombia", status: "active", source: "Instagram", lastContact: "2026-05-09T15:20:00-05:00", value: 210000, tags: ["Macetas", "Diseno"], notes: "Cliente de macetas minimalistas.", color: "red" },
    { id: "cus-007", name: "Diego Camacho", company: "Camacho Proyectos", phone: "311 889 9900", email: "diego@camachoproyectos.com", city: "Pereira, Colombia", status: "prospect", source: "WhatsApp", lastContact: "2026-05-08T08:40:00-05:00", value: 980000, tags: ["Porta celular", "Produccion"], notes: "Interesado en una serie corta para tienda.", color: "amber" },
    { id: "cus-008", name: "Ingenieria Moderna", company: "S.A.S", phone: "320 112 3344", email: "contacto@imoderna.com", city: "Manizales, Colombia", status: "quotation", source: "Web", lastContact: "2026-05-07T12:34:00-05:00", value: 680000, tags: ["Industrial", "Mantenimiento"], notes: "Requiere soporte de cotizacion tecnica.", color: "violet" }
  ],
  quotations: [
    { id: "quo-047", number: "C-2026-047", customerId: "cus-001", customer: "Maria Perez", company: "Disenos MP", date: "2026-05-15", validUntil: "2026-05-30", amount: 540000, status: "sent", channel: "WhatsApp", description: "Impresion de piezas decorativas", notes: "Cotizacion enviada via WhatsApp.", products: [{ name: "Lampara geometrica", qty: 1, price: 150000, image: "./assets/fotos/logo.jpeg" }, { name: "Florero minimalista", qty: 2, price: 90000, image: "./assets/fotos/portada.jpeg" }, { name: "Llavero personalizado", qty: 5, price: 42000, image: "./assets/fotos/hotwell.jpeg" }] },
    { id: "quo-046", number: "C-2026-046", customerId: "cus-002", customer: "Juan Carlos Ruiz", company: "JC Ingenierias", date: "2026-05-14", validUntil: "2026-05-29", amount: 280000, status: "pending", channel: "WhatsApp", description: "Pieza tecnica", notes: "Pendiente de respuesta del cliente.", products: [{ name: "Pieza tecnica", qty: 2, price: 140000, image: "./assets/fotos/aria.jpeg" }] },
    { id: "quo-045", number: "C-2026-045", customerId: "cus-003", customer: "Ana Gomez", company: "Gomez Arquitectos", date: "2026-05-13", validUntil: "2026-05-28", amount: 1250000, status: "sent", channel: "Correo", description: "Maqueta arquitectonica", notes: "Incluye acabado premium.", products: [{ name: "Maqueta arquitectonica", qty: 1, price: 1250000, image: "./assets/fotos/baner principal.jpeg" }] },
    { id: "quo-044", number: "C-2026-044", customerId: "cus-004", customer: "Laura Torres", company: "Torres Creativos", date: "2026-05-12", validUntil: "2026-05-27", amount: 360000, status: "pending", channel: "WhatsApp", description: "Llaveros evento", notes: "Se ofrecio descuento por volumen.", products: [{ name: "Llaveros personalizados", qty: 20, price: 18000, image: "./assets/fotos/hotwell.jpeg" }] },
    { id: "quo-043", number: "C-2026-043", customerId: "cus-005", customer: "Ricardo Fernandez", company: "RF Solutions", date: "2026-05-10", validUntil: "2026-05-25", amount: 190000, status: "accepted", channel: "Correo", description: "Soporte de sensor", notes: "Aprobada para produccion.", products: [{ name: "Soporte de sensor", qty: 1, price: 190000, image: "./assets/fotos/gohan.jpeg" }] },
    { id: "quo-042", number: "C-2026-042", customerId: "cus-006", customer: "Valentina Suarez", company: "Suarez Studio", date: "2026-05-09", validUntil: "2026-05-24", amount: 210000, status: "rejected", channel: "Instagram", description: "Maceta minimalista", notes: "Cliente rechazo por presupuesto.", products: [{ name: "Maceta minimalista", qty: 3, price: 70000, image: "./assets/fotos/toby.jpeg" }] },
    { id: "quo-041", number: "C-2026-041", customerId: "cus-007", customer: "Diego Camacho", company: "Camacho Proyectos", date: "2026-05-07", validUntil: "2026-05-22", amount: 980000, status: "expired", channel: "WhatsApp", description: "Porta celular", notes: "Vencida sin respuesta.", products: [{ name: "Porta celular", qty: 40, price: 24500, image: "./assets/fotos/tomy.jpeg" }] },
    { id: "quo-040", number: "C-2026-040", customerId: "cus-008", customer: "Ingenieria Moderna", company: "S.A.S", date: "2026-05-07", validUntil: "2026-05-22", amount: 680000, status: "draft", channel: "Web", description: "Engranaje modular", notes: "Borrador pendiente por revisar.", products: [{ name: "Engranaje modular", qty: 4, price: 170000, image: "./assets/fotos/placeholder.svg" }] }
  ],
  orders: [
    { id: "ord-038", number: "P-2026-038", customerId: "cus-003", customer: "Ana Gomez", product: "Figura decorativa", amount: 250000, status: "production", priority: "Media", dueDate: "2026-05-18", progress: 65, notes: "Cliente solicito acabado en color negro mate.", tasks: [{ label: "Diseno confirmado", done: true }, { label: "Impresion 3D", done: true }, { label: "Post-procesado", done: false }, { label: "Control de calidad", done: false }, { label: "Lista para entrega", done: false }] },
    { id: "ord-045", number: "P-2026-045", customerId: "cus-001", customer: "Maria Perez", product: "Lampara geometrica", amount: 510000, status: "standby", priority: "Media", dueDate: "2026-05-18", progress: 20, notes: "Pendiente anticipo.", tasks: [{ label: "Cotizacion aprobada", done: true }, { label: "Pago inicial", done: false }, { label: "Produccion", done: false }] },
    { id: "ord-046", number: "P-2026-046", customerId: "cus-002", customer: "Juan Carlos Ruiz", product: "Florero minimalista", amount: 180000, status: "standby", priority: "Media", dueDate: "2026-05-18", progress: 15, notes: "Esperando medidas finales.", tasks: [{ label: "Medidas", done: false }, { label: "Diseno", done: false }, { label: "Produccion", done: false }] },
    { id: "ord-037", number: "P-2026-037", customerId: "cus-006", customer: "Valentina Suarez", product: "Maceta minimalista", amount: 360000, status: "production", priority: "Baja", dueDate: "2026-05-19", progress: 42, notes: "Produccion por lote.", tasks: [{ label: "Material listo", done: true }, { label: "Impresion", done: false }, { label: "Acabado", done: false }] },
    { id: "ord-033", number: "P-2026-033", customerId: "cus-008", customer: "Ingenieria Moderna", product: "Pieza tecnica", amount: 980000, status: "ready", priority: "Baja", dueDate: "2026-05-18", progress: 92, notes: "Lista para empaque.", tasks: [{ label: "Impresion", done: true }, { label: "Prueba de encaje", done: true }, { label: "Empaque", done: false }] },
    { id: "ord-039", number: "P-2026-039", customerId: "cus-005", customer: "Ricardo Fernandez", product: "Soporte para audifonos", amount: 120000, status: "production", priority: "Media", dueDate: "2026-05-20", progress: 50, notes: "Color gris grafito.", tasks: [{ label: "Archivo preparado", done: true }, { label: "Impresion", done: true }, { label: "Acabado", done: false }] },
    { id: "ord-022", number: "P-2026-022", customerId: "cus-004", customer: "Laura Torres", product: "Llaveros personalizados", amount: 210000, status: "delivered", priority: "Baja", dueDate: "2026-05-09", progress: 100, notes: "Entregado sin novedades.", tasks: [{ label: "Diseno", done: true }, { label: "Produccion", done: true }, { label: "Entrega", done: true }] },
    { id: "ord-017", number: "P-2026-017", customerId: "cus-003", customer: "Valentina Suarez", product: "Figura decorativa", amount: 120000, status: "canceled", priority: "Alta", dueDate: "2026-05-03", progress: 0, notes: "Cancelado por cambio de alcance.", tasks: [{ label: "Cancelado", done: true }] },
    { id: "ord-032", number: "P-2026-032", customerId: "cus-007", customer: "Diego Camacho", product: "Lampara moon", amount: 230000, status: "ready", priority: "Baja", dueDate: "2026-05-12", progress: 94, notes: "Lista para entrega.", tasks: [{ label: "Impresion", done: true }, { label: "Acabado", done: true }, { label: "Entrega", done: false }] },
    { id: "ord-034", number: "P-2026-034", customerId: "cus-001", customer: "Maria Perez", product: "Porta celular", amount: 90000, status: "ready", priority: "Baja", dueDate: "2026-05-13", progress: 96, notes: "Empaque pendiente.", tasks: [{ label: "Produccion", done: true }, { label: "Empaque", done: false }] },
    { id: "ord-021", number: "P-2026-021", customerId: "cus-002", customer: "Juan Carlos Ruiz", product: "Florero minimalista", amount: 180000, status: "delivered", priority: "Baja", dueDate: "2026-05-10", progress: 100, notes: "Entregado al cliente.", tasks: [{ label: "Entregado", done: true }] },
    { id: "ord-023", number: "P-2026-023", customerId: "cus-003", customer: "Ana Gomez", product: "Soporte celular", amount: 75000, status: "delivered", priority: "Baja", dueDate: "2026-05-09", progress: 100, notes: "Entrega confirmada.", tasks: [{ label: "Entregado", done: true }] },
    { id: "ord-015", number: "P-2026-015", customerId: "cus-005", customer: "Ricardo Fernandez", product: "Maceta geometrica", amount: 160000, status: "canceled", priority: "Media", dueDate: "2026-05-05", progress: 0, notes: "Cancelado por presupuesto.", tasks: [{ label: "Cancelado", done: true }] }
  ],
  automations: [
    { id: "aut-001", name: "Seguimiento automatico WhatsApp", category: "Comunicacion", description: "Envia mensajes de seguimiento a clientes que no han respondido una cotizacion.", status: "enabled", runs: 286, successRate: 98.6, timeSaved: "3,2 s", lastRun: "2026-05-15T10:28:00-05:00", icon: "message" },
    { id: "aut-002", name: "Recordatorio de cotizaciones", category: "Comunicacion", description: "Envia recordatorios automaticos a clientes sobre cotizaciones proximas a vencer.", status: "enabled", runs: 198, successRate: 96.4, timeSaved: "2,1 h", lastRun: "2026-05-15T09:15:00-05:00", icon: "bell" },
    { id: "aut-003", name: "Confirmacion de pagos", category: "Finanzas", description: "Detecta pagos recibidos y actualiza el estado del pedido automaticamente.", status: "enabled", runs: 74, successRate: 99.1, timeSaved: "1,4 h", lastRun: "2026-05-15T08:47:00-05:00", icon: "dollar" },
    { id: "aut-004", name: "Creacion automatica de pedidos", category: "Pedidos", description: "Crea el pedido automaticamente cuando una cotizacion es aceptada y el pago confirmado.", status: "enabled", runs: 42, successRate: 97.2, timeSaved: "4,6 h", lastRun: "2026-05-14T17:22:00-05:00", icon: "package" },
    { id: "aut-005", name: "Reporte diario de ventas", category: "Reportes", description: "Genera y envia un reporte diario de ventas al propietario.", status: "enabled", runs: 31, successRate: 100, timeSaved: "2,0 h", lastRun: "2026-05-14T06:00:00-05:00", icon: "chart" },
    { id: "aut-006", name: "Clasificacion de clientes con IA", category: "Inteligencia", description: "Analiza el comportamiento de los clientes y los clasifica segun su nivel de interes.", status: "enabled", runs: 65, successRate: 95.5, timeSaved: "5,3 h", lastRun: "2026-05-14T02:14:00-05:00", icon: "sparkles" },
    { id: "aut-007", name: "Cumpleanos de clientes", category: "Comunicacion", description: "Envia felicitaciones automaticas a los clientes en sus fechas especiales.", status: "disabled", runs: 0, successRate: 0, timeSaved: "0 h", lastRun: "", icon: "calendar" }
  ],
  activities: [
    { id: "act-001", type: "message", title: "Cliente Maria Gomez respondio en WhatsApp", description: "Cotizacion C-2026-039", time: "Hace 10 min", status: "success" },
    { id: "act-002", type: "dollar", title: "Pago confirmado por $450.000", description: "Pedido P-2026-018", time: "Hace 35 min", status: "success" },
    { id: "act-003", type: "file", title: "Nueva cotizacion creada", description: "C-2026-040 - Ana Torres", time: "Hace 1 hora", status: "info" },
    { id: "act-004", type: "package", title: "Pedido paso a produccion", description: "P-2026-017 - Laura Mendez", time: "Hace 2 horas", status: "warning" },
    { id: "act-005", type: "clock", title: "Pedido entregado", description: "P-2026-016 - Carlos Ruiz", time: "Hace 3 horas", status: "success" }
  ],
  notifications: [
    { id: "not-001", icon: "package", title: "Pedido #1034 enviado", description: "Se ha enviado el pedido a produccion.", time: "Hace 5 min", unread: true },
    { id: "not-002", icon: "dollar", title: "Pago confirmado", description: "Pago de $1.250.000 recibido de Juan Perez.", time: "Hace 20 min", unread: true },
    { id: "not-003", icon: "file", title: "Nueva cotizacion", description: "Cotizacion C-2026-045 creada.", time: "Hace 45 min", unread: false }
  ],
  reports: {
    monthlySales: [
      { label: "Ene", value: 5200000 }, { label: "Feb", value: 5900000 }, { label: "Mar", value: 6100000 }, { label: "Abr", value: 6900000 }, { label: "May", value: 8450000 }, { label: "Jun", value: 5400000 },
      { label: "Jul", value: 5000000 }, { label: "Ago", value: 4200000 }, { label: "Sep", value: 3800000 }, { label: "Oct", value: 4500000 }, { label: "Nov", value: 4700000 }, { label: "Dic", value: 4600000 }
    ],
    responseTrend: [18, 24, 22, 30, 19, 27, 21, 36, 25, 28, 31, 42],
    categories: [
      { label: "Impresion 3D", value: 40.8, color: "var(--accent)" },
      { label: "Diseno 3D", value: 25.8, color: "var(--cyan)" },
      { label: "Productos personalizados", value: 19.9, color: "var(--violet)" },
      { label: "Accesorios", value: 13.5, color: "var(--amber)" }
    ],
    saved: [
      { title: "Informe mensual de ventas", time: "Generado el 1 jun. 2026, 8:30 a. m.", icon: "chart" },
      { title: "Analisis de clientes", time: "Generado el 31 may. 2026, 6:45 p. m.", icon: "users" },
      { title: "Rendimiento de cotizaciones", time: "Generado el 30 may. 2026, 8:40 p. m.", icon: "file" }
    ]
  },
  settings: {
    notifications: true,
    compactSidebar: false,
    defaultView: "dashboard",
    autoSave: true,
    currency: "COP"
  }
};

LEGACY_STORAGE_KEYS.forEach((key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    // Local storage may be blocked in private contexts.
  }
});

let db = loadDatabase();
let ui = {
  view: db.settings.defaultView || "dashboard",
  search: "",
  sidebarOpen: false,
  selectedCustomerId: db.customers[0]?.id || "",
  selectedQuoteId: db.quotations[0]?.id || "",
  selectedOrderId: db.orders[0]?.id || "",
  selectedAutomationId: db.automations[0]?.id || "",
  filters: {
    customers: "all",
    quotations: "all",
    orders: "all",
    automations: "all"
  },
  toast: ""
};
let toastTimer = 0;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadDatabase() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return clone(seedDatabase);
    const parsed = JSON.parse(saved);
    if (parsed.version !== DB_VERSION) return clone(seedDatabase);
    return parsed;
  } catch {
    return clone(seedDatabase);
  }
}

function saveDatabase() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch {
    showToast("No fue posible guardar localmente.");
  }
}

const repositories = {
  customers: {
    all: () => db.customers,
    find: (id) => db.customers.find((item) => item.id === id),
    create: () => {
      const next = db.customers.length + 1;
      const customer = {
        id: `cus-${String(next + 100).padStart(3, "0")}`,
        name: `Cliente nuevo ${next}`,
        company: "Empresa por definir",
        phone: "300 000 0000",
        email: `cliente${next}@majic3d.local`,
        city: "Bogota, Colombia",
        status: "prospect",
        source: "Manual",
        lastContact: new Date().toISOString(),
        value: 0,
        tags: ["Nuevo"],
        notes: "Registro creado desde el panel comercial.",
        color: "cyan"
      };
      db.customers.unshift(customer);
      return customer;
    }
  },
  quotations: {
    all: () => db.quotations,
    find: (id) => db.quotations.find((item) => item.id === id),
    create: () => {
      const number = db.quotations.length + 48;
      const customer = db.customers[0];
      const quotation = {
        id: `quo-${number}`,
        number: `C-2026-${String(number).padStart(3, "0")}`,
        customerId: customer.id,
        customer: customer.name,
        company: customer.company,
        date: new Date().toISOString().slice(0, 10),
        validUntil: addDays(new Date(), 15),
        amount: 0,
        status: "draft",
        channel: "WhatsApp",
        description: "Nueva cotizacion",
        notes: "Borrador listo para completar.",
        products: [{ name: "Producto por definir", qty: 1, price: 0 }]
      };
      db.quotations.unshift(quotation);
      return quotation;
    }
  },
  orders: {
    all: () => db.orders,
    find: (id) => db.orders.find((item) => item.id === id),
    create: () => {
      const number = db.orders.length + 39;
      const customer = db.customers[0];
      const order = {
        id: `ord-${number}`,
        number: `P-2026-${String(number).padStart(3, "0")}`,
        customerId: customer.id,
        customer: customer.name,
        product: "Pedido nuevo",
        amount: 0,
        status: "standby",
        priority: "Media",
        dueDate: addDays(new Date(), 5),
        progress: 10,
        notes: "Pedido creado manualmente.",
        tasks: [{ label: "Revisar alcance", done: false }, { label: "Confirmar pago", done: false }, { label: "Produccion", done: false }]
      };
      db.orders.unshift(order);
      return order;
    }
  },
  automations: {
    all: () => db.automations,
    find: (id) => db.automations.find((item) => item.id === id)
  }
};

function icon(name, className = "icon") {
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.help}</svg>`;
}

function brandMark() {
  return `<svg class="brand-logo" viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 4 55 17v30L32 60 9 47V17L32 4Z"/>
    <path d="M32 4v56M9 17l23 13 23-13M9 47l23-17 23 17"/>
    <path d="m20 23 12-7 12 7v18l-12 7-12-7V23Z"/>
    <path d="m20 41 12-11 12 11M20 23l12 25 12-25"/>
  </svg>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

function shortMoney(value) {
  return money(value).replace("COP", "").trim();
}

function dateShort(value) {
  if (!value) return "Sin registro";
  return new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value));
}

function timeShort(value) {
  if (!value) return "Nunca ejecutada";
  return new Intl.DateTimeFormat("es-CO", { hour: "numeric", minute: "2-digit" }).format(new Date(value));
}

function addDays(dateValue, days) {
  const date = new Date(dateValue);
  date.setDate(date.getDate() + Number(days || 0));
  return date.toISOString().slice(0, 10);
}

function initials(name) {
  return String(name)
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function avatar(name, color = "green") {
  const colorClass = color === "green" ? "" : ` ${color}`;
  return `<span class="avatar${colorClass}">${escapeHtml(initials(name))}</span>`;
}

function statusBadge(status) {
  const meta = statusMeta[status] || { label: status, tone: "neutral", icon: "clock" };
  return `<span class="status-badge ${meta.tone}">${icon(meta.icon, "badge-icon")}<span>${escapeHtml(meta.label)}</span></span>`;
}

function trend(value, negative = false, suffix = "vs mes anterior") {
  return `<span class="kpi-trend ${negative ? "negative" : ""}">${icon(negative ? "trendDown" : "trendUp", "icon small")} <strong>${escapeHtml(value)}</strong> ${escapeHtml(suffix)}</span>`;
}

function sparkline(values, tone = "tone-green") {
  const width = 160;
  const height = 32;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - ((value - min) / range) * (height - 4) - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg class="sparkline ${tone}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none"><polyline points="${points}"/></svg>`;
}

function lineChart(values) {
  const width = 620;
  const height = 190;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - ((value - min) / range) * (height - 28) - 14;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg class="line-chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
    <path d="M0 ${height - 18}H${width}" stroke="rgba(255,255,255,.08)"/>
    <path d="M0 ${height / 2}H${width}" stroke="rgba(255,255,255,.06)"/>
    <polyline points="${points}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function barChart(data) {
  const max = Math.max(...data.map((item) => item.value), 1);
  return `<div class="bar-chart" style="--bars:${data.length}">${data.map((item) => {
    const height = Math.max(8, Math.round((item.value / max) * 100));
    return `<div class="bar-item" title="${escapeHtml(item.label)} ${money(item.value)}"><span class="bar-fill" style="--h:${height}"></span><span class="bar-label">${escapeHtml(item.label)}</span></div>`;
  }).join("")}</div>`;
}

function pageHeader(title, subtitle, actions = "") {
  return `<section class="page-header">
    <div class="page-title-group">
      <h1 class="page-title">${escapeHtml(title)}</h1>
      <p class="page-subtitle">${escapeHtml(subtitle)}</p>
    </div>
    ${actions ? `<div class="page-actions">${actions}</div>` : ""}
  </section>`;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Buenos dias";
  if (hour < 19) return "Buenas tardes";
  return "Buenas noches";
}

function formatToday() {
  return new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
}

function renderFloatingAssistant() {
  return `<section class="floating-ai" aria-label="Asistente IA">
    <div class="assistant-head">
      <div class="assistant-pill">${icon("sparkles", "icon small")} Asistente IA</div>
      <span class="assistant-tip">Sugerencias en tiempo real</span>
    </div>
    <p>Hay 4 clientes que necesitan seguimiento hoy. Puedo preparar un resumen comercial en segundos.</p>
    <div class="assistant-actions">
      <button class="ghost-button" data-action="send-message" type="button">${icon("message")} Enviar seguimiento</button>
      <button class="ghost-button" data-action="quick-view" data-target="reports" type="button">${icon("chart")} Ver reporte</button>
    </div>
  </section>`;
}

function kpiCard({ title, value, iconName, trendText, trendSuffix, negative, spark, tone, subtitle }) {
  return `<article class="kpi-card">
    <div class="kpi-head">
      <div class="kpi-icon ${tone || ""}">${icon(iconName)}</div>
      <div class="kpi-copy"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(subtitle || "Este mes")}</span></div>
    </div>
    <div class="kpi-value">${escapeHtml(value)}</div>
    ${trend(trendText, negative, trendSuffix)}
    ${sparkline(spark || [3, 5, 4, 7, 8, 7, 10], tone || "tone-green")}
  </article>`;
}

function renderKpis(items) {
  return `<section class="kpi-grid ${items.length === 5 ? "five" : ""}" aria-label="Indicadores principales">${items.map(kpiCard).join("")}</section>`;
}

function renderApp() {
  const current = modules.find((item) => item.id === ui.view) || modules[0];
  app.innerHTML = `
    <aside class="sidebar ${ui.sidebarOpen ? "open" : ""}" aria-label="Navegacion principal">
      <div class="brand">
        <div class="brand-mark">${brandMark()}</div>
        <div class="brand-title"><strong>${escapeHtml(db.company.name)}</strong><span>${escapeHtml(db.company.subtitle)}</span></div>
      </div>
      <nav class="sidebar-nav">
        ${modules.map((item) => `<button class="nav-button ${item.id === ui.view ? "active" : ""}" data-view="${item.id}" type="button">${icon(item.icon)}<span>${escapeHtml(item.label)}</span></button>`).join("")}
      </nav>
      <div class="sidebar-spacer"></div>
      <div class="user-card">
        ${avatar(db.user.name)}
        <div><strong>${escapeHtml(db.user.name)}</strong><span>${escapeHtml(db.user.role)}</span></div>
        ${icon("chevronDown", "icon small")}
      </div>
    </aside>
    ${ui.sidebarOpen ? '<button class="sidebar-backdrop" data-action="close-sidebar" aria-label="Cerrar menu" type="button"></button>' : ""}
    <section class="workspace">
      <header class="topbar">
        <button class="icon-button mobile-menu" data-action="toggle-sidebar" type="button" aria-label="Abrir menu">${icon("menu")}</button>
        <label class="global-search" aria-label="Busqueda global">
          ${icon("search")}
          <input data-action="global-search" value="${escapeHtml(ui.search)}" placeholder="${escapeHtml(current.search)}" autocomplete="off" />
        </label>
        <div class="topbar-tools">
          <button class="icon-button has-badge" type="button" aria-label="Notificaciones">${icon("bell")}<span>3</span></button>
          <button class="icon-button hide-compact" type="button" aria-label="Ayuda">${icon("help")}</button>
          <button class="profile-button" type="button" aria-label="Usuario"><span class="avatar">${escapeHtml(db.user.initials)}</span>${icon("chevronDown", "icon small")}</button>
        </div>
      </header>
      <main id="pageContent" class="content">${renderPage()}</main>
    </section>
    ${ui.toast ? `<div class="toast" role="status">${icon("check")}<span>${escapeHtml(ui.toast)}</span></div>` : ""}
  `;
}

function renderContent() {
  const target = document.querySelector("#pageContent");
  if (!target) {
    renderApp();
    return;
  }
  target.innerHTML = renderPage();
}

function renderPage() {
  ensureSelections();
  const pages = {
    dashboard: renderDashboard,
    customers: renderCustomers,
    quotations: renderQuotations,
    orders: renderOrders,
    automations: renderAutomations,
    reports: renderReports,
    settings: renderSettings
  };
  return (pages[ui.view] || renderDashboard)();
}

function ensureSelections() {
  if (!repositories.customers.find(ui.selectedCustomerId)) ui.selectedCustomerId = db.customers[0]?.id || "";
  if (!repositories.quotations.find(ui.selectedQuoteId)) ui.selectedQuoteId = db.quotations[0]?.id || "";
  if (!repositories.orders.find(ui.selectedOrderId)) ui.selectedOrderId = db.orders[0]?.id || "";
  if (!repositories.automations.find(ui.selectedAutomationId)) ui.selectedAutomationId = db.automations[0]?.id || "";
}

function renderDashboard() {
  const kpis = renderKpis([
    { title: "Clientes nuevos", subtitle: "Este mes", value: db.summary.newCustomers, iconName: "users", trendText: "26%", spark: [8, 10, 9, 11, 12, 13, 15, 18, 17, 21, 20, 24] },
    { title: "Cotizaciones enviadas", subtitle: "Este mes", value: db.summary.quotesSent, iconName: "file", trendText: "15%", spark: [20, 22, 19, 25, 24, 28, 26, 29, 31, 30, 35, 37] },
    { title: "Pedidos en proceso", subtitle: "Actualmente", value: db.summary.ordersInProduction, iconName: "package", trendText: "9%", trendSuffix: "vs semana anterior", spark: [5, 7, 6, 8, 9, 8, 10, 11, 10, 12], tone: "tone-amber" },
    { title: "Ventas del mes", subtitle: "Ingreso total", value: shortMoney(db.summary.monthlyRevenue), iconName: "dollar", trendText: "12%", spark: [5, 6, 6, 7, 8, 7, 9, 10, 9, 12], tone: "tone-green" }
  ]);
  return `<section class="dashboard-hero">
    <div class="page-title-group">
      <h1 class="page-title">&#161;Hola, ${escapeHtml(db.user.name.split(" ")[0])}! ${icon("sparkles", "icon title-accent")}</h1>
      <p class="page-subtitle">Aqui tienes el resumen de tu negocio.</p>
    </div>
  </section>
  ${kpis}
  <section class="dashboard-grid">
    <div class="dashboard-main">
      <div class="dashboard-two">
        <article class="card">
          <div class="card-head"><h2 class="card-title">Embudo comercial</h2><button class="ghost-button compact" type="button">Este mes ${icon("chevronDown", "icon small")}</button></div>
          ${renderPipelineBars()}
          <div class="conversion-callout"><div class="kpi-icon">${icon("chart")}</div><div><strong>Tasa de conversion total: <span class="tone-green">${db.summary.conversionRate}%</span></strong><p>6 de 56 prospectos se convirtieron en entregas este mes.</p></div></div>
        </article>
        <article class="card">
          <div class="card-head"><h2 class="card-title">Actividad reciente</h2></div>
          <div class="activity-list">${db.activities.map(renderActivity).join("")}</div>
          <button class="link-button" data-action="quick-view" data-target="customers" type="button">Ver todas las actividades ${icon("arrowRight", "icon small")}</button>
        </article>
      </div>
      <article class="card">
        <div class="card-head"><h2 class="card-title">Acciones rapidas</h2></div>
        <div class="quick-actions-grid">
          ${quickAction("Nueva cotizacion", "file", "new-quote")}
          ${quickAction("Nuevo pedido", "cart", "new-order")}
          ${quickAction("Agregar cliente", "users", "new-client")}
          ${quickAction("Enviar WhatsApp", "message", "send-message")}
          ${quickAction("Generar reporte", "chart", "quick-view", "reports")}
        </div>
      </article>
    </div>
    <aside class="dashboard-side">
      <article class="card">
        <div class="card-head"><h2 class="card-title">Notificaciones <span class="count-pill">3</span></h2><button class="icon-button" type="button" aria-label="Mas opciones">${icon("more")}</button></div>
        <div class="notification-list">${db.notifications.map(renderNotification).join("")}</div>
        <button class="link-button" data-action="quick-view" data-target="customers" type="button">Ver todas ${icon("arrowRight", "icon small")}</button>
      </article>
      <article class="card ai-panel">
        <div class="card-head"><h2 class="card-title">${icon("sparkles")} Asistente IA</h2><span class="online-dot"></span></div>
        <div class="card-copy"><p>En que puedo ayudarte?</p></div>
        <div class="assistant-prompts">
          <button class="ghost-button" data-action="send-message" type="button">Que clientes no han respondido?</button>
          <button class="ghost-button" data-action="new-quote" type="button">Generar nueva cotizacion</button>
          <button class="ghost-button" data-action="quick-view" data-target="reports" type="button">Mostrar ventas del mes</button>
          <button class="ghost-button" data-action="quick-view" data-target="orders" type="button">Pedidos pendientes</button>
        </div>
        <div class="ai-input-row"><input class="field" value="" placeholder="Escribe tu pregunta..." /><button class="primary-button" data-action="send-message" type="button" aria-label="Enviar">${icon("send")}</button></div>
      </article>
    </aside>
  </section>`;
}

function pipelineStages() {
  return [
    { label: "Prospectos", value: 56 },
    { label: "Cotizacion", value: 37 },
    { label: "Negociacion", value: 18 },
    { label: "Pago confirmado", value: 12 },
    { label: "Produccion", value: 9 },
    { label: "Entregado", value: 6 }
  ];
}

function renderPipelineBars() {
  const stages = pipelineStages();
  const max = Math.max(...stages.map((item) => item.value));
  return `<div class="pipeline-chart">
    <div class="chart-scale"><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span></div>
    <div class="pipeline-bars">${stages.map((item) => `<div class="pipeline-bar-item"><strong>${item.value}</strong><span class="pipeline-bar" style="height:${Math.max(10, Math.round((item.value / max) * 100))}%"></span><em>${escapeHtml(item.label)}</em></div>`).join("")}</div>
  </div>`;
}

function renderFunnel() {
  const stages = [
    { label: "Prospecto", value: 56 },
    { label: "Cotizacion", value: 37 },
    { label: "Negociacion", value: 18 },
    { label: "Pago", value: 12 },
    { label: "Produccion", value: 9 },
    { label: "Entregado", value: 6 }
  ];
  const max = Math.max(...stages.map((item) => item.value));
  return `<div class="funnel">${stages.map((item) => `<div class="funnel-row"><span>${escapeHtml(item.label)}</span><div class="funnel-track"><span class="funnel-fill" style="width:${Math.round((item.value / max) * 100)}%"></span></div><strong>${item.value}</strong></div>`).join("")}</div>`;
}

function quickAction(label, iconName, action, target = "") {
  return `<button class="action-tile" data-action="${action}" ${target ? `data-target="${target}"` : ""} type="button">${icon(iconName)}<span>${escapeHtml(label)}</span></button>`;
}

function renderActivity(item) {
  return `<div class="activity-item">
    <div class="entity-cell">
      <div class="activity-icon ${item.status === "warning" ? "tone-amber" : item.status === "info" ? "tone-cyan" : "tone-green"}">${icon(item.type)}</div>
      <div class="activity-copy"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.description)}</p></div>
    </div>
    <span class="timeline-time">${escapeHtml(item.time)}</span>
  </div>`;
}

function renderNotification(item) {
  return `<div class="notification-item">
    <div class="entity-cell">
      <div class="notification-icon">${icon(item.icon)}</div>
      <div class="notification-copy"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.description)}</p></div>
    </div>
    <span class="timeline-time">${escapeHtml(item.time)}</span>
  </div>`;
}

function renderCustomers() {
  const filtered = filterCustomers();
  return `${pageHeader("Clientes", "Gestiona y consulta la informacion de tus clientes.")}
  ${renderKpis([
    { title: "Clientes totales", value: 124, iconName: "users", trendText: "18%", spark: [70, 75, 77, 82, 88, 95, 104, 111, 118, 124] },
    { title: "Nuevos este mes", value: 14, iconName: "users", trendText: "27%", spark: [4, 6, 8, 7, 9, 10, 12, 13, 14], tone: "tone-cyan" },
    { title: "Contactos activos", value: 63, iconName: "message", trendText: "22%", spark: [32, 38, 41, 45, 49, 53, 57, 63], tone: "tone-violet" },
    { title: "Sin respuesta", value: 12, iconName: "clock", trendText: "8%", negative: true, spark: [20, 18, 17, 15, 14, 12], tone: "tone-amber" }
  ])}
  <section class="module-split wide-detail">
    <article class="card">
      ${renderToolbar("customers", ["all", "active", "prospect", "quotation", "inactive"], { title: "Lista de clientes", primaryAction: "new-client", primaryLabel: "Nuevo cliente", select: true })}
      ${renderCustomersTable(filtered)}
    </article>
    ${renderCustomerDetail(repositories.customers.find(ui.selectedCustomerId))}
  </section>`;
}

function filterCustomers() {
  const search = ui.search.trim().toLowerCase();
  return db.customers.filter((customer) => {
    const matchesFilter = ui.filters.customers === "all" || customer.status === ui.filters.customers;
    const haystack = `${customer.name} ${customer.company} ${customer.email} ${customer.phone}`.toLowerCase();
    return matchesFilter && (!search || haystack.includes(search));
  });
}

function renderToolbar(filterKey, statuses, options = {}) {
  const labels = { all: "Todos", active: "Activos", prospect: "Prospectos", quotation: "Cotizacion", inactive: "Inactivos", sent: "Enviadas", pending: "Pendientes", accepted: "Aceptadas", rejected: "Rechazadas", draft: "Borradores", expired: "Expiradas", standby: "Pendientes", production: "Produccion", ready: "Listos", delivered: "Entregados", canceled: "Cancelados", enabled: "Activas", disabled: "Inactivas" };
  const picker = options.select
    ? `<select class="field compact-select" data-action="set-filter-select" data-filter="${filterKey}" aria-label="Filtrar por estado">${statuses.map((status) => `<option value="${status}" ${ui.filters[filterKey] === status ? "selected" : ""}>${status === "all" ? "Todos los estados" : labels[status] || status}</option>`).join("")}</select>`
    : `<div class="segmented">${statuses.map((status) => `<button class="segment-button ${ui.filters[filterKey] === status ? "active" : ""}" data-action="set-filter" data-filter="${filterKey}" data-value="${status}" type="button">${escapeHtml(labels[status] || status)}</button>`).join("")}</div>`;
  const primary = options.primaryAction ? `<button class="primary-button" data-action="${options.primaryAction}" type="button">${icon("plus")}<span>${escapeHtml(options.primaryLabel || "Nuevo")}</span></button>` : "";
  return `<div class="toolbar">
    ${options.title ? `<div class="toolbar-title"><h2 class="card-title">${escapeHtml(options.title)}</h2></div>` : ""}
    <div class="toolbar-left">${picker}</div>
    <div class="toolbar-right"><button class="ghost-button" type="button">${icon("filter")}Filtros</button>${primary}</div>
  </div>`;
}

function renderCustomersTable(customers) {
  if (!customers.length) return emptyState("Sin clientes", "No hay clientes que coincidan con la busqueda actual.");
  return `<div class="data-table-wrap"><table class="data-table">
    <thead><tr><th>Cliente</th><th>Contacto</th><th>Correo</th><th>Estado</th><th>Ultimo contacto</th><th>Acciones</th></tr></thead>
    <tbody>${customers.map((customer) => `<tr class="${customer.id === ui.selectedCustomerId ? "selected" : ""}" data-action="select-customer" data-id="${customer.id}">
      <td data-label="Cliente"><div class="entity-cell">${avatar(customer.name, customer.color)}<div class="entity-copy"><strong class="entity-title">${escapeHtml(customer.name)}</strong><p>${escapeHtml(customer.company)}</p></div></div></td>
      <td data-label="Contacto"><span class="contact-inline">${escapeHtml(customer.phone)} ${icon("message", "icon small tone-green")}</span></td>
      <td data-label="Correo">${escapeHtml(customer.email)}</td>
      <td data-label="Estado">${statusBadge(customer.status)}</td>
      <td data-label="Ultimo contacto">${dateShort(customer.lastContact)}</td>
      <td data-label="Acciones"><div class="table-actions"><button class="icon-button" data-action="select-customer" data-id="${customer.id}" type="button" aria-label="Ver cliente">${icon("eye")}</button><button class="icon-button" type="button" aria-label="Editar cliente">${icon("edit")}</button><button class="icon-button" type="button" aria-label="Mas">${icon("more")}</button></div></td>
    </tr>`).join("")}</tbody>
  </table></div>${pagination("Mostrando 1 a 8 de 124 clientes")}`;
}

function renderCustomerDetail(customer) {
  if (!customer) return `<aside class="detail-panel">${emptyState("Selecciona un cliente", "El detalle aparecera aqui.")}</aside>`;
  const quotes = db.quotations.filter((quote) => quote.customerId === customer.id);
  const orders = db.orders.filter((order) => order.customerId === customer.id);
  return `<aside class="detail-panel">
    <div class="detail-body">
      <button class="panel-close icon-button" type="button" aria-label="Cerrar detalle">${icon("x")}</button>
      <div class="detail-head">
        <div class="entity-cell">${avatar(customer.name, customer.color)}<div><h2 class="detail-title">${escapeHtml(customer.name)}</h2><p class="detail-subtitle">${escapeHtml(customer.company)}</p></div></div>
        ${statusBadge(customer.status)}
      </div>
      <div class="detail-actions"><button class="icon-button" data-action="send-message" type="button" aria-label="WhatsApp">${icon("message")}</button><button class="icon-button" type="button" aria-label="Correo">${icon("mail")}</button><button class="icon-button" type="button" aria-label="Telefono">${icon("phone")}</button><button class="icon-button" type="button" aria-label="Mas">${icon("more")}</button></div>
      <div class="detail-tabs"><span class="active">Informacion</span><span>Historial</span><span>Cotizaciones</span><span>Pedidos</span><span>Pagos</span></div>
      <section class="detail-section"><h3>Informacion general</h3><div class="info-grid">
        ${infoRow("Nombre", customer.name)}${infoRow("Empresa", customer.company)}${infoRow("Telefono", customer.phone)}${infoRow("Correo", customer.email)}${infoRow("Direccion", customer.city)}${infoRow("Notas", customer.notes)}
      </div></section>
      <section class="detail-section"><h3>Resumen rapido</h3><div class="mini-grid"><div class="mini-tile"><span class="metric-label">Cotizaciones</span><strong>${quotes.length || 4}</strong><span class="kpi-trend">Ver todas</span></div><div class="mini-tile"><span class="metric-label">Pedidos</span><strong>${orders.length || 1}</strong><span class="kpi-trend">Ver todos</span></div><div class="mini-tile"><span class="metric-label">Pagos realizados</span><strong>${shortMoney(customer.value)}</strong></div><div class="mini-tile"><span class="metric-label">Ultimo pedido</span><strong>${orders[0]?.number || "P-2026-015"}</strong></div></div></section>
      <section class="detail-section"><h3>Etiquetas</h3><div class="tag-row">${customer.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}<span class="tag">+</span></div></section>
      <section class="detail-section"><h3>Acciones rapidas</h3><div class="quick-actions-row"><button class="ghost-button" data-action="new-quote" type="button">${icon("file")}Nueva cotizacion</button><button class="ghost-button" data-action="new-order" type="button">${icon("cart")}Nuevo pedido</button><button class="ghost-button" data-action="send-message" type="button">${icon("message")}Enviar mensaje</button></div></section>
    </div>
  </aside>`;
}

function renderQuotations() {
  const quotes = filterQuotations();
  const selected = repositories.quotations.find(ui.selectedQuoteId);
  return `${pageHeader("Cotizaciones", "Gestiona y da seguimiento a todas tus cotizaciones.")}
  ${renderKpis([
    { title: "Total cotizaciones", value: db.summary.quotesTotal, iconName: "file", trendText: "16%", spark: [20, 25, 28, 32, 37, 45, 52, 58] },
    { title: "Enviadas este mes", value: db.summary.quotesSent, iconName: "send", trendText: "12%", spark: [12, 14, 20, 22, 25, 30, 37], tone: "tone-cyan" },
    { title: "Pendientes de respuesta", value: 18, iconName: "clock", trendText: "8%", negative: true, spark: [26, 24, 22, 20, 18], tone: "tone-amber" },
    { title: "Aceptadas este mes", value: 11, iconName: "check", trendText: "22%", spark: [4, 6, 7, 8, 10, 11], tone: "tone-green" }
  ])}
  <section class="module-split wide-detail">
    <article class="card">
      ${renderToolbar("quotations", ["all", "draft", "sent", "pending", "accepted", "rejected", "expired"], { primaryAction: "new-quote", primaryLabel: "Nueva cotizacion" })}
      ${renderQuotationsTable(quotes)}
    </article>
    ${renderQuotationDetail(selected)}
  </section>`;
}

function filterQuotations() {
  const search = ui.search.trim().toLowerCase();
  return db.quotations.filter((quote) => {
    const matchesFilter = ui.filters.quotations === "all" || quote.status === ui.filters.quotations;
    const haystack = `${quote.number} ${quote.customer} ${quote.company} ${quote.description}`.toLowerCase();
    return matchesFilter && (!search || haystack.includes(search));
  });
}

function renderQuotationsTable(quotes) {
  if (!quotes.length) return emptyState("Sin cotizaciones", "No hay cotizaciones para este filtro.");
  return `<div class="data-table-wrap"><table class="data-table">
    <thead><tr><th>Cotizacion</th><th>Cliente</th><th>Fecha</th><th>Vencimiento</th><th>Valor total</th><th>Estado</th><th>Acciones</th></tr></thead>
    <tbody>${quotes.map((quote) => `<tr class="${quote.id === ui.selectedQuoteId ? "selected" : ""}" data-action="select-quote" data-id="${quote.id}">
      <td data-label="Cotizacion"><div class="entity-cell"><div class="entity-icon">${icon("file")}</div><strong>${escapeHtml(quote.number)}</strong></div></td>
      <td data-label="Cliente"><div class="entity-cell">${avatar(quote.customer, customerColor(quote.customerId))}<div class="entity-copy"><strong>${escapeHtml(quote.customer)}</strong><p>${escapeHtml(quote.company)}</p></div></div></td>
      <td data-label="Fecha">${dateShort(quote.date)}</td>
      <td data-label="Vencimiento">${dateShort(quote.validUntil)}</td>
      <td data-label="Valor">${shortMoney(quote.amount)}</td>
      <td data-label="Estado">${statusBadge(quote.status)}</td>
      <td data-label="Acciones"><div class="table-actions"><button class="icon-button" data-action="select-quote" data-id="${quote.id}" type="button" aria-label="Ver cotizacion">${icon("eye")}</button><button class="icon-button" data-action="set-quote-status" data-id="${quote.id}" data-status="accepted" type="button" aria-label="Aceptar">${icon("check")}</button><button class="icon-button" type="button" aria-label="Mas">${icon("more")}</button></div></td>
    </tr>`).join("")}</tbody>
  </table></div>${pagination("Mostrando 1 a 8 de 58 cotizaciones")}`;
}

function renderQuotationDetail(quote) {
  if (!quote) return `<aside class="detail-panel">${emptyState("Selecciona una cotizacion", "El detalle aparecera aqui.")}</aside>`;
  const subtotal = quote.products.reduce((sum, product) => sum + product.qty * product.price, 0);
  return `<aside class="detail-panel">
    <div class="detail-body">
      <button class="panel-close icon-button" type="button" aria-label="Cerrar detalle">${icon("x")}</button>
      <div class="detail-head"><div class="entity-cell"><div class="entity-icon">${icon("file")}</div><div><h2 class="detail-title">Cotizacion ${escapeHtml(quote.number)}</h2><p class="detail-subtitle">${escapeHtml(quote.description)}</p></div></div>${statusBadge(quote.status)}</div>
      <div class="entity-cell">${avatar(quote.customer, customerColor(quote.customerId))}<div class="entity-copy"><strong>${escapeHtml(quote.customer)}</strong><p>${escapeHtml(quote.company)}</p></div></div>
      <div class="detail-actions"><button class="icon-button" data-action="send-message" type="button" aria-label="WhatsApp">${icon("message")}</button><button class="icon-button" type="button" aria-label="Correo">${icon("mail")}</button><button class="icon-button" type="button" aria-label="Llamar">${icon("phone")}</button><button class="icon-button" type="button" aria-label="Mas">${icon("more")}</button></div>
      <section class="detail-section"><h3>Informacion general</h3><div class="info-grid">${infoRow("Fecha", dateShort(quote.date))}${infoRow("Vencimiento", dateShort(quote.validUntil))}${infoRow("Referencia", quote.description)}${infoRow("Valor total", shortMoney(quote.amount))}${infoRow("Estado", statusMeta[quote.status]?.label || quote.status)}${infoRow("Notas", quote.notes)}</div></section>
      <section class="detail-section"><h3>Productos (${quote.products.length})</h3><div class="product-list">${quote.products.map((product) => `<div class="product-row"><div class="entity-cell"><img class="product-thumb" src="${escapeHtml(product.image || "./assets/fotos/placeholder.svg")}" alt="" /><div class="entity-copy"><strong>${escapeHtml(product.name)}</strong><p>Impresion 3D · Cantidad: ${product.qty}</p></div></div><strong>${shortMoney(product.qty * product.price)}</strong></div>`).join("")}</div></section>
      <div class="totals-box"><div class="metric-row"><span>Subtotal</span><strong>${shortMoney(subtotal)}</strong></div><div class="metric-row"><span>Envio</span><strong>$ 0</strong></div><div class="metric-row total"><span>Total</span><strong class="tone-green">${shortMoney(quote.amount)}</strong></div></div>
      <button class="ghost-button wide-button" data-action="send-message" type="button">Historial de actividades ${icon("arrowRight", "icon small")}</button>
    </div>
  </aside>`;
}

function renderOrders() {
  const orders = filterOrders();
  const selected = repositories.orders.find(ui.selectedOrderId);
  return `${pageHeader("Pedidos", "Visualiza y gestiona el estado de todos tus pedidos.")}
  ${renderKpis([
    { title: "Pedidos totales", value: 42, iconName: "package", trendText: "14%", spark: [18, 20, 26, 30, 34, 39, 42] },
    { title: "En produccion", value: 12, iconName: "settings", trendText: "9%", spark: [5, 8, 7, 10, 12], tone: "tone-cyan" },
    { title: "Listos para entrega", value: 8, iconName: "cart", trendText: "33%", spark: [2, 3, 5, 6, 8], tone: "tone-green" },
    { title: "Entregados este mes", value: 22, iconName: "check", trendText: "15%", spark: [8, 11, 13, 18, 22], tone: "tone-violet" },
    { title: "Atrasados", value: 3, iconName: "alert", trendText: "25%", negative: true, spark: [1, 2, 2, 3], tone: "tone-red" }
  ])}
  <section class="module-split wide-detail">
    <article class="card">
      <div class="toolbar">
        <div class="toolbar-title"><h2 class="card-title">Vista Kanban ${icon("chevronDown", "icon small")}</h2></div>
        <div class="toolbar-right"><button class="ghost-button" type="button">${icon("filter")}Filtros</button><button class="primary-button" data-action="new-order" type="button">${icon("plus")}<span>Nuevo pedido</span></button></div>
      </div>
      ${renderKanban(orders)}
    </article>
    ${renderOrderDetail(selected)}
  </section>`;
}

function filterOrders() {
  const search = ui.search.trim().toLowerCase();
  return db.orders.filter((order) => {
    const matchesFilter = ui.filters.orders === "all" || order.status === ui.filters.orders;
    const haystack = `${order.number} ${order.customer} ${order.product}`.toLowerCase();
    return matchesFilter && (!search || haystack.includes(search));
  });
}

function renderKanban(orders) {
  const columns = [
    { key: "standby", label: "Pendiente" },
    { key: "production", label: "En produccion" },
    { key: "ready", label: "Listo para entrega" },
    { key: "delivered", label: "Entregado" },
    { key: "canceled", label: "Cancelado" }
  ];
  return `<div class="kanban-grid">${columns.map((column) => {
    const items = orders.filter((order) => order.status === column.key);
    return `<section class="kanban-column ${column.key}"><div class="kanban-head"><span><i></i>${escapeHtml(column.label)}</span><strong>${items.length}</strong><button class="icon-button" type="button" aria-label="Mas">${icon("more")}</button></div><div class="kanban-list">${items.map(renderOrderCard).join("") || `<div class="empty-state small"><span>Sin pedidos</span></div>`}</div><button class="link-button kanban-more" type="button">Ver todos (${items.length})</button></section>`;
  }).join("")}</div>`;
}

function renderOrderCard(order) {
  return `<article class="order-card ${order.id === ui.selectedOrderId ? "selected" : ""}" data-action="select-order" data-id="${order.id}">
    <div class="order-meta"><strong>${escapeHtml(order.number)}</strong><button class="icon-button" type="button" aria-label="Mas">${icon("more")}</button></div>
    <div><strong>${escapeHtml(order.customer)}</strong><p class="muted">${escapeHtml(order.product)}</p></div>
    <div class="order-meta"><span>${shortMoney(order.amount)}</span><span>${escapeHtml(order.priority)}</span></div>
    <div class="progress-track"><span class="progress-fill" style="width:${order.progress}%"></span></div>
    <div class="order-meta"><span>${dateShort(order.dueDate)}</span><span>${order.progress}%</span></div>
  </article>`;
}

function renderOrderDetail(order) {
  if (!order) return `<aside class="detail-panel">${emptyState("Selecciona un pedido", "El detalle aparecera aqui.")}</aside>`;
  return `<aside class="detail-panel">
    <div class="detail-body">
      <button class="panel-close icon-button" type="button" aria-label="Cerrar detalle">${icon("x")}</button>
      <div class="detail-head"><div class="entity-cell"><div class="entity-icon">${icon("package")}</div><div><h2 class="detail-title">${escapeHtml(order.number)}</h2><p class="detail-subtitle">${statusMeta[order.status]?.label || order.status}</p></div></div>${statusBadge(order.status)}</div>
      <div class="entity-cell">${avatar(order.customer, customerColor(order.customerId))}<div class="entity-copy"><strong>${escapeHtml(order.customer)}</strong><p>${escapeHtml(order.product)}</p></div></div>
      <section class="detail-section"><h3>Informacion del pedido</h3><div class="info-grid">${infoRow("Producto", order.product)}${infoRow("Cantidad", "1 unidad")}${infoRow("Valor total", shortMoney(order.amount))}${infoRow("Fecha pedido", dateShort(order.dueDate))}${infoRow("Prioridad", order.priority)}${infoRow("Notas", order.notes)}</div></section>
      <section class="detail-section"><h3>Progreso de produccion</h3><div class="progress-track"><span class="progress-fill" style="width:${order.progress}%"></span></div><strong>${order.progress}%</strong><div class="check-list">${order.tasks.map((task) => `<div class="check-item ${task.done ? "done" : ""}"><span class="check-dot">${icon("check", "icon small")}</span><span>${escapeHtml(task.label)}</span></div>`).join("")}</div></section>
      <section class="detail-section"><h3>Cambiar estado</h3><div class="quick-actions-row">${["standby", "production", "ready", "delivered", "canceled"].map((status) => `<button class="ghost-button" data-action="set-order-status" data-id="${order.id}" data-status="${status}" type="button">${statusMeta[status].label}</button>`).join("")}</div></section>
    </div>
  </aside>`;
}

function renderAutomations() {
  const automations = filterAutomations();
  const selected = repositories.automations.find(ui.selectedAutomationId);
  return `${pageHeader("Automatizaciones", "Configura y monitorea los procesos automaticos con IA y n8n.")}
  ${renderKpis([
    { title: "Automatizaciones activas", value: db.summary.automations, iconName: "bot", trendText: "20%", spark: [5, 7, 9, 10, 12] },
    { title: "Ejecuciones este mes", value: "1.248", iconName: "play", trendText: "18%", spark: [400, 520, 680, 820, 1040, 1248], tone: "tone-violet" },
    { title: "Exito en ejecuciones", value: "98,6%", iconName: "check", trendText: "2,3%", spark: [92, 94, 96, 97, 98], tone: "tone-green" },
    { title: "Tiempo ahorrado", value: db.summary.timeSaved, iconName: "clock", trendText: "22%", spark: [12, 18, 24, 31, 39, 45], tone: "tone-cyan" }
  ])}
  <section class="module-split wide-detail">
    <article class="card">
      ${renderToolbar("automations", ["all", "enabled", "disabled"], { primaryAction: "send-message", primaryLabel: "Nueva automatizacion" })}
      <div class="automation-table-head"><span>Automatizacion</span><span>Categoria</span><span>Estado</span><span>Ultima ejecucion</span><span>Acciones</span></div>
      <div class="automation-list">${automations.map(renderAutomationRow).join("")}</div>
    </article>
    ${renderAutomationDetail(selected)}
  </section>`;
}

function filterAutomations() {
  const search = ui.search.trim().toLowerCase();
  return db.automations.filter((automation) => {
    const matchesFilter = ui.filters.automations === "all" || automation.status === ui.filters.automations;
    const haystack = `${automation.name} ${automation.category} ${automation.description}`.toLowerCase();
    return matchesFilter && (!search || haystack.includes(search));
  });
}

function renderAutomationRow(automation) {
  return `<div class="automation-row ${automation.id === ui.selectedAutomationId ? "selected" : ""}" data-action="select-automation" data-id="${automation.id}">
    <div class="entity-cell"><div class="automation-icon">${icon(automation.icon)}</div><div class="entity-copy"><strong>${escapeHtml(automation.name)}</strong><p>${escapeHtml(automation.description)}</p></div></div>
    <span class="tag">${escapeHtml(automation.category)}</span>
    <span class="automation-state"><button class="toggle ${automation.status === "enabled" ? "active" : ""}" data-action="toggle-automation" data-id="${automation.id}" type="button" aria-label="Alternar automatizacion"></button>${statusMeta[automation.status].label}</span>
    <span>${timeShort(automation.lastRun)}<small>${automation.status === "enabled" ? "Exito" : "Nunca ejecutada"}</small></span>
    <div class="table-actions"><button class="icon-button" type="button" aria-label="Ejecutar">${icon("play")}</button><button class="icon-button" data-action="select-automation" data-id="${automation.id}" type="button" aria-label="Editar">${icon("edit")}</button><button class="icon-button" type="button" aria-label="Mas">${icon("more")}</button></div>
  </div>`;
}

function renderAutomationDetail(automation) {
  if (!automation) return `<aside class="detail-panel">${emptyState("Selecciona una automatizacion", "El detalle aparecera aqui.")}</aside>`;
  return `<aside class="detail-panel">
    <div class="detail-body">
      <button class="panel-close icon-button" type="button" aria-label="Cerrar detalle">${icon("x")}</button>
      <div class="detail-head"><div class="entity-cell"><div class="automation-icon">${icon(automation.icon)}</div><div><h2 class="detail-title">${escapeHtml(automation.name)}</h2><p class="detail-subtitle">${escapeHtml(automation.category)}</p></div></div>${statusBadge(automation.status)}</div>
      <div class="quick-actions-row"><button class="ghost-button" type="button">${icon("play")}Ejecutar ahora</button><button class="ghost-button" type="button">${icon("edit")}Editar</button><button class="ghost-button" type="button">${icon("copy")}Duplicar</button><button class="ghost-button" type="button">${icon("trash")}Eliminar</button></div>
      <section class="detail-section"><h3>Descripcion</h3><p class="muted">${escapeHtml(automation.description)}</p></section>
      <section class="detail-section"><h3>Flujo de trabajo</h3><div class="automation-flow">${["Disparador", "IA genera mensaje", "Enviar mensaje WhatsApp", "Registrar actividad"].map((step, index) => `<div class="flow-step"><div class="activity-icon">${icon(index === 1 ? "sparkles" : automation.icon)}</div><strong>${escapeHtml(step)}</strong><span>${index === 0 ? "Sin respuesta" : index === 3 ? "Base comercial" : "Automatico"}</span></div>`).join("<span class=\"flow-arrow\">→</span>")}</div></section>
      <section class="detail-section"><h3>Estadisticas</h3><div class="mini-grid"><div class="mini-tile"><span class="metric-label">Ejecuciones</span><strong>${automation.runs}</strong><span class="kpi-trend">18%</span></div><div class="mini-tile"><span class="metric-label">Exitosas</span><strong>${automation.successRate}%</strong></div><div class="mini-tile danger"><span class="metric-label">Fallidas</span><strong>4</strong><span class="kpi-trend negative">1,4%</span></div><div class="mini-tile"><span class="metric-label">Tiempo promedio</span><strong>${escapeHtml(automation.timeSaved)}</strong></div></div></section>
      <section class="detail-section"><h3>Ultimas ejecuciones</h3><div class="timeline-list">${db.activities.slice(0, 4).map((activity) => `<div class="timeline-item"><div class="entity-cell"><div class="activity-icon">${icon(activity.type)}</div><div class="timeline-copy"><strong>${escapeHtml(activity.title)}</strong><p>${escapeHtml(activity.time)}</p></div></div>${statusBadge(activity.status)}</div>`).join("")}</div></section>
    </div>
  </aside>`;
}

function renderReports() {
  return `${pageHeader("Reportes", "Analiza el rendimiento del negocio con datos actualizados.", `<button class="ghost-button" type="button">${icon("calendar")}1 may. 2026 - 31 may. 2026</button><button class="ghost-button" type="button">${icon("filter")}Filtros</button>`)}
  ${renderKpis([
    { title: "Ventas del mes", value: shortMoney(db.summary.monthlyRevenue), iconName: "dollar", trendText: "12%", trendSuffix: "vs abr. 2026", spark: [5, 6, 6, 7, 8, 7, 9, 10, 9, 12] },
    { title: "Clientes nuevos", value: 24, iconName: "users", trendText: "20%", trendSuffix: "vs abr. 2026", spark: [8, 10, 9, 11, 12, 13, 15, 18, 17, 21, 20, 24], tone: "tone-violet" },
    { title: "Cotizaciones enviadas", value: 37, iconName: "file", trendText: "15%", trendSuffix: "vs abr. 2026", spark: [20, 22, 19, 25, 24, 28, 26, 29, 31, 30, 35, 37], tone: "tone-cyan" },
    { title: "Pedidos entregados", value: 22, iconName: "package", trendText: "10%", trendSuffix: "vs abr. 2026", spark: [8, 9, 11, 14, 16, 18, 22], tone: "tone-amber" }
  ])}
  <section class="reports-grid">
    <div class="chart-grid">
      <article class="chart-panel"><div class="card-head"><h2 class="chart-title">Ventas por mes</h2><span class="tag">Este ano</span></div>${barChart(db.reports.monthlySales)}<div class="metric-row"><span>Total ano</span><strong>${shortMoney(62420000)}</strong></div></article>
      <article class="chart-panel"><div class="card-head"><h2 class="chart-title">Conversion de cotizaciones</h2><span class="tag">Este mes</span></div>${renderFunnel()}<div class="metric-row"><span>Tasa de conversion</span><strong>${db.summary.acceptanceRate}%</strong></div></article>
      <article class="chart-panel"><div class="card-head"><h2 class="chart-title">Ventas por categoria</h2><span class="tag">Este mes</span></div>${renderDonut()}</article>
      <article class="chart-panel"><div class="card-head"><h2 class="chart-title">Tiempo promedio de respuesta</h2><span class="tag">30 dias</span></div>${lineChart(db.reports.responseTrend)}<div class="metric-row"><span>Promedio</span><strong>${db.summary.responseTime}</strong></div></article>
    </div>
    <aside class="dashboard-side">
      <article class="card"><div class="card-head"><h2 class="card-title">Resumen general</h2></div><div class="metric-row"><span>Ventas del mes</span><strong>${shortMoney(db.summary.monthlyRevenue)}</strong></div><div class="metric-row"><span>Costos de produccion</span><strong>${shortMoney(db.summary.pendingPayments)}</strong></div><div class="metric-row"><span>Utilidad estimada</span><strong>${shortMoney(5720000)}</strong></div><div class="metric-row"><span>Margen de utilidad</span><strong>67,6%</strong></div><button class="ghost-button" type="button">Ver analisis detallado ${icon("arrowRight", "icon small")}</button></article>
      <article class="card"><div class="card-head"><h2 class="card-title">Reportes guardados</h2><button class="ghost-button" type="button">Ver todos</button></div><div class="saved-list">${db.reports.saved.map((item) => `<div class="saved-report"><div class="entity-cell"><div class="report-icon">${icon(item.icon)}</div><div class="saved-copy"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.time)}</p></div></div></div>`).join("")}</div></article>
      <article class="card"><div class="card-head"><h2 class="card-title">Acciones rapidas</h2></div><div class="quick-actions-row"><button class="icon-button" type="button" aria-label="Generar">${icon("chart")}</button><button class="icon-button" type="button" aria-label="Programar">${icon("calendar")}</button><button class="icon-button" data-action="export-json" type="button" aria-label="Exportar">${icon("download")}</button></div></article>
    </aside>
  </section>`;
}

function renderDonut() {
  return `<div class="donut-wrap"><div class="donut" data-label="${shortMoney(db.summary.monthlyRevenue)}"></div><div class="legend-list">${db.reports.categories.map((item) => `<div class="legend-item"><span class="legend-dot" style="background:${item.color}"></span><span>${escapeHtml(item.label)}</span><strong>${item.value}%</strong></div>`).join("")}</div></div>`;
}

function renderSettings() {
  return `${pageHeader("Configuracion", "Ajustes basicos del panel comercial.", `<button class="primary-button" data-action="reset-data" type="button">${icon("settings")}<span>Restaurar datos</span></button>`)}
  <section class="settings-grid">
    <article class="settings-panel"><div class="card-head"><h2 class="settings-title">Empresa</h2>${icon("building")}</div><div class="info-grid">${infoRow("Nombre", db.company.name)}${infoRow("Modulo", db.company.subtitle)}${infoRow("Moneda", db.settings.currency)}${infoRow("Dominio", "majic3d.online")}</div></article>
    <article class="settings-panel"><div class="card-head"><h2 class="settings-title">Preferencias</h2>${icon("settings")}</div>${settingToggle("notifications", "Notificaciones", db.settings.notifications)}${settingToggle("compactSidebar", "Sidebar compacto", db.settings.compactSidebar)}${settingToggle("autoSave", "Guardado local", db.settings.autoSave)}</article>
    <article class="settings-panel"><div class="card-head"><h2 class="settings-title">Datos mock</h2>${icon("file")}</div><div class="metric-row"><span>Clientes</span><strong>${db.customers.length}</strong></div><div class="metric-row"><span>Cotizaciones</span><strong>${db.quotations.length}</strong></div><div class="metric-row"><span>Pedidos</span><strong>${db.orders.length}</strong></div><div class="quick-actions-row"><button class="ghost-button" data-action="export-json" type="button">${icon("download")}Exportar JSON</button><button class="ghost-button" data-action="reset-data" type="button">${icon("trash")}Limpiar prueba</button></div></article>
  </section>`;
}

function settingToggle(key, label, value) {
  return `<div class="setting-row"><span>${escapeHtml(label)}</span><button class="toggle ${value ? "active" : ""}" data-action="toggle-setting" data-key="${key}" type="button" aria-label="Alternar ${escapeHtml(label)}"></button></div>`;
}

function infoRow(label, value) {
  return `<div class="info-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function pagination(label) {
  return `<div class="pagination"><span class="table-meta">${escapeHtml(label)}</span><button class="pagination-button" type="button">1</button><button class="pagination-button active" type="button">2</button><button class="pagination-button" type="button">3</button></div>`;
}

function emptyState(title, message) {
  return `<div class="empty-state"><div>${icon("sparkles")}<strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p></div></div>`;
}

function customerColor(customerId) {
  return repositories.customers.find(customerId)?.color || "green";
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    ui.view = viewButton.dataset.view;
    ui.sidebarOpen = false;
    renderApp();
    return;
  }

  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "toggle-sidebar") {
    ui.sidebarOpen = !ui.sidebarOpen;
    renderApp();
    return;
  }

  if (action === "close-sidebar") {
    ui.sidebarOpen = false;
    renderApp();
    return;
  }

  if (action === "quick-view") {
    ui.view = target.dataset.target || "dashboard";
    renderApp();
    return;
  }

  if (action === "set-filter") {
    ui.filters[target.dataset.filter] = target.dataset.value;
    renderContent();
    return;
  }

  if (action === "select-customer") {
    ui.selectedCustomerId = target.dataset.id;
    renderContent();
    return;
  }

  if (action === "select-quote") {
    ui.selectedQuoteId = target.dataset.id;
    renderContent();
    return;
  }

  if (action === "select-order") {
    ui.selectedOrderId = target.dataset.id;
    renderContent();
    return;
  }

  if (action === "select-automation") {
    ui.selectedAutomationId = target.dataset.id;
    renderContent();
    return;
  }

  if (action === "new-client") {
    const customer = repositories.customers.create();
    ui.selectedCustomerId = customer.id;
    ui.view = "customers";
    saveDatabase();
    showToast("Cliente creado correctamente.");
    return;
  }

  if (action === "new-quote") {
    const quote = repositories.quotations.create();
    ui.selectedQuoteId = quote.id;
    ui.view = "quotations";
    saveDatabase();
    showToast("Cotizacion creada correctamente.");
    return;
  }

  if (action === "new-order") {
    const order = repositories.orders.create();
    ui.selectedOrderId = order.id;
    ui.view = "orders";
    saveDatabase();
    showToast("Pedido creado correctamente.");
    return;
  }

  if (action === "set-quote-status") {
    const quote = repositories.quotations.find(target.dataset.id);
    if (quote) quote.status = target.dataset.status;
    saveDatabase();
    showToast("Estado de cotizacion actualizado.");
    return;
  }

  if (action === "set-order-status") {
    const order = repositories.orders.find(target.dataset.id);
    if (order) {
      order.status = target.dataset.status;
      const progress = { standby: 15, production: 65, ready: 92, delivered: 100, canceled: 0 };
      order.progress = progress[order.status] ?? order.progress;
    }
    saveDatabase();
    showToast("Estado de pedido actualizado.");
    return;
  }

  if (action === "toggle-automation") {
    const automation = repositories.automations.find(target.dataset.id);
    if (automation) automation.status = automation.status === "enabled" ? "disabled" : "enabled";
    saveDatabase();
    renderContent();
    return;
  }

  if (action === "toggle-setting") {
    const key = target.dataset.key;
    db.settings[key] = !db.settings[key];
    saveDatabase();
    renderContent();
    return;
  }

  if (action === "reset-data") {
    db = clone(seedDatabase);
    ui.selectedCustomerId = db.customers[0].id;
    ui.selectedQuoteId = db.quotations[0].id;
    ui.selectedOrderId = db.orders[0].id;
    ui.selectedAutomationId = db.automations[0].id;
    saveDatabase();
    showToast("Datos de prueba restaurados.");
    return;
  }

  if (action === "export-json") {
    exportJson();
    showToast("JSON exportado desde datos locales.");
    return;
  }

  if (action === "send-message") {
    showToast("Accion simulada. No se conecto ninguna API.");
  }
});

document.addEventListener("input", (event) => {
  const target = event.target.closest("[data-action='global-search']");
  if (!target) return;
  ui.search = target.value;
  renderContent();
});

document.addEventListener("change", (event) => {
  const target = event.target.closest("[data-action='set-filter-select']");
  if (!target) return;
  ui.filters[target.dataset.filter] = target.value;
  renderContent();
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    const searchInput = document.querySelector('[data-action="global-search"]');
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }
});

function showToast(message) {
  ui.toast = message;
  renderApp();
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    ui.toast = "";
    renderApp();
  }, 2400);
}

function exportJson() {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `majic3d-crm-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

renderApp();
