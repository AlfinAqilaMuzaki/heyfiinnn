import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import CyberpunkBackground from "@/components/CyberpunkBackground";
import "./globals.css";

const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "heyfiinnn_ — Security Portfolio",
  description: "Offensive Security | OSINT & Cyber Intelligence | DevSecOps",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${mono.variable} h-full`}>
      <body className="min-h-full bg-zinc-950 text-white antialiased relative">
        <CyberpunkBackground />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
