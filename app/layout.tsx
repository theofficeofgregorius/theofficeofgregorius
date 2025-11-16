import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "The Office of Gregorius — Data Analyst & Business Analyst",
  description:
    "The official website of Gregorius de Wild — Data Analyst, Business Analyst, and strategic thinker with hands-on expertise in SQL, Python, Databricks, and Power BI.",
  keywords: [
    "Gregorius de Wild",
    "Greg de Wild",
    "Data Analyst",
    "Business Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Databricks",
    "Amsterdam",
    "ABN AMRO",
    "Portfolio",
    "CV",
  ],
  metadataBase: new URL("https://theofficeofgregorius.vercel.app"),

  openGraph: {
    title: "The Office of Gregorius — Data Analyst & Business Analyst",
    description:
      "Explore Gregorius de Wild’s professional background, portfolio, and CV.",
    url: "https://theofficeofgregorius.vercel.app",
    siteName: "The Office of Gregorius",
    images: [
      {
        url: "/og-image.png", // I’ll generate this once you send your SVG
        width: 1200,
        height: 630,
        alt: "Gregorius de Wild Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Office of Gregorius",
    description:
      "Explore the official website, CV, and professional experience of Gregorius de Wild.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#152421",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-[#152421] text-[#E8E1D5]">
        {children}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gregorius de Wild",
              jobTitle: "Data Analyst / Business Analyst",
              url: "https://theofficeofgregorius.vercel.app",
              sameAs: ["https://www.linkedin.com/in/gregoriusdewild"],
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
