/**
 * content.js — Municipality Data for Albania, Santander
 * All data sourced from official and verified sources.
 * Fuentes: Wikipedia, Alcaldía Municipal, DANE, EcuRed, colombiaturismoweb.com
 */

export const SITE_DATA = {
  /* ── General Info ─────────────────────────────────────────────────── */
  municipality: {
    name: 'Albania',
    department: 'Santander',
    province: 'Vélez',
    country: 'Colombia',
    gentilicio: 'Albanés / Albanense',
    foundationDate: '19 de agosto de 1919',
    creationDate: '12 de julio de 1904',
    founder: 'Presbítero Rosendo Vargas',
    patron: 'San Roque',
    coordinates: { lat: 5.7583, lng: -73.8750 },
    altitude: '1,650',
    altitudeUnit: 'm.s.n.m.',
    area: '156',
    areaUnit: 'km²',
    population: '4,800',
    populationYear: '2026',
    temperature: '18',
    temperatureUnit: '°C',
    distanceToBucaramanga: '276 km',
    phone: '320 8535118',
    email: 'contactenos@albania-santander.gov.co',
    website: 'https://albania-santander.gov.co',
  },

  /* ── History ──────────────────────────────────────────────────────── */
  history: {
    intro: `Albania, un encantador municipio enclavado en la Cordillera Oriental de los Andes colombianos, es un testimonio vivo de la tenacidad y el espíritu campesino santandereano. Su historia se entreteje con las rutas de arrieros, las tradiciones agrícolas y la fe de quienes forjaron este rincón de la provincia de Vélez.`,
    body: `El territorio que hoy comprende Albania fue originalmente una zona de tránsito para arrieros y comerciantes que recorrían las montañas de Santander. El caserío de Pueblo Viejo fue el primer asentamiento reconocido oficialmente, cuando mediante la Ordenanza Departamental 46 del 12 de julio de 1904, se creó el municipio con Pueblo Viejo como cabecera.`,
    highlight: `Fue el Presbítero Rosendo Vargas quien, desde 1914, transformó la historia del municipio al impulsar el poblamiento de la Mesa de Chevre, construyendo una escuela y la capilla de Nuestra Señora del Carmen, sentando las bases de lo que sería la nueva cabecera municipal.`,
    body2: `El 19 de agosto de 1919 se consolida definitivamente como municipio, fecha que se celebra como la fundación oficial de Albania. Desde entonces, el pueblo ha crecido en torno a su vocación agrícola, la calidez de su gente y el amor por sus tradiciones campesinas.`
  },

  /* ── Timeline ─────────────────────────────────────────────────────── */
  timeline: [
    {
      year: '1800s',
      title: 'Orígenes como Paso de Arrieros',
      text: 'El territorio era una zona de tránsito utilizada por arrieros y comerciantes que recorrían las montañas de la provincia de Vélez, conectando pueblos y mercados regionales.'
    },
    {
      year: '1904',
      title: 'Creación Legal del Municipio',
      text: 'Mediante la Ordenanza Departamental 46 del 12 de julio de 1904, se crea oficialmente el municipio con el caserío de Pueblo Viejo como cabecera.'
    },
    {
      year: '1914',
      title: 'Llegada del Presbítero Rosendo Vargas',
      text: 'El padre Rosendo Vargas llega al territorio e impulsa el poblamiento de la Mesa de Chevre, construyendo una escuela y la capilla de Nuestra Señora del Carmen.'
    },
    {
      year: '1919',
      title: 'Fundación Definitiva',
      text: 'El 19 de agosto de 1919, Albania se consolida definitivamente como municipio, con la Mesa de Chevre como nueva cabecera municipal.'
    },
    {
      year: '1950s',
      title: 'Consolidación Agrícola',
      text: 'El municipio se consolida como productor agropecuario, desarrollando cultivos de café, caña de azúcar y plátano que definen su identidad económica.'
    },
    {
      year: '2000s',
      title: 'Desarrollo Frutícola',
      text: 'Albania expande su vocación agrícola hacia cultivos de frutas como guayaba, pitahaya, guanábana y gulupa, posicionándose como productor frutícola en Santander.'
    },
    {
      year: 'Hoy',
      title: 'Apuesta por el Turismo Rural',
      text: 'El municipio impulsa proyectos de turismo rural, fortalecimiento cultural y mejoramiento de infraestructura para proyectarse como destino de naturaleza y tradición.'
    }
  ],

  /* ── Geography ────────────────────────────────────────────────────── */
  geography: {
    description: 'Ubicado en la Cordillera Oriental de los Andes colombianos, Albania forma parte de la provincia de Vélez en Santander. Su territorio abarca desde valles templados hasta zonas de páramo, ofreciendo una diversidad paisajística excepcional.',
    details: [
      { icon: '📍', title: 'Ubicación', value: 'Provincia de Vélez, Santander' },
      { icon: '⛰️', title: 'Altitud', value: '1,650 m.s.n.m.' },
      { icon: '📐', title: 'Extensión', value: '156 km²' },
      { icon: '🌡️', title: 'Temperatura', value: '18°C promedio' },
      { icon: '🏔️', title: 'Relieve', value: 'Cordillera Oriental, zonas de páramo' },
      { icon: '🧭', title: 'Distancia', value: '276 km de Bucaramanga' }
    ],
    limits: {
      north: 'Jesús María',
      east: 'Puente Nacional',
      northwest: 'Florián',
      south: 'Boyacá (Tununguá y Saboyá)'
    },
    hydrology: [
      'Río Fragua Chorroso', 'Río San Pedro', 'Quebrada La Castañal',
      'Quebrada La Arenosa', 'Quebrada La Chorrosa', 'Quebrada La Guaduala',
      'Quebrada La Grande', 'Quebrada La Danta', 'Quebrada Fray Diego'
    ]
  },

  /* ── Economy ──────────────────────────────────────────────────────── */
  economy: [
    {
      icon: '☕',
      title: 'Café',
      text: 'El cultivo de café es uno de los pilares económicos del municipio. Los caficultores albaneses producen café de alta calidad en las laderas de la cordillera, aprovechando el clima templado ideal.'
    },
    {
      icon: '🍬',
      title: 'Caña de Azúcar',
      text: 'La caña de azúcar se cultiva en consociación con otros productos, siendo la base para la producción de panela y derivados artesanales que se comercializan en mercados regionales.'
    },
    {
      icon: '🐄',
      title: 'Ganadería',
      text: 'La ganadería de doble propósito es una actividad importante para las familias campesinas del municipio, proveyendo lácteos y carne para consumo local y regional.'
    },
    {
      icon: '🍈',
      title: 'Fruticultura',
      text: 'Albania se destaca por su producción de guayaba, pitahaya, guanábana, lulo, gulupa y aguacate, posicionándose como un municipio frutícola emergente en Santander.'
    }
  ],

  /* ── Agriculture ──────────────────────────────────────────────────── */
  agriculture: {
    description: 'La economía de Albania se sustenta en su rica tradición agropecuaria. Los fértiles suelos de la cordillera permiten una diversidad de cultivos que van desde el café hasta frutas exóticas.',
    products: [
      { name: 'Guayaba', percentage: 28, icon: '🍈' },
      { name: 'Café', percentage: 22, icon: '☕' },
      { name: 'Caña', percentage: 18, icon: '🍬' },
      { name: 'Papa', percentage: 12, icon: '🥔' },
      { name: 'Pitahaya', percentage: 10, icon: '🐉' },
      { name: 'Guanábana', percentage: 10, icon: '🍏' }
    ]
  },

  /* ── Tourism ──────────────────────────────────────────────────────── */
  tourism: [
    {
      title: 'Mirador de Albania',
      description: 'Un punto estratégico que ofrece vistas panorámicas de los valles y montañas circundantes. Ideal para la contemplación y la fotografía, especialmente al amanecer cuando la neblina se disipa entre los picos.',
      badge: 'Paisaje',
      icon: '🏔️',
      curiosity: 'En días despejados se pueden divisar hasta tres departamentos diferentes desde este punto.'
    },
    {
      title: 'Templo Parroquial San Roque',
      description: 'Considerado una joya arquitectónica del municipio, este templo es el centro espiritual de la comunidad. Su construcción refleja la devoción y el esfuerzo colectivo de generaciones de albaneses.',
      badge: 'Patrimonio',
      icon: '⛪',
      curiosity: 'San Roque es el santo patrón del municipio y sus festividades son las más importantes del calendario local.'
    },
    {
      title: 'Balneario del Río Lenguazaque',
      description: 'Un balneario natural de aguas cristalinas rodeado de vegetación exuberante. Es el lugar favorito de locales y visitantes para disfrutar de un baño refrescante en medio del paisaje montañoso.',
      badge: 'Naturaleza',
      icon: '🏊',
      curiosity: 'El río mantiene una temperatura agradable durante todo el año gracias al clima templado de la zona.'
    },
    {
      title: 'Parque La Sierrita',
      description: 'Un espacio público renovado en el casco urbano que sirve como punto de encuentro comunitario. Con áreas verdes, senderos y zonas de descanso, es el corazón social del municipio.',
      badge: 'Recreación',
      icon: '🌳',
      curiosity: 'Este parque fue recientemente renovado como parte de un proyecto de embellecimiento urbano.'
    }
  ],

  /* ── Culture ──────────────────────────────────────────────────────── */
  culture: {
    description: 'La cultura de Albania refleja la esencia del campesino santandereano: trabajador, orgulloso de sus raíces y profundamente conectado con la tierra. Las tradiciones se transmiten de generación en generación a través de la música, la gastronomía y las celebraciones comunitarias.',
    items: [
      {
        icon: '🎵',
        title: 'Música Campesina',
        text: 'El torbellino y la música campesina son el alma sonora del municipio. Los artistas locales preservan estas tradiciones en cada fiesta y celebración.'
      },
      {
        icon: '🎨',
        title: 'Artesanías',
        text: 'Los artesanos albaneses elaboran productos tradicionales a partir de materiales naturales de la región, manteniendo técnicas heredadas de generaciones anteriores.'
      },
      {
        icon: '🤝',
        title: 'Identidad Campesina',
        text: 'La identidad del municipio está profundamente arraigada en la cultura campesina santandereana, donde el trabajo de la tierra y la solidaridad comunitaria son valores fundamentales.'
      },
      {
        icon: '🙏',
        title: 'Fe y Tradición',
        text: 'La devoción religiosa marca el ritmo de la vida comunitaria, con celebraciones patronales a San Roque y festividades de Nuestra Señora del Carmen.'
      }
    ]
  },

  /* ── Traditions ───────────────────────────────────────────────────── */
  traditions: {
    description: 'Las tradiciones de Albania son un reflejo vivo de la herencia campesina santandereana, donde la comunidad se reúne para celebrar la vida, la cosecha y la fe.',
  },

  /* ── Gastronomy ───────────────────────────────────────────────────── */
  gastronomy: [
    {
      title: 'Mute Santandereano',
      description: 'Una sopa espesa y tradicional preparada con maíz, frijoles, garbanzos, papa, carne de cerdo, mondongo y hierbas aromáticas. Es el plato insignia de la gastronomía santandereana.',
      icon: '🍲'
    },
    {
      title: 'Cabrito',
      description: 'Preparado a la brasa o al horno, el cabrito es una delicia regional. La carne tierna del chivo joven se sazona con especias locales y se acompaña con yuca y arepa.',
      icon: '🐐'
    },
    {
      title: 'Hormigas Culonas',
      description: 'Un manjar exótico que distingue a Santander en el mapa gastronómico colombiano. Tostadas con sal, son un snack crujiente rico en proteínas con sabor a nuez.',
      icon: '🐜'
    },
    {
      title: 'Bocadillo Veleño',
      description: 'Dulce tradicional elaborado con guayaba cultivada en la región. Su textura suave y sabor intenso lo convierten en el acompañamiento perfecto para el queso campesino.',
      icon: '🍬'
    },
    {
      title: 'Arepa Santandereana',
      description: 'Elaborada con maíz pelado, chicharrón y manteca, la arepa santandereana es más gruesa y jugosa que sus primas de otros departamentos.',
      icon: '🫓'
    },
    {
      title: 'Guarapo',
      description: 'Bebida fermentada artesanal preparada a base de caña de azúcar o panela. Refrescante y natural, es parte esencial de la vida campesina del municipio.',
      icon: '🥤'
    }
  ],

  /* ── Events ───────────────────────────────────────────────────────── */
  events: [
    {
      title: 'Festival Agropecuario y Cultural',
      month: 'Anual',
      icon: '🎪',
      description: 'El evento más importante del municipio que celebra la vocación agrícola y la identidad cultural albanesa. Incluye exposiciones agropecuarias, concursos de productos locales, muestras artísticas y presentaciones de música campesina.'
    },
    {
      title: 'Ferias y Fiestas Patronales',
      month: 'Diciembre',
      icon: '🎉',
      description: 'Celebración que reúne a la comunidad con actividades culturales, deportivas, religiosas y folclóricas. Con concursos, cabalgatas, presentaciones musicales de torbellino y música campesina.'
    },
    {
      title: 'Fiestas de San Roque',
      month: 'Agosto',
      icon: '⛪',
      description: 'Celebración del santo patrón del municipio con procesiones, eucaristías especiales y actividades comunitarias que refuerzan la identidad espiritual de Albania.'
    },
    {
      title: 'Fiestas del Corregimiento El Hatillo',
      month: 'Variable',
      icon: '🏘️',
      description: 'Conocidas como las fiestas de "Cachoevenado", celebran la identidad y las tradiciones del principal corregimiento del municipio con actividades culturales y deportivas.'
    }
  ],

  /* ── Curious Facts ────────────────────────────────────────────────── */
  facts: [
    {
      emoji: '🌍',
      title: 'Nombre Compartido',
      text: 'Albania comparte su nombre con un país europeo en los Balcanes, lo que frecuentemente llama la atención de quienes lo descubren por primera vez.'
    },
    {
      emoji: '🫏',
      title: 'Origen Arriero',
      text: 'El municipio tuvo sus inicios como un lugar de paso o "fonda" para arrieros y comerciantes que recorrían las montañas de la provincia de Vélez.'
    },
    {
      emoji: '📜',
      title: 'Tres Ordenanzas',
      text: 'La creación del municipio requirió múltiples ordenanzas departamentales entre 1903, 1904 y 1919 para definir su cabecera y organización política.'
    },
    {
      emoji: '🏔️',
      title: 'Diversidad de Pisos',
      text: 'Gracias a su ubicación en la cordillera, Albania abarca desde valles templados ideales para café hasta zonas de páramo con ecosistemas únicos.'
    },
    {
      emoji: '🍈',
      title: 'Capital de la Guayaba',
      text: 'La guayaba es el cultivo de mayor producción en el municipio, siendo la base del famoso bocadillo de la región veleña.'
    },
    {
      emoji: '🐉',
      title: 'Pitahaya Santandereana',
      text: 'Albania es uno de los productores de pitahaya amarilla en Santander, una fruta exótica cada vez más valorada en mercados nacionales e internacionales.'
    }
  ],

  /* ── Notable People ───────────────────────────────────────────────── */
  people: [
    {
      name: 'Presbítero Rosendo Vargas',
      role: 'Fundador y Promotor del Municipio',
      bio: 'Desde 1914, el padre Rosendo Vargas fue el principal impulsor del poblamiento de la Mesa de Chevre. Construyó una escuela y la capilla de Nuestra Señora del Carmen, sentando las bases de la Albania moderna. Su visión y dedicación transformaron un caserío de arrieros en un municipio próspero.',
      avatar: '⛪'
    }
  ],

  /* ── Education ────────────────────────────────────────────────────── */
  education: [
    {
      icon: '🏫',
      title: 'Colegio Departamental Integrado Sagrado Corazón de Jesús',
      text: 'Principal institución educativa ubicada en el casco urbano, ofrece formación desde preescolar hasta educación media.'
    },
    {
      icon: '🏫',
      title: 'Instituto Integrado de Comercio El Hatillo',
      text: 'Centro educativo del corregimiento de El Hatillo con énfasis en formación comercial y agropecuaria.'
    },
    {
      icon: '📚',
      title: 'Instituto de Educación Rural Santa María del Camino',
      text: 'Institución enfocada en la educación rural, atendiendo a las comunidades de las veredas del municipio.'
    },
    {
      icon: '🏡',
      title: 'Escuelas Rurales',
      text: 'Red de escuelas distribuidas en las veredas: La Colorada, Canoas, La Honda, entre otras, garantizando acceso a la educación en todo el territorio.'
    }
  ],

  /* ── Infrastructure ───────────────────────────────────────────────── */
  infrastructure: {
    description: 'Albania avanza progresivamente en el mejoramiento de su infraestructura, con proyectos enfocados en conectividad vial, servicios públicos y espacios comunitarios.',
    items: [
      { icon: '🛣️', title: 'Vías', text: 'Conexión vial con Jesús María, Puente Nacional y Florián. Mejoramiento progresivo de las vías terciarias que conectan las veredas.' },
      { icon: '🏥', title: 'Salud', text: 'Puesto de salud municipal que brinda atención primaria. Referencia al Hospital Regional de Vélez para atención especializada.' },
      { icon: '💧', title: 'Acueducto', text: 'Sistema de acueducto municipal alimentado por las quebradas de la cordillera, con procesos de mejoramiento continuo.' },
      { icon: '⚡', title: 'Energía', text: 'Servicio de energía eléctrica interconectado al sistema nacional, con cobertura tanto urbana como rural.' }
    ]
  },

  /* ── FAQ ──────────────────────────────────────────────────────────── */
  faq: [
    {
      question: '¿Cómo llegar a Albania, Santander?',
      answer: 'Desde Bucaramanga se recorre una distancia de aproximadamente 276 km por carretera. La ruta principal pasa por la provincia de Vélez. También es accesible desde Tunja (Boyacá) por la vía que conecta con los municipios fronterizos.'
    },
    {
      question: '¿Cuál es el clima de Albania?',
      answer: 'Albania tiene un clima templado con temperatura promedio de 18°C, gracias a su altitud de 1,650 m.s.n.m. Las noches suelen ser frescas y durante el día se disfruta de un clima agradable ideal para actividades al aire libre.'
    },
    {
      question: '¿Qué festividades se celebran en el municipio?',
      answer: 'Los eventos más importantes son el Festival Agropecuario y Cultural, las Ferias y Fiestas Patronales en diciembre, y las festividades de San Roque en agosto. Cada evento celebra la identidad campesina y la tradición del municipio.'
    },
    {
      question: '¿Qué productos agrícolas se producen?',
      answer: 'Albania es reconocido por su producción de guayaba (base del bocadillo veleño), café, caña de azúcar, papa, pitahaya, guanábana, lulo y gulupa. La ganadería de doble propósito también es una actividad importante.'
    },
    {
      question: '¿Cuáles son los principales atractivos turísticos?',
      answer: 'Los principales atractivos incluyen el Mirador de Albania con vistas panorámicas, el Templo Parroquial San Roque, el Balneario del Río Lenguazaque y el Parque La Sierrita. Además, el turismo rural y la naturaleza de la cordillera son grandes atractivos.'
    },
    {
      question: '¿Cuáles son las veredas del municipio?',
      answer: 'Albania cuenta con numerosas veredas incluyendo: Aguacate, Altamira, Ayacucho, Canoas, Canutillo, Carretero, Chebre, Cordoncillal, El Hatillo, El Tablón, Guacos, Guayabal, La Honda, La Mesa, Mesa Grande, Pan de Azúcar, Pantanos, Pueblo Viejo, Sabaneta, San Pablo, Santa Rita, Utapa y Uvales, entre otras.'
    },
    {
      question: '¿Cómo contactar a la alcaldía?',
      answer: 'La Alcaldía Municipal de Albania, Santander se puede contactar al número 320 8535118 o al correo electrónico contactenos@albania-santander.gov.co. También a través de la página web oficial albania-santander.gov.co.'
    }
  ],

  /* ── Statistics ───────────────────────────────────────────────────── */
  statistics: [
    { icon: '👥', value: 4800, label: 'Habitantes', suffix: '' },
    { icon: '📐', value: 156, label: 'km² de Extensión', suffix: '' },
    { icon: '⛰️', value: 1650, label: 'm.s.n.m.', suffix: '' },
    { icon: '🌡️', value: 18, label: '°C Promedio', suffix: '°' },
    { icon: '🏘️', value: 29, label: 'Veredas', suffix: '+' },
    { icon: '🛣️', value: 276, label: 'km a Bucaramanga', suffix: '' }
  ],

  /* ── Veredas (administrative divisions) ───────────────────────────── */
  veredas: [
    'Aguacate', 'Altamira', 'Ayacucho', 'Canoas', 'Canutillo', 'Carretero',
    'Chebre', 'Cordoncillal', 'El Hatillo', 'El Tablón', 'Guacos', 'Guayabal',
    'La Honda', 'La Mesa', 'La Mochila', 'Medios', 'Mesa Grande', 'Pan de Azúcar',
    'Pantanos', 'Playas', 'Potreros', 'Poveda', 'Pueblo Viejo', 'Sabaneta',
    'Salitre', 'San Pablo', 'Santa Rita', 'Utapa', 'Uvales'
  ],

  /* ── Map Points of Interest ──────────────────────────────────────── */
  mapMarkers: [
    { lat: 5.7583, lng: -73.8750, title: 'Cabecera Municipal', type: 'town', icon: '🏘️' },
    { lat: 5.7610, lng: -73.8730, title: 'Templo San Roque', type: 'church', icon: '⛪' },
    { lat: 5.7600, lng: -73.8760, title: 'Parque La Sierrita', type: 'park', icon: '🌳' },
    { lat: 5.7650, lng: -73.8700, title: 'Mirador de Albania', type: 'viewpoint', icon: '🏔️' },
    { lat: 5.7500, lng: -73.8800, title: 'Balneario Río Lenguazaque', type: 'nature', icon: '🏊' },
    { lat: 5.7400, lng: -73.8650, title: 'Corregimiento El Hatillo', type: 'town', icon: '🏘️' },
    { lat: 5.7550, lng: -73.8780, title: 'Colegio Sagrado Corazón', type: 'education', icon: '🏫' }
  ],

  /* ── Gallery Images ──────────────────────────────────────────────── */
  gallery: [
    { src: 'assets/images/hero.png', caption: 'Paisaje montañoso de Albania', category: 'paisaje', alt: 'Montañas verdes de la cordillera oriental en Albania, Santander' },
    { src: 'assets/images/hero-2.png', caption: 'Atardecer en la cordillera', category: 'paisaje', alt: 'Vista panorámica del atardecer sobre el paisaje montañoso' },
    { src: 'assets/images/cultura.png', caption: 'Artesanías tradicionales', category: 'cultura', alt: 'Mochilas y artesanías tradicionales de la región' },
    { src: 'assets/images/gastronomia.png', caption: 'Gastronomía santandereana', category: 'gastronomia', alt: 'Plato típico de la gastronomía regional santandereana' }
  ]
};
