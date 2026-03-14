import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { ArrowLeft, Check, ShieldCheck, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import CartPanel from "@/components/CartPanel";

const orderSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne doit pas dépasser 100 caractères"),
  phone: z
    .string()
    .trim()
    .min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres")
    .max(20, "Numéro de téléphone trop long")
    .regex(/^[+]?[\d\s()-]+$/, "Format de numéro invalide"),
  email: z
    .string()
    .trim()
    .email("Adresse email invalide")
    .max(255, "Email trop long"),
  address: z
    .string()
    .trim()
    .min(5, "L'adresse doit contenir au moins 5 caractères")
    .max(300, "Adresse trop longue"),
  city: z
    .string()
    .trim()
    .min(2, "La ville doit contenir au moins 2 caractères")
    .max(100, "Nom de ville trop long"),
  quantity: z
    .number()
    .int()
    .min(1, "La quantité minimum est 1")
    .max(10, "La quantité maximum est 10"),
  notes: z
    .string()
    .trim()
    .max(500, "Les notes ne doivent pas dépasser 500 caractères")
    .optional()
    .or(z.literal("")),
});

type OrderForm = z.infer<typeof orderSchema>;

const WHATSAPP_NUMBER = "33123456789"; // Replace with real number

const CheckoutPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === productId);

  const [form, setForm] = useState<OrderForm>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    quantity: 1,
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return (
      <CartProvider>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <div className="flex-1 flex items-center justify-center section-padding">
            <div className="text-center">
              <h1 className="font-display text-2xl font-bold text-foreground mb-4">
                Produit introuvable
              </h1>
              <Link to="/#produits" className="btn-primary">
                Retour aux produits
              </Link>
            </div>
          </div>
          <Footer />
          <CartPanel />
        </div>
      </CartProvider>
    );
  }

  const totalPrice = product.price * form.quantity;

  const updateField = <K extends keyof OrderForm>(key: K, value: OrderForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Clear error on change
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = orderSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof OrderForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof OrderForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    // Build WhatsApp message
    const message = [
      `🛒 *Nouvelle commande SecureVision*`,
      ``,
      `📦 *Produit :* ${product.name}`,
      `💰 *Prix unitaire :* ${product.price} €`,
      `🔢 *Quantité :* ${form.quantity}`,
      `💳 *Total :* ${totalPrice} €`,
      ``,
      `👤 *Nom :* ${form.fullName}`,
      `📞 *Téléphone :* ${form.phone}`,
      `📧 *Email :* ${form.email}`,
      `📍 *Adresse :* ${form.address}, ${form.city}`,
      form.notes ? `📝 *Notes :* ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <CartProvider>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <div className="flex-1 flex items-center justify-center section-padding">
            <div className="text-center max-w-md animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="font-display text-2xl font-bold text-foreground mb-3">
                Commande envoyée !
              </h1>
              <p className="text-muted-foreground mb-8">
                Votre commande a été transmise via WhatsApp. Notre équipe vous contactera rapidement pour confirmer votre commande.
              </p>
              <button onClick={() => navigate("/")} className="btn-primary">
                Retour à l'accueil
              </button>
            </div>
          </div>
          <Footer />
          <CartPanel />
        </div>
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 section-padding">
          <div className="max-w-5xl mx-auto">
            {/* Back */}
            <button
              onClick={() => navigate("/#produits")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux produits
            </button>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Product summary — left col */}
              <div className="lg:col-span-2">
                <div className="product-card sticky top-24">
                  <div className="aspect-square rounded-2xl bg-secondary/50 flex items-center justify-center mb-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="status-glow" />
                      <h2 className="font-display font-semibold text-lg text-foreground">
                        {product.name}
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-sm text-muted-foreground">Prix unitaire</span>
                      <span
                        className="font-display text-2xl font-bold text-foreground"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {product.price} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order form — right col */}
              <div className="lg:col-span-3">
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Finaliser votre commande
                </h1>
                <p className="text-muted-foreground mb-8">
                  Remplissez vos informations pour commander via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Full Name */}
                  <FieldGroup label="Nom complet" error={errors.fullName}>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Jean Dupont"
                      className="checkout-input"
                      style={{ boxShadow: "var(--card-shadow)" }}
                    />
                  </FieldGroup>

                  {/* Phone + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FieldGroup label="Téléphone" error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+33 6 12 34 56 78"
                        className="checkout-input"
                        style={{ boxShadow: "var(--card-shadow)" }}
                      />
                    </FieldGroup>
                    <FieldGroup label="Email" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="jean@email.com"
                        className="checkout-input"
                        style={{ boxShadow: "var(--card-shadow)" }}
                      />
                    </FieldGroup>
                  </div>

                  {/* Address */}
                  <FieldGroup label="Adresse de livraison" error={errors.address}>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      placeholder="12 Rue de la Paix"
                      className="checkout-input"
                      style={{ boxShadow: "var(--card-shadow)" }}
                    />
                  </FieldGroup>

                  {/* City + Quantity */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FieldGroup label="Ville" error={errors.city}>
                      <input
                        type="text"
                        value={form.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        placeholder="Paris"
                        className="checkout-input"
                        style={{ boxShadow: "var(--card-shadow)" }}
                      />
                    </FieldGroup>
                    <FieldGroup label="Quantité" error={errors.quantity}>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateField("quantity", Math.max(1, form.quantity - 1))}
                          className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-foreground font-bold hover:bg-muted transition-colors"
                        >
                          −
                        </button>
                        <span
                          className="w-12 text-center font-display text-lg font-semibold text-foreground"
                          style={{ fontVariantNumeric: "tabular-nums" }}
                        >
                          {form.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateField("quantity", Math.min(10, form.quantity + 1))}
                          className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-foreground font-bold hover:bg-muted transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </FieldGroup>
                  </div>

                  {/* Notes */}
                  <FieldGroup label="Notes (optionnel)" error={errors.notes}>
                    <textarea
                      value={form.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      placeholder="Instructions spéciales pour la livraison..."
                      rows={3}
                      className="checkout-input resize-none"
                      style={{ boxShadow: "var(--card-shadow)" }}
                    />
                  </FieldGroup>

                  {/* Total + Submit */}
                  <div
                    className="rounded-2xl p-5 mt-2"
                    style={{ boxShadow: "var(--card-shadow)" }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">
                        {product.name} × {form.quantity}
                      </span>
                      <span
                        className="font-display text-sm font-semibold text-foreground"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {totalPrice} €
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border mt-3">
                      <span className="font-medium text-foreground">Total</span>
                      <span
                        className="font-display text-2xl font-bold text-foreground"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {totalPrice} €
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-4 text-base gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Commander via WhatsApp
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    En cliquant, vous serez redirigé vers WhatsApp pour finaliser votre commande avec notre équipe.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <CartPanel />
      </div>
    </CartProvider>
  );
};

/* Reusable field wrapper */
const FieldGroup = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
    {children}
    {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
  </div>
);

export default CheckoutPage;
