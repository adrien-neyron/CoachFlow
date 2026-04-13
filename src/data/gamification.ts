// Système de gamification complet

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "skill" | "milestone" | "social" | "streak";
  earned: boolean;
  earnedDate?: string;
}

export interface Level {
  level: number;
  title: string;
  xpRequired: number;
  icon: string;
}

export interface WeeklyChallenge {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  deadline: string;
  completed: boolean;
  type: "practice" | "social" | "creation";
}

export const levels: Level[] = [
  { level: 1, title: "Débutant Motivé", xpRequired: 0, icon: "🌱" },
  { level: 2, title: "Apprenti Coach", xpRequired: 200, icon: "📚" },
  { level: 3, title: "Praticien Terrain", xpRequired: 500, icon: "🏃" },
  { level: 4, title: "Coach Confirmé", xpRequired: 1000, icon: "💪" },
  { level: 5, title: "Expert Certifié", xpRequired: 1800, icon: "🎓" },
  { level: 6, title: "Coach Elite", xpRequired: 3000, icon: "🏆" },
];

export const badges: Badge[] = [
  { id: "b1", title: "Premier Pas", description: "Complétez votre première leçon", icon: "👣", category: "milestone", earned: true, earnedDate: "2026-03-01" },
  { id: "b2", title: "Visionnaire", description: "Terminez le module Activation Carrière", icon: "🔮", category: "milestone", earned: true, earnedDate: "2026-03-05" },
  { id: "b3", title: "Anatomiste", description: "Maîtrisez le module Anatomie Fonctionnelle", icon: "🦴", category: "skill", earned: true, earnedDate: "2026-03-12" },
  { id: "b4", title: "Scientifique", description: "Terminez les Fondations Scientifiques", icon: "🔬", category: "skill", earned: false },
  { id: "b5", title: "Coach Terrain", description: "Créez votre premier programme client", icon: "📋", category: "skill", earned: false },
  { id: "b6", title: "Entrepreneur", description: "Construisez votre offre commerciale", icon: "💰", category: "skill", earned: false },
  { id: "b7", title: "Streak 7", description: "7 jours consécutifs d'apprentissage", icon: "🔥", category: "streak", earned: true, earnedDate: "2026-03-10" },
  { id: "b8", title: "Streak 30", description: "30 jours consécutifs d'apprentissage", icon: "⚡", category: "streak", earned: false },
  { id: "b9", title: "Mentor", description: "Aidez 5 autres apprenants dans la communauté", icon: "🤝", category: "social", earned: false },
  { id: "b10", title: "Networker", description: "Participez à 3 challenges collectifs", icon: "🌐", category: "social", earned: false },
  { id: "b11", title: "Certifié", description: "Obtenez votre certification finale", icon: "🎓", category: "milestone", earned: false },
  { id: "b12", title: "Perfectionniste", description: "Score de 90%+ à l'examen final", icon: "💎", category: "milestone", earned: false },
];

export const weeklyChallenges: WeeklyChallenge[] = [
  { id: "wc1", title: "Filmez votre échauffement", description: "Créez une vidéo de 5 min montrant votre routine d'échauffement type", xpReward: 50, deadline: "2026-04-12", completed: false, type: "creation" },
  { id: "wc2", title: "Feedback entre pairs", description: "Donnez un retour constructif sur le programme d'un autre apprenant", xpReward: 30, deadline: "2026-04-12", completed: false, type: "social" },
  { id: "wc3", title: "Quiz flash anatomie", description: "Obtenez 80%+ au quiz flash de la semaine", xpReward: 25, deadline: "2026-04-12", completed: true, type: "practice" },
];

// Données utilisateur fictives
export const userProgress = {
  currentLevel: 3,
  currentXP: 680,
  nextLevelXP: 1000,
  streak: 12,
  bestStreak: 18,
  lessonsCompleted: 28,
  totalLessons: 82,
  projectsCompleted: 2,
  totalProjects: 8,
  certificatesEarned: 0,
  rank: 42,
  totalStudents: 1240,
  weeklyGoal: 5, // heures
  weeklyProgress: 3.5, // heures
  lastActivity: "2026-04-05",
};
