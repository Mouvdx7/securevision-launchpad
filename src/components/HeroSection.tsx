import { ArrowRight, Play } from "lucide-react";
import heroCamera from "@/assets/hero-camera.png";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-4 pb-20 lg:pt-6 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-up">
              <span className="status-glow" />
              <span className="text-sm font-medium text-muted-foreground">
                Surveillance intelligente 24/7
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-up-delay-1">
              Sécurisez votre maison même la nuit avec nos caméras intelligentes
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-[50ch] animate-fade-up-delay-2">
              Solution moderne de surveillance intelligente avec vision nocturne,
              alertes instantanées et contrôle depuis votre smartphone.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <a href="#produits" className="btn-primary gap-2">
                Voir les produits
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#fonctionnalites" className="btn-secondary gap-2">
                <Play className="w-4 h-4" />
                Découvrir les fonctionnalités
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-center animate-fade-up-delay-2">
            <div
              className="absolute w-[80%] h-[80%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
              }}
            />
            <img
              src={heroCamera}
              alt="Caméra de surveillance SecureVision"
              className="relative z-10 w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
