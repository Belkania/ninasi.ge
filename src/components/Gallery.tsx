"use client";

import { useI18n } from "@/i18n/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryItems = [
    { emoji: "☕", label: "Coffee", bg: "from-caramel/20 to-beige" },
    { emoji: "🍰", label: "Desserts", bg: "from-pink-light/30 to-cream" },
    { emoji: "🛋️", label: "Interior", bg: "from-beige to-cream-dark" },
    { emoji: "🥐", label: "Pastries", bg: "from-caramel-light/20 to-beige" },
    { emoji: "🫶", label: "Love", bg: "from-pink-light/20 to-beige" },
    { emoji: "🍫", label: "Chocolate", bg: "from-brown-light/15 to-cream" },
];

export default function Gallery() {
    const { t } = useI18n();
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

    return (
        <section id="gallery" className="section-padding bg-warm-white relative overflow-hidden">
            <div className="absolute -top-20 right-0 w-64 h-64 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <div
                    ref={titleRef}
                    className={`text-center mb-10 md:mb-16 scroll-reveal ${titleVisible ? "visible" : ""}`}
                >
                    <span className="inline-block text-caramel font-semibold text-xs md:text-sm uppercase tracking-widest mb-3">
                        ─── {t.gallery.title} ───
                    </span>
                    <h2 className="section-title">{t.gallery.title}</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Facebook CTA */}
                <div className="text-center mt-8 md:mt-10">
                    <a
                        href="https://www.facebook.com/CoffeshopNinasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-caramel hover:text-caramel-dark font-medium transition-colors text-sm md:text-base"
                    >
                        📸 Facebook
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`scroll-reveal-scale ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div
                className={`group aspect-square rounded-2xl bg-gradient-to-br ${item.bg} overflow-hidden
                     shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer
                     hover:scale-[1.03] relative active:scale-[0.98]`}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl md:text-7xl group-hover:scale-110 group-hover:animate-wiggle transition-transform duration-500">
                        {item.emoji}
                    </span>
                </div>
                <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/5 transition-all duration-500 rounded-2xl" />
            </div>
        </div>
    );
}
