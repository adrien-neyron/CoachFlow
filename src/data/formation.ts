// Parcours de transformation professionnelle pour éducateurs sportifs
// Basé sur les 8 piliers : Activation, Fondations, Terrain, Business, Projets, Certification, Communauté, Upsell

export interface Lesson {
  id: string;
  title: string;
  type: "video" | "pdf" | "quiz" | "challenge" | "project";
  duration: string;
  description: string;
  deliverable?: string;
}

export interface Module {
  id: string;
  title: string;
  objective: string;
  skills: string[];
  lessons: Lesson[];
  deliverable: string;
  icon: string;
}

export interface CoursePhase {
  id: string;
  phase: number;
  title: string;
  subtitle: string;
  objective: string;
  transformation: string;
  result: string;
  color: string;
  modules: Module[];
  image: string;
  duration: string;
  lessonsCount: number;
}

export const formationPhases: CoursePhase[] = [
  {
    id: "phase-1",
    phase: 1,
    title: "Activation & Projection Carrière",
    subtitle: "Trouvez votre vision de coach",
    objective: "Déclencher la motivation et projeter l'apprenant dans sa future carrière de coach sportif",
    transformation: "De « je ne sais pas si c'est pour moi » à « je sais exactement quel coach je veux devenir »",
    result: "Vision claire de son positionnement + plan d'action personnel",
    color: "secondary",
    duration: "1 semaine",
    lessonsCount: 8,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
    modules: [
      {
        id: "m1-1",
        title: "Pourquoi devenir coach sportif ?",
        objective: "Clarifier ses motivations profondes et sa vision",
        skills: ["Auto-analyse", "Définition d'objectifs", "Vision long terme"],
        deliverable: "Fiche « Ma Vision Coach » complétée",
        icon: "🎯",
        lessons: [
          { id: "l1-1", title: "Le métier de coach en 2025 : réalités et opportunités", type: "video", duration: "12 min", description: "Tour d'horizon du marché, des revenus et des parcours possibles" },
          { id: "l1-2", title: "Témoignages : 5 coachs qui vivent de leur passion", type: "video", duration: "15 min", description: "Interviews inspirantes de coachs à différents stades" },
          { id: "l1-3", title: "Template : Ma Vision Coach", type: "pdf", duration: "5 min", description: "Fiche de travail pour définir sa vision et ses objectifs", deliverable: "Fiche vision complétée" },
          { id: "l1-4", title: "Quiz : Quel type de coach êtes-vous ?", type: "quiz", duration: "8 min", description: "Auto-évaluation pour identifier votre profil de coach idéal" },
        ],
      },
      {
        id: "m1-2",
        title: "Construire son identité de coach",
        objective: "Définir son positionnement unique sur le marché",
        skills: ["Personal branding", "Positionnement", "Storytelling"],
        deliverable: "Pitch de présentation en 60 secondes",
        icon: "💡",
        lessons: [
          { id: "l1-5", title: "Trouver sa niche : running, fitness, prépa physique…", type: "video", duration: "18 min", description: "Comment choisir sa spécialisation en fonction du marché et de ses forces" },
          { id: "l1-6", title: "Créer son pitch de coach en 60 secondes", type: "video", duration: "10 min", description: "Méthode pas à pas pour se présenter de façon impactante" },
          { id: "l1-7", title: "Défi : Enregistrez votre pitch", type: "challenge", duration: "20 min", description: "Enregistrez-vous et partagez votre pitch avec la communauté", deliverable: "Vidéo pitch 60s" },
          { id: "l1-8", title: "Template : Carte d'identité coach", type: "pdf", duration: "5 min", description: "Document de synthèse de votre positionnement", deliverable: "Carte d'identité coach" },
        ],
      },
    ],
  },
  {
    id: "phase-2",
    phase: 2,
    title: "Fondations Scientifiques",
    subtitle: "Maîtrisez les bases essentielles",
    objective: "Acquérir les connaissances scientifiques fondamentales de manière simplifiée et applicable",
    transformation: "De « je manque de crédibilité » à « je maîtrise les fondamentaux et je peux les expliquer simplement »",
    result: "Capacité à justifier scientifiquement ses choix d'entraînement",
    color: "info",
    duration: "3 semaines",
    lessonsCount: 20,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80",
    modules: [
      {
        id: "m2-1",
        title: "Anatomie fonctionnelle pour le coach",
        objective: "Comprendre le corps humain de façon pratique et applicable",
        skills: ["Anatomie appliquée", "Analyse du mouvement", "Prévention blessures"],
        deliverable: "Fiche mémo des principaux groupes musculaires et mouvements",
        icon: "🦴",
        lessons: [
          { id: "l2-1", title: "Les 10 mouvements fondamentaux du corps humain", type: "video", duration: "20 min", description: "Squat, hinge, push, pull, carry... Comprendre les patterns moteurs" },
          { id: "l2-2", title: "Anatomie musculaire : l'essentiel en images", type: "video", duration: "25 min", description: "Tour visuel des groupes musculaires clés pour le coach" },
          { id: "l2-3", title: "Les blessures courantes et comment les éviter", type: "video", duration: "18 min", description: "Facteurs de risque et protocoles de prévention simples" },
          { id: "l2-4", title: "Fiche mémo anatomique", type: "pdf", duration: "5 min", description: "Résumé visuel à garder sous la main", deliverable: "Fiche mémo anatomie" },
          { id: "l2-5", title: "Quiz : Anatomie fonctionnelle", type: "quiz", duration: "10 min", description: "Validez vos connaissances anatomiques" },
        ],
      },
      {
        id: "m2-2",
        title: "Physiologie de l'effort simplifiée",
        objective: "Comprendre comment le corps s'adapte à l'entraînement",
        skills: ["Filières énergétiques", "Adaptation à l'effort", "Récupération"],
        deliverable: "Schéma des filières énergétiques personnalisé",
        icon: "⚡",
        lessons: [
          { id: "l2-6", title: "Les 3 filières énergétiques expliquées simplement", type: "video", duration: "15 min", description: "Aérobie, anaérobie lactique, anaérobie alactique" },
          { id: "l2-7", title: "Comprendre la surcompensation", type: "video", duration: "12 min", description: "Le principe clé de la progression en entraînement" },
          { id: "l2-8", title: "La récupération : science et pratique", type: "video", duration: "16 min", description: "Sommeil, nutrition, techniques de récupération active" },
          { id: "l2-9", title: "Template : Grille d'analyse de la charge", type: "pdf", duration: "5 min", description: "Outil pour monitorer la charge d'entraînement", deliverable: "Grille de charge" },
        ],
      },
      {
        id: "m2-3",
        title: "Nutrition sportive essentielle",
        objective: "Donner des conseils nutritionnels de base pertinents",
        skills: ["Macronutriments", "Timing nutritionnel", "Hydratation"],
        deliverable: "Guide nutrition simplifié pour ses futurs clients",
        icon: "🥗",
        lessons: [
          { id: "l2-10", title: "Macros et micros : ce que le coach doit savoir", type: "video", duration: "20 min", description: "Les bases de la nutrition sportive sans jargon" },
          { id: "l2-11", title: "Nutrition avant, pendant, après l'effort", type: "video", duration: "14 min", description: "Le timing nutritionnel en pratique" },
          { id: "l2-12", title: "Créer un guide nutrition simple pour ses clients", type: "challenge", duration: "30 min", description: "Construisez un document nutrition actionnable", deliverable: "Guide nutrition client" },
        ],
      },
    ],
  },
  {
    id: "phase-3",
    phase: 3,
    title: "Compétences Terrain",
    subtitle: "Devenez un coach d'exception sur le terrain",
    objective: "Maîtriser les compétences pratiques essentielles du coaching terrain",
    transformation: "De « je ne sais pas comment structurer une séance » à « je gère mes séances avec confiance et professionnalisme »",
    result: "Capacité à créer et animer des séances de qualité professionnelle",
    color: "success",
    duration: "4 semaines",
    lessonsCount: 24,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    modules: [
      {
        id: "m3-1",
        title: "Créer un programme d'entraînement",
        objective: "Structurer des programmes personnalisés et progressifs",
        skills: ["Périodisation", "Programmation", "Individualisation"],
        deliverable: "Programme d'entraînement complet sur 4 semaines",
        icon: "📋",
        lessons: [
          { id: "l3-1", title: "Les principes de la périodisation", type: "video", duration: "22 min", description: "Macrocycle, mésocycle, microcycle expliqués simplement" },
          { id: "l3-2", title: "Construire une séance type parfaite", type: "video", duration: "18 min", description: "Structure : échauffement, corps de séance, retour au calme" },
          { id: "l3-3", title: "Adapter le programme au profil du client", type: "video", duration: "20 min", description: "Débutant, intermédiaire, avancé : ajuster la difficulté" },
          { id: "l3-4", title: "Template : Programme 4 semaines", type: "pdf", duration: "5 min", description: "Gabarit complet de programme", deliverable: "Programme 4 semaines" },
          { id: "l3-5", title: "Projet : Créez votre premier programme", type: "project", duration: "60 min", description: "Créez un programme complet pour un client fictif", deliverable: "Programme client finalisé" },
        ],
      },
      {
        id: "m3-2",
        title: "L'art du bilan et de l'évaluation",
        objective: "Réaliser un bilan client complet et professionnel",
        skills: ["Évaluation physique", "Entretien client", "Tests terrain"],
        deliverable: "Fiche bilan client type",
        icon: "📊",
        lessons: [
          { id: "l3-6", title: "Conduire un premier entretien client", type: "video", duration: "20 min", description: "Questions clés, posture, écoute active" },
          { id: "l3-7", title: "Les tests physiques essentiels", type: "video", duration: "25 min", description: "Tests de force, souplesse, cardio : protocoles simples" },
          { id: "l3-8", title: "Interpréter les résultats et définir les objectifs", type: "video", duration: "15 min", description: "Transformer les données en plan d'action" },
          { id: "l3-9", title: "Template : Fiche bilan client", type: "pdf", duration: "5 min", description: "Document professionnel de bilan", deliverable: "Fiche bilan client" },
          { id: "l3-10", title: "Simulation : Premier entretien", type: "challenge", duration: "30 min", description: "Simulez un entretien et filmez-vous", deliverable: "Vidéo simulation entretien" },
        ],
      },
      {
        id: "m3-3",
        title: "Coaching en action",
        objective: "Maîtriser l'animation de séance et la communication terrain",
        skills: ["Communication", "Démonstration", "Correction technique", "Motivation"],
        deliverable: "Vidéo d'animation d'une séance complète",
        icon: "🏃",
        lessons: [
          { id: "l3-11", title: "Les 7 règles d'or du coaching terrain", type: "video", duration: "18 min", description: "Positionnement, voix, timing, feedback" },
          { id: "l3-12", title: "Corriger un mouvement sans démotiver", type: "video", duration: "14 min", description: "Techniques de feedback constructif et bienveillant" },
          { id: "l3-13", title: "Gérer un groupe vs coaching individuel", type: "video", duration: "16 min", description: "Adapter sa pédagogie au format de coaching" },
          { id: "l3-14", title: "Défi : Filmez une mini-séance", type: "challenge", duration: "45 min", description: "Animez et filmez une séance de 15 minutes", deliverable: "Vidéo mini-séance" },
        ],
      },
    ],
  },
  {
    id: "phase-4",
    phase: 4,
    title: "Business & Acquisition Clients",
    subtitle: "Transformez votre passion en business rentable",
    objective: "Développer les compétences business pour vivre de son activité de coach",
    transformation: "De « je ne sais pas comment trouver des clients » à « j'ai une stratégie claire et mes premiers clients »",
    result: "Offre commerciale structurée + stratégie d'acquisition de clients opérationnelle",
    color: "warning",
    duration: "3 semaines",
    lessonsCount: 18,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    modules: [
      {
        id: "m4-1",
        title: "Structurer son offre de coaching",
        objective: "Créer une offre commerciale claire et attractive",
        skills: ["Pricing", "Packaging", "Proposition de valeur"],
        deliverable: "Page de présentation de son offre",
        icon: "💰",
        lessons: [
          { id: "l4-1", title: "Définir son offre : séance, pack, abonnement", type: "video", duration: "20 min", description: "Les différents modèles de pricing et comment choisir" },
          { id: "l4-2", title: "Fixer ses tarifs sans se brader", type: "video", duration: "15 min", description: "Méthode de calcul et psychologie du prix" },
          { id: "l4-3", title: "Créer un parcours client premium", type: "video", duration: "18 min", description: "De la découverte à la fidélisation" },
          { id: "l4-4", title: "Projet : Construisez votre offre", type: "project", duration: "45 min", description: "Créez votre page d'offre complète", deliverable: "Offre commerciale finalisée" },
        ],
      },
      {
        id: "m4-2",
        title: "Trouver ses premiers clients",
        objective: "Mettre en place des stratégies d'acquisition concrètes",
        skills: ["Prospection", "Réseaux sociaux", "Bouche-à-oreille", "Partenariats"],
        deliverable: "Plan d'acquisition clients sur 30 jours",
        icon: "🎯",
        lessons: [
          { id: "l4-5", title: "Les 5 canaux pour trouver ses premiers clients", type: "video", duration: "22 min", description: "Réseau, Instagram, salles, entreprises, événements" },
          { id: "l4-6", title: "Créer du contenu qui attire des clients", type: "video", duration: "18 min", description: "Stratégie de contenu simple et efficace" },
          { id: "l4-7", title: "Le script de prospection parfait", type: "video", duration: "12 min", description: "Comment approcher un prospect sans être intrusif" },
          { id: "l4-8", title: "Template : Plan d'action 30 jours", type: "pdf", duration: "5 min", description: "Votre feuille de route pour les 30 premiers jours", deliverable: "Plan d'action 30 jours" },
          { id: "l4-9", title: "Défi : Obtenez votre premier prospect", type: "challenge", duration: "60 min", description: "Appliquez les techniques et obtenez un premier contact", deliverable: "Preuve de premier contact" },
        ],
      },
      {
        id: "m4-3",
        title: "Présence digitale du coach",
        objective: "Construire sa visibilité en ligne",
        skills: ["Instagram", "LinkedIn", "Site web", "Google My Business"],
        deliverable: "Profils sociaux professionnels configurés",
        icon: "📱",
        lessons: [
          { id: "l4-10", title: "Créer un profil Instagram coach qui convertit", type: "video", duration: "16 min", description: "Bio, contenu, stories : les bonnes pratiques" },
          { id: "l4-11", title: "LinkedIn pour les coachs : guide complet", type: "video", duration: "14 min", description: "Optimiser son profil et son réseau professionnel" },
          { id: "l4-12", title: "Créer sa page Google My Business", type: "video", duration: "10 min", description: "Être trouvé localement par vos futurs clients" },
          { id: "l4-13", title: "Projet : Publiez votre profil professionnel", type: "project", duration: "40 min", description: "Mettez en ligne votre présence digitale", deliverable: "Profil professionnel en ligne" },
        ],
      },
    ],
  },
  {
    id: "phase-5",
    phase: 5,
    title: "Projets Réels & Mise en Situation",
    subtitle: "Pratiquez comme un pro",
    objective: "Valider toutes les compétences acquises par des mises en situation réelles",
    transformation: "De « j'ai appris la théorie » à « je suis capable de coacher en situation réelle »",
    result: "Portfolio de projets réels démontrant toutes les compétences",
    color: "destructive",
    duration: "2 semaines",
    lessonsCount: 8,
    image: "https://images.unsplash.com/photo-1434596922112-19cb4f97a389?w=600&q=80",
    modules: [
      {
        id: "m5-1",
        title: "Projet final : Coach un vrai client",
        objective: "Réaliser un accompagnement complet d'un client réel ou simulé",
        skills: ["Intégration des compétences", "Gestion de projet", "Professionnalisme"],
        deliverable: "Dossier complet d'accompagnement client",
        icon: "🏆",
        lessons: [
          { id: "l5-1", title: "Brief du projet final", type: "video", duration: "10 min", description: "Consignes et attentes pour le projet de certification" },
          { id: "l5-2", title: "Étape 1 : Réaliser le bilan client", type: "project", duration: "60 min", description: "Conduisez un vrai bilan avec un client test", deliverable: "Bilan client complet" },
          { id: "l5-3", title: "Étape 2 : Créer le programme personnalisé", type: "project", duration: "90 min", description: "Construisez un programme adapté aux résultats du bilan", deliverable: "Programme personnalisé" },
          { id: "l5-4", title: "Étape 3 : Animer 2 séances filmées", type: "project", duration: "120 min", description: "Filmez deux séances de coaching avec votre client", deliverable: "2 vidéos de séance" },
          { id: "l5-5", title: "Étape 4 : Rédiger le bilan de suivi", type: "project", duration: "30 min", description: "Documentez la progression et vos recommandations", deliverable: "Rapport de suivi" },
          { id: "l5-6", title: "Étape 5 : Présenter votre offre commerciale", type: "project", duration: "30 min", description: "Présentez votre offre comme si vous lanciez votre activité", deliverable: "Pitch commercial enregistré" },
          { id: "l5-7", title: "Auto-évaluation du projet", type: "quiz", duration: "15 min", description: "Évaluez votre travail avec notre grille de compétences" },
          { id: "l5-8", title: "Feedback mentor personnalisé", type: "video", duration: "20 min", description: "Recevez un retour détaillé sur votre projet" },
        ],
      },
    ],
  },
  {
    id: "phase-6",
    phase: 6,
    title: "Certification & Validation",
    subtitle: "Officialisez vos compétences",
    objective: "Obtenir la certification attestant de la maîtrise des compétences de coach sportif",
    transformation: "De « apprenant » à « coach certifié prêt à exercer »",
    result: "Certification partageable sur LinkedIn + attestation de compétences",
    color: "secondary",
    duration: "1 semaine",
    lessonsCount: 4,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
    modules: [
      {
        id: "m6-1",
        title: "Examen de certification",
        objective: "Valider l'ensemble des connaissances et compétences",
        skills: ["Toutes les compétences du parcours"],
        deliverable: "Certificat de réussite",
        icon: "🎓",
        lessons: [
          { id: "l6-1", title: "Préparation à l'examen : révisions guidées", type: "video", duration: "25 min", description: "Récapitulatif de toutes les notions clés" },
          { id: "l6-2", title: "Examen théorique (50 questions)", type: "quiz", duration: "45 min", description: "QCM couvrant l'ensemble du programme" },
          { id: "l6-3", title: "Étude de cas finale", type: "project", duration: "60 min", description: "Analysez un cas client complexe et proposez un accompagnement complet", deliverable: "Étude de cas résolue" },
          { id: "l6-4", title: "Validation des livrables et certification", type: "video", duration: "15 min", description: "Vérification de tous vos livrables et remise du certificat" },
        ],
      },
    ],
  },
];

// Résumé pour l'affichage catalogue
export const getTotalStats = () => {
  const totalLessons = formationPhases.reduce((acc, p) => acc + p.lessonsCount, 0);
  const totalModules = formationPhases.reduce((acc, p) => acc + p.modules.length, 0);
  const totalWeeks = 14; // 1+3+4+3+2+1
  return { totalLessons, totalModules, totalWeeks, totalPhases: formationPhases.length };
};
