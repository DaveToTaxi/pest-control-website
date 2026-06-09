import { ShieldCheck, Mail, MapPin } from "lucide-react"
import { company, services, pests } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="size-5" />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight">
                {company.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-background/70">
              Empresa de control de plagas certificada. Tratamientos seguros,
              eficaces y garantizados para hogares y empresas.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-background/80 hover:text-background">
                <Mail className="size-4 text-primary" />
                {company.email}
              </a>
              <p className="flex items-center gap-2 text-background/80">
                <MapPin className="size-4 text-primary" />
                {company.area}
              </p>
            </div>
          </div>

          <FooterCol title="Servicios" items={services.map((s) => s.title)} />
          <FooterCol title="Plagas frecuentes" items={pests.slice(0, 6).map((p) => p.name)} />

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-background">
              Empresa
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Sobre nosotros", "Zonas de servicio", "Certificaciones", "Blog", "Contacto"].map((i) => (
                <li key={i}>
                  <a href="#" className="text-background/70 transition-colors hover:text-background">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name} {company.tagline}. Todos
            los derechos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background">
              Aviso legal
            </a>
            <a href="#" className="hover:text-background">
              Privacidad
            </a>
            <a href="#" className="hover:text-background">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-background">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#presupuesto" className="text-background/70 transition-colors hover:text-background">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
