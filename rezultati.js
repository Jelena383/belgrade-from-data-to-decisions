// ---------- REZULTATI IZ RADA (provera na 2025, 24 lokacije sa O3; obrnuta provera na 2024) ----------
const REZ = {
  tipovi: ["skola_2smene", "skola_1smena", "vrtic", "dom"],
  // status quo, fiksni, jutarnja provera, idealno (% blokova sa ≥ 1 Poor+ satom), 2025
  verov: { skola_2smene: [18.2, 10.4, 9.5, 4.4], skola_1smena: [11.8, 10.7, 10.1, 6.1],
           vrtic: [14.3, 10.7, 10.1, 5.3], dom: [23.1, 9.1, 8.2, 3.7] },
  // [procena, donja, gornja] za: fiksni, jutarnja provera, prethodni dan, lokalni (2024 → 2025)
  ef: { skola_2smene: [[0.57, 0.46, 0.67], [0.63, 0.54, 0.71], [0.58, 0.49, 0.67], [0.59, 0.49, 0.69]],
        skola_1smena: [[0.20, -0.02, 0.40], [0.30, 0.14, 0.43], [0.23, 0.05, 0.39], [0.28, 0.09, 0.46]],
        vrtic: [[0.40, 0.31, 0.50], [0.46, 0.37, 0.55], [0.42, 0.34, 0.50], [0.41, 0.32, 0.50]],
        dom: [[0.72, 0.66, 0.78], [0.77, 0.72, 0.82], [0.74, 0.68, 0.79], [0.76, 0.71, 0.81]] },
  // obrnuta provera (2025 → 2024): fiksni [procena, donja, gornja]; jutarnja − fiksni [procena, donja, gornja]
  obrnuto: { skola_2smene: [[0.54, 0.34, 0.74], [-0.02, -0.06, 0.03]],
             skola_1smena: [[0.10, 0.01, 0.26], [0.04, -0.01, 0.14]],
             vrtic: [[0.45, 0.25, 0.61], [-0.06, -0.13, -0.01]],
             dom: [[0.76, 0.69, 0.82], [0.02, 0.00, 0.03]] },
  // jutarnja − fiksni u glavnoj proveri
  razlJutro: { skola_2smene: [0.06, 0.01, 0.14], skola_1smena: [0.10, -0.03, 0.26],
               vrtic: [0.06, 0.02, 0.12], dom: [0.05, 0.02, 0.07] },
  // [fiksni, jutarnja] za zimu, prelazni period, leto (2024 → 2025)
  sez: { skola_2smene: [[0.55, 0.54], [0.44, 0.58], [0.99, 0.99]],
         skola_1smena: [[0.00, -0.13], [-0.34, 0.02], [0.99, 0.99]],
         vrtic: [[0.38, 0.39], [0.00, 0.24], [0.72, 0.72]],
         dom: [[0.68, 0.73], [0.51, 0.62], [0.89, 0.89]] },
  // br, naziv, ima O3, [š2 F, š2 J, š1 F, š1 J, vrtić F, vrtić J, dom F, dom J], nestabilno za š1
  lok: [
    [1, "Veliki Crljeni", false, [0.58, 0.58, -0.29, -0.43, 0.31, 0.38, 0.65, 0.67], false],
    [2, "MZ Ušće Obrenovac", false, [0.67, 0.67, 0.50, 0.50, 0.29, 0.14, 0.72, 0.79], true],
    [3, "Ovča", true, [0.76, 0.66, 0.62, 0.62, 0.62, 0.71, 0.81, 0.82], false],
    [4, "Lazarevac", true, [0.50, 0.67, -0.75, -0.25, 0.45, 0.64, 0.52, 0.69], true],
    [5, "Zemun", false, [0.83, 0.94, -1.00, 0.00, 0.45, 0.64, 0.78, 0.92], true],
    [6, "KBC Dr Dragiša Mišović", true, [0.69, 0.69, 0.40, 0.40, 0.29, 0.29, 0.77, 0.79], false],
    [7, "JKP BVK PPV Vinča", true, [0.54, 0.58, 0.38, 0.31, 0.21, 0.29, 0.65, 0.71], false],
    [8, "JKP BVK Vračar, Jovana Rajića", true, [0.67, 0.80, 0.40, 0.20, 0.50, 0.50, 0.73, 0.76], false],
    [9, "JKP BVK Bežanijska kosa", true, [0.58, 0.74, 0.25, 0.62, 0.48, 0.57, 0.70, 0.82], false],
    [10, "JKP BVK Topčiderska zvezda", true, [0.27, 0.20, -1.33, -1.67, 0.29, 0.24, 0.54, 0.54], true],
    [11, "JKP BVK Bulevar vojvode Mišića", true, [0.58, 0.61, 0.00, 0.00, -0.38, -0.33, 0.42, 0.46], false],
    [12, "JKP BVK Banovo brdo", true, [0.58, 0.73, 0.12, 0.38, 0.52, 0.63, 0.71, 0.74], false],
    [13, "JP Pošta Srbije", true, [0.77, 0.88, 0.33, 0.67, 0.55, 0.70, 0.88, 0.95], false],
    [14, "Borča", true, [0.70, 0.81, 0.12, 0.50, 0.50, 0.62, 0.86, 0.90], false],
    [15, "JP Ada Ciganlija", true, [0.48, 0.62, -0.22, 0.00, 0.52, 0.59, 0.77, 0.83], false],
    [16, "KCS Surčin", true, [0.67, 0.73, 0.20, 0.50, 0.59, 0.63, 0.86, 0.90], false],
    [17, "KCS Vračar, Franše Deperea", true, [0.19, 0.24, 0.05, 0.18, -0.16, -0.12, 0.39, 0.40], false],
    [18, "Leštane", true, [0.13, 0.26, -1.50, -1.17, -0.23, -0.14, 0.11, 0.19], false],
    [19, "Rezervoar BVK, Stojčino brdo", true, [0.60, 0.60, 0.50, 0.50, 0.50, 0.54, 0.84, 0.87], false],
    [20, "Barajevo", true, [0.47, 0.60, 0.30, 0.60, 0.57, 0.67, 0.80, 0.88], false],
    [21, "JKP Mladenovac", true, [0.71, 0.79, -0.33, -0.33, 0.10, 0.10, 0.68, 0.84], true],
    [22, "DZ Sopot", true, [0.88, 0.88, 0.78, 0.78, 0.89, 0.93, 0.91, 0.93], false],
    [23, "Beograd na vodi", true, [0.70, 0.78, 0.43, 0.14, 0.53, 0.59, 0.84, 0.88], false],
    [24, "Danijelova", true, [0.58, 0.58, 0.30, 0.20, 0.43, 0.43, 0.85, 0.86], false],
    [25, "Mirijevo", true, [0.48, 0.52, 0.42, 0.58, 0.50, 0.55, 0.72, 0.78], false],
    [26, "Resnik", true, [0.73, 0.81, 0.71, 0.79, 0.75, 0.82, 0.83, 0.87], false],
    [27, "Jajinci", true, [0.59, 0.59, 0.60, 0.60, 0.62, 0.67, 0.83, 0.87], false]
  ]
};

