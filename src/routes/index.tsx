import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  Instagram,
  MapPin,
  Phone,
  Quote,
  Star,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

import { Header } from "@/components/brandi/Header";
import { Footer } from "@/components/brandi/Footer";
import { WhatsAppFab } from "@/components/brandi/WhatsAppFab";
import { PizzaDialog } from "@/components/brandi/PizzaDialog";
import { FlavorsSection } from "@/components/brandi/FlavorsSection";
import { CartButton, CartSheet } from "@/components/brandi/CartSheet";
import { CartProvider, parseBRL, useCart } from "@/lib/cart";


import heroPizza from "@/assets/hero-pizza.jpg";
import heroPizzaWide from "@/assets/hero-pizza-wide.jpg";
import ovenPizza from "@/assets/oven-pizza.jpg";
import {
  alcoholicDrinks,
  drinks,
  featured,
  INSTAGRAM,
  PHONES,
  pizzas,
  sweetPizzas,
  whatsappLink,
  WHATSAPP_DISPLAY,
  type Pizza,
} from "@/lib/brandi";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brandi Pizzerie — Pizza artesanal e tradição italiana" },
      {
        name: "description",
        content:
          "Pizzas artesanais da Brandi Pizzerie: ingredientes selecionados, massa artesanal e pedidos pelo WhatsApp. Veja o cardápio, horários de salão e delivery.",
      },
      { property: "og:title", content: "Brandi Pizzerie — Pizza artesanal" },
      {
        property: "og:description",
        content:
          "Sabores especiais, ingredientes selecionados e o cuidado de uma pizzaria artesanal. Peça pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {eyebrow && <span className="eyebrow text-forest-light">{eyebrow}</span>}
      <h2 className="mt-3 font-serif text-3xl tracking-wide text-brand-red uppercase sm:text-4xl">
        {title}
      </h2>
      <div className="rule-italy mt-4" />
    </div>
  );
}

function MenuRow({
  pizza,
  onSelect,
}: {
  pizza: Pizza;
  onSelect: (p: Pizza) => void;
}) {
  return (
    <button
      onClick={() => onSelect(pizza)}
      className="group block w-full text-left"
    >
      <div className="flex items-baseline">
        <span className="text-sm font-medium tracking-[0.12em] text-brand-red transition-colors group-hover:text-brand-red-dark">
          {pizza.name}
        </span>
        <span className="dotted-lead" />
        <span className="font-serif text-base text-forest">{pizza.price}</span>
      </div>
      <p className="mt-1.5 max-w-md text-[0.82rem] leading-relaxed text-muted-foreground">
        {pizza.description}
      </p>
    </button>
  );
}

function Index() {
  return (
    <CartProvider>
      <IndexContent />
    </CartProvider>
  );
}

