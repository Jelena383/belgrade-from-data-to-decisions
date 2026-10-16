// ---------- PROVERA: da li je fajl sa podacima u istom folderu ----------
if (typeof PODACI === "undefined" || typeof OPSTINE === "undefined") {
  const nema = typeof PODACI === "undefined" ? "podaci.js" : "opstine.js";
  document.body.insertAdjacentHTML("afterbegin",
    "<div style='background:#b42318;color:white;padding:1rem 1.5rem;font:16px Segoe UI,Arial'>" +
    "<b>Nedostaje fajl " + nema + ".</b> Svi fajlovi aplikacije (index.html, app.js, stil.css, " +
    "podaci.js, opstine.js, objasnjenja.js, rezultati.js, protokol.js) moraju biti u istom folderu. / " +
    "<b>File " + nema + " is missing.</b> All app files must be in the same folder.</div>");
  throw new Error("Nedostaje " + nema);
}

// ---------- EFIKASNOST IZ RADA (provera na 2025): [fiksni, jutarnja provera] po sezoni ----------
const EF_SEZ = {
  skola_2smene: { zima: [0.55, 0.54], prelazno: [0.44, 0.58], leto: [0.99, 0.99] },
  skola_1smena: { zima: [0.00, -0.13], prelazno: [-0.34, 0.02], leto: [0.99, 0.99] },
  vrtic:        { zima: [0.38, 0.39], prelazno: [0.00, 0.24], leto: [0.72, 0.72] },
  dom:          { zima: [0.68, 0.73], prelazno: [0.51, 0.62], leto: [0.89, 0.89] }
};

