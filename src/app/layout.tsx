import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

const siteUrl = "https://usamawebdeveloper.netlify.app";
const name = "Usama Mansoor";
const jobTitle = "Android Developer";
const title = `${name} | ${jobTitle}`;
const description =
  "Usama Mansoor builds Android apps with Kotlin and Jetpack Compose and shares code across Android and iOS with Kotlin Multiplatform. Open to remote Android roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Usama Mansoor",
    "Usama Developer",
    "Usama Mansoor Developer",
    "Usama Mansoor Android Developer",
    "Android developer",
    "Kotlin developer",
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "remote Android developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    type: "website",
  },
  verification: { google: "S0T2FOvtQ9nL7dWIhMm0JP_xwDAGE1c8Mb7JL1vaR8w" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name, url: `${siteUrl}/` },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: `${siteUrl}/`,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: {
        "@type": "Person",
        "@id": `${siteUrl}/#usama-mansoor`,
        name,
        jobTitle,
        url: `${siteUrl}/`,
        sameAs: [
          "https://www.linkedin.com/in/usama-mansoor",
          "https://github.com/UsamaMansoor026",
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
