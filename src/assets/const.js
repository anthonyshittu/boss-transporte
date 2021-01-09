const reviews = [
  {
    comment:
      '“Die Firma hat meinen Umzug binnen 2 Tagen gerettet, als sie für einen anderen Spediteur einsprang. Sehr solide, preisgünstig und zuverlässig. Die Mitarbeiter waren super, kann sie nur weiterempfehlen.“',
    name: '-Claudia B. Google Bewertung',
    rating: 5,
  },
  {
    comment:
      '“Ich bin sehr zufrieden mit der Arbeit von Bosstransporte. Die Terminvergabe erfolgte schnell und die Arbeit war erste Klasse. Alle Gegenstände wurden gut verpackt und gesichert, sodass beim transport nichts zu Bruch ging. 5 Sterne!“',
    name: '– Andre Z. Google Bewertung',
    rating: 5,
  },
  {
    comment:
      '“Super entspannter Umzug innerhalb Berlins. Gut gelauntes, auf Kundenwünsche eingehendes Team! Beim nächsten Umzug auf jeden Fall wieder! Und Super Preis, danke!“',
    name: '– Elena W. Facebook',
    rating: 5,
  },
];

const services = [
  {
    title: 'Umzüge',
    subTitle: 'Umzug in Berlin? Wir sind für sie da!',
    buttonText: `MEHR INFOS ${'>'}`,
  },
  {
    title: 'Möbeltaxi',
    subTitle: 'Ihr günstiges Möbeltaxi in Berlin',
    buttonText: `MEHR INFOS ${'>'}`,
  },
  {
    title: 'Entsorgung',
    subTitle:
      'Günstige Entrümpelung, Entsorgung und Wohnungsauflösung in Berlin',
    buttonText: `MEHR INFOS ${'>'}`,
  },
];

const stats = [
  {
    title: 1000,
    subTitle: 'Zufriedene Kunden pro Jahr',
  },
  {
    title: 10,
    subTitle: 'Jahre im Geschäft',
  },
  {
    title: 2,
    subTitle: 'Standorte in Berlin',
  },
];

const umzuge = [
  {
    title: 'Ihr Umzugsunternehmen in Berlin: Boss Transporte',
    subTitle: `Ein Umzug ist immer mit Arbeit, Zeit und Kosten verbunden. Wir sorgen dafür, dass ihr Umzug schnell, stressfrei und kostengünstig abläuft – ganz egal ob privat oder gewerblich. Dafür planen und realisieren wir ihren Umzug von Anfang bis zum Ende. Denn nur ein gut geplanter Umzug schafft einen detaillierten Überblick über die benötigte Zeit und die anstehenden Kosten. 

Die Zufriedenheit unserer Kunden hat höchste Priorität. Daher stimmen wir unser Angebot und unsere Leistungen exakt auf ihre Bedürfnisse ab und bieten ihnen besten Service durch unsere fachmännisch arbeitenden Umzugshelfer. Selbstverständlich bieten wir ihnen auch für jede Umzugsgröße die genau passenden Fahrzeuge. Gerne stehen wir ihnen bei allen Bereichen ihres Umzugs zur Seite und erstellen ein individuelles Angebot.`,
    buttonText: `UNVERBINDLICHES ANGEBOT ANFORDERN ${'>'}`,
  },
  {
    title: 'Was kostet ein professionelles Umzugsunternehmen in Berlin?',
    subTitle: `Kein seriöses Umzugsunternehmen kann ihnen einen Preis nennen oder ein gutes Angebot machen, ohne die relevanten Informationen ihres Umzugs vorab geprüft zu haben. Für ein individuelles Angebot können sie uns einfach den Umfang ihres Umzugs über das Kontaktformular mitteilen. Dazu gehören neben dem Umzugsvolumen (Anzahl und Größe der zu transportierenden Gegenstände) selbstverständlich auch der Start- und Zielort sowie alle gewünschte Serviceleistungen. Gerne besprechen wir mit ihnen auch telefonisch alle wichtigen Details.

Sollten sie sich noch nicht ganz im Klaren sein, welchen Umfang ihr Umzug voraussichtlich haben wird, vereinbaren wir mit ihnen gerne einen persönlichen Besichtigungstermin und nehmen vor Ort eine professionelle Einschätzung vor. Innerhalb Berlins ist die Besichtigung zur Erstellung eines Angebotes vollkommen kostenfrei für sie. Damit erhalten sie das Angebot für ihren Umzug ganz ohne Risiken und Verpflichtungen.`,
  },
  {
    title: 'Ihr Umzugsservice für Privatkunden und Unternehmen',
    subTitle:
      'Nicht nur Privathaushalte profitieren von unseren attraktiven Umzugsangeboten, sondern auch Betriebe und Behörden. Wir sind ihr Umzugsunternehmen für Umzüge in Berlin jeglicher Art und Größe sowie beim Umzug von Berlin in eine andere Stadt. Mit Boss Transporte setzen sie stets auf ein starkes Team und einen kompetenten und preiswerten Partner. Vertrauen sie auf unsere Expertise und wir garantieren ihnen einen erfolgreichen Umzugsverlauf.',
    buttonText: `ZUM KOSTENLOSEN ANGEBOT ${'>'}`,
  },
];

