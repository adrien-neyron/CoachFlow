import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BookOpen, ArrowRight, CheckCircle, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formationPhases, getTotalStats } from "@/data/formation";

const stats = getTotalStats();

const Courses = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="gradient-hero pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight">
            Parcours de Formation<br />
            <span className="text-secondary">Éducateur Sportif</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg">
            {stats.totalPhases} phases · {stats.totalModules} modules · {stats.totalLessons} leçons · {stats.totalWeeks} semaines
          </p>
        </motion.div>
      </div>
    </section>

    <main className="container mx-auto px-4 py-16">
      {/* Phase cards */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {formationPhases.map((phase, i) => {
          const isCompleted = i < 2;
          const isActive = i === 2;
          const isLocked = i > 2;
          const phaseProgress = isCompleted ? 100 : isActive ? 45 : 0;

          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={isLocked ? "#" : `/courses/${phase.id}`}>
                <Card className={`shadow-card overflow-hidden transition-all duration-300 ${isActive ? "ring-2 ring-secondary" : ""} ${isLocked ? "opacity-50" : "hover:shadow-card-hover hover:-translate-y-1"}`}>
                  <CardContent className="p-0 flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-32 sm:h-auto overflow-hidden shrink-0">
                      <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5 flex-1 space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs">Phase {phase.phase}</Badge>
                        {isCompleted && <Badge variant="outline" className="text-success border-success text-xs">✓ Terminé</Badge>}
                        {isActive && <Badge className="bg-secondary text-secondary-foreground text-xs">En cours</Badge>}
                        {isLocked && <Badge variant="outline" className="text-xs"><Lock className="h-3 w-3 mr-1" /> Verrouillé</Badge>}
                      </div>
                      <h2 className="font-display text-xl font-bold text-card-foreground">{phase.title}</h2>
                      <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {phase.duration}</span>
                        <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {phase.modules.length} modules · {phase.lessonsCount} leçons</span>
                      </div>
                      <p className="text-xs text-muted-foreground italic">🎯 {phase.result}</p>
                      {!isLocked && (
                        <div className="flex items-center gap-3">
                          <Progress value={phaseProgress} className="h-2 flex-1 max-w-[200px]" />
                          <span className="text-xs font-medium text-muted-foreground">{phaseProgress}%</span>
                        </div>
                      )}
                    </div>
                    <div className="hidden sm:flex items-center pr-5">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </main>
    <Footer />
  </div>
);

export default Courses;
