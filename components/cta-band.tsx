import { Phone } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { company } from "@/lib/site-data"

export function CtaBand() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                ¿Tienes una urgencia? Vamos hoy mismo.
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Nuestros equipos cubren toda la zona oeste de Madrid. Llámanos y
                un técnico estará en tu puerta en el menor tiempo posible.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={company.phoneHref}>
                  <Phone className="size-4" />
                  {company.phone}
                </LinkButton>
                <LinkButton href="#presupuesto" variant="outline">
                  Pedir presupuesto
                </LinkButton>
              </div>
            </div>
            <div className="h-56 lg:h-full">
              <img
                src="/images/cta-van.png"
                alt="Furgoneta de servicio de control de plagas"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
