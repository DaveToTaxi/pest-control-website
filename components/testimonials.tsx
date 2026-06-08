import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/site-data"

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">
            Opiniones reales
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm font-semibold text-foreground">
              4,9 sobre 5 · 800+ reseñas
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="size-7 text-primary/30" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {t.text}
              </blockquote>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <figcaption className="mt-3 border-t border-border pt-3">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role} · {t.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
