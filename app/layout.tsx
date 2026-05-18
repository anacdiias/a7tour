import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A7Tour — O Rio como sua cena de cinema",
  description:
    "A7Tour cria roteiros de aventura no Rio, do jet ski às ilhas Tijucas e Gigoia, com captação profissional para uma experiência única.",
  keywords: ["A7Tour", "Rio de Janeiro", "jet ski", "ilhas Tijucas", "ilha da Gigoia", "snorkel", "experiência de aventura"],
  openGraph: {
    title: "A7Tour — O Rio como sua cena de cinema",
    description:
      "A7Tour cria roteiros de aventura no Rio, do jet ski às ilhas Tijucas e Gigoia, com captação profissional para uma experiência única.",
    images: ["/assets/tijucas.jpg"],
    siteName: "A7Tour",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
