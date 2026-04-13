import { motion } from "framer-motion";
import { BookOpen, Video, Trophy, Target, Users, Flame } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Parcours structuré", description: "6 phases progressives, 12 modules, 82 leçons pour une montée en compétences maîtrisée." },
  { icon: Video, title: "Vidéos courtes & concrètes", description: "Des leçons de 10-25 min, actionnables immédiatement avec des templates téléchargeables." },
  { icon: Trophy, title: "Projets réels", description: "Créez de vrais programmes clients, simulez des entretiens, construisez votre offre commerciale." },
  { icon: Target, title: "Gamification", description: "Badges, niveaux, défis hebdomadaires et classement pour rester motivé tout au long du parcours." },
  { icon: Users, title: "Communauté active", description: "Échangez avec vos pairs, participez aux challenges collectifs et aux sessions de coaching de groupe." },
  { icon: Flame, title: "Certification reconnue", description: "Obtenez une attestation partageable sur LinkedIn après validation de vos compétences." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Une formation pensée pour vous transformer
        </h2>
        <p className="text-muted-foreground text-lg">
          Pas un simple cours en ligne. Un vrai parcours de transformation professionnelle.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="group p-8 rounded-xl border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-lg gradient-accent flex items-center justify-center mb-5">
              <f.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
