import pizzaBrandi from "@/assets/pizza-brandi.jpg";
import pizzaPalermo from "@/assets/pizza-palermo.jpg";
import pizzaVeneza from "@/assets/pizza-veneza.jpg";
import pizzaPisa from "@/assets/pizza-pisa.jpg";
import heroPizza from "@/assets/hero-pizza.jpg";

export const WHATSAPP_NUMBER = "5511942133516";
export const WHATSAPP_DISPLAY = "(11) 94213-3516";
export const PHONES = ["(11) 5533-0123", "(11) 5533-7077"];
export const INSTAGRAM = "@brandipizzerie";

export function whatsappLink(message?: string) {
  const text =
    message ?? "Olá, Brandi Pizzerie! Gostaria de fazer um pedido.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function pizzaLink(name: string) {
  return whatsappLink(
    `Olá, Brandi Pizzerie! Gostaria de pedir a pizza ${name}.`,
  );
}

export type Pizza = {
  name: string;
  price: string;
  short: string;
  description: string;
  image: string;
  sweet?: boolean;
};

export const pizzas: Pizza[] = [
  {
    name: "BRANDI",
    price: "R$ 60,00",
    short: "Presunto Royale trançado, Catupiry® e cebola roxa",
    description:
      "Mozzarella speciale, finas fatias de presunto Royale trançado, recheado com Catupiry® e coberto com rodelas de cebola roxa, salpicada com orégano e azeitonas sem caroço.",
    image: pizzaBrandi,
  },
  {
    name: "GREGA",
    price: "R$ 55,00",
    short: "Beringela temperada, tomate e cebola roxa",
    description:
      "Mozzarella speciale, beringela temperada, coberta com pedaços de tomate, rodelas de cebola roxa, salpicada com queijo parmesão, orégano e azeitonas sem caroço.",
    image: pizzaVeneza,
  },
  {
    name: "MARGHERITA",
    price: "R$ 55,00",
    short: "Tomate em rodelas e manjericão fresco",
    description:
      "Mozzarella speciale, rodelas de tomate salpicada com manjericão fresco, orégano e azeitonas sem caroço.",
    image: heroPizza,
  },
  {
    name: "PALERMO",
    price: "R$ 65,00",
    short: "Pepperoni gourmet e pimentões coloridos",
    description:
      "Mozzarella speciale, finas rodelas de pepperoni gourmet, tiras de pimentão verde, vermelho e amarelo, salpicada com parmesão, orégano e azeitonas sem caroço.",
    image: pizzaPalermo,
  },
  {
    name: "PARIS",
    price: "R$ 65,00",
    short: "Queijo Brie, geleia de pimenta e damasco",
    description:
      "Queijo Brie, geleia de pimenta e pedacinhos de damasco.",
    image: pizzaPisa,
  },
  {
    name: "PISA",
    price: "R$ 65,00",
    short: "Búfala, alcachofra e presunto parma",
    description:
      "Mozzarella de búfala, pedaços de alcachofra, finas fatias de presunto parma, salpicada de manjericão fresco, orégano e azeitonas sem caroço.",
    image: pizzaPisa,
  },
  {
    name: "VENEZA",
    price: "R$ 60,00",
    short: "Búfala, tomate seco e rúcula fresca",
    description:
      "Mozzarella de búfala, tomates secos, coberta com rúcula fresca, salpicada com orégano e azeitonas sem caroço.",
    image: pizzaVeneza,
  },
  {
    name: "VIA ÁPPIA",
    price: "R$ 62,00",
    short: "Calabresa em fatias finas e palmito",
    description:
      "Mozzarella speciale, coberta com finas fatias de calabresa, pedaços de palmito, salpicada com parmesão, orégano e azeitonas sem caroço.",
    image: pizzaBrandi,
  },
  {
    name: "ZUCCHINI",
    price: "R$ 55,00",
    short: "Abobrinha grelhada e Polenguinho",
    description:
      "Mozzarella speciale, coberta com fatias de abobrinha grelhada no azeite, pedaços de queijo Polenguinho, salpicada com parmesão, orégano e azeitonas sem caroço.",
    image: pizzaVeneza,
  },
];

export const sweetPizzas: Pizza[] = [
  {
    name: "BELA",
    price: "R$ 37,00",
    short: "Banana flambada com conhaque e canela",
    description:
      "Pedaços de banana dourados com açúcar, flambada com conhaque e polvilhada com canela.",
    image: pizzaPisa,
    sweet: true,
  },
];

export const featured = ["BRANDI", "PALERMO", "PISA", "VENEZA"]
  .map((n) => pizzas.find((p) => p.name === n)!)
  .filter(Boolean);

export const drinks = [
  { name: "Água 500ml", price: "R$ 5,00" },
  { name: "Água com gás 500ml", price: "R$ 5,00" },
  { name: "Guaraná lata 350ml", price: "R$ 7,00" },
  { name: "Guaraná Zero lata 350ml", price: "R$ 7,00" },
  { name: "Coca-Cola lata 350ml", price: "R$ 7,00" },
  { name: "Coca-Cola Zero lata 350ml", price: "R$ 7,00" },
  { name: "Schweppes lata 350ml", price: "R$ 7,00" },
  { name: "Schweppes Zero lata 350ml", price: "R$ 7,00" },
  { name: "Coca-Cola KS 290ml", price: "R$ 5,00" },
  { name: "Coca-Cola Zero KS 290ml", price: "R$ 5,00" },
  { name: "Fanta KS 290ml", price: "R$ 5,00" },
  { name: "Fanta Uva KS 290ml", price: "R$ 5,00" },
  { name: "Sprite KS 290ml", price: "R$ 5,00" },
];

export const alcoholicDrinks = [
  { name: "Cerveja Therezópolis Gold Long Neck 355ml", price: "R$ 9,00" },
  { name: "Cerveja Heineken Long Neck 355ml", price: "R$ 14,00" },
  { name: "Cerveja Stella Artois Long Neck 355ml", price: "R$ 12,00" },
  { name: "Vinhos", price: "a consultar" },
];

export const navLinks = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "CARDÁPIO", href: "#cardapio" },
  { label: "SOBRE", href: "#sobre" },
  { label: "LOCALIZAÇÃO", href: "#localizacao" },
  { label: "SALÃO", href: "#horarios" },
  { label: "DELIVERY", href: "#horarios" },
  { label: "CONTATO", href: "#contato" },
];