import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: ReactNode
  variant?: "primary" | "outline" | "light"
  className?: string
}

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent",
  outline:
    "border-2 border-border bg-background text-foreground hover:border-primary hover:text-primary",
  light:
    "bg-primary-foreground text-primary hover:bg-primary-foreground/90 border border-transparent",
}

export function LinkButton({ href, children, variant = "primary", className }: Props) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-all active:translate-y-px",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  )
}
