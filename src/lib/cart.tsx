import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { WHATSAPP_NUMBER } from "@/lib/brandi";

export type CartItem = {
  id: string;
  name: string;
  detail?: string;
  unitPrice: number;
  qty: number;
};

export type DeliveryInfo = {
  mode: "delivery" | "retirada";
  name: string;
  phone: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  reference: string;
  payment: "Pix" | "Cartão" | "Dinheiro";
  notes: string;
};

export const DELIVERY_FEE = 8;

export const emptyDelivery: DeliveryInfo = {
  mode: "delivery",
  name: "",
  phone: "",
  street: "",
  number: "",
  complement: "",
  district: "",
  reference: "",
  payment: "Pix",
  notes: "",
};

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function parseBRL(price: string) {
  const digits = price.replace(/[^\d,]/g, "").replace(",", ".");
  const n = Number.parseFloat(digits);
  return Number.isFinite(n) ? n : 0;
}

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "brandi-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
    return {
      items,
      count: items.reduce((s, i) => s + i.qty, 0),
      subtotal,
      open,
      setOpen,
      add: (item, qty = 1) => {
        setItems((prev) => {
          const found = prev.find((p) => p.id === item.id);
          if (found)
            return prev.map((p) =>
              p.id === item.id ? { ...p, qty: p.qty + qty } : p,
            );
          return [...prev, { ...item, qty }];
        });
        setOpen(true);
      },
      increment: (id) =>
        setItems((prev) =>
          prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)),
        ),
      decrement: (id) =>
        setItems((prev) =>
          prev
            .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
            .filter((p) => p.qty > 0),
        ),
      remove: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      clear: () => setItems([]),
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}

export function buildOrderMessage(
  items: CartItem[],
  info: DeliveryInfo,
  subtotal: number,
) {
  const fee = info.mode === "delivery" ? DELIVERY_FEE : 0;
  const lines = [
    "*Novo pedido — Brandi Pizzerie*",
    "",
    ...items.map(
      (i) =>
        `• ${i.qty}x ${i.name}${i.detail ? ` (${i.detail})` : ""} — ${formatBRL(
          i.unitPrice * i.qty,
        )}`,
    ),
    "",
    `Subtotal: ${formatBRL(subtotal)}`,
    info.mode === "delivery"
      ? `Taxa de entrega: ${formatBRL(fee)}`
      : "Retirada no local",
    `*Total: ${formatBRL(subtotal + fee)}*`,
    "",
    `Nome: ${info.name}`,
    `Telefone: ${info.phone}`,
    `Pagamento: ${info.payment}`,
  ];

  if (info.mode === "delivery") {
    lines.push(
      `Endereço: ${info.street}, ${info.number}${
        info.complement ? ` - ${info.complement}` : ""
      }`,
      `Bairro: ${info.district}`,
    );
    if (info.reference) lines.push(`Referência: ${info.reference}`);
  }
  if (info.notes) lines.push(`Observações: ${info.notes}`);

  return lines.join("\n");
}

export function checkoutLink(
  items: CartItem[],
  info: DeliveryInfo,
  subtotal: number,
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildOrderMessage(items, info, subtotal),
  )}`;
}
