import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { products, Product } from "@/data/products";
import ProductDetailsModal from "./ProductDetailsModal";
import { useState } from "react";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="produits" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos caméras de surveillance
          </h2>
          <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto">
            Des caméras conçues pour une sécurité intelligente, fiable et accessible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/produits" className="btn-secondary">
            Voir tous les produits
          </Link>
        </div>
      </div>

      <ProductDetailsModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductsSection;
