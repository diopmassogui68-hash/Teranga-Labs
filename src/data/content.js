export const NAV_LINKS = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'projets', label: 'Projets', href: '#projets' },
  { id: 'a-propos', label: 'À propos', href: '#a-propos' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'dev-web',
    icon: 'code',
    title: 'Développement Web',
    description: 'Des sites modernes, rapides et sécurisés.',
    details:
      'Conception de sites vitrines premium, portails institutionnels et plateformes e-commerce sur mesure, optimisés pour le référencement, la performance et la conversion.',
    deliverables: ['Architecture React / Next.js', 'Performance & SEO technique', 'Responsive multi-écrans', 'Sécurité & maintenance'],
  },
  {
    id: 'apps-mobiles',
    icon: 'smartphone',
    title: 'Applications Mobiles',
    description: 'Des applications intuitives et performantes.',
    details:
      'Développement d’applications iOS et Android fluides, pensées pour un usage quotidien fluide, une accessibilité exemplaire et une intégration fluide à votre écosystème.',
    deliverables: ['iOS & Android natif ou cross-platform', 'Parcours hors-ligne & notifications', 'Architecture scalable', 'Publication App Store & Play Store'],
  },
  {
    id: 'apps-web',
    icon: 'layers',
    title: 'Applications Web',
    description: 'Des plateformes digitales adaptées à vos activités.',
    details:
      'Création de SaaS, tableaux de bord métier, espaces clients et outils internes fiables pour automatiser vos opérations et accompagner votre croissance.',
    deliverables: ['Tableaux de bord temps réel', 'API & intégrations métier', 'Gestion des rôles & sécurité', 'Déploiement cloud continu'],
  },
  {
    id: 'ui-ux',
    icon: 'pen',
    title: 'UI/UX Design',
    description: 'Des interfaces élégantes et faciles à utiliser.',
    details:
      'De la recherche utilisateur au design system complet, nous façonnons des expériences digitales sobres, mémorables et centrées sur la clarté.',
    deliverables: ['Wireframes & prototypes interactifs', 'Design systems évolutifs', 'Direction artistique digitale', 'Tests d’utilisabilité'],
  },
];