const umzugeService = [
  {
    title: 'Unser Umzugs-Service im Überblick',
    subTitle:
      'Wir wissen genau, worauf es beim Umzug ankommt. Profitieren sie von unserer jahrzehntelangen Erfahrung aus zahllosen Umzügen aller Art. Als professionelles Umzugsunternehmen bieten wir ihnen alle gewünschten Leistungen und Services:',
    buttonText: `JETZT KONTAKT AUFNEHMEN ${'>'}`,
    list: [
      'Umzüge in Berlin',
      'Bundesweite Umzüge',
      'Full-Service-Umzüge',
      'Seniorenumzüge',
      'Behördliche Umzüge und Beamtenumzüge',
      'Umzüge über das Jobcenter',
      'Seriöse Wohnungsauflösung',
      'Entrümpelung und Entsorgung',
      'Studentenumzüge',
    ],
  },
];

const umzugeBanner = {
  imgUri: 'https://www.bosstransporte.de/wp-content/uploads/1807.jpg',
  title: 'Umzug in Berlin? Wir sind für sie da!',
  subTitle: 'Ihr Profi für Umzüge in Berlin und Umzüge in andere Städte.',
};

const mobelTaxi = {
  title: 'Ihr günstiges Möbeltaxi in Berlin',
  subTitle: 'Schnell, bequem und schon ab 19€',
  imgUri: 'https://www.bosstransporte.de/wp-content/uploads/movers-08.jpg',
};

const mobelTaxiReview = [
  {
    comment:
      '“Very solid, inexpensive and reliable. The staff were great, I can only recommend them. "',
    name: 'Joel Mabip',
    imgUri:
      'https://www.bosstransporte.de/wp-content/uploads/portrait-square-03.jpg',
    rating: 5,
  },
  {
    comment:
      '“I am very happy with the work of Möbel Taxi Boss. Appointments were made quickly and the work was first class. All items were well packed and secured so that nothing was broken during transport. 5 Stars!"',
    name: 'Jana Decker',
    imgUri:
      'https://www.bosstransporte.de/wp-content/uploads/portrait-square-08.jpg',
    rating: 5,
  },
];

const mobelTaxiInfo = [
  {
    title: 'Das Boss Möbeltaxi in Berlin',
    subTitle:
      'Sie benötigen einen unkomplizierten und preiswerten Transport? Das Möbeltaxi von Boss Transporte steht jederzeit für sie bereit! Möbel, Antiquitäten, große Elektrogeräte, Tresore und andere sperrige Gegenstände kommen mit unserem Möbeltransport schnell, sicher und günstig ans Ziel.',
  },
  {
    title:
      'Gebrauchte Möbel von eBay Kleinanzeigen und Co günstig transportieren',
    subTitle:
      'Nie war es so einfach wie heute, gebrauchte Waren zum Schnäppchenpreis zu kaufen. Das Internet und eBay Kleinanzeigen machen es möglich. Damit das gewünschte Möbelstück oder die gebrauchte Waschmaschine auch ein Schnäppchen bleibt, dürfen für den Transport keine hohen Kosten anfallen. Statt selbst einen teuren Transporter zu mieten, bietet sich daher ein günstiges Möbeltaxi von Boss Transporte an. Hier können sie sich sicher sein, dass der Transport problemlos und preiswert vom Profi erledigt wird. Und wenn sie es noch einfacher und bequemer haben möchten, bieten wir viele individuell auf ihren Transport zugeschnittene Serviceleistungen an.',
    buttonText: `ONLINE ANFRAGE STELLEN ${'>'}`,
  },
];

