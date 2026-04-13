import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, Play, FileText, CheckCircle, HelpCircle, Zap, Trophy, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { formationPhases } from "@/data/formation";
import type { Lesson } from "@/data/formation";

const lessonIcon = (type: Lesson["type"], completed?: boolean) => {
  if (completed) return <CheckCircle className="h-4 w-4 text-success shrink-0" />;
  switch (type) {
    case "video": return <Play className="h-4 w-4 text-muted-foreground shrink-0" />;
    case "pdf": return <FileText className="h-4 w-4 text-muted-foreground shrink-0" />;
    case "quiz": return <HelpCircle className="h-4 w-4 text-info shrink-0" />;
    case "challenge": return <Zap className="h-4 w-4 text-secondary shrink-0" />;
    case "project": return <Trophy className="h-4 w-4 text-warning shrink-0" />;
  }
};

const CourseDetail = () => {
  const { id } = useParams();
  const phase = formationPhases.find((p) => p.id === id) || formationPhases[0];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-5 text-primary-foreground">
              <Badge className="bg-secondary text-secondary-foreground">Phase {phase.phase}</Badge>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {phase.title}
              </h1>
              <p className="text-primary-foreground/70 text-lg">{phase.subtitle}</p>
              <p className="text-primary-foreground/60 text-sm">{phase.objective}</p>

              <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {phase.duration}</span>
                <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {phase.modules.length} modules</span>
                <span className="flex items-center gap-1"><Play className="h-4 w-4" /> {phase.lessonsCount} leçons</span>
              </div>

              <Card className="bg-primary-foreground/5 border-primary-foreground/10">
                <CardContent className="p-4 space-y-2">
                  <p className="text-xs text-primary-foreground/50 uppercase tracking-wide font-medium">Transformation</p>
                  <p className="text-sm text-primary-foreground/80 italic">{phase.transformation}</p>
                  <p className="text-xs text-primary-foreground/50 uppercase tracking-wide font-medium mt-3">Résultat concret</p>
                  <p className="text-sm text-primary-foreground/80">🎯 {phase.result}</p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={phase.image} alt={phase.title} className="w-full aspect-video object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">Programme du module</h2>

          <Accordion type="multiple" defaultValue={["module-0"]} className="space-y-3">
            {phase.modules.map((mod, mi) => (
              <AccordionItem key={mod.id} value={`module-${mi}`} className="border rounded-xl px-4 bg-card shadow-card">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-2xl">{mod.icon}</span>
                    <div>
                      <span className="font-display font-semibold text-card-foreground">{mod.title}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{mod.lessons.length} leçons · {mod.objective}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 space-y-3">
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {mod.skills.map((s) => (
                      <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>
                    ))}
                  </div>

                  {/* Lessons */}
                  <div className="space-y-1">
                    {mod.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/courses/${phase.id}/lessons/${lesson.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        {lessonIcon(lesson.type)}
                        <div className="flex-1 min-w-0">
                          <span className="text-sm text-card-foreground group-hover:text-secondary transition-colors">{lesson.title}</span>
                          {lesson.deliverable && (
                            <p className="text-xs text-muted-foreground">📎 Livrable : {lesson.deliverable}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <Badge variant="outline" className="text-[10px]">{lesson.type}</Badge>
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Deliverable */}
                  <div className="mt-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <p className="text-xs font-medium text-secondary flex items-center gap-1">
                      <Trophy className="h-3.5 w-3.5" /> Livrable du module
                    </p>
                    <p className="text-sm text-card-foreground mt-1">{mod.deliverable}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
