import { Check } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { services } from "@/lib/site-data"

export function Services() {
  return (
    <section id="servicios" className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              Nuestros servicios
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Soluciones integrales de control de plagas
            </h2>
          </div>
          <LinkButton href="#presupuesto" variant="outline" className="px-5 py-2.5 text-sm">
            Ver todos los servicios
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.number}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <span className="font-heading text-5xl font-extrabold text-primary/15 transition-colors group-hover:text-primary/25">
                {s.number}
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Check className="size-4 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
