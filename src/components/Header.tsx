"use client";

import { useState, useEffect } from "react";
import { useI18n, Language } from "@/i18n/i18n";

const languages: { code: Language; label: string }[] = [
    { code: "ka", label: "GE" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
];

const navLinks = [
    { href: "#home", key: "home" as const },
    { href: "#about", key: "about" as const },
    { href: "#menu", key: "menu" as const },
    { href: "#gallery", key: "gallery" as const },
    { href: "#contact", key: "contact" as const },
];

export default function Header() {
    const { lang, setLang, t } = useI18n();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-2 group -my-2 md:-my-4"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="relative flex items-center">
                        <img
                            src="/logo.png"
                            alt="Ninasi – Made with Love"
                            className="h-16 md:h-20 lg:h-24 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-105"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                                if (fallback) fallback.classList.remove('hidden');
                            }}
                        />
                        <div className="logo-fallback hidden flex items-center gap-2">
                            <span className="text-2xl md:text-3xl">☕</span>
                            <span className="font-serif text-xl md:text-2xl font-bold text-brown-dark group-hover:text-caramel transition-colors">
                                Ninasi
                            </span>
                        </div>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            className="text-brown-light hover:text-caramel font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-caramel after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {t.nav[link.key]}
                        </a>
                    ))}
                </nav>

                {/* Language Switcher + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex items-center bg-beige/70 rounded-full p-1 gap-0.5">
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => setLang(l.code)}
                                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${lang === l.code
                                    ? "bg-caramel text-white shadow-sm"
                                    : "text-brown-light hover:text-brown-dark"
                                    }`}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>

                    {/* Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-brown-dark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-brown-dark transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-brown-dark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col items-center gap-4 py-6 bg-white/95 backdrop-blur-md border-t border-beige">
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            className="text-brown-light hover:text-caramel font-medium transition-colors text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            {t.nav[link.key]}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
