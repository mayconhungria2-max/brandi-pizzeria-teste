import { Dialog, DialogContent } from "@/components/ui/dialog";
import { pizzaLink, type Pizza } from "@/lib/brandi";

export function PizzaDialog({
  pizza,
  onClose,
}: {
  pizza: Pizza | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!pizza} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl overflow-hidden rounded-none border-border bg-card p-0">
        {pizza && (
          <div className="grid gap-0 sm:grid-cols-2">
            <img
              src={pizza.image}
              alt={`Pizza ${pizza.name}`}
              loading="lazy"
              className="h-56 w-full object-cover sm:h-full"
            />
            <div className="flex flex-col justify-center gap-4 p-7">
              <span className="eyebrow text-forest-light">
                {pizza.sweet ? "Pizza doce" : "Pizza salgada"}
              </span>
              <h3 className="text-3xl font-semibold tracking-wide text-brand-red">
                {pizza.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pizza.description}
              </p>
              <p className="font-serif text-2xl text-forest">{pizza.price}</p>
              <a
                href={pizzaLink(pizza.name)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-brand-red px-6 py-3 text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-brand-red-dark"
              >
                Pedir essa pizza
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}