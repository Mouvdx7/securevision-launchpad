import { Moon, Video, Smartphone, Cloud, Zap } from "lucide-react";

const features = [
  {
    icon: Moon,
    title: "Vision nocturne intelligente",
    description: "Capturez des images claires même dans l'obscurité totale grâce à notre technologie infrarouge avancée.",
  },
  {
    icon: Video,
    title: "Détection de mouvement",
    description: "Recevez des alertes instantanées dès qu'un mouvement suspect est détecté dans votre zone de surveillance.",
  },
  {
    icon: Smartphone,
    title: "Accès depuis smartphone",
    description: "Contrôlez et visualisez vos caméras en temps réel depuis votre application mobile, où que vous soyez.",
  },
  {
    icon: Cloud,
    title: "Enregistrement cloud sécurisé",
    description: "Vos enregistrements sont stockés de manière sécurisée dans le cloud avec chiffrement de bout en bout.",
  },
  {
    icon: Zap,
    title: "Installation facile",
    description: "Installez votre caméra en quelques minutes grâce à notre système de montage simplifié et l'assistant de configuration.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="fonctionnalites" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fonctionnalités principales
          </h2>
          <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto">
            Une technologie de pointe pour une sécurité sans compromis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-[5deg]">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
