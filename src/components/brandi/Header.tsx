import { useState } from "react";
import { Menu, X, Pizza } from "lucide-react";
import logo from "@/assets/brandi-logo-dark.png";
import { navLinks, whatsappLink } from "@/lib/brandi";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/95 backdrop-blur">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr] items-center gap-4 px-4 lg:px-8">
        <a href="#inicio" className="block shrink-0 bg-forest-deep px-4 py-2">
          <img
            src={logo}
            alt="Brandi Pizzerie"
            width={1024}
            height={768}
            className="h-12 w-auto lg:h-16"
          />
        </a>

        <div className="flex items-center justify-end gap-6">
          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="eyebrow text-forest transition-colors hover:text-brand-red"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 bg-brand-red px-5 py-3 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-brand-red-dark sm:inline-flex"
          >
            <Pizza className="h-4 w-4" /> Pedir online
          </a>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-forest xl:hidden"
          >
            {open ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-cream xl:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-4 py-2 lg:px-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow border-b border-border py-4 text-forest last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-3 mb-3 inline-flex items-center justify-center gap-2 bg-brand-red px-5 py-4 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase sm:hidden"
            >
              <Pizza className="h-4 w-4" /> Pedir online
            </a>
          </nav>
        </div>
      )}
      <X className="hidden" />
    </header>
  );
}