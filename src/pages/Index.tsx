import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartPanel from "@/components/CartPanel";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
        <Footer />
        <CartPanel />
      </div>
    </CartProvider>
  );
};

export default Index;
