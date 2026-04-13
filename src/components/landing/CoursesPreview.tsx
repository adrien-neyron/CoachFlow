import { motion } from "framer-motion";
import { Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { formationPhases } from "@/data/formation";

const CoursesPreview = () => (
  <section className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Le parcours en 6 phases
        </h2>
        <p className="text-muted-foreground text-lg">
          De la découverte du métier à la certification — un chemin clair vers votre nouvelle carrière.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {formationPhases.map((phase, i) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link to={`/courses/${phase.id}`} className="group block">
              <div className="flex items-center gap-4 p-4 rounded-xl border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-2xl">
                  {phase.modules[0]?.icon || "📖"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Badge variant="outline" className="text-[10px]">Phase {phase.phase}</Badge>
                    <span className="text-xs text-muted-foreground">{phase.duration}</span>
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground text-sm group-hover:text-secondary transition-colors">{phase.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{phase.subtitle}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-secondary transition-colors" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button asChild>
          <Link to="/courses">
            Voir le programme complet <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CoursesPreview;
