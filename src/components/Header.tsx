import { useState } from "react";
import { ShoppingCart, Menu, X, Shield } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Produits", href: "/produits" },
  { label: "Notre Services", href: "/services" },
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Avis", href: "/#avis" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  return (
    <header className="header-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <Shield className="w-7 h-7 text-primary" />
            <span className="font-display font-bold text-xl text-foreground">
              Smart<span className="text-primary"> Surveillance</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium pb-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Cart + mobile toggle */}
          <div className="flex items-center gap-4">
            <button onClick={openCart} className="relative p-2 rounded-2xl transition-colors duration-200 hover:bg-secondary">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center" style={{ fontVariantNumeric: "tabular-nums" }}>
                {totalItems}
              </span>
            </button>
            <button
              className="md:hidden p-2 rounded-2xl hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 animate-fade-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
