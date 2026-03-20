import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Muhammad Tariq Majeed | Professor of Economics",
  description:
    "Academic portfolio of Dr. Muhammad Tariq Majeed, Professor (Tenured) at the School of Economics, Quaid-i-Azam University, Islamabad. Listed among the top 2% of world scientists by Stanford University.",
  keywords: [
    "Dr. Muhammad Tariq Majeed",
    "Professor of Economics",
    "Quaid-i-Azam University",
    "Development Economics",
    "International Economics",
    "Environmental Economics",
    "Islamic Economics",
    "Stanford Top 2%",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
