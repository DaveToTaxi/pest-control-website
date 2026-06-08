import { ArrowRight, BookOpen } from "lucide-react"
import { pests } from "@/lib/site-data"
import { iconMap } from "@/lib/icon-map"

const featured = pests.slice(0, 6)

export function PestLibrary() {
  return (
    <section id="biblioteca" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <BookOpen className="size-4" />
              Biblioteca de plagas
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Conoce tu plaga antes de actuar
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Guías prácticas con fotos, signos de aparición, riesgos para la
              salud y consejos de prevención para cada plaga.
            </p>
          </div>
          <a
            href="#presupuesto"
            className="flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            Ver todas las guías
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((pest) => {
            const Icon = iconMap[pest.icon] ?? iconMap.bug
            return (
              <a
                key={pest.slug}
                href="#presupuesto"
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {pest.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Cómo identificarlas, prevenirlas y eliminarlas de forma
                  definitiva.
                </p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Leer guía
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
