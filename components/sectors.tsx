import { sectors, steps } from "@/lib/site-data"
import { iconMap } from "@/lib/icon-map"

export function Sectors() {
  return (
    <section id="sectores" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Sectors */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              Sectores que confían en nosotros
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Adaptados a cada tipo de cliente
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Desde una vivienda hasta una cadena de restaurantes. Aplicamos
              protocolos específicos según normativa para cada sector.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {sectors.map((sec) => {
                const Icon = iconMap[sec.icon] ?? iconMap.bug
                return (
                  <div
                    key={sec.name}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <Icon className="size-5 shrink-0 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {sec.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Process steps */}
          <div className="rounded-3xl border border-border bg-secondary/40 p-7 lg:p-10">
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Cómo trabajamos
            </h3>
            <ol className="mt-7 space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
