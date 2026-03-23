import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-lg">
                Secure<span className="text-primary">Vision</span>
              </span>
            </div>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              Solutions de surveillance intelligente pour protéger ce qui compte le plus.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Produits</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#produits" className="hover:opacity-100 transition-opacity">SmartVision Mini</a></li>
              <li><a href="#produits" className="hover:opacity-100 transition-opacity">SecureVision Pro</a></li>
              <li><a href="#produits" className="hover:opacity-100 transition-opacity">SecureVision 360</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#accueil" className="hover:opacity-100 transition-opacity">Accueil</a></li>
              <li><a href="#fonctionnalites" className="hover:opacity-100 transition-opacity">Fonctionnalités</a></li>
              <li><a href="#avis" className="hover:opacity-100 transition-opacity">Avis</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Réseaux sociaux</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Twitter</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-40">
          <p>© {new Date().getFullYear()} SecureVision. Tous droits réservés.</p>
          <p className="mt-2 text-xs opacity-80 italic">Projet PIE Avec prof ZAOUIA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
