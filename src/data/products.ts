import cameraMini from "@/assets/camera-mini.png";
import cameraPro from "@/assets/camera-pro.png";
import camera360 from "@/assets/camera-360.png";

export interface Product {
  id: string;
  name: string;
  badge: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "smartvision-mini",
    name: "SmartVision Mini",
    badge: "Nouveau",
    description: "Caméra compacte avec vision nocturne et détection de mouvement.",
    price: 49,
    image: cameraMini,
    features: ["Vision nocturne HD", "Détection de mouvement", "Connexion WiFi", "Installation rapide"],
  },
  {
    id: "securevision-pro",
    name: "SecureVision Pro",
    badge: "Pro",
    description: "Caméra HD avec vision nocturne avancée et application mobile.",
    price: 89,
    image: cameraPro,
    features: ["Vidéo HD 1080p", "Alertes instantanées", "Accès mobile", "Stockage sécurisé"],
  },
  {
    id: "securevision-360",
    name: "SecureVision 360",
    badge: "Premium",
    description: "Caméra rotative avec vision 360°, alerte mobile et enregistrement cloud.",
    price: 129,
    image: camera360,
    features: ["Rotation 360°", "Suivi automatique", "Cloud sécurisé", "Vision nocturne avancée"],
  },
];
