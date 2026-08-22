import { useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  checkoutLink,
  DELIVERY_FEE,
  emptyDelivery,
  formatBRL,
  useCart,
  type DeliveryInfo,
} from "@/lib/cart";

function Field({
  label,
  value,
  onChange,
  placeholder,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[0.62rem] font-medium tracking-[0.16em] text-forest-light uppercase">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-forest outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand-red"
      />
    </label>
  );
}

export function CartButton() {
  const { count, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Abrir carrinho"
      className="fixed right-4 bottom-24 z-50 flex items-center gap-2 rounded-full bg-brand-red px-5 py-4 text-primary-foreground shadow-xl shadow-brand-red/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red-dark sm:right-5 sm:bottom-28"
    >
      <ShoppingBag className="h-5 w-5" />
      <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase">
        Carrinho
      </span>
      {count > 0 && (
        <span className="grid h-6 min-w-6 place-items-center rounded-full bg-cream px-1.5 text-xs font-semibold text-brand-red">
          {count}
        </span>
      )}
    </button>
  );
}

export function CartSheet() {
  const { items, subtotal, open, setOpen, increment, decrement, remove, clear } =
    useCart();
  const [info, setInfo] = useState<DeliveryInfo>(emptyDelivery);
  const [error, setError] = useState<string | null>(null);

  const fee = info.mode === "delivery" ? DELIVERY_FEE : 0;
  const total = subtotal + (items.length ? fee : 0);
  const set = (k: keyof DeliveryInfo) => (v: string) =>
    setInfo((p) => ({ ...p, [k]: v }) as DeliveryInfo);

  function finish() {
    if (!items.length) return;
    if (!info.name.trim() || !info.phone.trim()) {
      setError("Informe seu nome e telefone.");
      return;
    }
    if (
      info.mode === "delivery" &&
      (!info.street.trim() || !info.number.trim() || !info.district.trim())
    ) {
      setError("Preencha rua, número e bairro para a entrega.");
      return;
    }
    setError(null);
    window.open(checkoutLink(items, info, subtotal), "_blank", "noreferrer");
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 border-border bg-cream p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="flex items-center gap-2 font-serif text-xl text-brand-red">
            <ShoppingBag className="h-5 w-5" /> Seu pedido
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Seu carrinho está vazio. Escolha uma pizza ou bebida para começar.
            </p>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li
                  key={i.id}
                  className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/70 p-3.5"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium tracking-wide text-forest uppercase">
                      {i.name}
                    </p>
                    {i.detail && (
                      <p className="text-xs text-muted-foreground">{i.detail}</p>
                    )}
                    <p className="mt-1 font-serif text-base text-brand-red">
                      {formatBRL(i.unitPrice * i.qty)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      aria-label="Diminuir"
                      onClick={() => decrement(i.id)}
                      className="grid h-7 w-7 place-items-center rounded-full border border-border text-forest hover:bg-forest hover:text-cream"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-5 text-center text-sm text-forest">
                      {i.qty}
                    </span>
                    <button
                      aria-label="Aumentar"
                      onClick={() => increment(i.id)}
                      className="grid h-7 w-7 place-items-center rounded-full border border-border text-forest hover:bg-forest hover:text-cream"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      aria-label="Remover"
                      onClick={() => remove(i.id)}
                      className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground hover:text-brand-red"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <div className="mt-7">
              <div className="flex gap-2">
                {(["delivery", "retirada"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setInfo((p) => ({ ...p, mode: m }))}
                    className={`flex-1 rounded-full border px-4 py-2.5 text-[0.65rem] font-medium tracking-[0.16em] uppercase transition-colors ${
                      info.mode === m
                        ? "border-brand-red bg-brand-red text-primary-foreground"
                        : "border-border text-forest hover:border-brand-red/40"
                    }`}
                  >
                    {m === "delivery" ? "Entrega" : "Retirada"}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Field
                  label="Nome"
                  value={info.name}
                  onChange={set("name")}
                  placeholder="Seu nome"
                />
                <Field
                  label="Telefone"
                  value={info.phone}
                  onChange={set("phone")}
                  placeholder="(11) 90000-0000"
                />
                {info.mode === "delivery" && (
                  <>
                    <Field
                      label="Rua"
                      value={info.street}
                      onChange={set("street")}
                      placeholder="Rua / Av."
                      className="col-span-2"
                    />
                    <Field
                      label="Número"
                      value={info.number}
                      onChange={set("number")}
                    />
                    <Field
                      label="Complemento"
                      value={info.complement}
                      onChange={set("complement")}
                      placeholder="Apto / bloco"
                    />
                    <Field
                      label="Bairro"
                      value={info.district}
                      onChange={set("district")}
                      className="col-span-2"
                    />
                    <Field
                      label="Ponto de referência"
                      value={info.reference}
                      onChange={set("reference")}
                      className="col-span-2"
                    />
                  </>
                )}
                <div className="col-span-2">
                  <span className="text-[0.62rem] font-medium tracking-[0.16em] text-forest-light uppercase">
                    Pagamento
                  </span>
                  <div className="mt-1.5 flex gap-2">
                    {(["Pix", "Cartão", "Dinheiro"] as const).map((p) => (
                      <button
                        key={p}
                        onClick={() => setInfo((s) => ({ ...s, payment: p }))}
                        className={`flex-1 rounded-xl border px-3 py-2 text-xs transition-colors ${
                          info.payment === p
                            ? "border-forest bg-forest text-cream"
                            : "border-border text-forest hover:border-forest/40"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <Field
                  label="Observações"
                  value={info.notes}
                  onChange={set("notes")}
                  placeholder="Sem cebola, troco para R$ 100..."
                  className="col-span-2"
                />
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border bg-card/60 px-5 py-4">
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>{formatBRL(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>{info.mode === "delivery" ? "Entrega" : "Retirada"}</span>
                <span>{fee ? formatBRL(fee) : "Grátis"}</span>
              </div>
              <div className="flex justify-between pt-1 font-serif text-lg text-brand-red">
                <span>Total</span>
                <span>{formatBRL(total)}</span>
              </div>
            </div>

            {error && <p className="mt-2 text-xs text-brand-red">{error}</p>}

            <button
              onClick={finish}
              className="mt-3 w-full rounded-full bg-brand-red px-6 py-4 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-brand-red-dark"
            >
              Enviar pedido pelo WhatsApp
            </button>
            <button
              onClick={clear}
              className="mt-2 flex w-full items-center justify-center gap-1.5 py-2 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase hover:text-brand-red"
            >
              <X className="h-3.5 w-3.5" /> Limpar carrinho
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
