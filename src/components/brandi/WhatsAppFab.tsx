import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/brandi";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      title="Peça pelo WhatsApp"
      aria-label="Peça pelo WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 bg-forest px-4 py-4 text-cream shadow-lg transition-colors hover:bg-forest-deep"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="eyebrow hidden group-hover:inline sm:inline">
        Peça pelo WhatsApp
      </span>
    </a>
  );
}