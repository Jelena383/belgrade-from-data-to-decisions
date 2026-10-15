const OBJASNJENJA = {
  sr: `
<h3>Šta je Evropski indeks kvaliteta vazduha (EAQI)?</h3>
<p>Revidirani EAQI Evropske agencije za životnu sredinu svrstava svaki sat u jednu od šest kategorija:
Dobar, Prihvatljiv, Umeren, Zagađen, Veoma zagađen i Izuzetno zagađen. Kategorija se određuje iz satnih
koncentracija PM2.5, PM10, NO2, O3 i SO2, a ukupnu kategoriju određuje najlošiji polutant. Granice
kategorija zasnovane su na smernicama Svetske zdravstvene organizacije iz 2021. godine.</p>

<h3>Šta je Poor+ sat i dvočasovni blok?</h3>
<p>Poor+ sat je sat u kategoriji Zagađen ili lošijoj. Aktivnost napolju posmatra se kao dvočasovni blok
(npr. 10–12 h), a nepovoljnim se smatra blok koji obuhvata bar jedan Poor+ sat. Verovatnoća u aplikaciji
je udeo dana u 2024. i 2025. godini u kojima je taj blok na izabranoj monitoring lokaciji obuhvatio bar
jedan Poor+ sat.</p>

<h3>Kako nastaje preporuka?</h3>
<p><b>Fiksni sezonski raspored</b> bira termin koji je, na nivou cele mreže monitoring lokacija, imao
najmanju verovatnoću Poor+ bloka, posebno za zimu (decembar–februar), leto (jun–avgust) i prelazni period.
Raspored je izveden iz podataka za jednu godinu i proveren na podacima za drugu, u oba smera, i u obe
provere se pokazao stabilnim.</p>
<p><b>Jutarnja provera</b> dodatno uzima u obzir kategoriju EAQI u satu 06–07 h: kada je jutro dobro,
bira se raniji termin, a kada je umereno ili lošije, kasniji. Ona se primenjuje samo u prelaznom periodu
(mart–maj i septembar–novembar), jer zimi i leti provera u oba smera nije pokazala doslednu korist, a
zimi je mogla i da odmogne.</p>

<h3>Šta je efikasnost pravila?</h3>
<p>Efikasnost pokazuje koliki deo mogućeg smanjenja pravilo ostvaruje. Poredi se sa postojećim terminom
(status quo) i sa idealnim izborom, odnosno najboljim terminom tog dana, koji je poznat tek naknadno.
Vrednost 0 znači da pravilo nije bolje od postojećeg termina, a 1 da dostiže idealni izbor. Efikasnost je
računata na ukupnom broju dana po sezoni, a ne za pojedinačne dane. Ustanove sa manje mogućih termina
(npr. vrtić ili jednosmenska škola) imaju i manji prostor za poboljšanje, pa efikasnost ne treba direktno
porediti između tipova ustanova.</p>

<h3>Kako koristiti aplikaciju?</h3>
<p>Izaberite monitoring lokaciju najbližu ustanovi, tip ustanove i datum. U prelaznom periodu možete ujutru
proveriti kategoriju kvaliteta vazduha za sat 06–07 h na javno dostupnoj platformi i uneti je, pa će
preporuka to uzeti u obzir. Kada je kategorija Zagađen ili lošija, nijedan termin nije pouzdano povoljan,
pa je bolje skratiti aktivnost, smanjiti njen intenzitet ili je organizovati u zatvorenom prostoru.</p>

<h3>Ograničenja</h3>
<p>Preporuke se zasnivaju na istorijskim podacima za dve godine i nisu prognoza za izabrani dan. Uslovi kod
pojedinačne ustanove mogu se razlikovati od uslova na najbližoj monitoring lokaciji. Tri lokacije ne mere
ozon (Veliki Crljeni, MZ Ušće Obrenovac i Zemun), pa njihove verovatnoće ne obuhvataju ozon. Letnje
vrednosti za škole zasnivaju se samo na nastavnim danima u junu. Fizička aktivnost napolju je korisna za
zdravlje, pa je cilj aplikacije bolji izbor termina, a ne odustajanje od aktivnosti.</p>

<h3>Izvor i citiranje</h3>
<p>Podaci: Gradski zavod za javno zdravlje Beograd, satni podaci 27 automatskih mernih stanica lokalne
mreže, 2024–2025, validirani. Metoda: Lukić, J. (2026). <i>Od podataka do odluke: pravila odlučivanja za
planiranje aktivnosti napolju u osetljivim objektima prema satnim podacima o kvalitetu vazduha u Beogradu (2024–2025)</i>
[Rukopis u pripremi]. Verzija aplikacije 1.1, oktobar 2026.</p>
`,
  en: `
<h3>What is the European Air Quality Index (EAQI)?</h3>
<p>The revised EAQI of the European Environment Agency assigns each hour to one of six categories: Good,
Fair, Moderate, Poor, Very poor and Extremely poor. The category is based on hourly concentrations of
PM2.5, PM10, NO2, O3 and SO2, and the overall category is set by the worst pollutant. Category thresholds
are based on the 2021 World Health Organization guidelines.</p>

<h3>What is a Poor+ hour and a 2-hour block?</h3>
<p>A Poor+ hour is an hour in the Poor category or worse. An outdoor activity is treated as a 2-hour block
(e.g., 10–12 h), and a block is considered adverse if it includes at least one Poor+ hour. The probability
shown in the app is the share of days in 2024 and 2025 on which that block at the selected monitoring site
included at least one Poor+ hour.</p>

<h3>How is the recommendation made?</h3>
<p>The <b>fixed seasonal schedule</b> selects the time slot that had the lowest probability of a Poor+
block across the whole monitoring network, separately for winter (December–February), summer
(June–August) and the transitional period. It was derived from one year of data and tested on the other,
in both directions, and proved stable in both tests.</p>
<p>The <b>morning check</b> also takes into account the EAQI category at 06–07 h: after a good morning an
earlier slot is chosen, after a moderate or worse morning a later one. It is applied only in the
transitional period (March–May and September–November), because in winter and summer testing in both
directions showed no consistent benefit, and in winter it could even be counterproductive.</p>

<h3>What is rule efficiency?</h3>
<p>Efficiency shows what share of the possible reduction a rule achieves. It compares the rule with the
current time slot (status quo) and with the ideal choice, i.e., the best slot of the day, known only in
retrospect. A value of 0 means the rule is no better than the current slot, and 1 means it matches the
ideal choice. Efficiency was calculated on the total number of days per season, not for single days.
Facilities with fewer possible slots (e.g., kindergartens or single-shift schools) have less room for
improvement, so efficiency should not be compared directly across facility types.</p>

<h3>How to use the app</h3>
<p>Select the monitoring site closest to your facility, the type of facility and the date. In the
transitional period, you can check the air quality category for 06–07 h in the morning on a publicly
available platform and enter it, and the recommendation will take it into account. When the category is
Poor or worse, no slot is reliably favourable, so it is better to shorten the activity, reduce its
intensity or move it indoors.</p>

<h3>Limitations</h3>
<p>Recommendations are based on two years of historical data and are not a forecast for the selected day.
Conditions at an individual facility may differ from those at the nearest monitoring site. Three sites do
not measure ozone (Veliki Crljeni, MZ Ušće Obrenovac and Zemun), so their probabilities do not include
ozone. Summer values for schools are based only on teaching days in June. Outdoor physical activity
benefits health, so the aim of the app is a better choice of time slot, not giving up the activity.</p>

<h3>Source and citation</h3>
<p>Data: Belgrade City Institute of Public Health (GZJZ), hourly data from 27 automatic monitoring stations
of the local network, 2024–2025, validated. Method: Lukić, J. (2026). <i>From data to decisions: Decision
rules for planning outdoor activities in sensitive facilities based on hourly air quality data in Belgrade, Serbia (2024–2025)</i>
[Manuscript in preparation]. App version 1.1, October 2026.</p>
`
};

function prikaziObjasnjenja(j) {
  document.getElementById("objasnjenja").innerHTML = OBJASNJENJA[j];
}
document.getElementById("btn-sr").addEventListener("click", () => prikaziObjasnjenja("sr"));
document.getElementById("btn-en").addEventListener("click", () => prikaziObjasnjenja("en"));
prikaziObjasnjenja("sr");