const mobelTaxiVorteile = [
  {
    title: 'Zeitsparend',
    icon: 'hourglass-outline',
    subTitle:
      'Sie haben sich kurzfristig entschieden, ein Möbelstück zu kaufen, wissen aber nicht, wie sie es transportieren sollen? Keine Sorge, wir erledigen das für sie!',
  },
  {
    title: 'Preiswert',
    icon: 'wallet',
    subTitle:
      'Egal ob die Transportstrecke kurz oder lang ist, wir haben immer den besten Möbeltaxi Preis für sie. Auf Wunsch auch mit Trageservice und Montage.',
  },
  {
    title: 'Vorauszahlung',
    icon: 'card',
    subTitle:
      'Ihre Möbel sind noch nicht bezahlt? Kein Problem, wir übernehmen die Bezahlung für sie im Voraus und liefern ihnen die Möbel bequem nach Hause.',
  },
  {
    title: 'Mitfahrmöglichkeit',
    icon: 'home',
    subTitle:
      'Neben dem Möbeltransport bieten wir Ihnen auch die Möglichkeit, in unserem Transporter bis zum gewünschten Zielort mitzufahren.',
  },
];

const möbeltaxiPreise = [
  {
    title: 'City Tarif',
    subTitle: `gültig im Umkreis von 3km vom Abholort innerhalb Berlins.

(gilt nur für den Bezirk Neukölln)
      
Auf Wunsch auch mit Trageservice.`,
    price: 19,
    startText: 'ab',
  },
  {
    title: 'City Plus Tarif',
    subTitle: `gültig im Umkreis von 10km vom Abholort innerhalb Berlins.

Auf Wunsch auch mit Trageservice.`,
    price: 39,
    startText: 'ab',
  },
  {
    title: 'Kisten / Karton Tarif',
    subTitle: `gültig im Umkreis von 10km vom Abholort innerhalb Berlins.

Auf Wunsch auch mit Trageservice.`,
    price: 10,
    startText: 'je Karton',
  },
  {
    title: 'Abholung Möbelhaus & Elektrofachhandel',
    subTitle:
      'Wir holen, liefern und montieren ihre Ware. Abholung von jeglichen Möbelhäusern und Elektrofachhändlern. Gültig im Umkreis von 5km vom Abholort.',
    price: 39,
    startText: 'ab',
  },
  {
    title: 'Berlin-Brandenburg Tarif',
    subTitle: `ab 20km vom Abholort zum Zielort.

Auf Wunsch auch mit Trageservice.`,
    price: 79,
    startText: 'ab',
  },
];

const entsorgungBanner = {
  title: 'Günstige Entrümpelung, Entsorgung und Wohnungsauflösung in Berlin',
  subTitle: 'Unkompliziert, professionell und schon ab 49€',
  imgUri: 'https://www.bosstransporte.de/wp-content/uploads/entsorgung2.jpg',
};

const entsorgungService = [
  {
    title: 'Entrümpelung und Entsorgung vom Profi',
    subTitle:
      'Wir haben uns auf die seriöse Entrümpelung und Entsorgung innerhalb Berlins und in der Umgebung spezialisiert. Mit unserer jahrzehntelangen Erfahrung stehen wir ihnen von Anfang an zur Seite und führen ihren Auftrag schnell bis zur vollsten Zufriedenheit aus. Dank routinierter Abläufe können wir ihnen dabei stets beste Ergebnisse und ein hervorragendes Preis-Leistungs-Verhältnis bieten. Die Entrümpelung ist selbstverständlich versichert und verläuft für sie vollkommen unkompliziert und stressfrei ab.',
    list: [
      'schnell',
      'besenrein',
      'günstig',
      'fachgerechte Entsorgung',
      'qualifizierte Mitarbieter',
      'kostenlose Beratung',
    ],
  },
  {
    title: 'So einfach geht günstige Entrümplung und Entsorgung in Berlin',
    list: [
      'Sie machen Angaben zu ihren Räumlichkeiten und zum Inhalt, der entsorgt werden soll. Wir kommen zeitnah zur Besichtigung und machen ein kostenloses Festpreisangebot.',
      'Gemeinsam vereinbaren wir einen Wunschtermin für die Entrümpelung. Dabei können wir bei Bedarf auch sehr kurzfristige Termine realisieren.',
      'Am gewünschten Stichtag führen wir die professionelle Entrümpelung und Entsorgung durch, sodass eine besenreine Übergabe der Räumlichkeiten pünktlich erfolgen kann.',
    ],
    buttonText: 'KOSTENLOSE ANFRAGE',
  },
];

