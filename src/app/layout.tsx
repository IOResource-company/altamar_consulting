import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";

// Editorial display serif for headings
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// Clean sans for body
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — AI for owner-led businesses`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "AI consulting",
    "AI for SMEs",
    "AI strategy Ireland",
    "AI implementation UK",
    "agentic AI",
    "owner-led businesses",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — AI for owner-led businesses`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — AI for owner-led businesses`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.contactEmail,
      description: siteConfig.description,
      areaServed: ["IE", "GB"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      parentOrganization: { "@id": `${siteConfig.url}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Ireland" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      serviceType: [
        "AI Strategy & Implementation",
        "Agentic & Custom AI Builds",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-paper text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
