"use client";

import { useI18n } from "@/i18n/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
    const { t } = useI18n();
    const { ref: sectionRef, isVisible } = useScrollAnimation();
    const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1 });
    const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="about" className="section-padding bg-warm-white relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-light/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10" ref={sectionRef}>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Image / Visual side */}
                    <div
                        ref={imageRef}
                        className={`relative scroll-reveal-left ${imageVisible ? "visible" : ""}`}
                    >
                        <div className="aspect-[4/5] rounded-3xl bg-beige overflow-hidden shadow-lg relative group">
                            <img
                                src="/about-image.jpg"
                                alt="Ninasi Cafe"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Floating sparkles */}
                            <span className="absolute top-6 right-6 text-xl animate-sparkle drop-shadow-md">✨</span>
                            <span className="absolute bottom-24 left-6 text-lg animate-sparkle drop-shadow-md" style={{ animationDelay: "1s" }}>✨</span>
                            {/* Pattern accents */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brown-dark/30 to-transparent pointer-events-none" />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -right-2 md:-bottom-2 md:-right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 animate-float border border-beige/50">
                            <span className="text-2xl md:text-3xl animate-heart-beat inline-block">🤎</span>
                            <span className="font-serif text-brown-dark font-semibold text-sm md:text-base">Made with Love</span>
                        </div>
                    </div>

                    {/* Text side */}
                    <div
                        ref={textRef}
                        className={`scroll-reveal-right ${textVisible ? "visible" : ""}`}
                    >
                        <span className="inline-block text-caramel font-semibold text-xs md:text-sm uppercase tracking-widest mb-3">
                            ─── {t.about.title}
                        </span>
                        <h2 className="section-title mb-4 md:mb-6">{t.about.title}</h2>

                        <div className="space-y-4 md:space-y-5">
                            <p className="text-base md:text-lg text-brown-light leading-relaxed">
                                {t.about.p1}
                            </p>
                            <p className="text-base md:text-lg text-brown-light leading-relaxed">
                                {t.about.p2}
                            </p>
                            <p className="text-base md:text-lg text-caramel-dark font-medium italic font-serif">
                                &ldquo;{t.about.p3}&rdquo;
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-beige">
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold text-caramel font-serif">14+</div>
                                <div className="text-sm text-warm-gray mt-1 animate-wiggle inline-block">☕</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold text-caramel font-serif">6+</div>
                                <div className="text-sm text-warm-gray mt-1 animate-wiggle inline-block" style={{ animationDelay: "0.5s" }}>🍰</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-3xl font-bold text-caramel font-serif">100%</div>
                                <div className="text-sm text-warm-gray mt-1 animate-heart-beat inline-block">❤️</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
