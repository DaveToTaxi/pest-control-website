"use client"

import { useState } from "react"
import { CheckCircle2, Mail, MapPin, Clock } from "lucide-react"
import { company, pests } from "@/lib/site-data"

const clientTypes = ["Particular", "Comunidad", "Empresa / Comercio", "Hostelería"]
const frequencies = ["Urgente (hoy)", "Esta semana", "Solo presupuesto"]

export function QuoteForm() {
  const [sent, setSent] = useState(false)

  return (
    <section id="presupuesto" className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy + contact */}
        <div>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Presupuesto en 1 minuto, sin compromiso
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
            Cuéntanos qué te ocurre y te damos un precio cerrado. Si es urgente,
            te llamamos en menos de 2 horas laborables.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: Mail, label: company.email, sub: "Respuesta el mismo día", href: `mailto:${company.email}` },
              { icon: MapPin, label: company.area, sub: "Servicio local y rápido" },
              { icon: Clock, label: "Urgencias 24/7", sub: "Disponibilidad inmediata" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <c.icon className="size-5" />
                </span>
                <div>
                  {c.href ? (
                    <a href={c.href} className="font-bold hover:underline">
                      {c.label}
                    </a>
                  ) : (
                    <p className="font-bold">{c.label}</p>
                  )}
                  <p className="text-sm text-primary-foreground/70">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-3xl bg-card p-7 text-card-foreground shadow-xl lg:p-9">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="size-14 text-primary" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                ¡Solicitud enviada!
              </h3>
              <p className="mt-2 max-w-xs text-muted-foreground">
                Gracias por confiar en {company.name}. Te contactaremos muy
                pronto con tu presupuesto.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre">
                  <input
                    required
                    type="text"
                    placeholder="Tu nombre"
                    className="input-base"
                  />
                </Field>
                <Field label="Teléfono">
                  <input
                    required
                    type="tel"
                    placeholder="600 000 000"
                    className="input-base"
                  />
                </Field>
              </div>

              <Field label="Tipo de cliente">
                <select required defaultValue="" className="input-base">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {clientTypes.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="¿Qué plaga tienes?">
                  <select required defaultValue="" className="input-base">
                    <option value="" disabled>
                      Selecciona la plaga
                    </option>
                    {pests.map((p) => (
                      <option key={p.slug}>{p.name}</option>
                    ))}
                    <option>No estoy seguro</option>
                  </select>
                </Field>
                <Field label="¿Cuándo lo necesitas?">
                  <select required defaultValue="" className="input-base">
                    <option value="" disabled>
                      Selecciona
                    </option>
                    {frequencies.map((f) => (
                      <option key={f}>{f}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Cuéntanos brevemente (opcional)">
                <textarea
                  rows={3}
                  placeholder="Dónde está el problema, desde cuándo, superficie aproximada..."
                  className="input-base resize-none"
                />
              </Field>

              <button
                type="submit"
                className="mt-1 w-full rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Solicitar presupuesto gratis
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Al enviar aceptas nuestra política de privacidad. No compartimos
                tus datos.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  )
}
