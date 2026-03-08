import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/i18n/i18n";

export const metadata: Metadata = {
  title: "Ninasi – Made with Love | საუკეთესო ყავა წალენჯიხაში (Best Coffee in Tsalenjikha)",
  description:
    "Ninasi – პატარა და მყუდრო ყავის კუთხე წალენჯიხაში. დააგემოვნეთ საუკეთესო ყავა წალენჯიხაში, უგემრიელესი დესერტები და გაატარეთ დრო სასიამოვნო ატმოსფეროში. ყავა წალენჯიხა.",
  keywords:
    "ყავა წალენჯიხაში, ყავა წალენჯიხა, საუკეთესო ყავა წალენჯიხაში, კაფე წალენჯიხაში, დესერტები წალენჯიხაში, coffee shop Tsalenjikha, best coffee Tsalenjikha, Ninasi coffee, cafe in Tsalenjikha, coffee Georgia, ყავის კუთხე",
  openGraph: {
    title: "Ninasi – Made with Love | ყავა წალენჯიხაში",
    description:
      "საუკეთესო ყავა და უგემრიელესი დესერტები წალენჯიხაში. მყუდრო კაფე, სადაც თითოეული ფინჯანი სიყვარულით მზადდება.",
    locale: "ka_GE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for Google Local SEO (CafeOrCoffeeShop)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Ninasi – Made with Love",
    "description": "საუკეთესო ყავა წალენჯიხაში. პატარა და მყუდრო ყავის კუთხე უგემრიელესი დესერტებით.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "სალიას ქუჩა",
      "addressLocality": "წალენჯიხა",
      "addressCountry": "GE"
    },
    "telephone": "+995574215092",
    "openingHours": "Mo-Su 09:00-22:00",
    "priceRange": "$$",
    "servesCuisine": "Coffee, Desserts, Snacks",
    "sameAs": [
      "https://www.facebook.com/CoffeshopNinasi"
    ]
  };

  return (
    <html lang="ka" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Script for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
