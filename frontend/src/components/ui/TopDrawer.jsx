// src/components/ui/TopDrawer.jsx
import React, { useEffect, useState } from "react";
import Switch from "./Switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faInstagram, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export default function TopDrawer() {
    const [open, setOpen] = useState(false);
    const [openSocials, setOpenSocials] = useState(false);
    const [openDonate, setOpenDonate] = useState(false);

    // equal width + centered label
    const pill =
        "inline-flex justify-center items-center w-28 px-4 py-2 rounded-lg text-neutral-900 dark:text-white border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10";

    // ESC to close + lock body scroll while open
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        if (open) {
            document.addEventListener("keydown", onKey);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            {/* Trigger button (mobile header) */}
            <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="text-neutral-900 dark:text-white cursor-pointer"
            >
                <i className="fa-regular fa-rectangle-list text-3xl" />
            </button>

            {/* Overlay */}
            <div
                aria-hidden={!open}
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity
                  ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* Drawer panel (top) */}
            <div
                role="dialog"
                aria-modal="true"
                className={`fixed left-0 right-0 top-0 z-50 p-4
                  bg-white dark:bg-[#0b0b0b]
                  border-b border-black/10 dark:border-white/10
                  shadow-xl transition-transform duration-300
                  ${open ? "translate-y-0" : "-translate-y-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="inline-flex items-center gap-2 text-base font-heading font-semibold text-neutral-700 dark:text-gray-300">
                        <span>Menu</span>
                    </h2>
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                        className="p-2 rounded-md text-neutral-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10"
                    >
                        ✕
                    </button>
                </div>

                {/* Row stays the same width as before (nav + spacer) */}
                <div className="mt-3 flex items-start gap-3">
                    {/* Pills fill remaining width */}
                    <nav className="flex-1 grid grid-cols-2 gap-3 min-w-0">
                        {/* Home */}
                        <a
                            href="#"
                            onClick={() => setOpen(false)}
                            className="w-full inline-flex justify-center items-center px-4 py-2 rounded-lg
                 text-neutral-900 dark:text-white
                 border border-black/10 dark:border-white/15
                 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            Home
                        </a>

                        {/* Socials (popover) */}
                        <div className="relative">
                            <button
                                onClick={() => { setOpenSocials((p) => !p); setOpenDonate(false); }}
                                className="w-full inline-flex justify-center items-center px-4 py-2 rounded-lg
                   text-neutral-900 dark:text-white
                   border border-black/10 dark:border-white/15
                   hover:bg-black/5 dark:hover:bg-white/10"
                            >
                                <span className="mr-1">Socials</span>
                            </button>

                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-2
                    px-3 py-2 rounded-xl
                    bg-white/80 dark:bg-white/10 backdrop-blur-md
                    border border-black/10 dark:border-white/15 shadow-xl z-[60]
                    w-auto whitespace-nowrap
                    origin-top transition duration-200 ease-out will-change-transform
                    ${openSocials
                                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                        : "opacity-0 -translate-y-1 scale-95 pointer-events-none"}`}
                            >
                                <div className="flex items-center gap-4">
                                    {[faWhatsapp, faTwitter, faInstagram].map((icon) => (
                                        <a key={icon.iconName} href="#" className="hover:scale-110 transition-transform text-neutral-900 dark:text-white">
                                            <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Donate (popover) */}
                        {/* <div className="relative">
                            <button
                                onClick={() => { setOpenDonate((p) => !p); setOpenSocials(false); }}
                                className="w-full inline-flex justify-center items-center px-4 py-2 rounded-lg
                   text-neutral-900 dark:text-white
                   border border-black/10 dark:border-white/15
                   hover:bg-black/5 dark:hover:bg-white/10"
                            >
                                <span className="mr-1">Donate</span>
                            </button>

                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-2
                    px-4 py-3 rounded-xl
                    bg-white/80 dark:bg-white/10 backdrop-blur-md
                    border border-black/10 dark:border-white/15 shadow-xl z-[60]
                    w-44
                    origin-top transition duration-200 ease-out will-change-transform
                    ${openDonate
                                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                        : "opacity-0 -translate-y-1 scale-95 pointer-events-none"}`}
                            >
                                <a href="https://buymeacoffee.com/yourname" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 py-1 text-neutral-900 dark:text-white">
                                    <FontAwesomeIcon icon={faCoffee} className="w-5 h-5" />
                                    <span className="text-sm">Coffee</span>
                                </a>
                                <a href="https://patreon.com/yourname" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 py-1 text-neutral-900 dark:text-white">
                                    <FontAwesomeIcon icon={faPatreon} className="w-5 h-5" />
                                    <span className="text-sm">Patreon</span>
                                </a>
                            </div>
                        </div> */}
                    </nav>
                </div>

                {/* Real switch below, centered */}
                <div className="mt-4 flex justify-center">
                    <Switch
                        checked={document.documentElement.classList.contains("dark")}
                        onChange={(checked) => {
                            document.documentElement.classList.toggle("dark", checked);
                        }}
                    />
                </div>
            </div>
        </>
    );
}
