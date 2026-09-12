import pizzaBrandi from "@/assets/pizza-brandi.jpg";
import pizzaPalermo from "@/assets/pizza-palermo.jpg";
import pizzaVeneza from "@/assets/pizza-veneza.jpg";
import pizzaPisa from "@/assets/pizza-pisa.jpg";

import fotoAtum from "@/assets/Atum.webp.asset.json";
import fotoBambino from "@/assets/Bambino.webp.asset.json";
import fotoBrandi from "@/assets/brandi.webp.asset.json";
import fotoCalabresa from "@/assets/calabresa.webp.asset.json";
import fotoCalzone from "@/assets/calzone.webp.asset.json";
import fotoCincoQueijos from "@/assets/5_queijos.webp.asset.json";
import fotoFlorenca from "@/assets/Florença.webp.asset.json";
import fotoGrega from "@/assets/Grega.webp.asset.json";
import fotoJaponesa from "@/assets/Japonesa.webp.asset.json";
import fotoMargherita from "@/assets/margherita.webp.asset.json";
import fotoParis from "@/assets/paris-pizza.webp.asset.json";
import fotoPompeia from "@/assets/Pompéia.webp.asset.json";
import fotoToscana from "@/assets/Toscana.webp.asset.json";
import fotoPisa from "@/assets/pisa.webp.asset.json";
import fotoMilano from "@/assets/milano.webp.asset.json";
import fotoPortuguesa from "@/assets/portuguesa.webp.asset.json";
import fotoQuattroStagioni from "@/assets/5_stagioni.webp.asset.json";
import fotoRavena from "@/assets/ravena.webp.asset.json";
import fotoRomana from "@/assets/romana.webp.asset.json";
import fotoEscarola from "@/assets/escarola.webp.asset.json";
import fotoMilhoVerde from "@/assets/milho_verde.webp.asset.json";
import fotoVeneza from "@/assets/veneza.webp.asset.json";
import fotoPalmito from "@/assets/palmito.webp.asset.json";
import fotoSensazione from "@/assets/sensazione.webp.asset.json";
import fotoZucchini from "@/assets/Zucchini.webp.asset.json";
import fotoMussarela from "@/assets/Mussarela.webp.asset.json";
import fotoNapolitana from "@/assets/Napolitana.webp.asset.json";
import fotoPassione from "@/assets/Passione.webp.asset.json";
import fotoPralina from "@/assets/Pralina.webp.asset.json";
import fotoVerona from "@/assets/Verona.webp.asset.json";
import fotoCalabria from "@/assets/Calábria.webp.asset.json";
import fotoViaAppia from "@/assets/Via_appia.webp.asset.json";
import fotoSiena from "@/assets/Siena.webp.asset.json";
import fotoPalermo from "@/assets/Palermo.webp.asset.json";

