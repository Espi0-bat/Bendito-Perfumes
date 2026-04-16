export const SITE_CONFIG = {
  brandDetails: {
    nome: "Bendito Perfume",
    slogan: "A Assinatura Olfativa do Sucesso",
    location: "Est. Brasília · Coleção MMXXV"
  },
  contact: {
    whatsapp: "556199999999",
    whatsappMessage: "Olá, gostaria de uma consultoria de fragrância personalizada.",
  },
  links: {
    instagram: "https://instagram.com/benditoperfume",
    catalogo: "#"
  },
  tracking: {
    // Pixelry Conversion Tracking Wrapper
    trackClick: (action, label = '') => {
      console.log(`%c[TRACKING: Conversão] %c${action} %c${label}`, 
        'color: #D4AF37; font-weight: bold;', 
        'color: #fff;', 
        'color: #aaa;'
      );
      // fbq('trackCustom', action, { content_name: label });
      // gtag('event', action, { event_category: 'Conversão', event_label: label });
    }
  }
};

export const PRODUCTS = [
  {
    number: 1, label: "NO. 01",
    name: "Creed Aventus",
    family: "Amadeirado Frutado",
    profile: "A fragrância do poder executivo. Fumado, audacioso, memorável — para quem lidera reuniões e não apenas as frequenta.",
    notes: ["Cassis", "Bétula Defumada", "Musgo de Carvalho", "Âmbar"],
  },
  {
    number: 2, label: "NO. 02",
    name: "Tom Ford Oud Wood",
    family: "Oriental Amadeirado",
    profile: "Oud raro, sândalo e cardamomo. Uma declaração silenciosa de autoridade que atravessa qualquer sala.",
    notes: ["Oud", "Sândalo", "Cardamomo", "Vetiver"],
  },
  {
    number: 3, label: "NO. 03",
    name: "Parfums de Marly Layton",
    family: "Floral Aromático",
    profile: "Elegância francesa em estado puro. Bergamota e notas florais que constroem presença sem esforço aparente.",
    notes: ["Maçã", "Bergamota", "Jasmim", "Baunilha"],
  },
  {
    number: 4, label: "NO. 04",
    name: "Lattafa Asad",
    family: "Especiado Oriental",
    profile: "Intensidade que negocia antes de você. Para executivos que transformam cada encontro em legado.",
    notes: ["Âmbar", "Couro", "Patchouli", "Sândalo"],
  },
];

export const SCENTS = [
  { label: "Amadeirado",  pct: 85, descriptor: "— Prestígio · Autoridade · Permanência" },
  { label: "Couro",       pct: 72, descriptor: "— Poder · Masculinidade Refinada · Status" },
  { label: "Especiado",   pct: 68, descriptor: "— Carisma · Intriga · Memorabilidade" },
  { label: "Oriental",    pct: 60, descriptor: "— Mistério · Profundidade · Sedução" },
  { label: "Cítrico Nobre", pct: 44, descriptor: "— Frescor · Distinção · Dinamismo" },
];
