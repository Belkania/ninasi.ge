"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import ka from "./ka.json";
import en from "./en.json";
import ru from "./ru.json";

export type Language = "ka" | "en" | "ru";

const dictionaries: Record<Language, typeof ka> = { ka, en, ru };

interface I18nContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof ka;
}

const I18nContext = createContext<I18nContextType>({
    lang: "ka",
    setLang: () => { },
    t: ka,
});

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>("ka");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("ninasi-lang") as Language | null;
        if (saved && dictionaries[saved]) {
            setLangState(saved);
        }
        setMounted(true);
    }, []);

    const setLang = (l: Language) => {
        setLangState(l);
        localStorage.setItem("ninasi-lang", l);
    };

    const t = dictionaries[lang];

    if (!mounted) {
        return <div style={{ visibility: "hidden" }}>{children}</div>;
    }

    return (
        <I18nContext.Provider value={{ lang, setLang, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    return useContext(I18nContext);
}
