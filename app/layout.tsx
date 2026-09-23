import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const canonical = site.siteUrl ? new URL(site.siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase: canonical,
  title: site.name + " — " + site.role,
  description: "Java backend engineering, Spring Boot microservices and practical AI application integration.",
  alternates: canonical ? { canonical: "/" } : undefined,
  openGraph: {
    title: site.name + " — " + site.role,
    description: "Java backend engineering, Spring Boot microservices and practical AI application integration.",
    type: "website",
    url: canonical?.toString(),
    siteName: site.name
  },
  twitter: {
    card: "summary_large_image",
    title: site.name + " — " + site.role,
    description: "Java backend engineering, Spring Boot microservices and practical AI application integration."
  },
  themeColor: "#05070b",
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: "mailto:" + site.email,
    url: site.siteUrl || undefined,
    sameAs: [site.linkedin].filter(Boolean),
    worksFor: { "@type": "Organization", name: "Tata Consultancy Services" },
    address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" }
  };

  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
