"use client";

import { useI18n } from "@/i18n/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
    const { t } = useI18n();
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.1 });
    const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="contact" className="section-padding bg-cream relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-light/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <div
                    ref={titleRef}
                    className={`text-center mb-10 md:mb-16 scroll-reveal ${titleVisible ? "visible" : ""}`}
                >
                    <span className="inline-block text-caramel font-semibold text-xs md:text-sm uppercase tracking-widest mb-3">
                        ─── {t.contact.title} ───
                    </span>
                    <h2 className="section-title">{t.contact.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Contact Info */}
                    <div
                        ref={infoRef}
                        className={`space-y-4 md:space-y-6 scroll-reveal-left ${infoVisible ? "visible" : ""}`}
                    >
                        {/* Address */}
                        <div className="card p-4 md:p-6 flex items-start gap-3 md:gap-4">
                            <span className="text-2xl md:text-3xl mt-0.5 animate-float inline-block">📍</span>
                            <div>
                                <h4 className="font-serif font-bold text-brown-dark text-base md:text-lg mb-1">{t.contact.address.split(",")[0]}</h4>
                                <p className="text-brown-light text-sm md:text-base">{t.contact.address}</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="card p-4 md:p-6 flex items-start gap-3 md:gap-4">
                            <span className="text-2xl md:text-3xl mt-0.5 animate-wiggle inline-block">📞</span>
                            <div>
                                <h4 className="font-serif font-bold text-brown-dark text-base md:text-lg mb-1">{t.contact.phone}</h4>
                                <a href="tel:+995574215092" className="text-caramel hover:text-caramel-dark transition-colors font-medium text-sm md:text-base">
                                    +995 574 21 50 92
                                </a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="card p-4 md:p-6 flex items-start gap-3 md:gap-4">
                            <span className="text-2xl md:text-3xl mt-0.5 animate-coffee-pour inline-block">🕐</span>
                            <div>
                                <h4 className="font-serif font-bold text-brown-dark text-base md:text-lg mb-1">{t.contact.hours}</h4>
                                <p className="text-brown-light text-sm md:text-base">{t.contact.hoursValue}</p>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/995574215092"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 md:gap-3 bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold
                         hover:bg-[#20BA5C] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                         active:translate-y-0 active:shadow-md text-base md:text-lg w-full sm:w-auto justify-center"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            {t.contact.whatsapp}
                        </a>
                    </div>

                    {/* Google Map */}
                    <div
                        ref={mapRef}
                        className={`scroll-reveal-right ${mapVisible ? "visible" : ""}`}
                    >
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-beige/50 h-[350px] md:h-[480px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11863.88!2d42.0833!3d42.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405f5e5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sTsalenjikha%2C%20Georgia!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ninasi Coffee Shop Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
