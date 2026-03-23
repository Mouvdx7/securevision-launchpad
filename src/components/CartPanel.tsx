import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const CartPanel = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: isOpen ? "-8px 0 30px rgba(15, 23, 42, 0.1)" : "none" }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-display font-semibold text-lg text-foreground">Votre panier</h2>
            <button
              onClick={closeCart}
              className="p-2 rounded-2xl hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground/40 mb-4" />
                <p className="text-muted-foreground">Votre panier est vide</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-4 p-3 rounded-2xl"
                    style={{ boxShadow: "var(--card-shadow)" }}
                  >
                    <div className="w-20 h-20 rounded-xl bg-secondary/50 flex items-center justify-center flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-sm text-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-primary font-semibold mt-0.5" style={{ fontVariantNumeric: "tabular-nums" }}>
                        {item.price} DH
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5 text-foreground" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5 text-foreground" />
                        </button>
                        <button
                          onClick={() => removeItem(item.name)}
                          className="ml-auto p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"
                        >
                          <X className="w-3.5 h-3.5 text-destructive" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-display text-xl font-bold text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {totalPrice} DH
                </span>
              </div>
              <button
                className="btn-primary w-full justify-center py-3.5"
                onClick={() => {
                  closeCart();
                  // Navigate to checkout for the first item
                  if (items.length > 0) {
                    const found = products.find((p) => p.name === items[0].name);
                    navigate(`/commander/${found?.id || "smartvision-mini"}`);
                  }
                }}
              >
                Commander maintenant
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPanel;
