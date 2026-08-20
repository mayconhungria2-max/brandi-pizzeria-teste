import { useState } from "react";
import { Menu, X, Pizza } from "lucide-react";
import logoAsset from "@/assets/brandi-logo-upload.png.asset.json";
import { navLinks, whatsappLink } from "@/lib/brandi";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr] items-center gap-6 px-4 py-2 lg:gap-10 lg:px-8 lg:py-3">
        <a
          href="#inicio"
          className="group block shrink-0 overflow-hidden rounded-xl bg-forest-deep shadow-[0_10px_30px_-14px_rgba(0,0,0,0.55)] ring-1 ring-forest/20 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img
            src={logoAsset.url}
            alt="Brandi Pizzerie"
            className="h-20 w-auto sm:h-24 lg:h-28"
          />
        </a>

        <div className="flex items-center justify-end gap-4 lg:gap-8">
          <nav className="hidden items-center gap-7 xl:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="eyebrow relative py-2 text-forest transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-red after:transition-all after:duration-300 hover:text-brand-red hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red-dark sm:inline-flex"
          >
            <Pizza className="h-4 w-4" /> Pedir online
          </a>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-forest/20 p-2.5 text-forest transition-colors hover:bg-forest hover:text-cream xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              className="mt-4 mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-4 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase sm:hidden"
            >
              <Pizza className="h-4 w-4" /> Pedir online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}