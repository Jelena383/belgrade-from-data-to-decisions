// ---------- PROTOKOL ZA USTANOVE (SR / EN) ----------
const PROTOKOL = {
  sr: {
    tab: "Protokol za ustanove",
    dugme: "Štampaj / sačuvaj protokol (PDF)",
    html: `
<p class="napomena">Predlog protokola proistekao iz naučnog rada · verzija 1.0, oktobar 2026 · zasnovano na satnim
merenjima kvaliteta vazduha 2024–2025. Ovo nije zvanični dokument Gradskog zavoda za javno zdravlje Beograd.</p>

<h3>Zašto ovaj protokol</h3>
<p>Kvalitet vazduha u Beogradu menja se tokom dana na predvidiv način. Zimi je vazduh najlošiji uveče i rano
ujutru, a leti popodne, kada raste ozon. Kada se aktivnost napolju pomeri u povoljniji deo dana, smanjuje se
verovatnoća da deca i starije osobe borave napolju u satima sa zagađenim vazduhom.</p>
<p>Aktivnost napolju je dobra za zdravlje i ne treba je ukidati. Cilj protokola je izbor boljeg termina, a ne
odustajanje od boravka napolju.</p>

<h3>Korak 1. Osnovni termin po sezoni</h3>
<p>Planirajte redovnu aktivnost napolju (šetnju, igru, fizičko vaspitanje) u sledećim terminima:</p>
<div class="rez-tab"><table class="prot-tab">
<thead><tr><th>Sezona</th><th>Škola</th><th>Vrtić</th><th>Dom za stare</th></tr></thead>
<tbody>
<tr><td><b>Zima</b> (decembar–februar)</td><td>12–15 h</td><td>11–13 h</td><td>12–14 h</td></tr>
<tr><td><b>Prelazni period</b> (mart–maj, septembar–novembar)</td><td>10–12 h</td><td>10–12 h</td><td>10–12 h</td></tr>
<tr><td><b>Leto</b> (jun–avgust)</td><td>08–10 h</td><td>08–10 h</td><td>08–10 h</td></tr>
</tbody></table></div>
<p><b>Izbegavajte:</b> zimi rano jutro i kasno popodne (posle 16 h), a leti period od 13 do 18 h.</p>
<p><b>Škole koje rade u jednoj smeni</b> mogu zimi i u prelaznom periodu da zadrže termin 12–14 h, jer je on
već povoljan.</p>

<h3>Korak 2. Jutarnja provera (mart–maj i septembar–novembar)</h3>
<p>U prelaznom periodu jutarnja provera dodatno poboljšava izbor termina. Oko 07 h proverite kategoriju
kvaliteta vazduha za sat 06–07 h za monitoring lokaciju najbližu ustanovi, na javno dostupnoj platformi za
kvalitet vazduha ili u kartici „Planiraj aktivnost”.</p>
<div class="rez-tab"><table class="prot-tab">
<thead><tr><th>Kategorija u 06–07 h</th><th>Termin aktivnosti napolju</th></tr></thead>
<tbody>
<tr><td>Dobar ili Prihvatljiv</td><td>08–10 h</td></tr>
<tr><td>Umeren</td><td>10–12 h</td></tr>
<tr><td>Zagađen ili lošije</td><td>12–14 h (vrtić 11–13 h) i primenite korak 3</td></tr>
</tbody></table></div>
<p>Zimi i leti zadržite osnovni termin iz koraka 1, jer jutarnja provera tada retko menja najbolji izbor.</p>

<h3>Korak 3. Kada je vazduh zagađen</h3>
<p>Kada je kategorija <b>Zagađen ili lošija</b> ujutru ili u planiranom terminu, nijedan termin tog dana nije
pouzdano povoljan. Tada:</p>
<ul>
<li>skratite boravak napolju;</li>
<li>izaberite mirniju aktivnost (šetnja umesto trčanja i intenzivne igre);</li>
<li>po mogućnosti organizujte aktivnost u zatvorenom prostoru;</li>
<li>posebno pazite na decu sa astmom i starije osobe sa bolestima srca i pluća.</li>
</ul>

<h3>Važne napomene</h3>
<ul>
<li>Preporuke se zasnivaju na istorijskim merenjima i nisu prognoza kvaliteta vazduha za određeni dan.</li>
<li>Uslovi kod ustanove mogu se razlikovati od uslova na najbližoj monitoring lokaciji, posebno uz prometne
saobraćajnice.</li>
<li>Monitoring lokacije Veliki Crljeni, MZ Ušće Obrenovac i Zemun ne mere ozon, pa su leti potrebni dodatni
oprez i provera podataka sa drugih lokacija.</li>
<li>Protokol će se ažurirati kada budu dostupni podaci za naredne godine.</li>
</ul>

<h3>Osnova protokola</h3>
<p>Protokol je izveden iz satnih podataka 27 automatskih mernih stanica lokalne mreže GZJZ. Termini su
određeni na osnovu podataka za 2024. godinu i provereni na podacima za 2025. godinu, a zatim i obrnuto;
osnovni sezonski raspored se pokazao stabilnim u oba smera. U proveri je osnovni
sezonski raspored smanjio verovatnoću da aktivnost napolju obuhvati sat sa zagađenim vazduhom u domovima za
stare sa 23,1 % na 9,1 %, a u školama koje rade u dve smene sa 18,2 % na 10,4 %.</p>

<h3>Autorka</h3>
<p>Jelena Lukić, ORCID 0009-0008-7883-6402</p>
`
  },
  en: {
    tab: "Protocol for facilities",
    dugme: "Print / save the protocol (PDF)",
    html: `
<p class="napomena">Proposed protocol derived from a research study · version 1.0, October 2026 · based on hourly air
quality measurements 2024–2025. This is not an official document of the Belgrade City Institute of Public Health.</p>

<h3>Why this protocol</h3>
<p>Air quality in Belgrade changes during the day in a predictable way. In winter, air is worst in the evening
and early morning; in summer, in the afternoon, when ozone rises. Moving outdoor activities to a more
favourable part of the day reduces the probability that children and older people are outdoors during hours
with polluted air.</p>
<p>Outdoor activity is good for health and should not be cancelled. The aim of this protocol is a better
choice of time slot, not giving up time outdoors.</p>

<h3>Step 1. Basic time slot by season</h3>
<p>Plan regular outdoor activities (walks, play, physical education) in the following slots:</p>
<div class="rez-tab"><table class="prot-tab">
<thead><tr><th>Season</th><th>School</th><th>Kindergarten</th><th>Nursing home</th></tr></thead>
<tbody>
<tr><td><b>Winter</b> (December–February)</td><td>12–15 h</td><td>11–13 h</td><td>12–14 h</td></tr>
<tr><td><b>Transitional period</b> (March–May, September–November)</td><td>10–12 h</td><td>10–12 h</td><td>10–12 h</td></tr>
<tr><td><b>Summer</b> (June–August)</td><td>08–10 h</td><td>08–10 h</td><td>08–10 h</td></tr>
</tbody></table></div>
<p><b>Avoid:</b> early morning and late afternoon (after 16 h) in winter, and 13–18 h in summer.</p>
<p><b>Single-shift schools</b> can keep the 12–14 h slot in winter and in the transitional period, as it is
already favourable.</p>

<h3>Step 2. Morning check (March–May and September–November)</h3>
<p>In the transitional period, a morning check further improves the choice of slot. Around 07 h, check the
air quality category for 06–07 h at the monitoring site closest to your facility, on a publicly available air
quality platform or in the “Plan an activity” tab.</p>
<div class="rez-tab"><table class="prot-tab">
<thead><tr><th>Category at 06–07 h</th><th>Outdoor activity slot</th></tr></thead>
<tbody>
<tr><td>Good or Fair</td><td>08–10 h</td></tr>
<tr><td>Moderate</td><td>10–12 h</td></tr>
<tr><td>Poor or worse</td><td>12–14 h (kindergarten 11–13 h) and apply step 3</td></tr>
</tbody></table></div>
<p>In winter and summer, keep the basic slot from step 1, because the morning check rarely changes the best
choice in those seasons.</p>

<h3>Step 3. When the air is polluted</h3>
<p>When the category is <b>Poor or worse</b> in the morning or in the planned slot, no slot that day is
reliably favourable. In that case:</p>
<ul>
<li>shorten the time spent outdoors;</li>
<li>choose a calmer activity (walking instead of running and intense play);</li>
<li>if possible, move the activity indoors;</li>
<li>pay particular attention to children with asthma and older people with heart or lung disease.</li>
</ul>

<h3>Important notes</h3>
<ul>
<li>Recommendations are based on historical measurements and are not an air quality forecast for a given
day.</li>
<li>Conditions at the facility may differ from those at the nearest monitoring site, especially near busy
roads.</li>
<li>The Veliki Crljeni, MZ Ušće Obrenovac and Zemun sites do not measure ozone, so extra caution and checking
data from other sites are advised in summer.</li>
<li>The protocol will be updated as data for subsequent years become available.</li>
</ul>

<h3>Basis of the protocol</h3>
<p>The protocol is derived from hourly data from 27 automatic monitoring stations of the GZJZ local network.
Time slots were determined from 2024 data and tested on 2025 data, and then the other way round;
the basic seasonal schedule proved stable in both directions. In this test, the basic seasonal schedule
reduced the probability that an outdoor activity included an hour with polluted air from 23.1% to 9.1% in
nursing homes and from 18.2% to 10.4% in two-shift schools.</p>

<h3>Author</h3>
<p>Jelena Lukić, ORCID 0009-0008-7883-6402</p>
`
  }
};

