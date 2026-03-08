"use client";

import { useI18n } from "@/i18n/i18n";

export default function Hero() {
    const { t } = useI18n();

    return (
        <section id="home" className="relative min-h-[100svh] flex items-center justify-center bg-hero-gradient overflow-hidden">
            {/* Decorative floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-pink-light/30 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-5 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-caramel-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-beige/40 rounded-full blur-3xl" />

                {/* Floating coffee beans */}
                <span className="absolute top-[15%] right-[15%] text-2xl md:text-3xl animate-float opacity-30" style={{ animationDelay: "1s" }}>☕</span>
                <span className="absolute top-[60%] left-[8%] text-xl md:text-2xl animate-float opacity-20" style={{ animationDelay: "2s" }}>✨</span>
                <span className="absolute top-[25%] left-[20%] text-lg animate-float opacity-20" style={{ animationDelay: "4s" }}>🫘</span>
                <span className="absolute bottom-[25%] right-[20%] text-xl animate-float opacity-20" style={{ animationDelay: "1.5s" }}>💛</span>
            </div>

            <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-20 pb-10">
                {/* Animated coffee cup with steam */}
                <div className="mb-6 md:mb-8 animate-fade-in">
                    <div className="relative inline-block">
                        <span className="text-6xl md:text-8xl animate-coffee-pour inline-block">☕</span>
                        {/* Steam effect */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1">
                            <span className="text-lg md:text-xl opacity-40 animate-steam inline-block">~</span>
                            <span className="text-lg md:text-xl opacity-30 animate-steam inline-block" style={{ animationDelay: "0.5s" }}>~</span>
                            <span className="text-lg md:text-xl opacity-40 animate-steam inline-block" style={{ animationDelay: "1s" }}>~</span>
                        </div>
                    </div>
                </div>

                {/* Slogan */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-brown-dark mb-4 md:mb-6 animate-fade-in-up leading-tight">
                    {t.hero.slogan}
                </h1>

                {/* Heart accent */}
                <div className="animate-heart-beat inline-block mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl">🤎</span>
                </div>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brown-light/80 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in-up-delay leading-relaxed px-2">
                    {t.hero.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up-delay-2">
                    <a href="#menu" className="btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto">
                        {t.hero.viewMenu}
                    </a>
                    <a href="#contact" className="btn-secondary text-base md:text-lg px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto">
                        {t.hero.visitUs}
                    </a>
                </div>

            </div>
        </section>
    );
}
