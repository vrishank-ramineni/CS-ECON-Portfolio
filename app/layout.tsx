import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vrishank Ramineni — CS & Economics",
  description:
    "Portfolio of Vrishank Ramineni, CS & Economics undergraduate at Northeastern University with expertise in data analytics, strategy consulting, and quantitative tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${newsreader.variable} ${workSans.variable}`}
    >
      <body className="min-h-full bg-navy text-text">{children}</body>
    </html>
  );
}
