"use client";

import { useI18n } from "@/i18n/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
    { src: "/gallery/1.jpg", alt: "Ninasi Cafe Interior" },
    { src: "/gallery/2.jpg", alt: "Delicious Coffee" },
    { src: "/gallery/3.jpg", alt: "Fresh Pastries" },
    { src: "/gallery/4.jpg", alt: "Latte Art" },
    { src: "/gallery/5.jpg", alt: "Cozy Corner" },
    { src: "/gallery/6.jpg", alt: "Coffee Details" },
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
                    {galleryImages.map((img, index) => (
                        <GalleryItem key={index} src={img.src} alt={img.alt} index={index} />
                    ))}
                </div>

                {/* Social CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 md:mt-12">
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
                    <a
                        href="https://www.instagram.com/ninasi_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-caramel hover:text-caramel-dark font-medium transition-colors text-sm md:text-base"
                    >
                        📸 Instagram
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

function GalleryItem({ src, alt, index }: { src: string; alt: string; index: number }) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`scroll-reveal-scale ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div
                className={`group aspect-square rounded-2xl overflow-hidden
                     shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer
                     hover:scale-[1.03] relative active:scale-[0.98] bg-beige`}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/10 transition-all duration-500" />
            </div>
        </div>
    );
}
