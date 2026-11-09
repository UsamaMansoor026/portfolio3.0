import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

const title = "Usama Mansoor | Android Developer";
const description =
  "Usama Mansoor builds Android apps with Kotlin and Jetpack Compose and shares code across Android and iOS with Kotlin Multiplatform. Open to remote Android roles.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://usamawebdeveloper.netlify.app",
    type: "website",
  },
  other: {
    "google-site-verification": "S0T2FOvtQ9nL7dWIhMm0JP_xwDAGE1c8Mb7JL1vaR8w",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