// ---------- TEKSTOVI NA DVA JEZIKA ----------
const TEKST = {
  sr: {
    naslov: "Kada napolje?",
    podnaslov: "Planiranje aktivnosti napolju u školama, vrtićima i domovima za stare",
    napomenaVrh: "Preporuke se zasnivaju na merenjima GZJZ za 2024–2025. godinu i pravilima proverenim " +
      "u naučnom radu. Nisu prognoza kvaliteta vazduha za izabrani dan. Aplikacija je predlog autorke iz naučnog rada, a ne zvanični alat GZJZ.",
    tab_plan: "Planiraj aktivnost", tab_rez: "Kako su pravila radila 2024–2025", tab_obj: "Objašnjenja",
    kalkulator: "Kalkulator", datum: "Datum", lokacija: "Monitoring lokacija (najbliža ustanovi)",
    ustanova: "Ustanova", jutro_lbl: "Kategorija u 06–07 h",
    skola_2smene: "Škola, dve smene", skola_1smena: "Škola, jedna smena", vrtic: "Vrtić", dom: "Dom za stare",
    j_nema: "Ne znam / nije proveravano", j_dobro: "Dobar ili Prihvatljiv", j_umereno: "Umeren",
    j_poor: "Zagađen ili lošije",
    stanja: { dobro: "Dobar ili Prihvatljiv", umereno: "Umeren", poor: "Zagađen ili lošije" },
    stampaj: "Štampaj / sačuvaj PDF",
    karta: "Karta monitoring lokacija",
    legNaslov: "Istorijska verovatnoća nepovoljnog bloka (nije trenutni kvalitet vazduha):",
    podloga: "Podloga: Natural Earth, granice opština iz QGIS projekta",
    leg1: "manje od 5 %", leg2: "5–10 %", leg3: "10–20 %", leg4: "20 % i više", leg5: "nema podatka",
    klik: "Klikom na lokaciju ona se bira u kalkulatoru.",
    kalendar: "Kalendar istorijskih obrazaca",
    kalNapomena: "Brojevi su procenti dana. Uokviren je termin fiksnog sezonskog rasporeda, a „–” znači " +
      "da nema podataka (npr. raspust). Boje su iste kao na karti.",
    izvor: "Izvor: GZJZ Beograd, satni podaci 2024–2025, revidirani Evropski indeks kvaliteta vazduha. " +
           "Verovatnoće su istorijski obrazac, a ne prognoza. Verzija 1.1 · poslednje ažuriranje: 14. oktobar 2026.",
    sezone: { zima: "zima", prelazno: "prelazni period", leto: "leto" },
    meseci: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust",
             "septembar", "oktobar", "novembar", "decembar"],
    bezO3: " (bez O3)", bezO3dugo: "(bez merenja O3)", nemaPod: "nema podatka",
    preporuka: "Preporučeni termin", pravilo: "pravilo",
    fiksni: "fiksni sezonski raspored", jutarnja: "jutarnja provera",
    nemaMesec: (m) => "Za " + m + " nema podataka za izabranu ustanovu (npr. školski raspust).",
    zastoF: (t, s) => "Ovaj termin je u 2024. godini, na nivou cele mreže monitoring lokacija, imao najmanji " +
      "udeo nepovoljnih blokova za tip ustanove „" + t + "” u sezoni „" + s + "”.",
    zastoJ: (t, s, z) => "Ovaj termin je u 2024. godini, na nivou cele mreže, imao najmanji udeo nepovoljnih " +
      "blokova za tip ustanove „" + t + "” u sezoni „" + s + "” u danima kada je u 06–07 h kategorija bila: " +
      z + ".",
    efRec: (e) => "U proveri na podacima za 2025. ovo pravilo je za taj tip ustanove i sezonu ostvarilo " +
      "efikasnost " + e + " (0 = uobičajeni termin, 1 = najbolji termin, poznat tek naknadno).",
    efNije: (sq) => "Za ovaj tip ustanove i sezonu pravilo u proveri na 2025. nije bilo bolje od uobičajenog " +
      "termina, pa je i uobičajeni termin " + sq + " razuman izbor.",
    isti: "Preporučeni termin je isti kao uobičajeni, jer je on već bio najpovoljniji.",
    jutroSamoPrelazno: "Jutarnja provera se primenjuje samo u prelaznom periodu (mart–maj i septembar–novembar). " +
      "Zimi i leti važi sezonski termin, jer provera na dve godine podataka nije pokazala doslednu korist " +
      "jutarnje provere u tim sezonama.",
    letoSkola: "Za škole se leto odnosi samo na nastavne dane u junu (oko 10 dana godišnje), pa je procena nesigurna.",
    recenica: (lok, m, p, q, sq) => "Istorijska verovatnoća da dvočasovni blok obuhvati bar jedan Poor+ sat " +
      "na lokaciji " + lok + " u mesecu " + m + ": <b>" + p + "</b> u preporučenom terminu, prema " + q +
      " u uobičajenom terminu " + sq + ".",
    upozorenje: "Jutro je u kategoriji Zagađen ili lošije. U takvim danima je i najbolji termin u 2024. imao " +
      "31–52 % verovatnoće nepovoljnog bloka, pa nijedan termin nije pouzdano povoljan. Razmotrite kraću i " +
      "manje intenzivnu aktivnost ili aktivnost u zatvorenom prostoru.",
    o3: "Ova lokacija ne meri ozon, pa verovatnoće ne obuhvataju ozon (posebno važno leti).",
    sviTermini: (m, n) => "Svi mogući termini – " + m + ", 2024–2025 (" + n + " dana)",
    fusnota: "Preporuka se zasniva na pravilu koje je provereno na celoj mreži monitoring lokacija. " +
      "Mesečne vrednosti za jednu lokaciju zasnivaju se na malom broju dana i služe samo kao orijentacija. " +
      "Uslovi kod ustanove mogu se razlikovati od uslova na najbližoj monitoring lokaciji.",
    kartaNaslov: (b, m, t) => "Preporučeni termin " + b + " – " + m + ", " + t.toLowerCase(),
    kalNaslov: (lok, t) => "Verovatnoća Poor+ bloka (%) po mesecu i terminu – " + lok + ", " + t.toLowerCase(),
    proc: (p) => (p * 100).toFixed(1).replace(".", ",") + " %",
    broj: (x) => x.toFixed(2).replace(".", ",").replace("-", "−")
  },
  en: {
    naslov: "When to go outside?",
    podnaslov: "Planning outdoor activities in schools, kindergartens and nursing homes",
    napomenaVrh: "Recommendations are based on GZJZ measurements for 2024–2025 and on rules tested in a " +
      "scientific study. They are not an air quality forecast for the selected day. The app is the author's proposal from a research study, not an official GZJZ tool.",
    tab_plan: "Plan an activity", tab_rez: "How the rules performed in 2024–2025", tab_obj: "Explanations",
    kalkulator: "Calculator", datum: "Date", lokacija: "Monitoring site (closest to the facility)",
    ustanova: "Facility", jutro_lbl: "Category at 06–07 h",
    skola_2smene: "School, two shifts", skola_1smena: "School, one shift", vrtic: "Kindergarten",
    dom: "Nursing home",
    j_nema: "Unknown / not checked", j_dobro: "Good or Fair", j_umereno: "Moderate", j_poor: "Poor or worse",
    stanja: { dobro: "Good or Fair", umereno: "Moderate", poor: "Poor or worse" },
    stampaj: "Print / save as PDF",
    karta: "Map of monitoring sites",
    legNaslov: "Historical probability of an adverse block (not current air quality):",
    podloga: "Base map: Natural Earth, municipalities from the QGIS project",
    leg1: "below 5%", leg2: "5–10%", leg3: "10–20%", leg4: "20% and above", leg5: "no data",
    klik: "Click a site to select it in the calculator.",
    kalendar: "Calendar of historical patterns",
    kalNapomena: "Numbers are percentages of days. The outlined cell marks the fixed seasonal schedule; " +
      "“–” means no data (e.g., school holidays). Colours as on the map.",
    izvor: "Source: Belgrade City Institute of Public Health (GZJZ), hourly data 2024–2025, revised European " +
           "Air Quality Index. Probabilities describe a historical pattern, not a forecast. Version 1.1 · last updated: 14 October 2026.",
    sezone: { zima: "winter", prelazno: "transitional period", leto: "summer" },
    meseci: ["January", "February", "March", "April", "May", "June", "July", "August",
             "September", "October", "November", "December"],
    bezO3: " (no O3)", bezO3dugo: "(no O3 measurement)", nemaPod: "no data",
    preporuka: "Recommended time slot", pravilo: "rule",
    fiksni: "fixed seasonal schedule", jutarnja: "morning check",
    nemaMesec: (m) => "No data for " + m + " for the selected facility (e.g., school holidays).",
    zastoF: (t, s) => "In 2024, across the whole monitoring network, this slot had the lowest share of " +
      "adverse blocks for the facility type “" + t + "” in the " + s + ".",
    zastoJ: (t, s, z) => "In 2024, across the whole network, this slot had the lowest share of adverse blocks " +
      "for the facility type “" + t + "” in the " + s + " on days when the 06–07 h category was: " + z + ".",
    efRec: (e) => "When tested on 2025 data, this rule achieved an efficiency of " + e + " for this facility " +
      "type and season (0 = usual slot, 1 = best slot, known only in retrospect).",
    efNije: (sq) => "For this facility type and season, the rule was not better than the usual slot when " +
      "tested on 2025 data, so the usual slot " + sq + " is also a reasonable choice.",
    isti: "The recommended slot is the same as the usual one, because the usual slot was already the most " +
      "favourable.",
    jutroSamoPrelazno: "The morning check is applied only in the transitional period (March–May and " +
      "September–November). In winter and summer the seasonal slot applies, because testing on two years of " +
      "data showed no consistent benefit of the morning check in those seasons.",
    letoSkola: "For schools, summer covers only teaching days in June (about 10 days a year), so the estimate " +
      "is uncertain.",
    recenica: (lok, m, p, q, sq) => "Historical probability that a 2-hour block includes at least one Poor+ " +
      "hour at " + lok + " in " + m + ": <b>" + p + "</b> in the recommended slot, compared with " + q +
      " in the usual slot " + sq + ".",
    upozorenje: "The morning category is Poor or worse. On such days, even the best slot in 2024 had a " +
      "31–52% probability of an adverse block, so no slot is reliably favourable. Consider a shorter, less " +
      "intense activity or moving it indoors.",
    o3: "This site does not measure ozone, so the probabilities do not include ozone (particularly " +
      "relevant in summer).",
    sviTermini: (m, n) => "All possible time slots – " + m + ", 2024–2025 (" + n + " days)",
    fusnota: "The recommendation is based on a rule tested across the whole monitoring network. Monthly " +
      "values for a single site are based on a small number of days and are indicative only. Conditions " +
      "at the facility may differ from those at the nearest monitoring site.",
    kartaNaslov: (b, m, t) => "Recommended slot " + b + " – " + m + ", " + t.toLowerCase(),
    kalNaslov: (lok, t) => "Probability of a Poor+ block (%) by month and time slot – " + lok + ", " +
      t.toLowerCase(),
    proc: (p) => (p * 100).toFixed(1) + "%",
    broj: (x) => x.toFixed(2).replace("-", "−")
  }
};
let jezik = "sr";
const T = () => TEKST[jezik];

