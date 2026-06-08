import { stats } from "@/lib/site-data"

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4 lg:py-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-heading text-4xl font-extrabold tracking-tight lg:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm font-medium text-primary-foreground/80">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
