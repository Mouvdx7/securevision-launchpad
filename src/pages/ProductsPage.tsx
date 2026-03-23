import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/data/products";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { CartProvider } from "@/contexts/CartContext";
import CartPanel from "@/components/CartPanel";
import ProductDetailsModal from "@/components/ProductDetailsModal";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(() => {
    const badges = products.map((p) => p.badge);
    return ["Tous", ...Array.from(new Set(badges))];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                             p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "Tous" || p.badge === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 section-padding pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto">
            {/* Header / Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Nos Caméras
                </h1>
                <p className="text-muted-foreground text-lg max-w-[50ch]">
                  Explorez notre gamme complète de solutions de sécurité intelligentes.
                </p>
              </div>

              <div className="relative group w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                <input
                  type="text"
                  placeholder="Rechercher une caméra..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-secondary/50 border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  style={{ boxShadow: "var(--card-shadow)" }}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground mr-4">
                <Filter className="w-4 h-4" />
                Catégories :
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results */}
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 animate-fade-up">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-secondary/20 rounded-3xl border-2 border-dashed border-border">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Aucun résultat trouvé</h3>
                <p className="text-muted-foreground">Essayez d'ajuster vos filtres ou votre recherche.</p>
                <button 
                  onClick={() => { setSearch(""); setActiveCategory("Tous"); }}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Réinitialiser tout
                </button>
              </div>
            )}
          </div>
        </main>

        <Footer />
        <CartPanel />
        <ProductDetailsModal 
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </CartProvider>
  );
};

export default ProductsPage;
