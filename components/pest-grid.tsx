import { ArrowRight } from "lucide-react"
import { pests } from "@/lib/site-data"
import { iconMap } from "@/lib/icon-map"

export function PestGrid() {
  return (
    <section id="plagas" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">
            Identifica tu problema
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            ¿Qué plaga tienes en casa o en tu negocio?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Selecciona la plaga y te llevamos directo a la solución, con
            tratamiento certificado y garantía por escrito.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {pests.map((pest) => {
            const Icon = iconMap[pest.icon] ?? iconMap.bug
            return (
              <a
                key={pest.slug}
                href="#presupuesto"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold text-foreground">
                    {pest.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {pest.short}
                  </span>
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground/0 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          ¿No la encuentras?{" "}
          <a href="#presupuesto" className="font-semibold text-primary underline underline-offset-4">
            Cuéntanos tu caso
          </a>{" "}
          y la identificamos por ti.
        </p>
      </div>
    </section>
  )
}
