import { motion } from "framer-motion";
import { Pizza as PizzaIcon, Plus, Ruler } from "lucide-react";

import {
  flavorPhoto,
  flavorPrices,
  gourmetFlavors,
  sizes,
  sweetFlavors,
  traditionalFlavors,
  type Flavor,
  type SizeName,
} from "@/lib/brandi";
import { formatBRL, useCart } from "@/lib/cart";

function FlavorCard({
  flavor,
  index,
  kind,
}: {
  flavor: Flavor;
  index: number;
  kind: "savory" | "sweet";
}) {
  const { add } = useCart();
  const prices = flavorPrices[kind];
  const photo = flavorPhoto(flavor.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.05 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-sm ring-1 ring-white/40 backdrop-blur-md transition-shadow hover:border-brand-red/40 hover:shadow-xl"
    >
      {photo && (
        <img
          src={photo}
          alt={`Pizza ${flavor.name}`}
          loading="lazy"
          className="h-48 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest/10 text-forest transition-colors group-hover:bg-brand-red/10 group-hover:text-brand-red">
          <PizzaIcon className="h-4 w-4" />
        </span>
        <h3 className="min-w-0 truncate text-sm font-medium tracking-[0.16em] text-brand-red uppercase">
          {flavor.name}
        </h3>
      </div>

      <ul className="mt-4 space-y-1.5">
        {flavor.ingredients.map((i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[0.82rem] leading-relaxed text-muted-foreground"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-forest-light" />
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-5 grid gap-2 border-t border-border/70 pt-4 sm:grid-cols-2">
        {(Object.keys(prices) as SizeName[]).map((size) => (
          <button
            key={size}
            onClick={() =>
              add({
                id: `${flavor.name}-${size}`,
                name: `Pizza ${flavor.name}`,
                detail: size,
                unitPrice: prices[size],
              })
            }
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-[0.68rem] font-medium tracking-[0.1em] text-forest uppercase transition-colors hover:border-brand-red hover:bg-brand-red hover:text-primary-foreground"
          >
            <Plus className="h-3.5 w-3.5" /> {size} {formatBRL(prices[size])}
          </button>
        ))}
      </div>
    </motion.div>
  );
}


export function FlavorsSection() {
  return (
    <section id="sabores" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-4 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow text-forest-light">Delivery e salão</span>
          <h2 className="mt-3 font-serif text-3xl tracking-wide text-brand-red uppercase sm:text-4xl">
            Sabores de pizza
          </h2>
          <div className="rule-italy mt-4" />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Todos os nossos sabores artesanais. Toque em um card para pedir pelo
            WhatsApp.
          </p>
        </div>

        <h3 className="eyebrow mt-14 text-forest-light">
          🍕 Pizzas tradicionais
        </h3>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {traditionalFlavors.map((f, i) => (
            <FlavorCard key={f.name} flavor={f} index={i} kind="savory" />
          ))}
        </div>

        <h3 className="eyebrow mt-16 text-forest-light">
          ⭐ Pizzas gourmet
        </h3>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gourmetFlavors.map((f, i) => (
            <FlavorCard key={f.name} flavor={f} index={i} kind="savory" />
          ))}
        </div>

        <h3 className="eyebrow mt-16 text-forest-light">🍫 Pizzas doces</h3>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sweetFlavors.map((f, i) => (
            <FlavorCard key={f.name} flavor={f} index={i} kind="sweet" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 grid max-w-2xl gap-5 rounded-2xl border border-border/70 bg-forest/5 p-8 ring-1 ring-white/40 backdrop-blur-md sm:grid-cols-2"
        >
          <div className="sm:col-span-2 flex items-center gap-3">
            <Ruler className="h-5 w-5 text-brand-red" />
            <h3 className="text-sm font-medium tracking-[0.18em] text-brand-red uppercase">
              Tamanhos
            </h3>
          </div>
          {sizes.map((s) => (
            <div key={s.name} className="flex items-baseline">
              <span className="text-sm text-forest">{s.name}</span>
              <span className="dotted-lead" />
              <span className="font-serif text-lg whitespace-nowrap text-muted-foreground">
                {s.detail}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
