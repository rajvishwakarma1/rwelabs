import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rwelabs — A Digital Experience Lab",
  description:
    "A digital-first creative lab building brands with bold storytelling, immersive web design, UI/UX, and digital experiences that redefine how audiences interact with brands online.",
  keywords: ["web design", "brand identity", "UI/UX", "digital experiences", "creative lab", "rwelabs"],
  openGraph: {
    title: "rwelabs — A Digital Experience Lab",
    description:
      "A digital-first creative lab building brands with bold storytelling, immersive web design, UI/UX, and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