// ---------- POMOĆNO ----------
const DANI = { nastavni_dan: "nastavni", radni_dan: "radni", svi: "svi" };
const el = (id) => document.getElementById(id);
const sezona = (m) => [12, 1, 2].includes(m) ? "zima" : [6, 7, 8].includes(m) ? "leto" : "prelazno";
const blok = (h) => String(h).padStart(2, "0") + "–" + String(h + 2).padStart(2, "0") + " h";
const proc = (p) => p === null || p === undefined ? T().nemaPod : T().proc(p);
// jutarnja provera se primenjuje samo u prelaznom periodu (obrnuta provera: zimi može da odmogne)
const koristiJutro = (sez, jutro) => jutro !== "nema" && sez === "prelazno";
const preporuceniSat = (tip, sez, jutro) =>
  koristiJutro(sez, jutro) ? PODACI.jutro[tip][sez][jutro] : PODACI.fiksni[tip][sez];
const boja = (v) => v === null || v === undefined ? "#9ca3af" : v < 0.05 ? "#1a9850" :
  v < 0.10 ? "#fee08b" : v < 0.20 ? "#fc8d59" : "#d73027";

function popuniLokacije() {
  const izabrana = el("lokacija").value;
  el("lokacija").innerHTML = "";
  PODACI.lokacije.forEach((l) => {
    const o = document.createElement("option");
    o.value = l.st;
    o.textContent = l.br + ". " + l.naziv + (l.o3 ? "" : T().bezO3);
    el("lokacija").appendChild(o);
  });
  if (izabrana) el("lokacija").value = izabrana;
}