const REZ_TEKST = {
  sr: {
    tip: { skola_2smene: "Škola, dve smene", skola_1smena: "Škola, jedna smena", vrtic: "Vrtić", dom: "Dom za stare" },
    uvod: "Pravila su izvedena iz podataka za jednu godinu i proverena na podacima za drugu, koji nisu korišćeni " +
      "pri izvođenju, i to u oba smera (2024 → 2025 i 2025 → 2024). Prikazani su rezultati za 24 monitoring " +
      "lokacije sa merenjem O3. Udeo Poor+ sati bio je 16,0 % u 2024. i 14,2 % u 2025, ali je zima 2025. za škole " +
      "bila nepovoljnija od zime 2024.",
    poruke: ["Fiksni sezonski raspored ostvaruje najveći deo koristi i stabilan je u oba smera provere: u domovima " +
      "za stare verovatnoća nepovoljnog bloka pala je sa 23,1 % na 9,1 %.",
      "Jutarnja provera je bila bolja od fiksnog rasporeda samo u jednom smeru provere; zimi je u obrnutoj proveri " +
      "čak odmogla. Zato se u protokolu i u ovoj aplikaciji primenjuje samo u prelaznom periodu.",
      "Lokalni raspored bio je pouzdano, ali malo bolji samo u glavnoj proveri (dom za stare i jednosmenska škola), a pravilo prethodnog dana nije donelo pouzdanu korist ni u jednom smeru provere.",
      "Kada je postojeći termin već povoljan, kao kod jednosmenske škole zimi, prostor za poboljšanje je mali."],
    porukeNaslov: "Ključne poruke",
    trakeNaslov: "Verovatnoća da blok obuhvati bar jedan Poor+ sat, 2025",
    trake: ["postojeći termin", "fiksni raspored", "jutarnja provera", "idealni izbor (poznat naknadno)"],
    efNaslov: "Efikasnost pravila, 2025 (95 % interval poverenja)",
    pravila: ["Fiksni sezonski", "Jutarnja provera", "Prethodni dan", "Lokalni fiksni"],
    efNapomena: "Efikasnost 0 znači isto kao postojeći termin, a 1 isto kao idealni izbor.",
    obrNaslov: "Provera u oba smera (95 % interval poverenja)",
    obrKol: ["Fiksni, 2024 → 2025", "Fiksni, 2025 → 2024", "Jutarnja − fiksni, 2024 → 2025",
             "Jutarnja − fiksni, 2025 → 2024"],
    obrNapomena: "Strelica označava godinu izvođenja → godinu provere. Fiksni raspored je sličan u oba smera, " +
      "a prednost jutarnje provere se nije ponovila.",
    sezNaslov: "Efikasnost po sezoni (2024 → 2025): fiksni raspored / jutarnja provera",
    sezone: ["Zima", "Prelazni period", "Leto"],
    sezNapomena: "Letnje vrednosti za škole zasnivaju se samo na nastavnim danima u junu (oko 10 dana).",
    lokNaslov: "Efikasnost po monitoring lokaciji, 2025 (F = fiksni raspored, J = jutarnja provera)",
    lokNapomena: "* Lokacija bez merenja O3. ‡ Razlika između postojećeg i idealnog termina manja od 2,5 " +
      "procentnih poena, pa je vrednost nestabilna. Negativna vrednost znači da je pravilo na toj lokaciji " +
      "bilo lošije od postojećeg termina.",
    lokacija: "Monitoring lokacija",
    dec: ","
  },
  en: {
    tip: { skola_2smene: "School, two shifts", skola_1smena: "School, one shift", vrtic: "Kindergarten",
           dom: "Nursing home" },
    uvod: "The rules were derived from one year of data and tested on the other year, which was not used to " +
      "derive them, in both directions (2024 → 2025 and 2025 → 2024). Results are shown for the 24 monitoring " +
      "sites with O3 measurements. The share of Poor+ hours was 16.0% in 2024 and 14.2% in 2025, but winter " +
      "2025 was less favourable for schools than winter 2024.",
    poruke: ["The fixed seasonal schedule delivers most of the benefit and is stable in both test directions: " +
      "in nursing homes, the probability of an adverse block fell from 23.1% to 9.1%.",
      "The morning check outperformed the fixed schedule in only one test direction, and in winter it even " +
      "performed worse in the reverse test. The protocol and this app therefore apply it only in the " +
      "transitional period.",
      "The site-specific schedule was reliably but only slightly better in the main test only (nursing homes and single-shift schools), and the previous-day rule brought no reliable benefit in either direction.",
      "When the current slot is already favourable, as for single-shift schools in winter, there is little " +
      "room for improvement."],
    porukeNaslov: "Key messages",
    trakeNaslov: "Probability that a block includes at least one Poor+ hour, 2025",
    trake: ["current slot", "fixed schedule", "morning check", "ideal choice (known in retrospect)"],
    efNaslov: "Rule efficiency, 2025 (95% confidence interval)",
    pravila: ["Fixed seasonal", "Morning check", "Previous day", "Site-specific fixed"],
    efNapomena: "An efficiency of 0 equals the current slot, and 1 equals the ideal choice.",
    obrNaslov: "Testing in both directions (95% confidence interval)",
    obrKol: ["Fixed, 2024 → 2025", "Fixed, 2025 → 2024", "Morning − fixed, 2024 → 2025",
             "Morning − fixed, 2025 → 2024"],
    obrNapomena: "The arrow shows derivation year → test year. The fixed schedule is similar in both directions, " +
      "whereas the advantage of the morning check was not replicated.",
    sezNaslov: "Efficiency by season (2024 → 2025): fixed schedule / morning check",
    sezone: ["Winter", "Transitional period", "Summer"],
    sezNapomena: "Summer values for schools are based only on teaching days in June (about 10 days).",
    lokNaslov: "Efficiency by monitoring site, 2025 (F = fixed schedule, J = morning check)",
    lokNapomena: "* Site without O3 measurements. ‡ Difference between the current and ideal slot below 2.5 " +
      "percentage points, so the value is unstable. A negative value means the rule performed worse than the " +
      "current slot at that site.",
    lokacija: "Monitoring site",
    dec: "."
  }
};

