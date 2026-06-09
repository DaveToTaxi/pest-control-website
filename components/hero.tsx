"use client"

import { Phone, Clock, CheckCircle2, Star, MapPin } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { company } from "@/lib/site-data"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <Star className="size-3.5 fill-accent text-accent" />
            4,9/5 · más de 800 opiniones verificadas
          </span>

          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Eliminamos tu plaga.{" "}
            <span className="text-primary">Recuperas tu tranquilidad.</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Control de plagas profesional en Majadahonda y toda la zona oeste de
            Madrid. Técnicos certificados, productos autorizados por Sanidad y
            garantía por escrito.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#presupuesto">Presupuesto en 1 minuto</LinkButton>
            <LinkButton href={company.phoneHref} variant="outline">
              <Phone className="size-4" />
              {company.phone}
            </LinkButton>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Clock, text: "Respuesta en menos de 2 h" },
              { icon: CheckCircle2, text: "Presupuesto cerrado y gratuito" },
              { icon: MapPin, text: "Servicio local en tu zona" },
            ].map((f) => (
              <li key={f.text} className="flex items-start gap-2 text-sm font-medium text-foreground">
                <f.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                {f.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image + floating quick quote */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <img
              src="/images/hero-tech.png"
              alt="Técnico de control de plagas trabajando en una cocina"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-lg lg:absolute lg:-bottom-8 lg:-left-8 lg:mt-0 lg:w-72">
            <p className="text-sm font-semibold text-foreground">
              Solicita tu visita
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Te llamamos en menos de 2 horas laborables.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                document
                  .getElementById("presupuesto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className="mt-3 flex flex-col gap-2"
            >
              <input
                type="tel"
                required
                placeholder="Tu teléfono"
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Me interesa
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
