import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const ProductsSection = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.name} className="product-card group flex flex-col">
              {/* Image area */}
              <div className="relative aspect-square rounded-2xl bg-secondary/50 flex items-center justify-center overflow-hidden mb-1">
                <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-foreground text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="status-glow" />
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {product.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {product.price}&nbsp;€
                  </span>
                  <button
                    className="btn-primary text-sm px-5 py-2.5"
                    onClick={() => {
                      addItem({ name: product.name, price: product.price, image: product.image });
                      navigate(`/commander/${product.id}`);
                    }}
                  >
                    Acheter maintenant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
