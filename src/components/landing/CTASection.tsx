import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="gradient-hero rounded-3xl p-12 sm:p-16 text-center shadow-elevated"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
          Prêt à transformer <br className="hidden sm:block" />
          votre carrière de coach ?
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
          Rejoignez plus de 1 240 coachs qui ont déjà transformé leur passion en métier grâce à SportFlow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/signup">
              Commencer maintenant <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/courses">Découvrir le programme</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