function primeniJezik(novi) {
  jezik = novi;
  document.documentElement.lang = novi;
  document.querySelectorAll("[data-t]").forEach((e) => { e.textContent = T()[e.dataset.t]; });
  document.title = T().naslov;
  el("btn-sr").classList.toggle("aktivan", novi === "sr");
  el("btn-en").classList.toggle("aktivan", novi === "en");
  popuniLokacije();
  osvezi();
}

// ---------- KARTICE (DELOVI APLIKACIJE) ----------
function prikaziDeo(id) {
  document.querySelectorAll(".deo").forEach((d) => { d.hidden = d.id !== id; });
  document.querySelectorAll("[role=tab]").forEach((b) => {
    const akt = b.dataset.deo === id;
    b.classList.toggle("aktivan", akt);
    b.setAttribute("aria-selected", akt);
  });
  if (id === "deo-plan") karta.invalidateSize();
}

// ---------- KALKULATOR ----------
function izracunaj() {
  const mes = new Date(el("datum").value).getMonth() + 1, sez = sezona(mes);
  const tip = el("tip").value, st = el("lokacija").value, jutro = el("jutro").value;
  const lok = PODACI.lokacije.find((l) => l.st === st);
  const dtip = DANI[PODACI.dani[tip]];
  const p = (PODACI.verovatnoce[dtip][st] || {})[mes];
  const n = (PODACI.broj_dana[dtip][st] || {})[mes] || 0;
  const mesec = T().meseci[mes - 1];

  if (!p) {
    el("rezultat").innerHTML = "<p class='upozorenje'>" + T().nemaMesec(mesec) + "</p>";
    return;
  }

  const hPrep = preporuceniSat(tip, sez, jutro);
  const hSq = PODACI.status_quo[tip][sez];
  const jutroAktivno = koristiJutro(sez, jutro);
  const pravilo = jutroAktivno ? T().jutarnja : T().fiksni;
  const ef = EF_SEZ[tip][sez][jutroAktivno ? 1 : 0];

  let html = "<div class='preporuka'><span>" + T().preporuka + "</span><strong>" + blok(hPrep) +
    "</strong><small>" + T()[tip] + ", " + T().sezone[sez] + " · " + T().pravilo + ": " + pravilo +
    "</small></div>";

  // zašto ovaj termin
  html += "<div class='zasto'><p>" + (jutroAktivno ? T().zastoJ(T()[tip], T().sezone[sez], T().stanja[jutro]) :
    T().zastoF(T()[tip], T().sezone[sez])) + "</p>";
  if (jutro !== "nema" && !jutroAktivno) html += "<p>" + T().jutroSamoPrelazno + "</p>";
  if (hPrep === hSq) html += "<p>" + T().isti + "</p>";
  else if (ef <= 0) html += "<p>" + T().efNije(blok(hSq)) + "</p>";
  else html += "<p>" + T().efRec(T().broj(ef)) + "</p>";
  if (sez === "leto" && tip.startsWith("skola")) html += "<p>" + T().letoSkola + "</p>";
  html += "</div>";

  html += "<p>" + T().recenica(lok.naziv, mesec, proc(p[hPrep]), proc(p[hSq]), blok(hSq)) + "</p>";
  if (jutro === "poor") html += "<p class='upozorenje'>" + T().upozorenje + "</p>";
  if (!lok.o3) html += "<p class='napomena'>" + T().o3 + "</p>";

  html += "<h3>" + T().sviTermini(mesec, n) + "</h3><div class='termini'>";
  PODACI.blokovi[tip].forEach((h) => {
    const v = p[h], sirina = v === null ? 0 : Math.round(v * 100);
    const klasa = h === hPrep ? "termin izabran" : "termin";
    html += "<div class='" + klasa + "'><span>" + blok(h) + "</span><div class='traka'><div style='width:" +
      sirina + "%'></div></div><span>" + proc(v) + "</span></div>";
  });
  html += "</div><p class='napomena'>" + T().fusnota + "</p>";
  el("rezultat").innerHTML = html;
}