function IndexContent() {
  const [selected, setSelected] = useState<Pizza | null>(null);
  const { add } = useCart();


  return (
    <div className="min-h-screen border-l-0 bg-cream lg:border-l-[10px] lg:border-forest">
      <Header />

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-[340px] overflow-hidden sm:min-h-[420px] md:min-h-[560px] lg:min-h-[720px]"
      >
        <div className="relative mx-auto grid h-full max-w-[1400px] grid-cols-2 items-center gap-0">
          <div className="relative z-10 px-4 py-8 sm:py-12 md:py-16 lg:py-24 lg:pl-8 lg:pr-14">
            <span className="eyebrow text-[0.55rem] text-forest-light sm:text-xs">
              Pizzeria artesanal
            </span>
            <h1 className="mt-3 font-serif text-[1.35rem] leading-[1.1] text-forest-deep sm:text-3xl md:text-[2.4rem] lg:text-[3.7rem]">
              Uma pizza feita para
              <br />
              <em className="italic">ser lembrada.</em>
            </h1>
            <div className="rule-italy mt-4 lg:mt-6" />
            <p className="mt-4 max-w-md text-[0.72rem] leading-relaxed text-muted-foreground sm:text-sm lg:mt-6 lg:text-[0.95rem]">
              Sabores especiais, ingredientes selecionados e o cuidado de uma
              pizzaria que transforma cada pizza em uma experiência.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 sm:gap-4 lg:mt-9">
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 bg-brand-red px-4 py-3 text-[0.6rem] font-medium tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-brand-red-dark sm:px-7 sm:py-4 sm:text-[0.7rem] sm:tracking-[0.2em]"
              >
                Ver cardápio <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-forest px-4 py-3 text-[0.6rem] font-medium tracking-[0.16em] text-forest uppercase transition-colors hover:bg-forest hover:text-cream sm:px-7 sm:py-4 sm:text-[0.7rem] sm:tracking-[0.2em]"
              >
                Pedir online
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 w-1/2">
          <img
            src={heroPizzaWide}
            alt="Pizza margherita artesanal da Brandi Pizzerie"
            width={1280}
            height={1600}
            className="h-full w-full object-cover object-center"
          />
          {/* fades suaves em todas as bordas para integrar a foto ao fundo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-cream to-transparent sm:w-20 lg:w-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-cream to-transparent md:h-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-cream to-transparent md:h-28"
          />
        </div>
      </section>


      {/* SOBRE */}
      <section id="sobre" className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="lg:pr-16">
            <span className="eyebrow text-forest-light">A casa</span>
            <h2 className="mt-4 font-serif text-3xl tracking-[0.06em] text-forest-deep uppercase sm:text-4xl">
              Brandi Pizzerie
            </h2>
            <div className="rule-italy mt-5" />
            <p className="mt-7 max-w-xl font-serif text-xl leading-relaxed text-forest italic sm:text-2xl">
              “Uma experiência que começa na escolha dos ingredientes e termina
              no primeiro pedaço.”
            </p>
          </div>
          <div className="relative">
            <img
              src={ovenPizza}
              alt="Pizza artesanal saindo do forno a lenha"
              loading="lazy"
              width={1008}
              height={1200}
              className="h-[420px] w-full object-cover lg:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-4 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr]">
            <div className="border-l-2 border-forest-light pl-6">
              <h2 className="font-serif text-2xl tracking-[0.08em] text-forest-deep uppercase">
                Nosso
              </h2>
              <h2 className="font-serif text-4xl tracking-[0.04em] text-brand-red uppercase">
                Cardápio
              </h2>
              <p className="mt-5 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                Pizzas artesanais para todos os momentos.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.2em] text-brand-red uppercase hover:text-brand-red-dark"
              >
                Pedir online <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div>
              <h3 className="eyebrow text-forest-light">Pizzas salgadas</h3>
              <div className="mt-7 grid gap-x-14 gap-y-8 md:grid-cols-2">
                {pizzas.map((p) => (
                  <MenuRow key={p.name} pizza={p} onSelect={setSelected} />
                ))}
              </div>

              <h3 className="eyebrow mt-14 text-forest-light">Pizza doce</h3>
              <div className="mt-7 grid gap-x-14 gap-y-8 md:grid-cols-2">
                {sweetPizzas.map((p) => (
                  <MenuRow key={p.name} pizza={p} onSelect={setSelected} />
                ))}
              </div>
              <p className="mt-8 text-xs text-muted-foreground">
                Toque em uma pizza para ver detalhes e pedir pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-20 lg:px-8 lg:py-24">
          <SectionTitle eyebrow="Feitas à mão" title="Pizzas em destaque" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <button
                key={p.name}
                onClick={() => setSelected(p)}
                className="group border border-border bg-card text-left transition-shadow hover:shadow-md"
              >
                <img
                  src={p.image}
                  alt={`Pizza ${p.name}`}
                  loading="lazy"
                  width={928}
                  height={720}
                  className="h-44 w-full object-cover"
                />
                <div className="px-5 py-6 text-center">
                  <h3 className="text-sm font-medium tracking-[0.14em] text-brand-red">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {p.short}
                  </p>
                  <p className="mt-4 font-serif text-lg text-forest">
                    {p.price}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative overflow-hidden bg-forest-deep">
        <img
          src={heroPizza}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute -top-16 -left-24 hidden h-72 w-72 rounded-full object-cover opacity-25 lg:block"
        />
        <img
          src={heroPizza}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute -right-24 -bottom-16 hidden h-72 w-72 rounded-full object-cover opacity-25 lg:block"
        />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-6 px-4 py-14 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="font-serif text-3xl text-cream sm:text-4xl">
              Seu próximo pedaço começa aqui.
            </h2>
            <p className="mt-3 text-sm text-cream/70">
              Escolha sua pizza e peça pelo WhatsApp.
            </p>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 bg-brand-red px-8 py-4 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-brand-red-dark"
          >
            Pedir agora <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* HORÁRIOS */}
      <section id="horarios" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-20 lg:px-8 lg:py-24">
          <SectionTitle eyebrow="Funcionamento" title="Salão e Delivery" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-brand-red" />
                <h3 className="text-sm font-medium tracking-[0.18em] text-brand-red uppercase">
                  Delivery
                </h3>
              </div>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-forest">Quarta, quinta e domingo</dt>
                  <dd className="font-serif text-lg text-muted-foreground">
                    18h às 23h
                  </dd>
                </div>
                <div>
                  <dt className="text-forest">Sextas e sábados</dt>
                  <dd className="font-serif text-lg text-muted-foreground">
                    18h às 23h30
                  </dd>
                </div>
              </dl>
            </div>

            <div className="border border-border bg-forest p-8 text-cream">
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="h-5 w-5 text-cream" />
                <h3 className="text-sm font-medium tracking-[0.18em] uppercase">
                  Salão
                </h3>
              </div>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt>Sextas, sábados e domingos</dt>
                  <dd className="font-serif text-lg text-cream/75">
                    18h às 23h
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <FlavorsSection />



      {/* BEBIDAS */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-4 py-20 lg:px-8 lg:py-24">
          <SectionTitle eyebrow="Para acompanhar" title="Bebidas" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-x-16 gap-y-12 md:grid-cols-2">
            <div>
              <h3 className="eyebrow text-forest-light">Sem álcool</h3>
              <ul className="mt-6 space-y-2.5">
                {drinks.map((d) => (
                  <li key={d.name} className="flex items-center gap-3 text-sm">
                    <span className="text-forest">{d.name}</span>
                    <span className="dotted-lead" />
                    <span className="font-serif whitespace-nowrap text-forest">
                      {d.price}
                    </span>
                    <button
                      aria-label={`Adicionar ${d.name}`}
                      onClick={() =>
                        add({
                          id: `bebida-${d.name}`,
                          name: d.name,
                          detail: "Bebida",
                          unitPrice: parseBRL(d.price),
                        })
                      }
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-forest transition-colors hover:border-brand-red hover:bg-brand-red hover:text-primary-foreground"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow text-forest-light">Bebidas alcoólicas</h3>
              <ul className="mt-6 space-y-2.5">
                {alcoholicDrinks.map((d) => (
                  <li key={d.name} className="flex items-center gap-3 text-sm">
                    <span className="text-forest">{d.name}</span>
                    <span className="dotted-lead" />
                    <span className="font-serif whitespace-nowrap text-forest">
                      {d.price}
                    </span>
                    {parseBRL(d.price) > 0 && (
                      <button
                        aria-label={`Adicionar ${d.name}`}
                        onClick={() =>
                          add({
                            id: `bebida-${d.name}`,
                            name: d.name,
                            detail: "Bebida",
                            unitPrice: parseBRL(d.price),
                          })
                        }
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-forest transition-colors hover:border-brand-red hover:bg-brand-red hover:text-primary-foreground"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-20 lg:px-8 lg:py-24">
          <SectionTitle
            eyebrow="Depoimentos"
            title="Quem experimenta, recomenda"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Juliana Martins",
                text: "A massa é leve, bem assada e os ingredientes são super frescos. A Margherita da Brandi virou a pizza favorita da nossa família.",
              },
              {
                name: "Rafael Andrade",
                text: "Pedi pelo WhatsApp e chegou quentinha, no horário e muito bem embalada. Atendimento atencioso do começo ao fim.",
              },
              {
                name: "Camila Ferreira",
                text: "Jantamos no salão e foi ótimo: ambiente aconchegante, pizza artesanal de verdade e um sabor que a gente lembra depois.",
              },
            ].map((r) => (
              <figure
                key={r.name}
                className="border border-border bg-card p-8 text-center"
              >
                <Quote className="mx-auto h-6 w-6 text-brand-red/40" />
                <div className="mt-4 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-3.5 w-3.5 fill-brand-red text-brand-red"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-sm leading-relaxed text-muted-foreground italic">
                  “{r.text}”
                </blockquote>
                <figcaption className="eyebrow mt-5 text-forest-light">
                  {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO / CONTATO */}
      <section
        id="localizacao"
        className="border-t border-border bg-card"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-20 lg:px-8 lg:py-24">
          <SectionTitle eyebrow="Localização e contato" title="Venha conhecer a Brandi" />
          <div id="contato" className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="eyebrow text-forest-light">WhatsApp</h3>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block font-serif text-2xl text-brand-red hover:text-brand-red-dark"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div>
                <h3 className="eyebrow text-forest-light">Telefones</h3>
                <ul className="mt-2 space-y-1">
                  {PHONES.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 font-serif text-lg text-forest"
                    >
                      <Phone className="h-4 w-4 text-brand-red" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow text-forest-light">Instagram</h3>
                <a
                  href="https://instagram.com/brandipizzerie"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-serif text-lg text-forest hover:text-brand-red"
                >
                  <Instagram className="h-4 w-4 text-brand-red" /> {INSTAGRAM}
                </a>
              </div>
              <div>
                <h3 className="eyebrow text-forest-light">Endereço</h3>
                <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  [Endereço a ser informado — espaço reservado para preenchimento
                  posterior]
                </p>
              </div>
            </div>

            <div className="flex min-h-[300px] items-center justify-center border border-dashed border-border bg-muted p-8 text-center">
              <p className="text-xs text-muted-foreground">
                [Espaço reservado para o mapa do Google Maps — será inserido
                quando o endereço for confirmado]
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
      <PizzaDialog pizza={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
