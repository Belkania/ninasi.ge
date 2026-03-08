"use client";

import { useI18n } from "@/i18n/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface MenuItem {
    key: string;
    emoji: string;
}

interface MenuCategory {
    titleKey: "coffee" | "smoothies" | "desserts" | "snacks" | "drinks";
    emoji: string;
    items: MenuItem[];
}

const menuData: MenuCategory[] = [
    {
        titleKey: "coffee",
        emoji: "☕",
        items: [
            { key: "americano", emoji: "☕" },
            { key: "espresso", emoji: "☕" },
            { key: "doppio", emoji: "☕" },
            { key: "cappuccino", emoji: "☕" },
            { key: "candyCappuccino", emoji: "🍬" },
            { key: "latte", emoji: "🥛" },
            { key: "coldLatte", emoji: "🧊" },
            { key: "coldLatteChoco", emoji: "🍫" },
            { key: "coldAmericano", emoji: "🧊" },
            { key: "coldAmericanoIceCream", emoji: "🍨" },
            { key: "coldChocolate", emoji: "🍫" },
            { key: "caramelMacchiato", emoji: "🍯" },
            { key: "turkishCoffee", emoji: "☕" },
            { key: "tea", emoji: "🍵" },
        ],
    },
    {
        titleKey: "smoothies",
        emoji: "🥤",
        items: [
            { key: "berrySmoothie", emoji: "🫐" },
            { key: "bananaSmoothie", emoji: "🍌" },
            { key: "strawberryShake", emoji: "🍓" },
        ],
    },
    {
        titleKey: "desserts",
        emoji: "🍰",
        items: [
            { key: "blueberryMuffin", emoji: "🫐" },
            { key: "chocolateMuffin", emoji: "🧁" },
            { key: "tiramisu", emoji: "🍰" },
        ],
    },
    {
        titleKey: "snacks",
        emoji: "🍟",
        items: [
            { key: "frenchFries", emoji: "🍟" },
            { key: "croquettes", emoji: "🥘" },
            { key: "cheeseToast", emoji: "🧀" },
        ],
    },
    {
        titleKey: "drinks",
        emoji: "🥤",
        items: [
            { key: "cocaCola", emoji: "🥤" },
            { key: "fanta", emoji: "🍊" },
            { key: "sprite", emoji: "🍋" },
        ],
    },
];

export default function Menu() {
    const { t } = useI18n();
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

    return (
        <section id="menu" className="section-padding bg-cream relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-light/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <div
                    ref={titleRef}
                    className={`text-center mb-10 md:mb-16 scroll-reveal ${titleVisible ? "visible" : ""}`}
                >
                    <span className="inline-block text-caramel font-semibold text-xs md:text-sm uppercase tracking-widest mb-3">
                        ─── {t.menu.title} ───
                    </span>
                    <h2 className="section-title">{t.menu.title}</h2>
                </div>

                {/* Categories */}
                <div className="space-y-10 md:space-y-12">
                    {menuData.map((category, catIndex) => (
                        <MenuCategorySection key={category.titleKey} category={category} t={t} delay={catIndex * 0.1} />
                    ))}
                </div>

                {/* Note */}
                <div className="mt-10 md:mt-14 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-3 shadow-sm border border-beige/50">
                        <span className="text-lg md:text-xl animate-sparkle inline-block">✨</span>
                        <span className="text-caramel-dark font-medium text-sm md:text-base">{t.menu.note}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MenuCategorySection({
    category,
    t,
    delay,
}: {
    category: MenuCategory;
    t: ReturnType<typeof useI18n>["t"];
    delay: number;
}) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl animate-wiggle inline-block">{category.emoji}</span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-brown-dark">
                    {t.menu[category.titleKey]}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-caramel/30 to-transparent" />
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                {category.items.map((item) => (
                    <div
                        key={item.key}
                        className="card flex items-center gap-3 p-3 md:p-4 group cursor-default"
                    >
                        <span className="text-xl md:text-2xl group-hover:scale-125 group-hover:animate-wiggle transition-transform duration-300">
                            {item.emoji}
                        </span>
                        <span className="text-brown-dark font-medium text-sm md:text-base">
                            {t.menu.items[item.key as keyof typeof t.menu.items]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
