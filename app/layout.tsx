import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/UI/header";
import Footer from "./components/UI/footer";
import { Providers } from "./Providers/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodie",
  description: "Доставка вкусной еды на дом и в офис. Быстро, удобно и безопасно.",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <Providers>
          <Header />
          
          <main className="min-h-screen">
            {children}
          </main>

          <Footer /> 
        </Providers>
      </body>
    </html>
  );
}
