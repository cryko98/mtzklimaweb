/* MTZ Klíma – main.js v4 */

/* ================================================
   FORDÍTÁSOK
   ================================================ */
const t = {
  hu: {
    'topbar.hours':   'H–P: 8:00–17:00',
    'nav.services':   'Szolgáltatások',
    'nav.about':      'Rólunk',
    'nav.products':   'Termékek',
    'nav.types':      'Típusok',
    'nav.contact':    'Kapcsolat',
    'nav.call':       'Hívjon minket',
    'hero.tag':       'Traktor és gépjármű klíma szakértő',
    'hero.h1.1':      'Klímarendszer beépítés',
    'hero.h1.2':      'és javítás –',
    'hero.h1.3':      'bármilyen járműbe',
    'hero.desc':      'F-gáz VI–VII. minősítéssel rendelkező szakemberek tervezik és szerelik be a klímarendszert az Ön traktorába, autójába vagy munkagépébe – 1 év garanciával, kiszállással az egész ország területére.',
    'hero.cta1':      'Ajánlatot kérek',
    'hero.cta2':      'Szolgáltatások',
    'info.phone':     'Telefon',
    'info.email':     'E-mail',
    'info.address':   'Cím',
    'info.hours':     'Nyitvatartás',
    'info.hours.val': 'Hétfő–Péntek, 8:00–17:00',
    'stat1.sup':      'év',
    'stat1.label':    'garancia',
    'stat2.label':    'VI–VII. minősítés',
    'stat3.label':    'MTZ típus',
    'trust.certified':'Szakképzett technikusok',
    'trust.onsite':   'Kiszállás az ügyfélhez',
    'trust.warranty': '1 év garancia',
    'trust.vehicles': 'Traktor · Autó · Kombájn',
    'ticker.items':   ['Bármilyen traktor klimatizálása', 'Autó klíma javítás és töltés', 'MTZ 820 · 952 · 892 · 1025', '1 év teljes garancia', 'F-gáz VI–VII. minősítés', 'Kiszállás egész Magyarországon', 'Román határ menti kiszállás', 'Kombájn és munkagép klíma', 'Állófűtés beépítés – AUTOTERM'],
    'services.pre':   'Szolgáltatásaink',
    'services.h2':    'Mindent egy helyen – tervezéstől a garanciáig',
    'services.desc':  'Klímabeépítéstől az elektromos munkákon át az állófűtés beszerelésig vállalunk minden feladatot – bármilyen traktorban, autóban vagy munkagépben.',
    's1.title':       'Klímarendszer beépítés',
    's1.desc':        'Új klímarendszerek tervezése és beszerelése bármilyen traktorba és munkagépbe. A kompresszor elhelyezése egyedileg, a motor típusától függően kerül kialakításra – a rendszer a legnagyobb nyári hőségben is megbízhatóan hűt.',
    's2.title':       'Klímarendszer javítás',
    's2.desc':        'Kompresszor felújítás, kondenzátor javítás, hűtőközeg töltés. A leggyakoribb hibák rendszerszivárgásokból erednek, amelyek nitrogénes nyomáspróbával gyorsan és pontosan lokalizálhatók.',
    's3.title':       'Autó és gépjármű klíma',
    's3.desc':        'Személyautók, teherautók és egyéb gépjárművek klímarendszereinek javítása, karbantartása és töltése. Gyors, megbízható szerviz – helyszínen vagy Debrecenben.',
    's4.title':       'Kombájn és munkagép klimatizálás',
    's4.desc':        'Kombájnok, betakarítógépek és egyéb munkagépek klímarendszereinek tervezése és beépítése. Minden géptípusra egyedi megoldást dolgozunk ki a hatékony és tartós hűtés érdekében.',
    's5.title':       'Fertőtlenítés és belső tisztítás',
    's5.desc':        'Ózongenerátor kezeléssel – az ózon visszaalakul oxigénné, nyomot sem hagy – vagy habos permettel, amely elpusztítja a baktériumokat és szagokat, miközben védi az elpárologtató komponenseket.',
    's6.title':       'Elektromos szerelés',
    's6.desc':        'Önindító és generátor javítás, gyújtáshiba diagnosztika, világítás szerelés és fedélzeti számítógép hibakód olvasás mezőgazdasági gépeken és gépjárműveken.',
    'about.pre':      'Rólunk',
    'about.quote':    '„Az általam összeállított rendszerek tartósak a működésben, könnyen karbantarthatók – olyan hűtési paraméterekkel, hogy a legnagyobb melegben is hatékonyan működjenek."',
    'about.cite':     'Vígvári Sándor — gépészmérnök, tulajdonos',
    'about.robot':    '<strong>Vígvári Sándor</strong> ezen felül HI-Target RTK robotkormány rendszerek telepítésével is foglalkozik. Érdeklődjön elérhetőségeinken.',
    'a1.title':       'F-gáz VI–VII. minősítés',
    'a1.desc':        'A legmagasabb szintű szakképesítés hűtőközeg kezelésre – minden technikusunk rendelkezik ezzel a tanúsítvánnyal.',
    'a2.title':       '1 év teljes körű garancia',
    'a2.desc':        'Minden újonnan beszerelt rendszerre 1 év garanciát vállalunk, kötelező 6 hónapos és garanciavégi ellenőrzéssel.',
    'a3.title':       'Kiszállás az ügyfélhez',
    'a3.desc':        'A munkák nagy részét helyszínen végezzük. Debrecenből az egész ország területén – sőt, a román határ menti településekre is vállalunk kiszállást.',
    'a4.title':       'Tartós, üzembiztos kivitelezés',
    'a4.desc':        'Könnyen karbantartható rendszerek, amelyek a piaci igényekhez igazítva, folyamatos szakmai fejlődés mellett készülnek.',
    'comp.pre':       'Alapelemek',
    'comp.h2':        'A hűtési ciklus öt komponense',
    'comp.desc':      'Minden klímarendszer ugyanazon az öt alapkomponensen alapul – ezeket tervezzük, szereljük és tartjuk karban.',
    'c1.name':        'Kompresszor',
    'c1.desc':        'A kis nyomású hűtőközeg gőzt összenyomja és a kondenzátor felé továbbítja, megemelve a nyomást és a hőmérsékletet.',
    'c2.name':        'Kondenzátor',
    'c2.desc':        'A ventilátor segítségével a hűtőközeg leadja hőjét a külső levegőnek, és gőzből folyékony halmazállapotba alakul át.',
    'c3.name':        'Szárító-szűrő',
    'c3.desc':        'Kiszűri a szennyeződéseket és a nedvességet a hűtőközegből, megvédve a rendszer többi elemét.',
    'c4.name':        'Expanziós szelep',
    'c4.desc':        'A folyékony hűtőközeg szűk fúvókán áthaladva nyomást veszít, mielőtt az elpárologtatóba érne.',
    'c5.name':        'Elpárologtató',
    'c5.desc':        'A kabinlevegő átadja hőjét a hűtőközegnek, amely elpárolog. A lehűlt levegő visszaáramlik a fülkébe.',
    'prod.pre':       'Termék',
    'prod.h2':        'AUTOTERM AIR 2D állófűtés',
    'prod.desc':      'Télen hideg indulás előtt már meleg kabinban kezdheti a munkát – a motor beindítása nélkül is fűt.',
    'prod.kat':       'Dízel levegőfűtő',
    'prod.p1':        'Kompakt dízel levegőfűtő traktorokhoz és munkagépekhez. Hideg reggeleken már a munkakezdés előtt felmelegíti a kabint – a traktor motorjának beindítása nélkül üzemel.',
    'prod.f1':        'Motor nélküli, önálló üzemmód',
    'prod.f2':        'Kompakt méret, könnyedén szerelhető',
    'prod.f3':        'Teljes körű beszerelés és beállítás',
    'prod.f4':        'Garancia és utógondozás',
    'prod.cta':       'Érdeklődöm',
    'param.power':    'Teljesítmény',
    'param.voltage':  'Feszültség',
    'param.fuel':     'Üzemanyag',
    'param.fuel.val': 'Dízel',
    'types.pre':      'Kompatibilis típusok',
    'types.h2':       'Melyik traktorhoz szereljük?',
    'types.desc':     'Az alábbi MTZ típusokhoz rendszeresen végzünk klímabeépítést – de bármilyen traktorhoz, kombájnhoz vagy munkagéphez vállalunk egyedi megoldást.',
    'types.other':    'Egyéb – kérdezze meg',
    'warranty.label': 'év garancia minden beépítésre',
    'w1':             'F-gáz VI–VII. minősített technikusok végzik a munkát',
    'w2':             'Kötelező 6 hónapos és garanciavégi ellenőrzés',
    'w3':             'Tartós, üzembiztos rendszerek a legnagyobb hőségben is',
    'w4':             'Kiszállás – egész Magyarország + román határ menti települések',
    'warranty.cta':   'Ajánlatot kérek',
    'contact.pre':    'Kapcsolat',
    'contact.h2':     'Vegye fel velünk a kapcsolatot',
    'contact.desc':   'Ajánlatkérés, időpontfoglalás vagy kérdés esetén írjon vagy hívjon bennünket – hétköznap 8 és 17 óra között.',
    'c.phone':        'Telefon',
    'c.email':        'E-mail',
    'c.address':      'Székhely',
    'c.hours':        'Hétfő–Péntek: 8:00–17:00',
    'romania.title':  'Romániai kiszállás is elérhető!',
    'romania.desc':   'A debreceni határ közelsége miatt a román határ menti településekre – Nagyvárad (Oradea), Szatmárnémeti (Satu Mare) és környékére – is vállalunk kiszállást. Érdeklődjön telefonon!',
    'form.title':     'Írjon nekünk',
    'form.name':      'Neve',
    'form.phone':     'Telefon',
    'form.email':     'E-mail cím',
    'form.subject':   'Tárgy',
    'form.opt0':      'Válasszon témát…',
    'form.opt1':      'Klímarendszer beépítés',
    'form.opt2':      'Klímarendszer javítás',
    'form.opt3':      'Autó klíma szerviz',
    'form.opt4':      'Állófűtés (AUTOTERM)',
    'form.opt5':      'Elektromos szerelés',
    'form.opt6':      'Egyéb kérdés',
    'form.message':   'Üzenet',
    'form.placeholder':'Géptípus, probléma rövid leírása…',
    'form.submit':    'Üzenet elküldése',
    'form.success':   'Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.',
    'footer.desc':    'Bármilyen traktor, autó és mezőgazdasági gép klímarendszer-szakértője Debrecenből. F-gáz VI–VII. minősítéssel, 1 év garanciával.',
    'footer.services':'Szolgáltatások',
    'footer.contact': 'Elérhetőség',
    'footer.heating': 'állófűtés',
    'footer.hours':   'H–P: 8:00–17:00',
    'footer.copy':    '© 2025 MTZ Klíma – Vígvári Sándor. Minden jog fenntartva.',
    'float.call':     '+36 (30) 978 0784',
  },

  ro: {
    'topbar.hours':   'L–V: 8:00–17:00',
    'nav.services':   'Servicii',
    'nav.about':      'Despre noi',
    'nav.products':   'Produse',
    'nav.types':      'Tipuri',
    'nav.contact':    'Contact',
    'nav.call':       'Sunați-ne',
    'hero.tag':       'Expert în climatizare pentru tractoare și vehicule',
    'hero.h1.1':      'Montaj și reparații',
    'hero.h1.2':      'sistem de climatizare –',
    'hero.h1.3':      'pentru orice vehicul',
    'hero.desc':      'Specialiști cu certificare F-gaz VI–VII proiectează și montează sistemul de climatizare în tractorul, mașina sau utilajul dvs. – garanție 1 an, deplasare la client pe tot teritoriul Ungariei și în localitățile de la granița cu România.',
    'hero.cta1':      'Solicit ofertă',
    'hero.cta2':      'Servicii',
    'info.phone':     'Telefon',
    'info.email':     'E-mail',
    'info.address':   'Adresă',
    'info.hours':     'Program',
    'info.hours.val': 'Luni–Vineri, 8:00–17:00',
    'stat1.sup':      'an',
    'stat1.label':    'garanție',
    'stat2.label':    'Certificare VI–VII',
    'stat3.label':    'tipuri MTZ',
    'trust.certified':'Tehnicieni calificați',
    'trust.onsite':   'Deplasare la client',
    'trust.warranty': 'Garanție 1 an',
    'trust.vehicles': 'Tractor · Auto · Combină',
    'ticker.items':   ['Climatizare pentru orice tractor', 'Reparare și reîncărcare aer condiționat auto', 'MTZ 820 · 952 · 892 · 1025', 'Garanție completă 1 an', 'Certificare F-gaz VI–VII', 'Deplasare în toată Ungaria', 'Deplasare la granița cu România', 'Climatizare combine și utilaje', 'Montare încălzitor staționar AUTOTERM'],
    'services.pre':   'Serviciile noastre',
    'services.h2':    'Tot într-un loc – de la proiectare la garanție',
    'services.desc':  'De la instalarea climatizării până la lucrări electrice și montarea încălzitoarelor – pentru orice tractor, mașină sau utilaj agricol.',
    's1.title':       'Instalare sistem de climatizare',
    's1.desc':        'Proiectarea și montarea de noi sisteme de climatizare în orice tractor și utilaj agricol. Amplasarea compresorului este realizată individual, în funcție de tipul motorului – sistemul funcționează fiabil chiar și în cele mai mari călduri.',
    's2.title':       'Repararea sistemului de climatizare',
    's2.desc':        'Recondiționare compresor, reparare condensator, încărcare cu agent frigorific. Cele mai frecvente defecte provin din scurgeri ale sistemului, care pot fi localizate rapid prin test de presiune cu azot.',
    's3.title':       'Climatizare auto și vehicule',
    's3.desc':        'Repararea, întreținerea și reîncărcarea sistemelor de climatizare pentru autoturisme, camioane și alte vehicule. Service rapid și de încredere – la client sau în Debrecen.',
    's4.title':       'Climatizare combine și utilaje',
    's4.desc':        'Proiectarea și instalarea sistemelor de climatizare pentru combine, echipamente de recoltare și alte utilaje. Soluții personalizate pentru fiecare tip de mașină.',
    's5.title':       'Dezinfectare și curățare interioară',
    's5.desc':        'Cu generator de ozon – ozonul se transformă înapoi în oxigen, fără urme – sau cu spray spumos, care elimină bacteriile și mirosurile, protejând componentele evaporatorului.',
    's6.title':       'Lucrări electrice',
    's6.desc':        'Repararea demarorului și alternatorului, diagnosticarea defecțiunilor de aprindere, repararea iluminatului și citirea codurilor de eroare ale calculatorului de bord pe utilaje și vehicule.',
    'about.pre':      'Despre noi',
    'about.quote':    '„Sistemele pe care le asamblăm sunt durabile în funcționare, ușor de întreținut – cu parametri de răcire care asigură funcționarea eficientă chiar și la cele mai mari temperaturi."',
    'about.cite':     'Vígvári Sándor — inginer mecanic, proprietar',
    'about.robot':    '<strong>Vígvári Sándor</strong> se ocupă și cu instalarea sistemelor de ghidare automată HI-Target RTK. Contactați-ne pentru detalii.',
    'a1.title':       'Certificare F-gaz VI–VII',
    'a1.desc':        'Cea mai înaltă calificare profesională pentru manipularea agenților frigorifici – toți tehnicienii noștri dețin această certificare.',
    'a2.title':       'Garanție completă 1 an',
    'a2.desc':        'Oferim garanție de 1 an pentru fiecare sistem instalat, cu verificare obligatorie la 6 luni și la sfârșitul perioadei de garanție.',
    'a3.title':       'Deplasare la client',
    'a3.desc':        'Cea mai mare parte a lucrărilor le efectuăm la fața locului. Ne deplasăm din Debrecen pe tot teritoriul Ungariei – inclusiv în localitățile de la granița cu România.',
    'a4.title':       'Execuție durabilă și fiabilă',
    'a4.desc':        'Sisteme ușor de întreținut, realizate cu dezvoltare profesională continuă și adaptate cerințelor pieței.',
    'comp.pre':       'Componente de bază',
    'comp.h2':        'Cele cinci componente ale ciclului de răcire',
    'comp.desc':      'Orice sistem de climatizare se bazează pe aceleași cinci componente fundamentale – pe care le proiectăm, montăm și întreținem.',
    'c1.name':        'Compresor',
    'c1.desc':        'Comprimă vaporii de agent frigorific la presiune joasă și îi transmite spre condensator, ridicând presiunea și temperatura.',
    'c2.name':        'Condensator',
    'c2.desc':        'Cu ajutorul ventilatorului, agentul frigorific cedează căldura aerului exterior și trece din stare gazoasă în stare lichidă.',
    'c3.name':        'Filtru-uscător',
    'c3.desc':        'Filtrează impuritățile și umiditatea din agentul frigorific, protejând celelalte componente ale sistemului.',
    'c4.name':        'Ventil de expansiune',
    'c4.desc':        'Agentul frigorific lichid trece printr-o duză îngustă și își pierde presiunea înainte de a ajunge la evaporator.',
    'c5.name':        'Evaporator',
    'c5.desc':        'Aerul din cabină cedează căldura agentului frigorific, care se evaporă. Aerul răcit revine în habitaclu.',
    'prod.pre':       'Produs',
    'prod.h2':        'AUTOTERM AIR 2D încălzitor staționar',
    'prod.desc':      'Iarna, înainte de a porni motorul, cabina este deja caldă – funcționează fără a porni motorul tractorului.',
    'prod.kat':       'Încălzitor cu aer diesel',
    'prod.p1':        'Încălzitor compact cu aer diesel pentru tractoare și utilaje agricole. În dimineți reci, cabina este deja caldă înainte de începerea lucrului – funcționează independent, fără a porni motorul tractorului.',
    'prod.f1':        'Funcționare autonomă, fără motor',
    'prod.f2':        'Dimensiuni compacte, ușor de montat',
    'prod.f3':        'Instalare și configurare completă',
    'prod.f4':        'Garanție și service post-vânzare',
    'prod.cta':       'Mă interesează',
    'param.power':    'Putere',
    'param.voltage':  'Tensiune',
    'param.fuel':     'Combustibil',
    'param.fuel.val': 'Motorină',
    'types.pre':      'Tipuri compatibile',
    'types.h2':       'Pentru ce tractoare montăm?',
    'types.desc':     'Efectuăm frecvent montaje de climatizare pentru tipurile MTZ enumerate – dar acceptăm și soluții personalizate pentru orice tractor, combină sau utilaj.',
    'types.other':    'Alt utilaj – întrebați-ne',
    'warranty.label': 'an garanție pentru fiecare instalare',
    'w1':             'Lucrările sunt efectuate de tehnicieni certificați F-gaz VI–VII',
    'w2':             'Verificare obligatorie la 6 luni și la sfârșitul garanției',
    'w3':             'Sisteme durabile și fiabile chiar și în căldurile extreme',
    'w4':             'Deplasare – toată Ungaria + localități de la granița cu România',
    'warranty.cta':   'Solicit ofertă',
    'contact.pre':    'Contact',
    'contact.h2':     'Luați legătura cu noi',
    'contact.desc':   'Pentru oferte, programări sau întrebări, scrieți-ne sau sunați-ne – suntem disponibili luni–vineri între orele 8 și 17.',
    'c.phone':        'Telefon',
    'c.email':        'E-mail',
    'c.address':      'Sediu',
    'c.hours':        'Luni–Vineri: 8:00–17:00',
    'romania.title':  'Deplasăm și în România!',
    'romania.desc':   'Datorită proximității față de granița cu România, ne deplasăm și în localitățile de frontieră – Oradea (Nagyvárad), Satu Mare (Szatmárnémeti) și împrejurimi. Sunați-ne pentru detalii!',
    'form.title':     'Scrieți-ne',
    'form.name':      'Numele dvs.',
    'form.phone':     'Telefon',
    'form.email':     'Adresă e-mail',
    'form.subject':   'Subiect',
    'form.opt0':      'Alegeți un subiect…',
    'form.opt1':      'Instalare sistem de climatizare',
    'form.opt2':      'Repararea sistemului de climatizare',
    'form.opt3':      'Service climatizare auto',
    'form.opt4':      'Încălzitor staționar (AUTOTERM)',
    'form.opt5':      'Lucrări electrice',
    'form.opt6':      'Altă întrebare',
    'form.message':   'Mesaj',
    'form.placeholder':'Tipul utilajului, descrierea scurtă a problemei…',
    'form.submit':    'Trimite mesajul',
    'form.success':   'Vă mulțumim pentru mesaj! Vă vom contacta în cel mai scurt timp.',
    'footer.desc':    'Expert în climatizare pentru tractoare, autoturisme și utilaje agricole din Debrecen. Certificare F-gaz VI–VII, garanție 1 an.',
    'footer.services':'Servicii',
    'footer.contact': 'Contact',
    'footer.heating': 'încălzitor staționar',
    'footer.hours':   'L–V: 8:00–17:00',
    'footer.copy':    '© 2025 MTZ Klíma – Vígvári Sándor. Toate drepturile rezervate.',
    'float.call':     '+36 (30) 978 0784',
  }
};