(function () {
  const stil = document.createElement("style");
  stil.textContent = `
    .prot h3 { margin-top: 1.4rem; color: var(--plava); }
    .prot ul { padding-left: 1.2rem; } .prot li { margin: 0.3rem 0; }
    table.prot-tab { border-collapse: collapse; width: 100%; font-size: 0.92rem; margin: 0.4rem 0; }
    table.prot-tab th { background: #eef4fb; text-align: left; padding: 0.45rem 0.6rem; }
    table.prot-tab td { padding: 0.45rem 0.6rem; border-bottom: 1px solid #e5e7eb; }`;
  document.head.appendChild(stil);
})();

function prikaziProtokol(j) {
  const P = PROTOKOL[j];
  document.getElementById("tab-protokol").textContent = P.tab;
  document.getElementById("protokol-naslov").textContent = P.tab;
  document.getElementById("stampaj-protokol").textContent = P.dugme;
  document.getElementById("protokol").innerHTML = "<div class='prot'>" + P.html + "</div>";
}

document.getElementById("btn-sr").addEventListener("click", () => prikaziProtokol("sr"));
document.getElementById("btn-en").addEventListener("click", () => prikaziProtokol("en"));
document.getElementById("stampaj-protokol").addEventListener("click", () => window.print());
prikaziProtokol("sr");
