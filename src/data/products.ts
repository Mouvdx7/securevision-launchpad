import cameraMini from "@/assets/camera-mini.png";
import cameraPro from "@/assets/camera-pro.png";
import camera360 from "@/assets/camera-360.png";
import outdoorSolar from "@/assets/outdoor-solar.png";
import smartDoorbell from "@/assets/smart-doorbell.png";
import imgNew1 from "@/assets/image.png";
import imgNew2 from "@/assets/image copy.png";
import imgNew3 from "@/assets/image copy 2.png";
import imgNew4 from "@/assets/image copy 3.png";
import imgNew5 from "@/assets/image copy 4.png";
import imgNew6 from "@/assets/image copy 5.png";
import imgNew7 from "@/assets/image copy 6.png";
import imgNew8 from "@/assets/image copy 7.png";
import imgNew9 from "@/assets/image copy 8.png";
import heroCamera from "@/assets/hero-camera.png";

export interface Product {
  id: string;
  name: string;
  badge: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  longDescription?: string;
  technicalSpecs?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "smartvision-mini",
    name: "SmartVision Mini",
    badge: "Nouveau",
    description: "Caméra compacte avec vision nocturne et détection de mouvement.",
    price: 490,
    image: cameraMini,
    features: ["Vision nocturne HD", "Détection de mouvement", "Connexion WiFi", "Installation rapide"],
    longDescription: "La SmartVision Mini est la solution idéale pour surveiller discrètement votre intérieur. Malgré sa taille réduite, elle embarque une technologie de pointe permettant une vision claire même dans l'obscurité totale et une détection de mouvement intelligente.",
    technicalSpecs: {
      "Résolution": "1080p Full HD",
      "Angle de vue": "110°",
      "Vision nocturne": "Jusqu'à 10m",
      "Stockage": "Micro SD (jusqu'à 128Go) & Cloud",
      "Alimentation": "USB 5V"
    }
  },
  {
    id: "securevision-pro",
    name: "SecureVision Pro",
    badge: "Pro",
    description: "Caméra HD avec vision nocturne avancée et application mobile.",
    price: 890,
    image: cameraPro,
    features: ["Vidéo HD 1080p", "Alertes instantanées", "Accès mobile", "Stockage sécurisé"],
    longDescription: "Conçue pour les professionnels et les particuliers exigeants, la SecureVision Pro offre une fiabilité inégalée. Son boîtier robuste et son processeur d'image haute performance garantissent une surveillance sans faille 24h/24.",
    technicalSpecs: {
      "Résolution": "1080p (1920x1080)",
      "Processeur": "Ambarella High-Speed",
      "Compression": "H.265 (Gain de bande passante)",
      "Audio": "Bidirectionnel (Micro + Haut-parleur)",
      "Étanchéité": "IP65 (Intérieur/Extérieur abrité)"
    }
  },
  {
    id: "securevision-360",
    name: "SecureVision 360",
    badge: "Premium",
    description: "Caméra rotative avec vision 360°, alerte mobile et enregistrement cloud.",
    price: 1290,
    image: camera360,
    features: ["Rotation 360°", "Suivi automatique", "Cloud sécurisé", "Vision nocturne avancée"],
    longDescription: "Ne laissez aucun angle mort avec la SecureVision 360. Grâce à sa tête rotative motorisée, elle suit automatiquement les mouvements suspects et vous permet de balayer toute la pièce directement depuis votre smartphone.",
    technicalSpecs: {
      "Rotation H/V": "355° Horizontal / 90° Vertical",
      "IA": "Suivi de forme humaine intelligent",
      "Zoom": "4x Numérique",
      "Connectivité": "Wi-Fi Dual-Band 2.4GHz",
      "Alertes": "Notifications Push instantanées"
    }
  },
  {
    id: "securevision-exterieur",
    name: "SecureVision Extérieur",
    badge: "Solaire",
    description: "Caméra extérieure sur batterie solaire, résistante aux intempéries avec qualité 4K.",
    price: 1590,
    image: outdoorSolar,
    features: ["Énergie Solaire", "Étanchéité IP67", "Qualité 4K Ultra HD", "Détection IA"],
    longDescription: "La liberté totale de surveillance. La SecureVision Extérieur fonctionne entièrement à l'énergie solaire, éliminant le besoin de câbles. Sa résolution 4K et sa résistance extrême aux intempéries en font le gardien parfait pour votre villa ou jardin.",
    technicalSpecs: {
      "Énergie": "Panneau solaire intégré + Batterie 15000mAh",
      "Résolution": "4K Ultra HD",
      "Vision nocturne": "Couleur (Starlight)",
      "Portée": "Détection PIR jusqu'à 15m",
      "Résistance": "IP67 (Pluie, poussière, UV)"
    }
  },
  {
    id: "smartvision-doorbell",
    name: "SmartVision Doorbell",
    badge: "Populaire",
    description: "Sonnette vidéo intelligente avec audio bidirectionnel et alertes sur téléphone.",
    price: 790,
    image: smartDoorbell,
    features: ["Audio bidirectionnel", "Grand angle 160°", "Réponse rapide", "Vision nocturne"],
    longDescription: "Sachez qui est à votre porte avant même qu'on ne sonne. La SmartVision Doorbell combine une sonnette haute performance avec une caméra de sécurité intelligente. Parlez directement avec vos visiteurs depuis votre canapé ou depuis l'autre bout du monde.",
    technicalSpecs: {
      "Champ de vision": "160° Diagonal",
      "Audio": "Full Duplex bidirectionnel",
      "Détection": "IA Humaine + Détection de colis",
      "Installation": "Filaire ou Batterie",
      "Alertes": "Notification sur smartphone en <2s"
    }
  },
  {
    id: "securevision-dual",
    name: "SecureVision Dual-Lens",
    badge: "Nouveau",
    description: "Double objectif pour une vision large et un zoom précis simultanés.",
    price: 1890,
    image: heroCamera,
    features: ["Double Capteur 4K", "Zoom Hybride 10x", "Détection Humaine IA", "IP66 Étanche"],
    longDescription: "La SecureVision Dual-Lens révolutionne la surveillance extérieure. Ses deux objectifs travaillent en tandem : l'un capture une vue panoramique large tandis que l'autre zoome automatiquement sur les détails importants comme les visages ou les plaques minéralogiques.",
    technicalSpecs: {
      "Capteurs": "Double Capteur CMOS Sony 4K",
      "Zoom": "Hybride 10x (Optique + IA)",
      "Vision": "Vision nocturne laser jusqu'à 50m",
      "Audio": "Alarme sonore intégrée 100dB",
      "Stockage": "Support NVR & Carte SD"
    }
  },
  {
    id: "smartvision-lock",
    name: "SmartVision DoorLock",
    badge: "Sécurité",
    description: "Serrure connectée avec empreinte digitale et contrôle à distance.",
    price: 1290,
    image: imgNew1,
    features: ["Empreinte Biométrique", "Code Temporaire", "App Mobile", "Clé de secours"],
  },
  {
    id: "securevision-hub",
    name: "SecureVision Hub Pro",
    badge: "Pack",
    description: "Centrale de contrôle intelligente pour tous vos appareils de sécurité.",
    price: 2490,
    image: imgNew2,
    features: ["Ecran Tactile 7\"", "Batterie de secours", "Sirène 110dB", "Zigbee/Z-Wave"],
  },
  {
    id: "smartvision-cloud",
    name: "SmartVision CloudCam",
    badge: "Populaire",
    description: "Stockage cloud illimité pour ne jamais rien rater, où que vous soyez.",
    price: 790,
    image: imgNew3,
    features: ["Cloud Gratuit 24h", "Full HD 1080p", "Vision Nocturne", "Petite & Discrète"],
  },
  {
    id: "securevision-stealth",
    name: "SecureVision Stealth",
    badge: "Discret",
    description: "La caméra la plus petite au monde pour une surveillance invisible.",
    price: 690,
    image: imgNew4,
    features: ["Taille d'une pièce", "Autonomie 4h", "Enregistrement SD", "Micro Intégré"],
  },
  {
    id: "smartvision-pet",
    name: "SmartVision Pet",
    badge: "Nouveau",
    description: "Gardez le contact avec vos animaux et jouez avec eux à distance.",
    price: 890,
    image: imgNew5,
    features: ["Distributeur friandises", "Laser Interactif", "Audio Bidirectionnel", "Détection d'Aboyement"],
  },
  {
    id: "securevision-garden",
    name: "SecureVision Garden",
    badge: "Solaire",
    description: "Éclairage de jardin et surveillance combinés, 100% autonome.",
    price: 1490,
    image: imgNew6,
    features: ["Panneau Solaire", "Lumière LED RGB", "Capteur de Mouvement", "Résistant au Gel"],
  },
  {
    id: "smartvision-garage",
    name: "SmartVision Garage",
    badge: "Sécurité",
    description: "Surveillez votre garage et recevez une alerte si la porte reste ouverte.",
    price: 990,
    image: imgNew7,
    features: ["Contrôle Porte Garage", "Grand Angle 160°", "Détection Véhicule", "Sirène"],
  },
  {
    id: "securevision-office",
    name: "SecureVision Office 360",
    badge: "Pro",
    description: "Surveillance panoramique pour bureaux et locaux commerciaux.",
    price: 1590,
    image: imgNew8,
    features: ["Vue Fisheye 180°", "Comptage de personnes", "PoE Support", "Anti-Vandale"],
  },
  {
    id: "smartvision-travel",
    name: "SmartVision Travel",
    badge: "Populaire",
    description: "La caméra de voyage compacte pour sécuriser votre chambre d'hôtel.",
    price: 590,
    image: imgNew9,
    features: ["Batterie 12h", "Connexion 4G/Wi-Fi", "Alerte de Porte", "Design Compact"],
  },
];
