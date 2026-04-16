import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Concrete Boom Pump Truck | Plattsburgh, NY | Blocksons Concrete",
  description:
    "Blocksons Concrete provides boom pump truck service for hard-to-reach pours across the North Country — Clinton, Essex, and Franklin County, NY. Seawalls, foundations, elevated decks, and more.",
  openGraph: {
    title: "Blocksons Concrete — Boom Pump Truck Service | Plattsburgh, NY",
    description:
      "Specialized boom pump truck service for seawalls, foundations, elevated decks, and hard-to-reach pours. Serving the North Country — Clinton, Essex, and Franklin County, NY.",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Blocksons Concrete",
  telephone: "(518) 570-3076",
  email: "blocksonsconcrete@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Morrisonville",
    addressRegion: "NY",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.142641,
    longitude: -73.743536,
  },
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "49",
  },
  url: "https://blocksonsconcrete.vercel.app",
  areaServed: ["Plattsburgh", "North Country", "Clinton County", "Essex County", "Franklin County", "NY"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#111111] text-[#F4F4F4]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
