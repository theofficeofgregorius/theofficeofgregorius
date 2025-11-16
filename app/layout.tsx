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
  title: "Home - The Office of Gregorius",
  description:
    "The Office of Gregorius de Wild offers a composed and private foundation for endeavours guided by discretion and long-term perspective.",
  
  keywords: [
    "Gregorius de Wild",
    "Greg de Wild",
    "The Office of Gregorius",
    "Family Office",
    "Private Foundation",
    "Private Domain",
    "Greg de Wild Portfolio",
    "Gregorius Website",
    "Personal Site",
    "Executive Profile",
  ],

  metadataBase: new URL("https://theofficeofgregorius.vercel.app"),

  openGraph: {
    title: "Home - The Office of Gregorius",
    description:
      "The Office of Gregorius de Wild offers a composed and private foundation for endeavours guided by discretion and long-term perspective.",
    url: "https://theofficeofgregorius.vercel.app",
    siteName: "The Office of Gregorius",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Office of Gregorius",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Office of Gregorius",
    description:
      "The Office of Gregorius de Wild offers a composed and private foundation for endeavours guided by discretion and long-term perspective.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
              url: "https://theofficeofgregorius.vercel.app",
              sameAs: ["https://www.linkedin.com/in/gregoriusdewild"],
              description:
                "The Office of Gregorius de Wild offers a composed and private foundation for endeavours guided by discretion and long-term perspective."
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
