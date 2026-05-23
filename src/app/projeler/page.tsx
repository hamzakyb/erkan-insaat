import { Metadata } from "next";
import ProjectsContent from "./projects-content";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Saras İnşaat'ın tamamladığı ve devam eden projelerini keşfedin. Konut, ticari, endüstriyel ve altyapı projeleri.",
};

export default function ProjelerPage() {
  return <ProjectsContent />;
}