export const PROJECTS = [
  {
    id: 'sunu-sante',
    name: 'Sunu Santé',
    category: 'Application Mobile & Web · E-Santé',
    tagline: 'Suivi médical simplifié et prise de rendez-vous en un geste.',
    summary:
      'Concept de plateforme digitale reliant patients, praticiens et cliniques : prise de rendez-vous instantanée, dossier médical sécurisé et suivi des consultations sur mobile et ordinateur.',
    statusNote: 'Concept & prototype studio Téranga Labs',
    metrics: [
      { label: 'Parcours', value: '3 étapes' },
      { label: 'Plateformes', value: 'Web & Mobile' },
      { label: 'Focus', value: 'Accessibilité' },
    ],
    highlights: [
      'Prise de rendez-vous médicale en moins de 60 secondes',
      'Tableau de bord praticien avec gestion des créneaux et historique',
      'Interface monochrome haute lisibilité adaptée à tous les publics',
    ],
    mockup: {
      brandTitle: 'Sunu Santé',
      brandSubtitle: 'Votre santé, connectée.',
      mobileHeader: 'Rendez-vous',
      mobileCardTitle: 'Dr. Aminata Diop',
      mobileCardSub: 'Cardiologie · 10h30',
      mobileMetric: '98%',
      mobileMetricLabel: 'Suivi actif',
      tabletTitle: 'Activité Clinique',
      tabletKpi: '1 240',
      tabletKpiLabel: 'Consultations / mois',
      chartPath: 'M 0 68 C 28 62, 46 38, 72 44 C 98 50, 122 22, 152 28 C 180 34, 204 12, 236 18 L 236 80 L 0 80 Z',
    },
  },
  {
    id: 'man-ak-bae',
    name: 'Man Ak Bae',
    category: 'Application Mobile · Lifestyle & Commerce',
    tagline: 'Expérience mobile dédiée aux moments à deux et aux sélections exclusives.',
    summary:
      'Concept d’application mobile lifestyle et curation d’expériences : découverte d’adresses sélectionnées, réservations simplifiées et gestion personnalisée des préférences.',
    statusNote: 'Concept & prototype studio Téranga Labs',
    metrics: [
      { label: 'Expérience', value: 'Mobile First' },
      { label: 'Direction', value: 'Éditoriale' },
      { label: 'Système', value: 'Design System' },
    ],
    highlights: [
      'Navigation gestuelle fluide et mise en page éditoriale minimaliste',
      'Système de favoris partagés et recommandations personnalisées',
      'Back-office marchand léger pour le suivi des réservations',
    ],
    mockup: {
      brandTitle: 'Man Ak Bae',
      brandSubtitle: 'Moments choisis. Simplement.',
      mobileHeader: 'Sélection',
      mobileCardTitle: 'Dîner Privé · Almadies',
      mobileCardSub: 'Samedi · 20h00 · 2 pers.',
      mobileMetric: '4.9',
      mobileMetricLabel: 'Satisfaction',
      tabletTitle: 'Engagement Hebdo',
      tabletKpi: '84%',
      tabletKpiLabel: 'Taux de retour',
      chartPath: 'M 0 72 C 30 56, 58 58, 86 38 C 114 18, 144 36, 174 20 C 202 8, 220 14, 236 10 L 236 80 L 0 80 Z',
    },
  },
  {
    id: 'naatal-agro',
    name: 'Naatal Agro',
    category: 'Plateforme Web · AgriTech & Gestion',
    tagline: 'Pilotage des exploitations agricoles et suivi de la chaîne logistique.',
    summary:
      'Concept de solution web et tablette pour les coopératives et exploitations agricoles : suivi des parcelles, prévisions de récolte, stocks et distribution en temps réel.',
    statusNote: 'Concept & prototype studio Téranga Labs',
    metrics: [
      { label: 'Architecture', value: 'SaaS Web' },
      { label: 'Usage', value: 'Terrain & Bureau' },
      { label: 'Données', value: 'Temps réel' },
    ],
    highlights: [
      'Visualisation claire des rendements par parcelle et saison',
      'Mode tablette pensé pour une utilisation directe sur le terrain',
      'Traçabilité des lots de la récolte jusqu’à la livraison',
    ],
    mockup: {
      brandTitle: 'Naatal Agro',
      brandSubtitle: 'Agriculture intelligente.',
      mobileHeader: 'Parcelles',
      mobileCardTitle: 'Zone Nord · Lot B4',
      mobileCardSub: 'Irrigation optimale · 24 ha',
      mobileMetric: '+32%',
      mobileMetricLabel: 'Rendement',
      tabletTitle: 'Suivi des Récoltes',
      tabletKpi: '48,6 t',
      tabletKpiLabel: 'Volume mensuel',
      chartPath: 'M 0 64 C 24 66, 52 46, 80 42 C 110 38, 134 28, 166 22 C 192 16, 214 24, 236 12 L 236 80 L 0 80 Z',
    },
  },
];

export const VALUES = [
  {
    id: 'innovation',
    icon: 'zap',
    title: 'Innovation',
    description: 'Des solutions modernes pour un monde en évolution.',
  },
  {
    id: 'qualite',
    icon: 'gem',
    title: 'Qualité',
    description: 'Un travail soigné, orienté vers l’excellence.',
  },
  {
    id: 'proximite',
    icon: 'handshake',
    title: 'Proximité',
    description: 'Un accompagnement personnalisé à chaque étape.',
  },
];

export const UNIVERSE_PILLARS = [
  {
    step: '01',
    title: 'Écoute & Stratégie',
    text: 'Nous clarifions vos objectifs métier, vos utilisateurs et vos priorités pour poser des bases solides.',
  },
  {
    step: '02',
    title: 'Design de Précision',
    text: 'Chaque écran est pensé pour l’évidence, le contraste et l’élégance intemporelle — sans superflu.',
  },
  {
    step: '03',
    title: 'Ingénierie Fiable',
    text: 'Code propre, architecture maintenable, rapidité d’exécution et expérience fluide sur tous les appareils.',
  },
  {
    step: '04',
    title: 'Accompagnement Continu',
    text: 'Mise en ligne maîtrisée, suivi de performance et évolutions pensées pour accompagner votre croissance.',
  },
];