export function normalizeName(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export const flavorPhotos: Record<string, string> = {
  atum: fotoAtum.url,
  bambino: fotoBambino.url,
  brandi: fotoBrandi.url,
  calabresa: fotoCalabresa.url,
  calzone: fotoCalzone.url,
  "5 queijos": fotoCincoQueijos.url,
  florenca: fotoFlorenca.url,
  grega: fotoGrega.url,
  japonesa: fotoJaponesa.url,
  margherita: fotoMargherita.url,
  paris: fotoParis.url,
  pompeia: fotoPompeia.url,
  toscana: fotoToscana.url,
  pisa: fotoPisa.url,
  milano: fotoMilano.url,
  portuguesa: fotoPortuguesa.url,
  "quattro stagioni": fotoQuattroStagioni.url,
  ravena: fotoRavena.url,
  romana: fotoRomana.url,
  escarola: fotoEscarola.url,
  "milho verde": fotoMilhoVerde.url,
  veneza: fotoVeneza.url,
  palmito: fotoPalmito.url,
  sensazione: fotoSensazione.url,
  zucchini: fotoZucchini.url,
  mozzarella: fotoMussarela.url,
  napolitana: fotoNapolitana.url,
  passione: fotoPassione.url,
  pralina: fotoPralina.url,
  verona: fotoVerona.url,
  calabria: fotoCalabria.url,
  "via appia": fotoViaAppia.url,
  siena: fotoSiena.url,
  palermo: fotoPalermo.url,
};

export function flavorPhoto(name: string): string | undefined {
  return flavorPhotos[normalizeName(name)];
}


export const WHATSAPP_NUMBER = "5511942133516";
export const WHATSAPP_DISPLAY = "(11) 94213-3516";

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
    image: fotoBrandi.url,
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
    image: fotoMargherita.url,
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
    image: fotoParis.url,
  },
  {
    name: "PISA",
    price: "R$ 65,00",
    short: "Búfala, alcachofra e presunto parma",
    description:
      "Mozzarella de búfala, pedaços de alcachofra, finas fatias de presunto parma, salpicada de manjericão fresco, orégano e azeitonas sem caroço.",
    image: fotoPisa.url,
  },
  {
    name: "VENEZA",
    price: "R$ 60,00",
    short: "Búfala, tomate seco e rúcula fresca",
    description:
      "Mozzarella de búfala, tomates secos, coberta com rúcula fresca, salpicada com orégano e azeitonas sem caroço.",
    image: fotoVeneza.url,
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
export type Flavor = { name: string; ingredients: string[] };

export const traditionalFlavors: Flavor[] = [
  { name: "Atum", ingredients: ["Pedaços de atum no azeite", "Cebolas frescas", "Orégano", "Azeitonas sem caroço"] },
  { name: "Bambino", ingredients: ["Batata Ruffles", "Mozzarella especial", "Orégano", "Azeitonas sem caroço"] },
  { name: "Calabresa", ingredients: ["Calabresa", "Cebolas frescas", "Orégano", "Azeitonas sem caroço"] },
  { name: "Escarola", ingredients: ["Escarola refogada", "Filés de aliche", "Mozzarella especial", "Orégano", "Azeitonas sem caroço"] },
  { name: "Margherita", ingredients: ["Mozzarella especial", "Tomate", "Manjericão fresco", "Orégano", "Azeitonas sem caroço"] },
  { name: "Milho Verde", ingredients: ["Milho verde", "Mozzarella especial", "Orégano", "Azeitonas sem caroço"] },
  { name: "Mozzarella", ingredients: ["Mozzarella especial", "Orégano", "Azeitonas sem caroço"] },
  { name: "Napolitana", ingredients: ["Mozzarella especial", "Tomate", "Parmesão", "Orégano", "Azeitonas sem caroço"] },
  { name: "Palmito", ingredients: ["Palmito", "Mozzarella especial", "Orégano", "Azeitonas sem caroço"] },
  { name: "Portuguesa", ingredients: ["Presunto cozido", "Ervilhas", "Ovos picados", "Cebolas frescas", "Mozzarella especial", "Orégano", "Azeitonas sem caroço"] },
  { name: "Romana", ingredients: ["Mozzarella especial", "Tomate", "Filés de aliche", "Orégano", "Azeitonas sem caroço"] },
  { name: "Toscana", ingredients: ["Calabresa", "Alho frito", "Parmesão", "Orégano", "Azeitonas sem caroço"] },
];

export const gourmetFlavors: Flavor[] = [
  { name: "5 Queijos", ingredients: ["Catupiry", "Gorgonzola", "Provolone", "Mozzarella especial", "Parmesão", "Orégano", "Azeitonas sem caroço"] },
  { name: "Brandi", ingredients: ["Mozzarella especial", "Presunto Royale trançado", "Catupiry", "Cebola roxa", "Orégano", "Azeitonas sem caroço"] },
  { name: "Calábria", ingredients: ["Catupiry", "Calabresa", "Cebolas frescas", "Orégano", "Azeitonas sem caroço"] },
  { name: "Calzone", ingredients: ["Mozzarella especial", "Bacon", "Champignon"] },
  { name: "Florença", ingredients: ["Mozzarella especial", "Tomatinhos sweet grape", "Manjericão", "Orégano", "Azeitonas sem caroço"] },
  { name: "Grega", ingredients: ["Mozzarella especial", "Berinjela temperada", "Tomate", "Cebola roxa", "Parmesão", "Orégano", "Azeitonas sem caroço"] },
  { name: "Japonesa", ingredients: ["Shimeji salteado na manteiga", "Shoyu e sakê", "Mozzarella especial", "Orégano", "Azeitonas sem caroço"] },
  { name: "Milano", ingredients: ["Frango grelhado", "Catupiry", "Orégano", "Azeitonas sem caroço"] },
  { name: "Palermo", ingredients: ["Pepperoni gourmet", "Pimentão verde", "Pimentão vermelho", "Pimentão amarelo", "Parmesão", "Orégano", "Azeitonas sem caroço"] },
  { name: "Pompéia", ingredients: ["Mozzarella especial", "Presunto parma", "Rúcula", "Tomate seco", "Orégano", "Azeitonas sem caroço"] },
  { name: "Paris", ingredients: ["Queijo Brie", "Geleia de pimenta", "Damasco"] },
  { name: "Pisa", ingredients: ["Mozzarella de búfala", "Alcachofra", "Presunto Parma", "Manjericão fresco", "Orégano", "Azeitonas sem caroço"] },
  { name: "Quattro Stagioni", ingredients: ["Mozzarella especial", "Lombo canadense", "Pêssego", "Abacaxi", "Figo em calda"] },
  { name: "Ravena", ingredients: ["Lombinho fatiado", "Catupiry", "Tomate", "Alcaparra", "Parmesão", "Orégano", "Azeitonas sem caroço"] },
  { name: "Veneza", ingredients: ["Mozzarella de búfala", "Tomate seco", "Rúcula fresca", "Orégano", "Azeitonas sem caroço"] },
  { name: "Via Appia", ingredients: ["Mozzarella especial", "Calabresa", "Palmito", "Parmesão", "Orégano", "Azeitonas sem caroço"] },
  { name: "Zucchini", ingredients: ["Mozzarella especial", "Abobrinha grelhada", "Azeite", "Queijo Polenguinho", "Parmesão", "Orégano", "Azeitonas sem caroço"] },
];

export const sweetFlavors: Flavor[] = [
  { name: "Bela", ingredients: ["Banana", "Açúcar", "Flambada com conhaque", "Canela"] },
  { name: "Passione", ingredients: ["Chocolate ao leite", "Chocolate branco"] },
  { name: "Pralina", ingredients: ["Leite condensado", "Paçoca Amor", "Amendoim"] },
  { name: "Sensazione", ingredients: ["Massa crocante", "Chocolate ao leite", "Chocolate branco", "Geleia de morango"] },
  { name: "Siena", ingredients: ["Banana", "Chocolate ao leite"] },
  { name: "Verona", ingredients: ["Mozzarella especial", "Goiabada cremosa"] },
];

export const sizes = [
  { name: "Média", detail: "4 pedaços" },
  { name: "Família", detail: "8 pedaços" },
];

export type SizeName = "Média" | "Família";

export const flavorPrices: Record<"savory" | "sweet", Record<SizeName, number>> = {
  savory: { "Média": 45, "Família": 65 },
  sweet: { "Média": 37, "Família": 55 },
};
