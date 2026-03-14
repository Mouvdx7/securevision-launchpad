import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding section-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Protégez ce qui compte le plus
        </h2>
        <p className="text-lg opacity-70 mb-8 max-w-[45ch] mx-auto">
          Rejoignez des milliers de foyers qui font confiance à SecureVision pour leur sécurité au quotidien.
        </p>
        <a href="#contact" className="btn-primary text-base px-8 py-4 gap-2">
          Commander maintenant
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
