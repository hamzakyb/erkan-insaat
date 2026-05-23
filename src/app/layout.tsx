import type { Metadata } from "next";
import { Archivo, Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Saras İnşaat | Güvenin Temeli",
    template: "%s | Saras İnşaat",
  },
  description:
    "25 yılı aşkın tecrübesiyle Türkiye'nin önde gelen inşaat firmalarından biri. Konut, ticari ve altyapı projelerinde güvenilir çözüm ortağınız.",
  keywords: [
    "inşaat",
    "Saras İnşaat",
    "müteahhit",
    "konut projesi",
    "ticari yapı",
    "altyapı",
    "Türkiye inşaat firması",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${archivo.variable} ${titilliumWeb.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