// ---------- KARTA (podloga kao u aplikaciji prvog rada: opštine + reke, Natural Earth) ----------
const karta = L.map("karta", { zoomSnap: 0.25, attributionControl: true });
const granice = L.geoJSON(OPSTINE, {
  style: { color: "#8a8f98", weight: 1, fillColor: "#f2f2f2", fillOpacity: 1 },
  interactive: false,
  onEachFeature: (f, sloj) => sloj.bindTooltip(f.properties.naziv,
    { permanent: true, direction: "center", className: "opstina-oznaka" })
}).addTo(karta);
if (typeof REKE !== "undefined") {
  L.geoJSON(REKE, { style: { color: "#9ec3e6", weight: 3, opacity: 1 }, interactive: false }).addTo(karta);
}
karta.fitBounds(granice.getBounds(), { padding: [10, 10] });

const legendaKarte = L.control({ position: "bottomright" });
legendaKarte.onAdd = () => {
  const div = L.DomUtil.create("div", "legenda-karta");
  div.id = "legenda-karta";
  return div;
};
legendaKarte.addTo(karta);

function osveziLegendu() {
  const klase = [["#1a9850", "leg1"], ["#fee08b", "leg2"], ["#fc8d59", "leg3"], ["#d73027", "leg4"], ["#9ca3af", "leg5"]];
  el("legenda-karta").innerHTML = "<b>" + T().legNaslov.replace(/:$/, "") + "</b>" +
    klase.map(([b, k]) => "<div><i style='background:" + b + "'></i>" + T()[k] + "</div>").join("");
  karta.attributionControl.setPrefix("<a href='https://leafletjs.com'>Leaflet</a> | " + T().podloga);
}

