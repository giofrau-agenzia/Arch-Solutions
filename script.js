const aree = [
  {
    name: "Isolamento Termico e Involucro",
    description: "Sistemi a cappotto certificati ETA, isolanti ad alte prestazioni e soluzioni per facciate ventilate.",
    companies: ["Dinova", "Isolcore", "Docchem"]
  },
  {
    name: "Pavimenti e Rivestimenti",
    description: "Vinilici, LVT, linoleum, parquet, laminati, pavimenti tessili e sopraelevati per ambiti residenziali, commerciali e contract.",
    companies: ["Tarkett"]
  },
  {
    name: "Resine e Superfici Tecniche",
    description: "Pavimenti e rivestimenti in resina, applicazioni industriali, alimentari e sanitarie.",
    companies: ["Pava Resine"]
  },
  {
    name: "Restauro Conservativo",
    description: "Pulizia, consolidamento e protezione dei materiali per edifici storici e monumentali.",
    companies: ["Opificio Bio Aedilitia", "Docchem"]
  },
  {
    name: "Serramenti e Sistemi Architettonici",
    description: "Porte per interni, porte blindate, sistemi filo muro e pareti divisorie.",
    companies: ["Albed", "Bauxt", "Sistemi RasoParete", "VetroIN"]
  },
  {
    name: "Impianti e Illuminazione",
    description: "Illuminazione tecnica, decorativa, urbana e architetturale per ambienti interni ed esterni.",
    companies: ["Kundalini", "Novolux", "Lorelux", "Letroh"]
  },
  {
    name: "Arredo e Contract",
    description: "Soluzioni per uffici, residenziale, hospitality e spazi commerciali. Comfort acustico, outdoor e sistemi modulari.",
    companies: [
      "Bralco",
      "Inclass",
      "Olivo & Groppo",
      "International Acoustic",
      "Edra",
      "Presotto",
      "Elmar",
      "Rexa Design",
      "Biba",
      "Elite To Be",
      "Extendo",
      "Mogg",
      "Inkiostro Bianco",
      "Fast",
      "Isimar",
      "Domino",
      "Skymatik"
    ]
  }
];

