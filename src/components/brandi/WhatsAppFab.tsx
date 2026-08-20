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
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-forest px-5 py-4 text-cream shadow-xl shadow-forest/30 transition-all duration-300 hover:scale-105 hover:bg-forest-deep hover:shadow-2xl hover:shadow-forest/40 sm:right-5 sm:bottom-5 sm:px-6 sm:py-5"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="eyebrow hidden text-[0.7rem] font-medium tracking-[0.18em] uppercase group-hover:inline sm:inline">
        Peça pelo WhatsApp
      </span>
    </a>
  );
}
