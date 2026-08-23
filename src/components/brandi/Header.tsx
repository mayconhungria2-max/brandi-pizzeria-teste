import { useState } from "react";
import { Menu, X, Pizza, ShoppingBag } from "lucide-react";
import logoAsset from "@/assets/brandi-logo-mark.png.asset.json";
import { navLinks, whatsappLink } from "@/lib/brandi";
import { useCart } from "@/lib/cart";

function CartHeaderButton() {
  const { count, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Abrir carrinho"
      className="relative inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 bg-cream px-4 py-3.5 text-[0.7rem] font-medium tracking-[0.16em] text-forest uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-cream sm:px-5"
    >
      <ShoppingBag className="h-4 w-4" />
      <span className="hidden sm:inline">Carrinho</span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 grid h-5 min-w-5 place-items-center rounded-full bg-brand-red px-1 text-[0.65rem] font-semibold text-primary-foreground shadow-md">
          {count}
        </span>
      )}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr] items-center gap-6 px-4 py-2 lg:gap-10 lg:px-8 lg:py-3">
        <a
          href="#inicio"
          className="group block shrink-0 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img
            src={logoAsset.url}
            alt="Brandi Pizzerie"
            width={1100}
            height={1100}
            className="block h-20 w-auto sm:h-24 lg:h-32"
          />
        </a>

        <div className="flex items-center justify-end gap-2 sm:gap-3 lg:gap-4">
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
            className="hidden items-center gap-2 rounded-full bg-brand-red px-4 py-3.5 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red-dark sm:inline-flex lg:px-6"
          >
            <Pizza className="h-4 w-4" /> Pedir online
          </a>

          <CartHeaderButton />

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
            <div className="mt-4 mb-4 flex flex-col gap-2 sm:hidden">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-4 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase"
              >
                <Pizza className="h-4 w-4" /> Pedir online
              </a>
              <CartHeaderButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}