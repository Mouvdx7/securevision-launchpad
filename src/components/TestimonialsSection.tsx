import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    comment: "Installation très simple et qualité vidéo excellente. Je recommande vivement SecureVision pour la sécurité de votre maison.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Pierre Durand",
    comment: "Je peux surveiller ma maison depuis mon téléphone, même en voyage. L'application est intuitive et les alertes sont instantanées.",
    rating: 5,
    initials: "PD",
  },
  {
    name: "Marie Lambert",
    comment: "La vision nocturne est impressionnante. On voit aussi bien de nuit que de jour. Un investissement qui vaut chaque centime.",
    rating: 5,
    initials: "ML",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="avis" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto">
            Ils nous font confiance pour protéger leur maison.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                "{t.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{t.initials}</span>
                </div>
                <span className="font-medium text-sm text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