const markeri = {};
PODACI.lokacije.forEach((l) => {
  const m = L.circleMarker([l.lat, l.lon], { radius: 10, fillOpacity: 0.9 }).addTo(karta);
  m.bindTooltip(l.br + ". " + l.naziv);
  m.on("click", () => { el("lokacija").value = l.st; osvezi(); });
  markeri[l.st] = m;
});

function osveziKartu() {
  const mes = new Date(el("datum").value).getMonth() + 1, sez = sezona(mes);
  const tip = el("tip").value, jutro = el("jutro").value;
  const dtip = DANI[PODACI.dani[tip]];
  const h = preporuceniSat(tip, sez, jutro);
  PODACI.lokacije.forEach((l) => {
    const p = (PODACI.verovatnoce[dtip][l.st] || {})[mes];
    const v = p ? p[h] : null;
    const izabrana = l.st === el("lokacija").value;
    markeri[l.st]
      .setStyle({ fillColor: boja(v), weight: izabrana ? 4 : 1.5, color: izabrana ? "#1f5f99" : "#1f2937",
                  radius: izabrana ? 13 : 10 })
      .setTooltipContent(l.br + ". " + l.naziv + "<br>" + blok(h) + ": " + proc(v) +
                         (l.o3 ? "" : "<br>" + T().bezO3dugo));
    if (izabrana) markeri[l.st].bringToFront();
  });
  el("karta-naslov").textContent = T().kartaNaslov(blok(h), T().meseci[mes - 1], T()[tip]);
  osveziLegendu();
}

// ---------- KALENDAR ----------
function osveziKalendar() {
  const tip = el("tip").value, st = el("lokacija").value;
  const lok = PODACI.lokacije.find((l) => l.st === st);
  const sv = PODACI.verovatnoce[DANI[PODACI.dani[tip]]][st] || {};
  const bl = PODACI.blokovi[tip];
  let html = "<table class='kalendar'><thead><tr><th></th>" +
    bl.map((h) => "<th>" + blok(h).replace(" h", "") + "</th>").join("") + "</tr></thead><tbody>";
  for (let m = 1; m <= 12; m++) {
    const p = sv[m], hF = PODACI.fiksni[tip][sezona(m)];
    html += "<tr><th>" + T().meseci[m - 1] + "</th>";
    bl.forEach((h) => {
      const v = p ? p[h] : null;
      const tekst = v === null || v === undefined ? "–" : Math.round(v * 100);
      html += "<td style='background:" + boja(v) + "'" + (h === hF ? " class='fiksni'" : "") +
        " title='" + T().meseci[m - 1] + ", " + blok(h) + ": " + proc(v) + "'>" + tekst + "</td>";
    });
    html += "</tr>";
  }
  el("kalendar").innerHTML = html + "</tbody></table>";
  el("kalendar-naslov").textContent = T().kalNaslov(lok.naziv, T()[tip]);
}

// ---------- POVEZIVANJE ----------
function osvezi() { izracunaj(); osveziKartu(); osveziKalendar(); }
["datum", "lokacija", "tip", "jutro"].forEach((id) => el(id).addEventListener("change", osvezi));
document.querySelectorAll("[role=tab]").forEach((b) =>
  b.addEventListener("click", () => prikaziDeo(b.dataset.deo)));
el("btn-sr").addEventListener("click", () => primeniJezik("sr"));
el("btn-en").addEventListener("click", () => primeniJezik("en"));
el("stampaj").addEventListener("click", () => window.print());
el("datum").value = new Date().toISOString().slice(0, 10);
primeniJezik("sr");