const companies = {
  "Dinova": {
    category: "Involucro & Efficienza Termica",
    specializzazione: "Sistemi a cappotto certificati ETA",
    soluzioni: ["Cappotti termici", "Rasanti", "Finiture", "Restauro facciate"],
    applicazioni: ["Condomini", "Edifici Pubblici", "Hospitality"],
    why: "Sistema completo e certificato per la riqualificazione energetica.",
    website: "https://dinovaitalia.it/"
  },
  "Isolcore": {
    category: "Involucro & Efficienza Termica",
    specializzazione: "Isolamento ad altissime prestazioni",
    soluzioni: ["Pannelli VIP", "Ponti termici", "Riduzione spessori"],
    applicazioni: ["Edifici storici", "Facciate", "Riqualificazione"],
    why: "Prestazioni elevate con minimo ingombro.",
    website: "https://www.isolcore.com"
  },
  "Docchem": {
    category: "Involucro & Efficienza Termica",
    specializzazione: "Protezione e restauro dell'involucro",
    soluzioni: ["Consolidamento", "Protezione", "Recupero"],
    applicazioni: ["Restauro", "Pubblico", "Residenziale"],
    why: "Specialista nel recupero e protezione del costruito.",
    website: "https://www.docchem.com"
  },
  "Tarkett": {
    category: "Pavimenti e Rivestimenti",
    specializzazione: "Pavimentazioni resilienti e sostenibili",
    soluzioni: ["LVT", "Linoleum", "PVC Tecnico", "Tessili"],
    applicazioni: ["Education", "Healthcare", "Office", "Retail"],
    why: "Leader mondiale nelle pavimentazioni tecniche.",
    website: "https://professional.tarkett.it/it_IT/"
  },
  "Pava Resine": {
    category: "Resine e Superfici Tecniche",
    specializzazione: "Rivestimenti continui in resina",
    soluzioni: ["Pavimentazioni in resina", "Rivestimenti continui", "Impermeabilizzazioni", "Protezione superfici"],
    applicazioni: ["Industria", "Commerciale", "Food", "Healthcare"],
    why: "Soluzioni ad alte prestazioni per ambienti ad elevata usura.",
    website: "https://www.pavaresine.it"
  },
  "Opificio Bio Aedilitia": {
    category: "Restauro Conservativo",
    specializzazione: "Restauro e bioedilizia",
    soluzioni: ["Restauro conservativo", "Deumidificazione", "Consolidamento", "Materiali naturali"],
    applicazioni: ["Edifici storici", "Beni vincolati", "Pubblico", "Residenziale"],
    why: "Approccio compatibile con il patrimonio architettonico e i materiali storici.",
    website: "https://www.bioaedilitia.it"
  },
  "Sistemi RasoParete": {
    category: "Serramenti e Sistemi Architettonici",
    specializzazione: "Sistemi filo muro e chiusure integrate",
    soluzioni: ["Porte filo muro", "Botole", "Sportelli tecnici", "Sistemi integrati"],
    applicazioni: ["Residential", "Hospitality", "Office", "Contract"],
    why: "Pulizia formale e continuità architettonica delle superfici.",
    website: "https://www.sistemirasoparete.com"
  },
  "VetroIN": {
    category: "Serramenti e Sistemi Architettonici",
    specializzazione: "Pareti divisorie e sistemi in vetro",
    soluzioni: ["Pareti vetrate", "Divisioni ufficio", "Box meeting", "Sistemi trasparenti"],
    applicazioni: ["Office", "Contract", "Commerciale"],
    why: "Massima luminosità e flessibilità degli spazi.",
    website: "https://www.vetroin.it"
  },
  "Albed": {
    category: "Serramenti e Sistemi Architettonici",
    specializzazione: "Porte e pareti divisorie in vetro",
    soluzioni: ["Porte", "Pareti", "Cabine armadio"],
    applicazioni: ["Residential", "Contract", "Hospitality"],
    why: "Design elegante e forte integrazione architettonica.",
    website: "https://www.albed.it"
  },
  "Bauxt": {
    category: "Serramenti e Sistemi Architettonici",
    specializzazione: "Porte blindate di design",
    soluzioni: ["Sicurezza", "Ingressi", "Design"],
    applicazioni: ["Ville", "Residential", "Hospitality"],
    why: "Unisce performance e architettura.",
    website: "https://www.bauxt.com"
  },
  "Kundalini": {
    category: "Impianti e Illuminazione",
    specializzazione: "Lighting decorativo",
    soluzioni: ["Sospensioni", "Parete", "Terra", "Outdoor"],
    applicazioni: ["Hospitality", "Retail", "Residential"],
    why: "Marchio iconico del lighting italiano.",
    website: "https://www.kdln.it"
  },
  "Novolux": {
    category: "Impianti e Illuminazione",
    specializzazione: "Illuminazione tecnica e decorativa",
    soluzioni: ["Illuminazione tecnica", "Illuminazione decorativa", "Indoor", "Outdoor"],
    applicazioni: ["Office", "Retail", "Hospitality"],
    why: "Ampia gamma di soluzioni per la progettazione illuminotecnica.",
    website: "https://www.novoluxlighting.com"
  },
  "Lorelux": {
    category: "Impianti e Illuminazione",
    specializzazione: "Illuminazione stradale e per parchi",
    soluzioni: ["Illuminazione stradale", "Illuminazione urbana", "Parchi e aree verdi", "Spazi pubblici"],
    applicazioni: ["Comuni", "Parchi", "Urbanistica", "Outdoor"],
    why: "Soluzioni dedicate all'illuminazione urbana e degli spazi pubblici.",
    website: "https://www.lorelux.it"
  },
  "Letroh": {
    category: "Impianti e Illuminazione",
    specializzazione: "Illuminazione architetturale",
    soluzioni: ["Illuminazione decorativa", "Illuminazione architettonica", "Progetti custom", "Interior Lighting"],
    applicazioni: ["Hospitality", "Retail", "Residential", "Contract"],
    why: "Soluzioni luminose ad alto valore estetico e progettuale.",
    website: "https://www.letroh.com"
  },
  "Bralco": {
    category: "Arredo e Contract",
    specializzazione: "Arredo direzionale e operativo",
    soluzioni: ["Direzionali", "Operativi", "Meeting room"],
    applicazioni: ["Office", "Headquarter", "Coworking"],
    why: "Design italiano e grande modularità.",
    website: "https://www.bralco.it"
  },
  "Inclass": {
    category: "Arredo e Contract",
    specializzazione: "Sedute e arredi contract",
    soluzioni: ["Sedute", "Lounge", "Meeting"],
    applicazioni: ["Hospitality", "Office", "Education"],
    why: "Grande versatilità progettuale.",
    website: "https://inclass.es"
  },
  "Olivo & Groppo": {
    category: "Arredo e Contract",
    specializzazione: "Arredi per collettività",
    soluzioni: ["Scrivanie", "Meeting", "Open Space"],
    applicazioni: ["Office", "Coworking", "Education"],
    why: "Forte adattabilità agli ambienti operativi.",
    website: "https://www.olivogroppo.com"
  },
  "International Acoustic": {
    category: "Arredo e Contract",
    specializzazione: "Comfort acustico per ambienti interni",
    soluzioni: ["Pannelli fonoassorbenti", "Controsoffitti acustici", "Wall panels", "Baffles"],
    applicazioni: ["Office", "Education", "Hospitality", "Pubblico"],
    why: "Migliora il benessere e la qualità acustica degli ambienti.",
    website: "https://www.int-acoustic.com"
  },
  "Edra": {
    category: "Living & Interior Design",
    specializzazione: "Design iconico e collezioni esclusive",
    soluzioni: ["Divani", "Sedute", "Complementi"],
    applicazioni: ["Luxury", "Hospitality", "Residential"],
    why: "Un riferimento assoluto nel design contemporaneo.",
    website: "https://www.edra.com"
  },
  "Presotto": {
    category: "Living & Interior Design",
    specializzazione: "Zona giorno e zona notte",
    soluzioni: ["Armadi", "Living", "Cabine armadio"],
    applicazioni: ["Residential", "Contract"],
    why: "Elevata personalizzazione degli ambienti.",
    website: "https://www.presotto.com"
  },
  "Elmar": {
    category: "Living & Interior Design",
    specializzazione: "Cucine di alta gamma",
    soluzioni: ["Cucine", "Isole", "Contract"],
    applicazioni: ["Residential", "Hospitality"],
    why: "Qualità costruttiva e design contemporaneo.",
    website: "https://www.elmarcucine.com"
  },
  "Rexa Design": {
    category: "Living & Interior Design",
    specializzazione: "Bagno contemporaneo e wellness",
    soluzioni: ["Bagno", "Wellness", "Spa"],
    applicazioni: ["Residential", "Hospitality"],
    why: "Approccio evoluto all'ambiente bagno.",
    website: "https://www.rexadesign.it"
  },
  "Biba": {
    category: "Arredo e Contract",
    specializzazione: "Divani, letti e imbottiti di design",
    soluzioni: ["Divani", "Letti", "Poltrone", "Complementi"],
    applicazioni: ["Residential", "Hospitality", "Contract"],
    why: "Comfort, qualità costruttiva e design italiano.",
    website: "https://www.bibasalotti.it"
  },
  "Elite To Be": {
    category: "Arredo e Contract",
    specializzazione: "Complementi e arredo contemporaneo",
    soluzioni: ["Arredi", "Complementi", "Contract", "Interior design"],
    applicazioni: ["Residential", "Hospitality", "Commerciale"],
    why: "Soluzioni di design dedicate agli spazi contemporanei.",
    website: "https://www.elitetobe.com"
  },
  "Extendo": {
    category: "Living & Interior Design",
    specializzazione: "Sistemi modulari e librerie",
    soluzioni: ["Librerie", "Modularità", "Contenitori"],
    applicazioni: ["Residential", "Office"],
    why: "Massima flessibilità compositiva.",
    website: "https://www.extendo.it"
  },
  "Mogg": {
    category: "Living & Interior Design",
    specializzazione: "Complementi e arredi di design contemporaneo",
    soluzioni: ["Complementi", "Arredi", "Librerie", "Oggettistica"],
    applicazioni: ["Residential", "Hospitality", "Contract"],
    why: "Ricerca stilistica e forte identità progettuale.",
    website: "https://www.mogg.it"
  },
  "Inkiostro Bianco": {
    category: "Arredo e Contract",
    specializzazione: "Wallpaper e superfici decorative",
    soluzioni: ["Carta da parati", "Boiserie", "Decorazioni"],
    applicazioni: ["Retail", "Hotel", "Residential"],
    why: "Massima personalizzazione degli ambienti.",
    website: "https://www.inkiostrobianco.com"
  },
  "Fast": {
    category: "Outdoor Living & Hospitality",
    specializzazione: "Outdoor design di alta gamma",
    soluzioni: ["Tavoli", "Sedute", "Lounge"],
    applicazioni: ["Residential", "Hospitality"],
    why: "Riferimento europeo dell'arredo outdoor.",
    website: "https://www.fastspa.com"
  },
  "Isimar": {
    category: "Outdoor Living & Hospitality",
    specializzazione: "Arredo outdoor in metallo",
    soluzioni: ["Sedute", "Tavoli", "Outdoor"],
    applicazioni: ["Hotel", "Rooftop", "Ristorazione"],
    why: "Design mediterraneo e durabilità.",
    website: "https://www.isimar.es"
  },
  "Domino": {
    category: "Arredo e Contract",
    specializzazione: "Fioriere modulari e outdoor design",
    soluzioni: ["Fioriere", "Separatori verdi", "Complementi outdoor", "Urban design"],
    applicazioni: ["Hospitality", "Outdoor", "Contract", "Spazi pubblici"],
    why: "Soluzioni modulari per la valorizzazione degli spazi esterni.",
    website: "https://www.domino-srl.it"
  },
  "Skymatik": {
    category: "Arredo e Contract",
    specializzazione: "Pergole bioclimatiche e coperture outdoor",
    soluzioni: ["Pergole bioclimatiche", "Coperture", "Schermature solari", "Outdoor Living"],
    applicazioni: ["Residential", "Hospitality", "Contract"],
    why: "Soluzioni evolute per il comfort e la fruibilità degli spazi esterni.",
    website: "https://www.skymatik.it"
  }
};

