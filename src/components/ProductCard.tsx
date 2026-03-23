import { Check, ShoppingCart } from "lucide-react";
import { useState, useRef } from "react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { addItem } = useCart();
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 30;
    const y = (e.clientY - top - height / 2) / 30;
    setCoords({ x: -y, y: x });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCoords({ x: 0, y: 0 });
      }}
      onClick={onClick}
      className="product-card group flex flex-col transition-all duration-200 ease-out h-full cursor-pointer"
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        zIndex: isHovering ? 10 : 1,
      }}
    >
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
          {product.features.map((f: string) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-auto gap-2">
          <span className="font-display text-xl font-bold text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>
            {product.price}&nbsp;DH
          </span>
          <button
            className="btn-primary text-[11px] px-2.5 py-2 whitespace-nowrap flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              addItem({ name: product.name, price: product.price, image: product.image });
            }}
          >
            Acheter maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
