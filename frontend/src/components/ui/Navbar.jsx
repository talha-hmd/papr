// src/components/ui/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faInstagram, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [donateOpen, setDonateOpen] = useState(false);
    const donateBtnRef = useRef(null);
    const donateMenuRef = useRef(null);

    const btnRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const closeIfOutside = (e) => {
            if (
                !menuRef.current?.contains(e.target) &&
                !btnRef.current?.contains(e.target) &&
                !donateMenuRef.current?.contains(e.target) &&
                !donateBtnRef.current?.contains(e.target)
            ) {
                setOpen(false);
                setDonateOpen(false);
            }
        };

        document.addEventListener('mousedown', closeIfOutside);
        return () => document.removeEventListener('mousedown', closeIfOutside);
    }, []);

    return (
        <header className="relative z-40 w-full flex items-center py-3 grey-bg">
            {/* Donate (right-hand side) */}
            <div className="relative ml-auto">
                <button
                    ref={donateBtnRef}
                    onClick={() => setDonateOpen(p => !p)}
                    className="ml-auto mr-12 px-4 py-1 rounded-lg font-body transition cursor-pointer text-white hover:opacity-80"
                >
                    Donate
                </button>

                {donateOpen && (
                    <div
                        ref={donateMenuRef}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 flex flex-col gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white animate-slide-in-v"
                    >
                        <a
                            href="https://buymeacoffee.com/yourname"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
                        >
                            <FontAwesomeIcon icon={faCoffee} className="w-5 h-5 text-white" />
                            <span className="text-sm font-body">Coffee</span>
                        </a>

                        <a
                            href="https://patreon.com/yourname"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
                        >
                            <FontAwesomeIcon icon={faPatreon} className="w-5 h-5 text-white" />
                            <span className="text-sm font-body">Patreon</span>
                        </a>
                    </div>
                )}
            </div>

            {/* centre group */}
            <nav
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                            z-50 cursor-pointer flex gap-6 font-body select-none"
            >
                <a href="#" className="link-underline text-white hover:opacity-80 transition">Home</a>

                {/* Socials toggle button */}
                <button
                    ref={btnRef}
                    onClick={() => setOpen((p) => !p)}
                    className="link-underline relative cursor-pointer text-white hover:opacity-80 transition"
                >
                    Socials

                    {open && (
                        <div
                            ref={menuRef}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 flex gap-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white animate-slide-in-h"
                        >
                            {[faWhatsapp, faTwitter, faInstagram].map((icon) => (
                                <a
                                    key={icon.iconName}
                                    href="#"
                                    className="transition-transform duration-200 hover:scale-110"
                                    aria-label={icon.iconName}
                                >
                                    <FontAwesomeIcon icon={icon} className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    )}
                </button>
            </nav>
        </header>
    );
}
