import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Erkan İnşaat, 25 yılı aşkın tecrübesiyle Türkiye'nin önde gelen inşaat firmalarından biridir.",
};

export default function HakkimizdaPage() {
  return <AboutContent />;
}
