// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-10 mt-5 transition-colors duration-300">
      {/* Social icons */}
      <div className="flex justify-center space-x-10 mb-6">
        <a href="https://chat.whatsapp.com/Bv1bqqqzKn9ACam4vSL4LR?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="text-2xl transform transition-transform duration-300 hover:scale-125 hover:text-text-black dark:hover:text-gray-300">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://discord.gg/9zBsDPDQ" target="_blank" rel="noopener noreferrer" className="text-2xl transform transition-transform duration-300 hover:scale-125 hover:text-text-black dark:hover:text-gray-300">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href="https://www.instagram.com/papr_app?igsh=OWx6ZWZ5dDNnZGtv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-2xl transform transition-transform duration-300 hover:scale-125 hover:text-black dark:hover:text-gray-300">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>

      {/* Project name */}
      <div className="text-center font-heading text-5xl font-bold mb-6 tracking-wider">
        pApr.
      </div>

      {/* Feedback input + submit */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // handle submit here (e.g. send to API)
        }}
        className="flex justify-center mb-4"
      >
        {/* container uses focus-within so both input + button get a white glow when focused */}
        <div className="flex items-center border border-gray-300 dark:border-white/20 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-white transition duration-150">
          <input
            type="text"
            name="feedback"
            placeholder="Give us Feedback"
            aria-label="Give us Feedback"
            className="feedback-input font-body px-4 py-2 bg-gray-100 dark:bg-white/5 text-black dark:text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Submit feedback"
            className="cursor-pointer px-4 py-2 font-body bg-transparent text-black dark:text-white border-l border-gray-300 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Copyright */}
      <div className="font-heading text-center text-sm">
        Copyright © {new Date().getFullYear()} Papr
        <br />
        All Rights Reserved, Developed by Ali.
      </div>
    </footer>
  );
}