(function () {
  const stil = document.createElement("style");
  stil.textContent = `
    .rez h3 { margin-top: 1.6rem; }
    .rez ul { padding-left: 1.2rem; } .rez li { margin: 0.35rem 0; }
    .rez-grupa { margin: 0.8rem 0 1rem; } .rez-grupa b { display: block; margin-bottom: 0.3rem; }
    .rez-red { display: grid; grid-template-columns: 210px 1fr 60px; gap: 0.5rem; align-items: center;
               font-size: 0.88rem; margin: 0.15rem 0; }
    .rez-traka { background: #e5e7eb; border-radius: 4px; height: 12px; overflow: hidden; }
    .rez-traka div { height: 100%; }
    .rez-tab { overflow-x: auto; } .rez table { border-collapse: collapse; width: 100%; font-size: 0.86rem; }
    .rez th, .rez td { padding: 0.4rem 0.5rem; border-bottom: 1px solid #e5e7eb; text-align: center; }
    .rez th:first-child, .rez td:first-child { text-align: left; }
    .rez td.ef { font-weight: 600; }`;
  document.head.appendChild(stil);
})();

const BOJE_TRAKA = ["#94a3b8", "#1f5f99", "#d62728", "#1a9850"];
const bojaEf = (v) => v >= 0.7 ? "#1a9850" : v >= 0.5 ? "#91cf60" : v >= 0.3 ? "#fee08b" : v >= 0 ? "#fc8d59" : "#d73027";

