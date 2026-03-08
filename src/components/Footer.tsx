"use client";

import { useI18n } from "@/i18n/i18n";

export default function Footer() {
    const { t } = useI18n();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-brown-dark text-cream py-12 px-6 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-caramel via-pink to-caramel" />

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className="text-2xl">☕</span>
                            <span className="font-serif text-2xl font-bold text-cream">Ninasi</span>
                        </div>
                        <p className="text-cream/60 mt-2 text-sm">Made with Love</p>
                    </div>

                    {/* Social */}
                    <div className="text-center">
                        <p className="text-cream/60 text-sm mb-3">{t.footer.followUs}</p>
                        <a
                            href="https://www.facebook.com/CoffeshopNinasi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cream hover:text-caramel-light transition-colors font-medium"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-cream/40 text-sm">
                            © {year} Ninasi. {t.footer.rights}.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
