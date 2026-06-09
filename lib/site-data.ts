export const company = {
  name: "Vexpro",
  tagline: "Control de Plagas",
  phone: "",
  phoneHref: "#presupuesto",
  area: "Majadahonda · Las Rozas · Pozuelo · Madrid",
  email: "info@vexpro.es",
}

export type Pest = {
  slug: string
  name: string
  short: string
  icon: string
}

export const pests: Pest[] = [
  { slug: "cucarachas", name: "Cucarachas", short: "Cocinas y bajantes", icon: "bug" },
  { slug: "ratas-ratones", name: "Ratas y ratones", short: "Roedores", icon: "rat" },
  { slug: "chinches", name: "Chinches", short: "Dormitorios", icon: "bedDouble" },
  { slug: "hormigas", name: "Hormigas", short: "Jardín y hogar", icon: "ant" },
  { slug: "termitas", name: "Termitas", short: "Madera y estructura", icon: "trees" },
  { slug: "avispas", name: "Avispas y abejas", short: "Nidos y aleros", icon: "hexagon" },
  { slug: "mosquitos", name: "Mosquitos", short: "Tigre y comunes", icon: "droplet" },
  { slug: "palomas", name: "Palomas", short: "Aves urbanas", icon: "bird" },
  { slug: "pulgas-garrapatas", name: "Pulgas y garrapatas", short: "Mascotas", icon: "pawPrint" },
  { slug: "carcoma", name: "Carcoma", short: "Muebles y vigas", icon: "axe" },
  { slug: "moscas", name: "Moscas", short: "Hostelería", icon: "bug" },
  { slug: "legionella", name: "Legionella", short: "Torres y depósitos", icon: "waves" },
]

export const services = [
  {
    number: "01",
    title: "Desinsectación",
    desc: "Eliminación de cucarachas, hormigas, chinches y todo tipo de insectos con productos de bajo impacto y certificados.",
    points: ["Diagnóstico de focos", "Tratamiento dirigido", "Gel y barreras residuales"],
  },
  {
    number: "02",
    title: "Desratización",
    desc: "Control integral de roedores con estaciones de cebo seguras, sellado de accesos y seguimiento continuo.",
    points: ["Mapa de estaciones", "Sellado de entradas", "Revisiones periódicas"],
  },
  {
    number: "03",
    title: "Desinfección",
    desc: "Protocolos de higienización ambiental y de superficies para hogares, comercios y empresas alimentarias.",
    points: ["Nebulización ULV", "Superficies de contacto", "Informe sanitario"],
  },
  {
    number: "04",
    title: "Control de aves",
    desc: "Sistemas disuasorios para palomas y otras aves: redes, pinchos y limpieza de excrementos.",
    points: ["Redes y pinchos", "Limpieza y desinfección", "Mantenimiento anual"],
  },
]

export const stats = [
  { value: "12.000+", label: "Servicios realizados" },
  { value: "98,4%", label: "Clientes satisfechos" },
  { value: "<2 h", label: "Respuesta en urgencias" },
  { value: "15", label: "Años de experiencia" },
]

export const sectors = [
  { name: "Hostelería y restauración", icon: "utensilsCrossed" },
  { name: "Comercios y supermercados", icon: "store" },
  { name: "Comunidades de vecinos", icon: "building2" },
  { name: "Hoteles y alojamientos", icon: "bedDouble" },
  { name: "Industria alimentaria", icon: "factory" },
  { name: "Colegios y sanidad", icon: "graduationCap" },
]

export const testimonials = [
  {
    name: "Marta Giménez",
    role: "Restaurante El Olivar",
    city: "Majadahonda",
    text: "Teníamos un problema serio de cucarachas en cocina antes de una inspección. Vinieron el mismo día, lo resolvieron y nos entregaron el informe HACCP. Impecables.",
    rating: 5,
  },
  {
    name: "Carlos Ferrer",
    role: "Administrador de fincas",
    city: "Pozuelo de Alarcón",
    text: "Gestiono 14 comunidades y solo confío en ellos para la desratización. Puntuales, discretos y siempre con el seguimiento al día.",
    rating: 5,
  },
  {
    name: "Lucía Romero",
    role: "Particular",
    city: "Las Rozas",
    text: "Avisé por una colonia de avispas en el alero y al día siguiente estaba solucionado. Trato cercano y precio cerrado sin sorpresas.",
    rating: 5,
  },
]

export const steps = [
  { title: "Contacto y diagnóstico", desc: "Nos llamas o rellenas el formulario. Valoramos tu caso en minutos." },
  { title: "Inspección y presupuesto", desc: "Visita técnica gratuita y presupuesto cerrado, sin compromiso." },
  { title: "Tratamiento certificado", desc: "Aplicamos el plan con productos autorizados por Sanidad." },
  { title: "Seguimiento y garantía", desc: "Revisiones de control e informe documentado de cada servicio." },
]
