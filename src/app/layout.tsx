import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from 'lenis/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RWELabs",
  description: "Crafting a future where design meets strategy and impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#0F0E0E] text-[#F7F7F7] antialiased overflow-x-hidden selection:bg-white selection:text-black`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
