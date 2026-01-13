import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "Marci Metzger - Pahrump Realtor | The Ridge Realty Group | Nevada Real Estate",
  description: "Trusted Pahrump Realtor with nearly 30 years of experience and $28.5M in sales. Expert in residential & commercial real estate across Nevada. Buy, sell, or invest with confidence.",
  keywords: "Pahrump realtor, Nevada real estate, Marci Metzger, The Ridge Realty Group, homes for sale Pahrump, Las Vegas real estate, Henderson properties, commercial real estate Nevada",
  authors: [{ name: "Marci Metzger" }],
  creator: "Marci Metzger",
  publisher: "The Ridge Realty Group",
  applicationName: "Marci Metzger Homes",
  icons: {
    icon: [{ url: "/qt=q_95.webp", type: "image/webp" }],
    shortcut: ["/qt=q_95.webp"],
    apple: ["/qt=q_95.webp"],
  },
  openGraph: {
    title: "Marci Metzger - Pahrump Realtor | The Ridge Realty Group",
    description: "Trusted Pahrump Realtor with nearly 30 years of experience and $28.5M in sales. Expert in residential & commercial real estate across Nevada.",
    url: siteUrl,
    siteName: "Marci Metzger - The Ridge Realty Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Marci Metzger - Pahrump Realtor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marci Metzger - Pahrump Realtor | The Ridge Realty Group",
    description: "Trusted Pahrump Realtor with nearly 30 years of experience and $28.5M in sales.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Marci Metzger",
    url: siteUrl,
    telephone: "(206) 919-6886",
    image: `${siteUrl}/opengraph-image`,
    logo: `${siteUrl}/qt=q_95.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3190 HW-160, Suite F",
      addressLocality: "Pahrump",
      addressRegion: "NV",
      postalCode: "89048",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.2083,
      longitude: -115.9839,
    },
    hasMap: "https://www.google.com/maps?daddr=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States",
    openingHours: "Mo-Su 08:00-19:00",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Pahrump, NV",
      },
      {
        "@type": "AdministrativeArea",
        name: "Las Vegas, NV",
      },
      {
        "@type": "AdministrativeArea",
        name: "Henderson, NV",
      },
      {
        "@type": "AdministrativeArea",
        name: "Nevada",
      },
    ],
    sameAs: [
      "https://www.facebook.com/MarciHomes/",
      "https://www.instagram.com/marciandlauren_nvrealtors/",
      "https://www.linkedin.com/in/marci-metzger-30642496/",
      "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  } catch {}
})();`,
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
