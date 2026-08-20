import logoAsset from "@/assets/brandi-logo-3d.png.asset.json";
import { Instagram, MessageCircle } from "lucide-react";
import {
  INSTAGRAM,
  navLinks,
  whatsappLink,
  WHATSAPP_DISPLAY,
} from "@/lib/brandi";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={logoAsset.url}
            alt="Brandi Pizzerie"
            loading="lazy"
            width={1536}
            height={1024}
            className="h-20 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Pizza artesanal, bons ingredientes e momentos para compartilhar.
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-brand-red">Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-cream">
                  {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-brand-red">Atendimento</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            <li>
              Delivery
              <br />
              <span className="text-cream/50">Qua, qui e dom · 18h–23h</span>
              <br />
              <span className="text-cream/50">Sex e sáb · 18h–23h30</span>
            </li>
            <li>
              Salão
              <br />
              <span className="text-cream/50">Sex, sáb e dom · 18h–23h</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-brand-red">Contato</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-cream"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/brandipizzerie"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-cream"
              >
                <Instagram className="h-4 w-4" /> {INSTAGRAM}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center">
        <p className="eyebrow text-cream/45">
          © Brandi Pizzerie · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}