import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Shield, CheckCircle2, Settings,
  ArrowRight, Camera, 
  Wrench, Clock, PhoneCall, CreditCard, Star,
  BadgeCheck, MapPin
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartPanel from "@/components/CartPanel";
import { CartProvider } from "@/contexts/CartContext";
import QuoteModal from "@/components/QuoteModal";

const ServicesHero = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white">
    {/* Subtle overlay background for light theme */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
      }}
    />
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-bold mb-8 justify-center shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Solutions Professionnelles
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.2] mb-6">
          Installation professionnelle de <span className="text-primary">caméras de surveillance</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 mx-auto max-w-2xl leading-relaxed font-light">
          Installation rapide, surveillance fiable, protection 24h/24
        </p>
        <div className="flex flex-col items-center gap-6">
          <button 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-1" 
            onClick={onOpenModal}
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              Demander un devis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-slate-600 font-medium mt-4">
            <span className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-primary" /> Devis gratuit</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Garantie 1 an</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Intervention à Marrakech</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesGrid = () => {
  const services = [
    {
      icon: <Camera className="w-10 h-10 text-primary mb-6" />,
      title: "Installation de caméras",
      bullets: [
        "Sans fil ou filaires (PoE)",
        "Vision nocturne Infrarouge",
        "Couverture optimale 360°"
      ]
    },
    {
      icon: <Settings className="w-10 h-10 text-primary mb-6" />,
      title: "Configuration système",
      bullets: [
        "Connexion WiFi / Réseau",
        "Paramétrage application mobile",
        "Alertes de détection en direct"
      ]
    },
    {
      icon: <Wrench className="w-10 h-10 text-primary mb-6" />,
      title: "Maintenance & SAV",
      bullets: [
        "Intervention rapide sur site",
        "Mise à jour du système",
        "Remplacement de matériel"
      ]
    },
    {
      icon: <Shield className="w-10 h-10 text-primary mb-6" />,
      title: "Conseil & Sécurité",
      bullets: [
        "Audit de sécurité gratuit",
        "Solutions sur-mesure",
        "Respect normes confidentialité"
      ]
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">Nos Services d'Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Des solutions complètes pour garantir la sécurité absolue de votre domicile ou de votre entreprise.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 animate-fade-up group cursor-pointer"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="p-4 rounded-xl bg-slate-50 inline-block group-hover:bg-blue-50 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-slate-900">{service.title}</h3>
              <ul className="space-y-3">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const advantages = [
    { icon: <Clock className="w-7 h-7" />, title: "Installation rapide", desc: "Intervention sous 24 à 48h selon l'urgence de vos besoins." },
    { icon: <Shield className="w-7 h-7" />, title: "Matériel haute qualité", desc: "Des caméras de dernière génération avec garantie constructeur." },
    { icon: <PhoneCall className="w-7 h-7" />, title: "Support client réactif", desc: "Une assistance technique toujours à votre écoute 7j/7." },
    { icon: <CreditCard className="w-7 h-7" />, title: "Prix transparents", desc: "Des devis clairs et détaillés, sans frais cachés ni surprises." }
  ];

  return (
    <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Pourquoi choisir <span className="text-primary">Smart Surveillance ?</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Notre engagement : vous offrir la meilleure protection avec un service irréprochable.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{adv.title}</h3>
              <p className="text-slate-400 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "Demande de devis", desc: "Contactez-nous pour exprimer vos besoins en sécurité.", icon: "01" },
    { title: "Analyse des besoins", desc: "Nous étudions votre espace et proposons la meilleure solution.", icon: "02" },
    { title: "Installation", desc: "Nos experts installent et paramètrent tout le matériel.", icon: "03" },
    { title: "Suivi & assistance", desc: "Profitez d'un support technique continu et réactif.", icon: "04" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">Comment ça marche ?</h2>
          <p className="text-slate-600 text-lg">Un processus simple et transparent en 4 étapes.</p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center animate-fade-up group cursor-pointer" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative z-10 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] transition-all duration-300 ease-out">
                  <span className="text-3xl font-display font-bold text-primary group-hover:text-white transition-colors duration-300">{step.icon}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderProfile = () => {
  return (
    <section className="py-8 md:py-10 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <div className="relative group cursor-pointer mb-4">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            {/* Circular Image Container */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-amber-500/30 p-1 bg-slate-800">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-700">
                <img 
                  src="/src/assets/image copy 9.png" 
                  alt="Mouad Anmirate" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=Mouad+Anmirate&background=f59e0b&color=fff&size=512";
                  }}
                />
              </div>
            </div>
            
            {/* Minimal Badge */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-amber-500/20">
              Verified
            </div>
          </div>

          <h2 className="text-xl md:text-3xl font-display font-bold text-white mb-1 tracking-tight">
            Mouad <span className="text-amber-500">Anmirate</span>
          </h2>
          <p className="text-amber-500/80 font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4">
            Fondateur de projet
          </p>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 opacity-50" />
          
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed italic">
            "Notre mission est de rendre la sécurité intelligente accessible à tous les foyers marocains, avec une excellence technique et un service de proximité."
          </p>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed B.",
      text: "Khedma n9iya w professionnel, rekbo lya 4 dyal les caméras f villa dyali f Marrakech. Drari jaw f lwe9t w chr7o lya kolchi mzian. Kanenssa7 bihom 100%!",
      rating: 5
    },
    {
      name: "Karim M.",
      text: "Saraha zraben w ma3ndhoumch m3a t3tal. Tlebt devis f sba7, jaw f l3chiya chafu dar. Matériel s7i7 w sora wadh7a blil w bnhar.",
      rating: 5
    },
    {
      name: "Sofia R.",
      text: "Atmina mziana w bla zyada, w service mkhyeyer. L'application dyalhoum sahla f listi3mal, daba wlit kan7es b l'aman f dari ktar.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">Ce que disent nos clients</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div className="font-bold text-slate-900">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white text-balance">
          Protégez votre maison dès aujourd’hui
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Disponible 24h/24 – Intervention rapide pour votre tranquillité d'esprit.
        </p>
        <div className="flex justify-center">
          <button 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-white rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            onClick={onOpenModal}
          >
            <span className="relative flex items-center gap-2">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <ServicesHero onOpenModal={() => setIsModalOpen(true)} />
        <ServicesGrid />
        <WhyChooseUs />
        <ProcessSection />
        <TestimonialsSection />
        <FounderProfile />
        <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
        <Footer />
        <CartPanel />
        <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default ServicesPage;
