import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Salma El Amrani",
    comment: "L'installation sahla bzaf, w l'qualité dyal l'image wad7a w momtaza. Kansah b Smart Surveillance l ay wa7ed baghi y7afed 3la l'aman dyal daro.",
    rating: 5,
    initials: "SA",
  },
  {
    name: "Youssef Mansouri",
    comment: "Kanraqeb dari ghir b téléphone dyali 7ta w ana msafar. L'application sahla f l'utilisation, w les alertes kaywslou f wa9thom b sor3a.",
    rating: 5,
    initials: "YM",
  },
  {
    name: "Amina Bennani",
    comment: "La vision nocturne saraha fajatni, katban f lil b7al nhar. Had l'cameras kaysta7lo kol dirham tkhallas fihom.",
    rating: 5,
    initials: "AB",
  },
  {
    name: "Omar Tazi",
    comment: "Service mzyan bzaaf, w l'installation matalbat 7ta effort kbira. Daba kan7ess b ra7a ktar 7it dari m7mya mzyan.",
    rating: 5,
    initials: "OT",
  },
  {
    name: "Fatima-Zahra Alaoui",
    comment: "Les notifications kayjiw direct, w hadchi 3tani i7sas b contrôle 24/7. Produit fiable w kayn lfar9 m3a cameras 3adiyin.",
    rating: 5,
    initials: "FA",
  },
  {
    name: "Adil Benjelloun",
    comment: "Design dyal cameras zwine w modern, w qualité dyal tswira top. Franchement investissement li kaysta7el.",
    rating: 5,
    initials: "AB",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="avis" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chnou kigoulo l-klyane dyalna
          </h2>
          <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto">
            Kitiqo fina bach n-hafdo 3la l'aman dyal dyourhom.
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