const areasContainer = document.getElementById("areas");

if (areasContainer) {
  aree.forEach(area => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${area.name}</h3>
      <p>${area.description}</p>
    `;
    card.onclick = () => showArea(area);
    areasContainer.appendChild(card);
  });
}

function showArea(area) {
  const box = document.getElementById("areaDetail");

  if (!box) return;

  box.style.display = "block";
  box.innerHTML = `
    <h2>${area.name}</h2>
    <p>${area.description}</p>
    <br>
    <h3>Aziende Partner</h3>
    ${area.companies.map(name => `
      <div class="partner" onclick="showCompany('${name}')">${name}</div>
    `).join("")}
  `;

  const companyDetail = document.getElementById("companyDetail");
  if (companyDetail) {
    companyDetail.style.display = "none";
  }

  box.scrollIntoView({ behavior: "smooth" });
}

function showCompany(name) {
  const company = companies[name];
  const box = document.getElementById("companyDetail");

  if (!box) return;

  box.style.display = "block";

  if (!company) {
    box.innerHTML = `
      <h2>${name}</h2>
      <p>Scheda dettagliata in aggiornamento.</p>
    `;
    return;
  }

  box.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Categoria:</strong> ${company.category || ""}</p>
    <br>
    <h3>Specializzazione</h3>
    <p>${company.specializzazione}</p>
    <br>
    <h3>Soluzioni</h3>
    <ul>
      ${company.soluzioni.map(s => `<li>${s}</li>`).join("")}
    </ul>
    <br>
    <h3>Applicazioni</h3>
    <div class="tags">
      ${company.applicazioni.map(a => `<span>${a}</span>`).join("")}
    </div>
    <br><br>
    <h3>Perché la proponiamo</h3>
    <p>${company.why}</p>
    <br>
    <a class="button" href="${company.website}" target="_blank">
      Visita il sito ufficiale →
    </a>
  `;

  box.scrollIntoView({ behavior: "smooth" });
}
