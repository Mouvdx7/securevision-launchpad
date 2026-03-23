import { useState, useEffect, useRef } from "react";
import { X, User, Mail, Phone, MapPin, Camera, MessageSquare, CheckCircle, Send } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  typeLieu: string;
  nombreCameras: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  email?: string;
  telephone?: string;
  typeLieu?: string;
  nombreCameras?: string;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [form, setForm] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    typeLieu: "",
    nombreCameras: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle open/close animation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
      setTimeout(() => {
        document.body.style.overflow = "";
        setSubmitted(false);
        setForm({ nom: "", email: "", telephone: "", typeLieu: "", nombreCameras: "", message: "" });
        setErrors({});
        setLoading(false);
      }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nom.trim()) newErrors.nom = "Le nom est requis.";
    if (!form.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format d'email invalide.";
    }
    if (!form.telephone.trim()) {
      newErrors.telephone = "Le téléphone est requis.";
    } else if (!/^[\d\s\+\-\(\)]{8,}$/.test(form.telephone)) {
      newErrors.telephone = "Numéro de téléphone invalide.";
    }
    if (!form.typeLieu) newErrors.typeLieu = "Veuillez choisir un type de lieu.";
    if (!form.nombreCameras) newErrors.nombreCameras = "Veuillez choisir un nombre.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const isFormValid = form.nom && form.email && form.telephone && form.typeLieu && form.nombreCameras;

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6"
      style={{
        backgroundColor: visible ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(4px)" : "blur(0px)",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{
          transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div
          className="px-6 pt-6 pb-5 text-white"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Demander un devis</h2>
              <p className="text-blue-200 text-sm">Réponse sous 24h garantie</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {submitted ? (
            // Success State
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Demande envoyée !</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                ✅ Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-8 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}
              >
                Fermer
              </button>
            </div>
          ) : (
            // Form State
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

              {/* Nom */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nom complet *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${errors.nom ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"}`}
                  />
                </div>
                {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"}`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Téléphone *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    name="telephone"
                    type="tel"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="+212 6XX XXX XXX"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${errors.telephone ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"}`}
                  />
                </div>
                {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
              </div>

              {/* Type de lieu + Nombre caméras side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Type de lieu *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      name="typeLieu"
                      value={form.typeLieu}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 appearance-none bg-gray-50 ${errors.typeLieu ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                    >
                      <option value="">Choisir...</option>
                      <option value="maison">Maison</option>
                      <option value="commerce">Commerce</option>
                      <option value="bureau">Bureau</option>
                    </select>
                  </div>
                  {errors.typeLieu && <p className="text-red-500 text-xs mt-1">{errors.typeLieu}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Nb. caméras *</label>
                  <div className="relative">
                    <Camera className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      name="nombreCameras"
                      value={form.nombreCameras}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 appearance-none bg-gray-50 ${errors.nombreCameras ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                    >
                      <option value="">Choisir...</option>
                      <option value="1-2">1 – 2</option>
                      <option value="3-5">3 – 5</option>
                      <option value="6-10">6 – 10</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>
                  {errors.nombreCameras && <p className="text-red-500 text-xs mt-1">{errors.nombreCameras}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message (optionnel)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Informations supplémentaires..."
                    rows={3}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className="w-full py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer ma demande
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                🔒 Vos données sont protégées et ne seront jamais partagées.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
