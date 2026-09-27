import React, { useState } from 'react';

interface NettipattamVisualProps {
  type?: 'traditional' | 'mini' | 'gold' | 'wedding' | 'nilavilakku' | 'kathakali' | 'aranmula' | 'custom' | string;
  imageUrl?: string;
  altText: string;
  className?: string;
}

export const NettipattamVisual: React.FC<NettipattamVisualProps> = ({
  type = 'traditional',
  imageUrl,
  altText,
  className = 'w-full h-full object-cover',
}) => {
  const [imageError, setImageError] = useState(false);

  // If valid image provided and no error, render img
  if (imageUrl && !imageError) {
    return (
      <img
        src={imageUrl}
        alt={altText}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setImageError(true)}
        className={`${className} transition-transform duration-500 hover:scale-105`}
      />
    );
  }

  // Authentic Traditional Kerala SVG Illustrations as resilient fallbacks
  return (
    <div className={`relative w-full h-full min-h-[220px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#420A12] via-[#58111A] to-[#2B060C] p-4 ${className}`}>
      {/* Decorative Traditional Kerala Background Motif */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="keralaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#D4AF37" />
              <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#keralaGrid)" />
        </svg>
      </div>

      {/* Subtle radial glow around centerpiece */}
      <div className="absolute w-44 h-44 rounded-full bg-[#D4AF37]/15 blur-2xl pointer-events-none" />

      {/* Center Traditional Artwork based on type */}
      {type === 'nilavilakku' ? (
        <svg viewBox="0 0 200 300" className="w-3/4 max-h-56 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="280" rx="60" ry="12" fill="#9B782B" />
          <ellipse cx="100" cy="276" rx="50" ry="8" fill="#D4AF37" />
          <path d="M92 276 L95 180 L105 180 L108 276 Z" fill="url(#brassGrad)" />
          {/* Lower tier */}
          <ellipse cx="100" cy="180" rx="45" ry="10" fill="#9B782B" />
          <ellipse cx="100" cy="177" rx="38" ry="7" fill="#D4AF37" />
          {/* Middle pillar */}
          <path d="M94 177 L96 90 L104 90 L106 177 Z" fill="url(#brassGrad)" />
          {/* Oil bowl */}
          <ellipse cx="100" cy="90" rx="55" ry="14" fill="#9B782B" />
          <ellipse cx="100" cy="86" rx="46" ry="10" fill="#D4AF37" />
          {/* Flame prongs */}
          <circle cx="48" cy="85" r="4" fill="#F59E0B" />
          <circle cx="152" cy="85" r="4" fill="#F59E0B" />
          <circle cx="100" cy="74" r="5" fill="#F59E0B" />
          {/* Top pinnacle Bird / Hamsam */}
          <path d="M100 86 L100 45 L106 35 L100 25 L94 35 L100 45 Z" fill="#D4AF37" />
          <circle cx="100" cy="20" r="4" fill="#FDE047" />
          {/* Glowing flame */}
          <path d="M100 12 C103 8, 105 5, 100 0 C95 5, 97 8, 100 12 Z" fill="#F59E0B" />
          <defs>
            <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7E611E" />
              <stop offset="50%" stopColor="#E6CA65" />
              <stop offset="100%" stopColor="#9B782B" />
            </linearGradient>
          </defs>
        </svg>
      ) : type === 'kathakali' ? (
        <svg viewBox="0 0 200 260" className="w-3/4 max-h-56 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Kathakali Kireedam / Crown */}
          <path d="M60 80 L100 20 L140 80 Z" fill="#D4AF37" />
          <circle cx="100" cy="30" r="8" fill="#6B1724" />
          <ellipse cx="100" cy="85" rx="55" ry="12" fill="#E6CA65" stroke="#7E611E" strokeWidth="2" />
          {/* Green paccha face base */}
          <path d="M65 95 C65 170 80 195 100 195 C120 195 135 170 135 95 Z" fill="#15803D" />
          {/* White chutti border */}
          <path d="M60 110 C60 185 80 210 100 210 C120 210 140 185 140 110" stroke="#FAF6EE" strokeWidth="6" strokeLinecap="round" />
          {/* Red eyes & eyebrows */}
          <ellipse cx="82" cy="130" rx="9" ry="5" fill="#FAF6EE" stroke="#6B1724" strokeWidth="2" />
          <circle cx="82" cy="130" r="3" fill="#6B1724" />
          <ellipse cx="118" cy="130" rx="9" ry="5" fill="#FAF6EE" stroke="#6B1724" strokeWidth="2" />
          <circle cx="118" cy="130" r="3" fill="#6B1724" />
          {/* Lips */}
          <path d="M88 170 Q100 180 112 170" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          {/* Golden Ear Ornaments (Kundalam) */}
          <circle cx="48" cy="125" r="14" fill="#D4AF37" stroke="#7E611E" strokeWidth="2" />
          <circle cx="48" cy="125" r="7" fill="#6B1724" />
          <circle cx="152" cy="125" r="14" fill="#D4AF37" stroke="#7E611E" strokeWidth="2" />
          <circle cx="152" cy="125" r="7" fill="#6B1724" />
        </svg>
      ) : type === 'aranmula' ? (
        <svg viewBox="0 0 200 280" className="w-3/4 max-h-56 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mirror Rim with ornate Kerala brass filigree */}
          <circle cx="100" cy="100" r="58" stroke="#D4AF37" strokeWidth="8" />
          <circle cx="100" cy="100" r="50" fill="#FAF6EE" fillOpacity="0.85" stroke="#9B782B" strokeWidth="2" />
          {/* Mirror glass reflection highlight */}
          <path d="M70 75 Q100 65 130 85" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          {/* Peacock Crown on Top */}
          <path d="M92 40 C95 25 105 25 108 40 Z" fill="#D4AF37" />
          <circle cx="100" cy="30" r="4" fill="#6B1724" />
          {/* Ornate Handle */}
          <path d="M94 158 L90 240 L100 260 L110 240 L106 158 Z" fill="#9B782B" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="100" cy="255" r="6" fill="#D4AF37" />
        </svg>
      ) : (
        /* The Grand Authentic Kerala Nettipattam (Forehead Caparison) */
        <svg viewBox="0 0 240 320" className="w-4/5 max-h-64 drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldCaparison" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#7E611E" />
            </linearGradient>
            <linearGradient id="maroonVelvet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#58111A" />
              <stop offset="100%" stopColor="#35080E" />
            </linearGradient>
          </defs>

          {/* Velvet Arch Base */}
          <path
            d="M30 45 C30 20 210 20 210 45 L180 230 C150 265 90 265 60 230 Z"
            fill="url(#maroonVelvet)"
            stroke="#D4AF37"
            strokeWidth="3"
          />

          {/* Golden Kasavu Beaded Outer Border */}
          <path
            d="M35 48 C35 25 205 25 205 48 L177 226 C148 258 92 258 63 226 Z"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeDasharray="3 3"
          />

          {/* Top Arch Gold Crescent & Sun (Surya & Chandran) */}
          <circle cx="120" cy="55" r="22" fill="url(#goldCaparison)" stroke="#7E611E" strokeWidth="1.5" />
          <circle cx="120" cy="55" r="14" fill="#58111A" />
          <circle cx="120" cy="55" r="7" fill="url(#goldCaparison)" />

          {/* Flanking Ornate Moons */}
          <path d="M72 45 Q88 45 88 65 Q75 62 72 45 Z" fill="url(#goldCaparison)" />
          <path d="M168 45 Q152 45 152 65 Q165 62 168 45 Z" fill="url(#goldCaparison)" />

          {/* Concentric Golden Beads (Kumbham & Kurumbul) */}
          {/* Row 1 */}
          <circle cx="95" cy="85" r="8" fill="url(#goldCaparison)" />
          <circle cx="120" cy="88" r="10" fill="url(#goldCaparison)" />
          <circle cx="145" cy="85" r="8" fill="url(#goldCaparison)" />

          {/* Row 2 */}
          <circle cx="75" cy="110" r="7" fill="url(#goldCaparison)" />
          <circle cx="98" cy="112" r="8" fill="url(#goldCaparison)" />
          <circle cx="120" cy="114" r="9" fill="url(#goldCaparison)" />
          <circle cx="142" cy="112" r="8" fill="url(#goldCaparison)" />
          <circle cx="165" cy="110" r="7" fill="url(#goldCaparison)" />

          {/* Row 3 */}
          <circle cx="82" cy="138" r="7" fill="url(#goldCaparison)" />
          <circle cx="101" cy="140" r="8" fill="url(#goldCaparison)" />
          <circle cx="120" cy="142" r="9" fill="url(#goldCaparison)" />
          <circle cx="139" cy="140" r="8" fill="url(#goldCaparison)" />
          <circle cx="158" cy="138" r="7" fill="url(#goldCaparison)" />

          {/* Row 4 */}
          <circle cx="90" cy="168" r="7" fill="url(#goldCaparison)" />
          <circle cx="110" cy="170" r="8" fill="url(#goldCaparison)" />
          <circle cx="130" cy="170" r="8" fill="url(#goldCaparison)" />
          <circle cx="150" cy="168" r="7" fill="url(#goldCaparison)" />

          {/* Row 5 Lower Taper */}
          <circle cx="102" cy="196" r="7" fill="url(#goldCaparison)" />
          <circle cx="120" cy="198" r="8" fill="url(#goldCaparison)" />
          <circle cx="138" cy="196" r="7" fill="url(#goldCaparison)" />

          {/* Apex Bottom Pendant */}
          <circle cx="120" cy="225" r="8" fill="url(#goldCaparison)" />
          <path d="M120 233 L126 248 L114 248 Z" fill="url(#goldCaparison)" />

          {/* Traditional Hanging Silk Woolen Tassels (Red, Green, Yellow) */}
          {/* Center Red Tassel */}
          <path d="M120 248 L120 295" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" />
          <circle cx="120" cy="252" r="4" fill="#D4AF37" />

          {/* Left Green & Yellow Tassels */}
          <path d="M95 240 L90 285" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="95" cy="242" r="3.5" fill="#D4AF37" />
          <path d="M72 225 L65 270" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
          <circle cx="72" cy="227" r="3" fill="#D4AF37" />

          {/* Right Green & Yellow Tassels */}
          <path d="M145 240 L150 285" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="145" cy="242" r="3.5" fill="#D4AF37" />
          <path d="M168 225 L175 270" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
          <circle cx="168" cy="227" r="3" fill="#D4AF37" />
        </svg>
      )}

      {/* Subtle Bottom Gold Border Ribbon */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </div>
  );
};
