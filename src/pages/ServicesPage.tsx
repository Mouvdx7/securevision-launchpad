import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, CheckCircle2, Settings, Lightbulb, PenTool, ClipboardCheck, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartPanel from "@/components/CartPanel";
import { CartProvider } from "@/contexts/CartContext";
import QuoteModal from "@/components/QuoteModal";

const ServicesHero = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="relative pt-16 pb-12 md:pt-20 md:pb-20 overflow-hidden">
    {/* Gradient background matching main hero */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
      }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 justify-center">
          <div className="status-glow" />
          Solutions Professionnelles
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
          Installation professionnelle de <span className="text-primary">caméras de surveillance</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 mx-auto max-w-lg leading-relaxed">
          Nous proposons des solutions complètes pour sécuriser votre maison ou votre entreprise avec des caméras intelligentes et une installation rapide.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary" onClick={onOpenModal}>
            Demander un devis
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ServicesGrid = () => {
  const services = [
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Installation de caméras",
      description: "Installation complète à domicile ou en entreprise. Positionnement stratégique des caméras pour une couverture optimale."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Configuration du système",
      description: "Connexion au WiFi, paramétrage de l'application mobile et activation des alertes intelligentes."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Maintenance et support",
      description: "Assistance technique, réparation, suivi et mise à jour régulière du système pour votre tranquillité."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Conseil personnalisé",
      description: "Analyse approfondie de vos besoins, recommandation des meilleures solutions et optimisation de votre sécurité."
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Nos Services d'Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Des solutions sur mesure pour chaque besoin de sécurité.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`feature-card animate-fade-up-delay-${idx + 1}`}>
              <div className="mb-6 p-4 rounded-2xl bg-primary/5 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "Analyse des besoins", icon: <Shield className="w-6 h-6" /> },
    { title: "Choix des caméras", icon: <Shield className="w-6 h-6" /> },
    { title: "Installation rapide", icon: <Shield className="w-6 h-6" /> },
    { title: "Configuration et test", icon: <Shield className="w-6 h-6" /> },
    { title: "Suivi et support", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Notre Processus</h2>
          <p className="text-muted-foreground">Comment nous sécurisons votre espace, étape par étape.</p>
        </div>
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground shadow-lg">
                  <span className="text-lg font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-lg px-4">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const points = [
    "Installation rapide",
    "Technologie intelligente",
    "Prix accessibles",
    "Support client réactif",
    "Sécurité renforcée la nuit"
  ];

  return (
    <section className="section-padding bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="animate-fade-up max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Pourquoi choisir <span className="text-primary">SecureVision ?</span></h2>
          <div className="space-y-6 flex flex-col items-center">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-4 group w-full max-w-md">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="w-5 h-4 text-primary group-hover:text-white" />
                </div>
                <span className="text-xl font-medium text-white/90">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <ServicesHero onOpenModal={() => setIsModalOpen(true)} />
        <ServicesGrid />
        <ProcessSection />
        <WhyChooseUs />
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Protégez votre maison dès aujourd’hui</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="btn-primary px-10" onClick={() => navigate("/produits")}>Commander maintenant</button>
              <button className="btn-secondary px-10" onClick={() => setIsModalOpen(true)}>Demander une installation</button>
            </div>
          </div>
        </section>
        <Footer />
        <CartPanel />
        <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default ServicesPage;
