import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Trophy, TrendingUp, Flame, Target, Zap, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { userProgress, badges, weeklyChallenges, levels } from "@/data/gamification";
import { formationPhases } from "@/data/formation";

const currentLevel = levels[userProgress.currentLevel - 1];
const nextLevel = levels[userProgress.currentLevel];
const xpProgress = ((userProgress.currentXP - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100;
const overallProgress = Math.round((userProgress.lessonsCompleted / userProgress.totalLessons) * 100);

const Dashboard = () => (
  <div className="min-h-screen bg-muted/30">
    <Navbar />
    <main className="container mx-auto px-4 pt-24 pb-16">
      {/* Welcome + Streak */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Bonjour, Jean 👋</h1>
          <p className="text-muted-foreground mt-1">Continuez votre transformation de coach.</p>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-3 bg-card rounded-xl border p-3 shadow-card"
        >
          <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
            <Flame className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <p className="font-display font-bold text-xl text-card-foreground">{userProgress.streak} jours</p>
            <p className="text-xs text-muted-foreground">Série en cours 🔥</p>
          </div>
        </motion.div>
      </div>

      {/* Level + XP Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="shadow-card mb-8 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{currentLevel.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <span className="font-display font-bold text-card-foreground">Niveau {currentLevel.level}</span>
                    <span className="text-muted-foreground ml-2 text-sm">— {currentLevel.title}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{userProgress.currentXP} / {nextLevel.xpRequired} XP</span>
                </div>
                <Progress value={xpProgress} className="h-3" />
              </div>
              <div className="text-2xl opacity-40">{nextLevel.icon}</div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-secondary" /> {nextLevel.xpRequired - userProgress.currentXP} XP pour le prochain niveau</span>
              <span className="flex items-center gap-1"><Target className="h-4 w-4 text-info" /> Rang #{userProgress.rank} / {userProgress.totalStudents}</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Leçons terminées", value: `${userProgress.lessonsCompleted}/${userProgress.totalLessons}`, icon: BookOpen, color: "bg-secondary/10 text-secondary" },
          { label: "Heures cette semaine", value: `${userProgress.weeklyProgress}/${userProgress.weeklyGoal}h`, icon: Clock, color: "bg-info/10 text-info" },
          { label: "Projets réalisés", value: `${userProgress.projectsCompleted}/${userProgress.totalProjects}`, icon: Trophy, color: "bg-success/10 text-success" },
          { label: "Progression globale", value: `${overallProgress}%`, icon: TrendingUp, color: "bg-secondary/10 text-secondary" },
        ].map((s) => (
          <Card key={s.label} className="shadow-card">
            <CardContent className="p-5 flex items-center gap-4">
              <div className={`h-11 w-11 rounded-lg flex items-center justify-center ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-card-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        {/* Parcours de progression */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-foreground">Mon Parcours</h2>
            <Badge variant="outline" className="text-xs">{overallProgress}% complété</Badge>
          </div>

          <div className="space-y-3">
            {formationPhases.map((phase, i) => {
              const isActive = i === 2; // Phase 3 active
              const isCompleted = i < 2;
              const isLocked = i > 2;
              const phaseProgress = isCompleted ? 100 : isActive ? 45 : 0;

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={isLocked ? "#" : `/courses/${phase.id}`}>
                    <Card className={`shadow-card transition-all duration-300 ${isActive ? "ring-2 ring-secondary" : ""} ${isLocked ? "opacity-50" : "hover:shadow-card-hover hover:-translate-y-0.5"}`}>
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${isCompleted ? "bg-success/10" : isActive ? "bg-secondary/10" : "bg-muted"}`}>
                          {isCompleted ? (
                            <CheckCircle className="h-6 w-6 text-success" />
                          ) : (
                            <span className="text-xl">{phase.modules[0]?.icon || "📖"}</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-muted-foreground">Phase {phase.phase}</span>
                            {isActive && <Badge className="bg-secondary text-secondary-foreground text-[10px] px-1.5 py-0">En cours</Badge>}
                            {isCompleted && <Badge variant="outline" className="text-success border-success text-[10px] px-1.5 py-0">Terminé</Badge>}
                          </div>
                          <p className="font-display font-semibold text-sm text-card-foreground truncate">{phase.title}</p>
                          <div className="flex items-center gap-2 mt-1.5">
                            <Progress value={phaseProgress} className="h-1.5 flex-1" />
                            <span className="text-xs text-muted-foreground shrink-0">{phaseProgress}%</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sidebar: Challenges + Badges */}
        <div className="space-y-6">
          {/* Défis de la semaine */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-secondary" /> Défis de la semaine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {weeklyChallenges.map((c) => (
                <div key={c.id} className={`p-3 rounded-lg border ${c.completed ? "bg-success/5 border-success/20" : "bg-card"}`}>
                  <div className="flex items-start gap-3">
                    {c.completed ? (
                      <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${c.completed ? "text-success line-through" : "text-card-foreground"}`}>{c.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{c.description}</p>
                      <Badge variant="outline" className="mt-1.5 text-[10px]">+{c.xpReward} XP</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Badges récents */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-lg flex items-center gap-2">
                  <Star className="h-5 w-5 text-secondary" /> Badges
                </CardTitle>
                <Link to="/badges" className="text-xs text-secondary hover:underline">Voir tout</Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-3">
                {badges.slice(0, 8).map((b) => (
                  <div
                    key={b.id}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${b.earned ? "" : "opacity-30 grayscale"}`}
                    title={b.title}
                  >
                    <span className="text-2xl">{b.icon}</span>
                    <span className="text-[10px] text-center text-muted-foreground leading-tight line-clamp-1">{b.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Objectif hebdo */}
          <Card className="shadow-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-semibold text-sm text-card-foreground">Objectif hebdo</span>
                <span className="text-xs text-muted-foreground">{userProgress.weeklyProgress}h / {userProgress.weeklyGoal}h</span>
              </div>
              <Progress value={(userProgress.weeklyProgress / userProgress.weeklyGoal) * 100} className="h-2.5" />
              <p className="text-xs text-muted-foreground mt-2">
                Encore {(userProgress.weeklyGoal - userProgress.weeklyProgress).toFixed(1)}h pour atteindre votre objectif 💪
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;
