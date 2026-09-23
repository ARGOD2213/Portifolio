import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["500","600","700","800"] });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source", weight: ["400","500","600"] });

export const metadata: Metadata = {
  title: site.name + " — " + site.role,
  description: "Java backend engineering, Spring Boot microservices and practical AI application integration.",
  metadataBase: site.siteUrl ? new URL(site.siteUrl) : undefined,
  alternates: site.siteUrl ? { canonical: "/" } : undefined,
  openGraph: { title: site.name + " — " + site.role, description: "Java backend engineering, Spring Boot microservices and practical AI application integration.", type: "website" },
  twitter: { card: "summary_large_image", title: site.name + " — " + site.role, description: "Java backend engineering, Spring Boot microservices and practical AI application integration." },
  themeColor: "#1D3FBF",
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: site.role,
    email: "mailto:" + site.email, url: site.siteUrl || undefined, sameAs: [site.linkedin].filter(Boolean),
    worksFor: { "@type": "Organization", name: "Tata Consultancy Services" },
    address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" }
  };
  return <html lang="en" className={`${archivo.variable} ${sourceSerif.variable}`}>
    <body><a className="skip-link" href="#main-content">Skip to content</a>{children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    </body>
  </html>;
}
