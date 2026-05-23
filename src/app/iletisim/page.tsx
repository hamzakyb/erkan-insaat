import { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Saras İnşaat ile iletişime geçin. Projeleriniz için teklif alın, sorularınızı iletin.",
};

export default function IletisimPage() {
  return <ContactContent />;
}
