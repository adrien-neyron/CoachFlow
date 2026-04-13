import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Lock, FileText, Award, Linkedin, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const certSteps = [
  { id: 1, title: "Compléter tous les modules", description: "Terminez les 6 phases du parcours de formation", completed: false, progress: 34 },
  { id: 2, title: "Réaliser tous les livrables", description: "Soumettez vos 8 projets et livrables requis", completed: false, progress: 25 },
  { id: 3, title: "Examen théorique (50 questions)", description: "Obtenez 70% minimum au QCM final", completed: false, progress: 0 },
  { id: 4, title: "Étude de cas finale", description: "Analysez un cas client et proposez un accompagnement complet", completed: false, progress: 0 },
  { id: 5, title: "Validation par les mentors", description: "Vos livrables sont évalués par notre équipe pédagogique", completed: false, progress: 0 },
];

const completedDeliverables = [
  { name: "Fiche Vision Coach", module: "Phase 1", status: "validé" },
  { name: "Pitch 60 secondes", module: "Phase 1", status: "validé" },
  { name: "Fiche mémo anatomique", module: "Phase 2", status: "en cours" },
];

const Certification = () => {
  const totalProgress = Math.round(certSteps.reduce((a, s) => a + s.progress, 0) / certSteps.length);
  const isReady = totalProgress === 100;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl gradient-accent mb-6">
            <Award className="h-10 w-10 text-accent-foreground" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">Certification Coach Sportif</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Validez vos compétences et obtenez une attestation reconnue, partageable sur LinkedIn.
          </p>
          <div className="mt-6 max-w-sm mx-auto">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progression globale</span>
              <span className="font-display font-bold text-foreground">{totalProgress}%</span>
            </div>
            <Progress value={totalProgress} className="h-3" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Étapes de certification */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Étapes de certification</h2>
            {certSteps.map((step, i) => {
              const isLocked = i > 0 && certSteps[i - 1].progress < 100;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className={`shadow-card ${isLocked ? "opacity-50" : ""} ${step.completed ? "ring-1 ring-success" : ""}`}>
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${step.completed ? "bg-success/10" : isLocked ? "bg-muted" : "bg-secondary/10"}`}>
                        {step.completed ? (
                          <CheckCircle className="h-6 w-6 text-success" />
                        ) : isLocked ? (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <span className="font-display font-bold text-secondary">{step.id}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-display font-semibold text-sm text-card-foreground">{step.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
                        {!isLocked && !step.completed && (
                          <div className="mt-2 flex items-center gap-2">
                            <Progress value={step.progress} className="h-1.5 flex-1 max-w-[200px]" />
                            <span className="text-xs text-muted-foreground">{step.progress}%</span>
                          </div>
                        )}
                      </div>
                      {!isLocked && !step.completed && step.progress > 0 && (
                        <Button size="sm" variant="outline">
                          Continuer <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Aperçu certificat */}
            <Card className="shadow-card overflow-hidden">
              <div className="gradient-hero p-6 text-center">
                <Award className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h3 className="font-display font-bold text-primary-foreground text-lg">Certificat Coach Sportif</h3>
                <p className="text-primary-foreground/60 text-sm mt-1">Formation Éducateur Sportif</p>
                <div className="mt-4 border border-primary-foreground/20 rounded-lg p-3">
                  <p className="text-primary-foreground/40 text-xs italic">Votre nom apparaîtra ici</p>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <Button className="w-full" disabled={!isReady}>
                  {isReady ? "Télécharger le certificat" : "Complétez le parcours d'abord"}
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm" disabled={!isReady}>
                    <Linkedin className="h-4 w-4 mr-1" /> Partager
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm" disabled={!isReady}>
                    <Download className="h-4 w-4 mr-1" /> PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Livrables soumis */}
            <Card className="shadow-card">
              <CardContent className="p-5 space-y-3">
                <h3 className="font-display font-semibold text-card-foreground flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" /> Mes livrables
                </h3>
                {completedDeliverables.map((d) => (
                  <div key={d.name} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="text-sm text-card-foreground">{d.name}</p>
                      <p className="text-xs text-muted-foreground">{d.module}</p>
                    </div>
                    <Badge variant={d.status === "validé" ? "outline" : "secondary"} className={d.status === "validé" ? "text-success border-success" : ""}>
                      {d.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certification;
