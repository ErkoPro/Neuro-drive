import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neuro Drive Fleet Command",
  description: "Real-time driver fatigue and micro-sleep monitoring dashboard",
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
