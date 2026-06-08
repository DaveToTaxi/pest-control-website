import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { PestGrid } from "@/components/pest-grid"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Sectors } from "@/components/sectors"
import { Testimonials } from "@/components/testimonials"
import { PestLibrary } from "@/components/pest-library"
import { CtaBand } from "@/components/cta-band"
import { QuoteForm } from "@/components/quote-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PestGrid />
        <Stats />
        <Services />
        <Sectors />
        <Testimonials />
        <PestLibrary />
        <CtaBand />
        <QuoteForm />
      </main>
      <SiteFooter />
    </>
  )
}
