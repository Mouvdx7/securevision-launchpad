import React from "react";
import { X, ShoppingCart, Shield, Truck, Zap } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailsModal = ({ product, isOpen, onClose }: ProductDetailsModalProps) => {
  const { addItem } = useCart();

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md pointer-events-auto"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-card rounded-[2rem] shadow-2xl overflow-hidden border border-border animate-in zoom-in-95 duration-200 pointer-events-auto max-h-full overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 p-2 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Sidebar */}
          <div className="w-full md:w-1/2 bg-secondary/30 p-8 flex items-center justify-center min-h-[400px]">
            <div className="relative group perspective-1000 w-full aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-2xl animate-fade-in"
              />
              <div className="absolute top-0 left-0 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                {product.badge}
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h2>
              <div className="flex items-center gap-4 text-2xl font-bold text-primary mb-6">
                {product.price} DH
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.longDescription || product.description}
              </p>
            </div>

            {/* Technical Specs */}
            {product.technicalSpecs && (
              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-4">
                  Spécifications Techniques
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.technicalSpecs).map(([key, value]) => (
                    <div key={key} className="flex flex-col p-3 rounded-xl bg-secondary/50 border border-border/50">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground mb-1">{key}</span>
                      <span className="text-sm font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Benefits */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase">Garantie 2 ans</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase">Livraison 48h</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase">SAV Local</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                className="btn-primary flex-1 py-4 text-lg font-bold flex items-center justify-center gap-3"
                onClick={() => addItem({ name: product.name, price: product.price, image: product.image })}
              >
                <ShoppingCart className="w-5 h-5" />
                Acheter maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
