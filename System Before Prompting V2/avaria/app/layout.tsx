import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GlobalFx } from "@/components/visuals/GlobalFx";
import { RouteFx } from "@/components/visuals/RouteFx";
import { CommandPalette } from "@/components/search/CommandPalette";
import { VisualModeSync } from "@/components/visuals/VisualModeSync";
import { ToastProvider } from "@/components/ui/Toast";
import { AuthProvider } from "@/hooks/useAuth";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xcelias.com"),
  title: "Xcelias · Unified Academy Platform",
  description:
    "Xcelias unifies academy operations, learning, reporting, and market intelligence into one flagship platform.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  other: {
    "theme-color": "#080b12",
  },
  openGraph: {
    url: "https://xcelias.com",
    title: "Xcelias · Unified Academy Platform",
    description: "Run academy operations, learning, reporting, and intelligence through one connected platform.",
    type: "website",
    siteName: "Xcelias",
  },
  twitter: {
    card: "summary",
    title: "Xcelias · Unified Academy Platform",
    description: "Run academy operations, learning, reporting, and intelligence through one connected platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${grotesk.variable} ${jetbrains.variable} antialiased noise-overlay`}
      >
        <VisualModeSync />
        <GlobalFx />
        <RouteFx />
        <AuthProvider>
          <CommandPalette />
          <ToastProvider />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