function prikaziRezultate(j) {
  const R = REZ_TEKST[j];
  const br = (x, d) => x.toFixed(d).replace(".", R.dec).replace("-", "−");
  const ci = (e) => br(e[0], 2) + " (" + br(e[1], 2) + " – " + br(e[2], 2) + ")";
  const ciZ = (e) => (e[0] > 0 ? "+" : "") + ci(e);
  let h = "<div class='rez'><p>" + R.uvod + "</p><h3>" + R.porukeNaslov + "</h3><ul>" +
    R.poruke.map((p) => "<li>" + p + "</li>").join("") + "</ul>";

  h += "<h3>" + R.trakeNaslov + "</h3>";
  REZ.tipovi.forEach((t) => {
    h += "<div class='rez-grupa'><b>" + R.tip[t] + "</b>";
    REZ.verov[t].forEach((v, i) => {
      h += "<div class='rez-red'><span>" + R.trake[i] + "</span><div class='rez-traka'><div style='width:" +
        (v / 25 * 100) + "%;background:" + BOJE_TRAKA[i] + "'></div></div><span>" + br(v, 1) +
        (j === "sr" ? " %" : "%") + "</span></div>";
    });
    h += "</div>";
  });

  h += "<h3>" + R.efNaslov + "</h3><div class='rez-tab'><table><thead><tr><th></th>" +
    R.pravila.map((p) => "<th>" + p + "</th>").join("") + "</tr></thead><tbody>";
  REZ.tipovi.forEach((t) => {
    h += "<tr><td>" + R.tip[t] + "</td>" + REZ.ef[t].map((e) => "<td>" + ci(e) + "</td>").join("") + "</tr>";
  });
  h += "</tbody></table></div><p class='napomena'>" + R.efNapomena + "</p>";

  h += "<h3>" + R.obrNaslov + "</h3><div class='rez-tab'><table><thead><tr><th></th>" +
    R.obrKol.map((k) => "<th>" + k + "</th>").join("") + "</tr></thead><tbody>";
  REZ.tipovi.forEach((t) => {
    h += "<tr><td>" + R.tip[t] + "</td><td>" + ci(REZ.ef[t][0]) + "</td><td>" + ci(REZ.obrnuto[t][0]) +
      "</td><td>" + ciZ(REZ.razlJutro[t]) + "</td><td>" + ciZ(REZ.obrnuto[t][1]) + "</td></tr>";
  });
  h += "</tbody></table></div><p class='napomena'>" + R.obrNapomena + "</p>";

  h += "<h3>" + R.sezNaslov + "</h3><div class='rez-tab'><table><thead><tr><th></th>" +
    R.sezone.map((s) => "<th>" + s + "</th>").join("") + "</tr></thead><tbody>";
  REZ.tipovi.forEach((t) => {
    h += "<tr><td>" + R.tip[t] + "</td>" +
      REZ.sez[t].map((s) => "<td>" + br(s[0], 2) + " / " + br(s[1], 2) + "</td>").join("") + "</tr>";
  });
  h += "</tbody></table></div><p class='napomena'>" + R.sezNapomena + "</p>";

  h += "<h3>" + R.lokNaslov + "</h3><div class='rez-tab'><table><thead><tr><th>" + R.lokacija + "</th>" +
    REZ.tipovi.map((t) => "<th colspan='2'>" + R.tip[t] + "</th>").join("") + "</tr><tr><th></th>" +
    "<th>F</th><th>J</th>".repeat(4) + "</tr></thead><tbody>";
  REZ.lok.forEach(([n, naziv, o3, v, nest]) => {
    h += "<tr><td>" + n + ". " + naziv + (o3 ? "" : "*") + "</td>";
    v.forEach((x, i) => {
      const znak = nest && (i === 2 || i === 3) ? "‡" : "";
      h += "<td class='ef' style='background:" + bojaEf(x) + ";color:" + (x < 0 ? "white" : "#1f2937") + "'>" +
        br(x, 2) + znak + "</td>";
    });
    h += "</tr>";
  });
  h += "</tbody></table></div><p class='napomena'>" + R.lokNapomena + "</p></div>";
  document.getElementById("rezultati-rada").innerHTML = h;
}

document.getElementById("btn-sr").addEventListener("click", () => prikaziRezultate("sr"));
document.getElementById("btn-en").addEventListener("click", () => prikaziRezultate("en"));
prikaziRezultate("sr");
