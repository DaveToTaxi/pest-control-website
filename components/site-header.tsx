"use client"

import { useState, useEffect } from "react"
import { Menu, X, ShieldCheck } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { company } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Plagas", href: "#plagas" },
  { label: "Sectores", href: "#sectores" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Biblioteca", href: "#biblioteca" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      {/* Top utility bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-3.5" />
            Empresa certificada · Registro Oficial de Biocidas
          </span>
          <span>{company.area}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" />
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tight text-foreground">
            {company.name}
            <span className="ml-1 font-medium text-muted-foreground">
              {company.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LinkButton href="#presupuesto" className="px-5 py-2 text-sm">
            Presupuesto gratis
          </LinkButton>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <LinkButton
              href="#presupuesto"
              className="w-full"
              variant="primary"
            >
              <span onClick={() => setOpen(false)}>Presupuesto gratis</span>
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  )
}
