import { Vazirmatn, Anek_Tamil } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SocialRail from "@/components/SocialRail";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import { profile } from "@/data/cv";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["500", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const anek = Anek_Tamil({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-anek",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.shortName}`,
  },
  description: profile.blurb,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${vazirmatn.variable} ${anek.variable}`}>
      <body className="min-h-screen">
        <Cursor />
        <Nav />
        <SocialRail />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