const entsorgungReview = [
  {
    comment:
      'Die Firma hat meinen Umzug binnen 2 Tagen gerettet, als sie für einen anderen Spediteur einsprang. Sehr solide, preisgünstig und zuverlässig. Die Mitarbeiter waren super, kann sie nur weiterempfehlen.',
    name: 'Johan Steinbargen',
    rating: 5,
  },
  {
    comment:
      'Ich bin sehr zufrieden mit der Arbeit von Bosstransporte. Die Terminvergabe erfolgte schnell und die Arbeit war erste Klasse. Alle Gegenstände wurden gut verpackt und gesichert, sodass beim transport nichts zu Bruch ging. 5 Sterne!',
    name: 'Andre Birchow',
    rating: 5,
  },
  {
    comment:
      'Super entspannter Umzug innerhalb Berlins. Gut gelauntes, auf Kundenwünsche eingehendes Team! Beim nächsten Umzug auf jeden Fall wieder! Und Super Preis, danke!',
    name: 'Elena Wickelsmann',
    rating: 5,
  },
];

const entsorgung = [
  {
    title: 'Seriöse Entrümpelung und Wohnungsauflösung in Berlin',
    subTitle: `Viele schwarze Schafe – wenige Profis


    Oft scheint es gar nicht so einfach zu sein, einen seriösen Anbieter für Wohnungsauflösungen, Entrümplungen und Entsorgungen in Berlin zu finden. Auf dem Markt tummeln sich leider viele unseriöse Anbieter, die lediglich versuchen, auf diesem Wege leicht an kostenlose Flohmartkartikel zum Weiterverkauf zu kommen. Stress und Ärger sind da leider vorprogrammiert. Eine saubere und zeitnahe Wiederherstellung ihrer Räumlichkeiten liegt solchen Zeitgenossen genau so wenig am Herzen wie die fachgerechte und umweltschonende Entsorgung von Altlasten. Hier ist Vorsicht geboten! Außerdem können sie sich bei unseriösen Anbietern nicht auf einen ausreichenden Versicherungsschutz verlassen, sodass sie riskieren, im Schadensfall auf hohen Kosten sitzenzubleiben. 
    
     
    
    Setzen sie daher bei der Wohnungsauflösung von Beginn an auf erfahrene Profis für seröse Entrümplung und Entsorgung. Fordern sie unbedingt immer ein persönliches Treffen vor Ort und ein unverbindliches Angebot für die Entrümpelung zum Festpreis an. Vergleichen sie verschiedene Angebote und vergewissern sie sich, dass sie ein zufriedenstellendes Ergebnis erhalten werden. 
    
     
    
    Gerne machen auch wir ihnen ein faires Angebot und stehen ihnen mit unserer Erfahrung und unser Leidenschaft für Entrümpelungen zur Seite. Nehmen sie noch heute Kontakt auf und lassen sie sich kostenfrei und unverbindlich beraten.`,
  },
];

