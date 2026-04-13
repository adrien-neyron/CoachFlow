import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/asset/hero-sports.jpg";
import { Play, ArrowRight, Award } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Coach sportif en formation" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-3xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-sm text-primary-foreground/80 backdrop-blur-sm"
        >
          <Award className="h-3.5 w-3.5" />
          <span>Formation certifiante · 14 semaines</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight"
        >
          Devenez Coach
          <br />
          <span className="text-secondary">Sportif.</span> Vivez
          <br />
          de votre passion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl leading-relaxed"
        >
          La formation en ligne qui transforme les passionnés de sport en coachs professionnels, confiants et rentables. Parcours gamifié, projets réels, certification reconnue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="xl" asChild>
            <Link to="/signup">
              Commencer la formation <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/courses">Voir le programme</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-8 pt-4 text-primary-foreground/60 text-sm"
        >
          <div><span className="text-2xl font-bold text-primary-foreground">1 240+</span><br />Coachs formés</div>
          <div className="h-8 w-px bg-primary-foreground/20" />
          <div><span className="text-2xl font-bold text-primary-foreground">82</span><br />Leçons</div>
          <div className="h-8 w-px bg-primary-foreground/20" />
          <div><span className="text-2xl font-bold text-primary-foreground">94%</span><br />Taux de réussite</div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