/* ================================================
   NYELV VÁLTÓ
   ================================================ */
let currentLang = localStorage.getItem('mtz-lang') || 'hu';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('mtz-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  const tr = t[lang];

  // data-i18n szövegek
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = tr[key];
      } else {
        el.innerHTML = tr[key];
      }
    }
  });

  // placeholder külön attrként
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (tr[key] !== undefined) el.placeholder = tr[key];
  });

  // Lang gombok állapota
  document.querySelectorAll('.nav__lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Ticker újraépítés
  buildTicker(lang);
}

document.querySelectorAll('.nav__lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});

/* ================================================
   TICKER
   ================================================ */
function buildTicker(lang) {
  const items = t[lang]['ticker.items'] || [];
  const ticker = document.getElementById('tickerInner');
  if (!ticker) return;

  const makeSet = () => items.map(item =>
    `<span class="ticker__elem">${item}<span class="ticker__dot"></span></span>`
  ).join('');

  ticker.innerHTML = makeSet() + makeSet();
}

/* ================================================
   MOBILE BURGER
   ================================================ */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  navLinks.classList.toggle('nyitva', open);
  burger.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('nyitva');
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* ================================================
   PARALLAX HERO
   ================================================ */
const heroBg = document.getElementById('heroBg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroBg.style.transform = `translateY(${y * 0.28}px)`;
    }
  }, { passive: true });
}

/* ================================================
   FLOATING CTA GOMB
   ================================================ */
const floatCta = document.getElementById('floatCta');
window.addEventListener('scroll', () => {
  if (floatCta) floatCta.classList.toggle('lathato', window.scrollY > 500);
}, { passive: true });

/* ================================================
   SCROLL REVEAL
   ================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

/* ================================================
   FORM
   ================================================ */
const form = document.getElementById('kapcsolatForm');
const siker = document.getElementById('siker');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    siker.classList.add('lathato');
    form.reset();
    setTimeout(() => siker.classList.remove('lathato'), 6000);
  });
}

/* ================================================
   INIT
   ================================================ */
applyLang(currentLang);
