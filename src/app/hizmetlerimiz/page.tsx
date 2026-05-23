"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Landmark, HardHat, ArrowUpRight, Check, Wrench, type LucideIcon } from "lucide-react";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import CallToActionSection from "@/components/cta-section";
import PageTransition from "@/components/page-transition";
import { expertiseAreas } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HardHat,
  Wrench,
};

const processes = [
  {
    number: "01",
    title: "Planlama & Mimari Tasarım",
    description: "Müşteri beklentilerine en uygun mimari konseptleri oluşturuyor, statik ve mekanik projeleri hazırlıyoruz."
  },
  {
    number: "02",
    title: "Detaylı Bütçelendirme",
    description: "Malzeme metrajları ve maliyet kalemlerini çıkartarak şeffaf ve net bir bütçe planlaması sunuyoruz."
  },
  {
    number: "03",
    title: "Anahtar Teslim İnşaat",
    description: "Deneyimli ekiplerimiz ve kaliteli malzemelerimizle projeyi zamanında ve eksiksiz olarak hayata geçiriyoruz."
  }
];

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Page Header Banner */}
      <BreadcrumbHeader title="HİZMETLERİMİZ" currentPage="HİZMETLERİMİZ" />

      {/* Services Grid Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
              // YAPTIĞIMIZ İŞLER
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight uppercase">
              Faaliyet Sektörlerimiz
            </h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              25 yıllık deneyimimiz ve ileri mühendislik gücümüzle inşaat sektörünün tüm kilit kollarında lider ve yenilikçi çözümler üretiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => {
              const Icon = iconMap[area.icon];
              const numStr = `0${index + 1}`;
              return (
                <div key={index} className="h-full">
                  <Card className="bg-stone-gray border border-stone-gray-dark/40 shadow-none hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-burnt-orange/40 transition-all duration-500 rounded-none group h-full relative overflow-hidden">
                    
                    {/* Giant Background Watermark */}
                    <div className="absolute right-4 bottom-4 text-2xl lg:text-3xl font-black tracking-widest text-navy/[0.02] group-hover:text-burnt-orange/[0.03] transition-colors duration-500 font-heading select-none pointer-events-none uppercase">
                      HİZMET {numStr}
                    </div>

                    <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-burnt-orange transition-colors duration-500" />
                    
                    <CardContent className="p-8 lg:p-12 flex flex-col items-start h-full relative z-10">
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-navy flex items-center justify-center mb-8 group-hover:bg-burnt-orange transition-colors duration-500 rounded-none shrink-0 shadow-md">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl lg:text-2xl font-black text-navy mb-4 tracking-tight uppercase group-hover:text-burnt-orange transition-colors duration-300">
                        <Link href={`/hizmetlerimiz/${area.slug}`}>
                          {area.title}
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8 flex-grow">
                        {area.description}
                      </p>

                      {/* Bottom Button */}
                      <div className="w-full flex items-center justify-between pt-4 border-t border-stone-gray-dark/50">
                        <Link 
                          href={`/hizmetlerimiz/${area.slug}`}
                          className="text-xs font-black tracking-widest uppercase text-navy group-hover:text-burnt-orange transition-colors duration-300 font-heading inline-flex items-center gap-2"
                        >
                          HİZMETİ İNCELEYİN
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        
                        <div className="w-9 h-9 bg-white border border-stone-gray-dark flex items-center justify-center text-navy group-hover:bg-burnt-orange group-hover:text-white group-hover:border-burnt-orange transition-all duration-300 shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process / Steps Section */}
      <section className="py-24 lg:py-32 bg-stone-gray overflow-hidden relative border-t border-stone-gray-dark/25">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
              // İŞ SÜRECİMİZ
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight uppercase">
              Projelerimizi Nasıl Yönetiyoruz?
            </h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              Mühendislik mükemmelliğini garantilemek adına her aşamada şeffaf, ölçülebilir ve kontrol edilebilir iş adımları takip ediyoruz.
            </p>
          </div>

          {/* Process step list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {processes.map((p, index) => (
              <div 
                key={p.number} 
                className="bg-white border border-stone-gray-dark/40 p-8 lg:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] transition-all duration-500 border-l-4 border-l-navy hover:border-l-burnt-orange group relative overflow-hidden"
              >
                {/* Giant watermark step number */}
                <div className="absolute right-6 top-6 text-2xl sm:text-3xl font-black tracking-wider text-navy/[0.03] group-hover:text-burnt-orange/[0.04] transition-colors font-heading select-none pointer-events-none uppercase">
                  ADIM {p.number}
                </div>

                <div className="font-heading text-4xl font-black text-burnt-orange/20 group-hover:text-burnt-orange transition-colors duration-300 leading-none mb-6">
                  {p.number}
                </div>

                <h3 className="font-heading text-lg lg:text-xl font-black text-navy group-hover:text-burnt-orange transition-colors duration-300 mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground font-sans text-xs lg:text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <CallToActionSection />
    </PageTransition>
  );
}
