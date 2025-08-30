// src/components/ui/ShareButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function ShareButton({ className = "", variant = "default" }) {
  const handleShare = () => {
    // Gen Z vibed message for teenagers
    const messages = [
      "yo found this fire past papers site 🔥 papr.site",
      "thank me later :) papr.site", 
      "This site is actually goated for pastpapers, papr.site",
      "not me finding the cleanest past papers site ever ✨ papr.site",
      "this past papers site is lowkey neat,  papr.site",
      "papacambridge cud never be this clean, papr.site",
      "ditching out on gceguide and papacambridge for papr.site"
    ];
    
    // Random message each time for variety
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(randomMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "header") {
    // Header/navbar version - pill style
    return (
      <button
        onClick={handleShare}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg
          text-neutral-900 dark:text-white
          border border-black/10 dark:border-white/15
          hover:bg-black/5 dark:hover:bg-white/10
          transition-colors duration-200 ${className}`}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-green-500" />
        <span className="font-heading">Share</span>
      </button>
    );
  }

  if (variant === "compact") {
    // ViewSection version - compact style to match "Open in new tab"
    return (
      <button
        onClick={handleShare}
        className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-heading
          border border-black/20 dark:border-white/20
          text-neutral-900 dark:text-white
          hover:bg-black/5 dark:hover:bg-white/10
          transition-colors duration-400 ${className}`}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-3 h-3 text-green-500" />
        Share
      </button>
    );
  }

  // Default version
  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg
        bg-green-500 hover:bg-green-600 text-white
        transition-colors duration-200 ${className}`}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
      <span>Share this site</span>
    </button>
  );
}
