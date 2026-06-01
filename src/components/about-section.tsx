"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Target, Eye, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Interactive Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-stone-gray-dark/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <Image
                src="/images/about.png"
                alt="Erkan İnşaat Mimari Yapı"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-6 bg-burnt-orange text-white p-8 shadow-xl max-w-[200px]">
              <div className="font-heading text-5xl font-black tracking-tight leading-none mb-1">
                25+
              </div>
              <div className="text-[11px] font-black tracking-widest uppercase leading-snug text-white/90 font-heading">
                YILLIK SEKTÖREL TECRÜBE
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Content */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-burnt-orange text-xs font-black tracking-widest uppercase block mb-3 font-heading">
                // HAKKIMIZDA
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
                İhtiyacınız Olan Her Şeyi Güvenle İnşa Ediyoruz
              </h2>
            </div>

            <p className="text-muted-foreground font-sans text-base lg:text-lg leading-relaxed">
              1999 yılından bu yana, mühendislik mükemmelliği ve çağdaş mimariyi birleştirerek geleceğin modern yaşam alanlarını tasarlıyoruz. Her projede en yüksek kalite ve iş güvenliği standartlarını taahhüt ediyoruz.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 font-heading text-sm font-bold text-navy">
              <li className="flex items-center gap-3.5">
                <div className="w-5 h-5 bg-burnt-orange/10 flex items-center justify-center rounded-none text-burnt-orange shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Uluslararası standartlarda inşaat ve yönetim çözümleri</span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-5 h-5 bg-burnt-orange/10 flex items-center justify-center rounded-none text-burnt-orange shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Uzman mühendislerimizle sağlam ve dayanıklı yapılar</span>
              </li>
            </ul>

            {/* Mission & Vision Mini Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-gray-dark">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0 rounded-none">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-black text-navy">Misyonumuz</h4>
                  <p className="text-xs text-muted-foreground mt-1.5 font-sans leading-relaxed">
                    Sürdürülebilir ve yüksek kaliteli çözümler sunarak çevreye değer katmak.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0 rounded-none">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-black text-navy">Vizyonumuz</h4>
                  <p className="text-xs text-muted-foreground mt-1.5 font-sans leading-relaxed">
                    Sektörde küresel standartları belirleyen, en güvenilir marka olmak.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Link Button */}
            <div className="pt-6 font-heading">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-burnt-orange rounded-none group"
              >
                DAHA FAZLA BİLGİ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