const fragenAntworten = [
  {
    title: 'Wie hoch sind die Kosten für ein Umzugsunternehmen?',
    subTitle: `
    So allgemein lässt sich natürlich keine pauschale Summe beziffern. Doch häufig
sind wir günstiger, als erwartet. Wer eine Kostenschätzung haben möchte, muss
uns den Umfang des Umzugs mitteilen. Nennen sie uns einfach die Entfernung
und das Volumen ihres Umzugs (z.B. Anzahl und Größe der Räum oder eine
Auflistung der zu transportierenden Möbel und Kartons) und wir geben ihnen
einen groben Richtwert oder ein individuelles Angebot.
    `,
  },
  {
    title:
      'Macht ihr nur Umzüge in Berlin oder auch von Berlin in eine andere Stadt?',
    subTitle: `
    Egal ob privat oder gewerblich – wir planen und realisieren Umzüge bundesweit.
    Es ist also egal, ob sie ein alleinstehender Student sind, der von Neukölln nach
    Friedrichshain ziehen möchte oder ob sie den Umzug eines kompletten
    Unternehmens von Berlin nach München wünschen. Wir kümmern uns stets mit
    dem gleichen Knowhow um sie und finden gemeinsam die passenden
    Transportlösungen.
    `,
  },
  {
    title:
      'Könnt ihr auch Möbel oder andere große Gegenstände abholen, ohne dass ich dabei sein muss?',
    subTitle: `
    Ja, sie müssen uns nur Zeit, Abholort und Lieferadresse mitteilen – den Rest übernehmen wir für sie. Egal ob neue Waschmaschine vom Fachgeschäft oder gebrauchter Schrank von eBay Kleinanzeigen. Auf Wunsch übernehmen wir sogar die Bezahlung im Voraus für sie und/oder die Montage bei ihnen vor Ort. Unsere preiswerten Serviceleistungen lassen keine Wünsche offen.`,
  },
  {
    title:
      'Was, wenn beim Transport etwas kaputt geht? Ist mein Umzug versichert?',
    subTitle: `
    Selbstverständlich müssen sie sich hier keinerlei Sorgen machen. Natürlich sind
wir für alle Fälle ausreichend versichert und lassen sie nicht auf einem
entstandenen Schaden sitzen. Durch jahrelange Erfahrung und die sorgsame
Arbeit unserer professionellen Umzugshelfer kommt es allerdings nur äußerst
selten zum Schadensfall. Darauf können sie sich beruhigt verlassen.
    `,
  },
  {
    title:
      'Was kostet ein Möbeltransport in Berlin? Selbst Transporter mieten oder Möbeltaxi rufen?',
    subTitle: `
    Oft kommt ihnen ein Möbeltaxi günstiger als die Anmietung eines Transporters. Dazu kommt, dass gerade ungeübte Fahrer im Berliner Straßenverkehr schnell mit einem großen Transporter überfordert sind. Eine klitzekleine Beule am gemieteten Fahrzeug lässt ihre Transportkosten rasch nach oben schießen und macht aus einem Kleinanzeigen-Schnäppchen im Nu ein teures Vergnügen. Mit unserem Möbeltaxi sparen sie sich Zeit, Nerven und Geld. Unsere Tarife starten schon bei günstigen 19 €. Mehr dazu erfahren sie hier.
    `,
  },
  {
    title: 'Wie läuft eine Entrümpelung oder Wohnungsauflösung ab?',
    subTitle: `
    Hier können sie sich voll und ganz auf unsere Erfahrung verlassen. Nach ersten Angaben zu ihren Räumlichkeiten vereinbaren wir einen Besichtigungstermin und geben ein Festpreisangebot ab. Gemeinsam erarbeiten wir einen Zeitplan zur

Entrümpelung. Pünktlich zum gewünschten Stichtag übergeben wir ihnen ihre Räumlichkeiten im besenreinen Zustand. Die fachgerechte Entsorgung  wurde dann selbstverständlich schon von uns durchgeführt.
    `,
  },
];

const fragenAntwortenBanner = {
  title: 'Alles was sie über ihren Transport und Umzug wissen müssen',
  subTitle: 'Gerne beantworten wir ihre Fragen',
  imgUri: 'https://www.bosstransporte.de/wp-content/uploads/entsorgung2.jpg',
  buttonText: 'JETZT NACHFRAGEN',
};

const homeBanner = {
  title: 'BOSS TRANSPORTE',
  subTitle: 'Ihr zuverlässiges Umzugsunternehmen und Möbeltaxi in Berlin',
  imgUri:
    'https://www.bosstransporte.de/wp-content/uploads/bosstransporte_head.jpg',
};

const kontaktBanner = {
  title: 'KONTAKT',
  imgUri:
    'https://www.bosstransporte.de/wp-content/uploads/246345-P3J500-952.jpg',
};

export {
  reviews,
  services,
  stats,
  umzuge,
  umzugeService,
  umzugeBanner,
  mobelTaxi,
  mobelTaxiReview,
  mobelTaxiInfo,
  mobelTaxiVorteile,
  möbeltaxiPreise,
  entsorgung,
  entsorgungBanner,
  entsorgungReview,
  entsorgungService,
  fragenAntworten,
  fragenAntwortenBanner,
  homeBanner,
  kontaktBanner,
};
