"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-1.png",
    tagline: "GÜVENLİ İNŞAAT HİZMETLERİ",
    title: "Geleceği Güçlü Yapılarla İnşa Ediyoruz",
    subtitle: "25 yılı aşkın tecrübe ve mühendislik birikimiyle Türkiye'nin dört bir yanında kalıcı eserler bırakıyoruz.",
  },
  {
    image: "/images/hero-2.png",
    tagline: "MODERN VE ESTETİK MİMARİ",
    title: "Yaşama Değer Katan Çağdaş Tasarımlar",
    subtitle: "Konut, ticari ve karma yaşam projelerinde konfor ile sürdürülebilirliği mükemmel bir dengede sunuyoruz.",
  },
  {
    image: "/images/hero-3.png",
    tagline: "ENDÜSTRİYEL & KAMUSAL HİZMETLER",
    title: "Büyük Ölçekli Altyapı Çözümleri",
    subtitle: "Köprüler, lojistik depoları ve entegre tesislerde en son teknoloji ve üstün mühendislik teknikleri.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  // Smooth slide progress timer (7 seconds)
  useEffect(() => {
    setProgress(0);
    const interval = 30; // ms
    const duration = 7000; // ms
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [current, next]);

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-navy">
      
      {/* Background Media Container:
          On mobile: covers the entire screen absolutely (inset-0)
          On desktop: occupies only the right 60% column (md:w-[55%] lg:w-[60%] md:h-full relative) */}
      <div className="absolute inset-0 md:relative md:inset-auto w-full h-full md:w-[55%] lg:w-[60%] md:h-full overflow-hidden order-1 md:order-2">
        <AnimatePresence mode="wait">
          {/* Sliding Cinematic Panel effect */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: "100%", scale: 1.05 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: "-100%", scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Rich Mobile Gradient Vignettes (Top and Bottom) for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent pointer-events-none z-10 md:hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-transparent pointer-events-none z-10 md:hidden" />
            
            {/* Desktop boundary fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/10 to-transparent pointer-events-none z-10 hidden md:block" />
          </motion.div>
        </AnimatePresence>

        {/* Floating circular glassmorphic navigation buttons (Desktop only) */}
        <div className="absolute bottom-8 right-6 sm:right-12 z-20 hidden md:flex items-center gap-3">
          <button
            onClick={prev}
            className="w-12 h-12 bg-navy/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-burnt-orange hover:border-burnt-orange hover:text-white transition-all duration-350 rounded-full cursor-pointer shadow-lg group"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-4.5 h-4.5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 bg-navy/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-burnt-orange hover:border-burnt-orange hover:text-white transition-all duration-350 rounded-full cursor-pointer shadow-lg group"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Left Column:
          On mobile: floats seamlessly as a full-bleed absolute container with bottom-aligned text (absolute inset-0)
          On desktop: stands as a solid vertical side panel (w-full md:w-[45%] lg:w-[40%] md:h-full relative) */}
      <div className="absolute inset-0 md:relative md:inset-auto w-full md:w-[45%] lg:w-[40%] bg-transparent md:bg-navy flex flex-col justify-end md:justify-center px-6 sm:px-12 lg:px-16 pt-24 pb-20 md:py-24 z-20 border-0 md:border-r md:border-white/5 h-full order-2 md:order-1">
        
        {/* Decorative Grid Behind Content (Desktop only) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_100%] pointer-events-none hidden md:block" />

        <div className="relative z-10 w-full mb-4 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 35 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 md:space-y-6"
            >
              <span className="text-burnt-orange text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase block font-heading">
                // {slides[current].tagline}
              </span>

              <h1 className="font-heading text-2xl sm:text-3xl lg:text-[2.6rem] font-black text-white tracking-tight leading-[1.1] mb-2 sm:mb-4 md:mb-6 uppercase">
                {slides[current].title}
              </h1>

              <p className="text-white/70 md:text-white/60 text-xs sm:text-sm lg:text-base leading-relaxed font-sans max-w-md font-medium">
                {slides[current].subtitle}
              </p>

              <div className="flex flex-row flex-wrap gap-3 pt-2 md:pt-4 font-heading">
                <Link
                  href="/projeler"
                  className="inline-flex items-center gap-2 bg-burnt-orange text-white px-4 md:px-5 py-2.5 md:py-3 text-[10px] sm:text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-navy rounded-none group shadow-[0_8px_20px_rgba(197,168,128,0.2)] hover:shadow-none"
                >
                  PROJELERİMİZ
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 md:px-5 py-2.5 md:py-3 text-[10px] sm:text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-navy hover:border-white rounded-none"
                >
                  BİZE ULAŞIN
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile-Only Unified Controls Bar (Integrates numbers, dots, and arrows seamlessly under the text, avoiding overlaps) */}
        <div className="flex md:hidden items-center justify-between w-full pt-5 border-t border-white/10 mt-6 z-30 font-heading">
          {/* Index Tracker */}
          <div className="text-[10px] font-black tracking-widest text-white/40 flex items-center gap-2">
            <span className="text-burnt-orange text-xs font-black">0{current + 1}</span>
            <span className="h-px w-4 bg-white/20" />
            <span>0{slides.length}</span>
          </div>

          {/* Dash Indicators */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all duration-500 rounded-none cursor-pointer ${
                  i === current ? "w-6 bg-burnt-orange" : "w-1.5 bg-white/25 hover:bg-white/45"
                }`}
                aria-label={`Slayt ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prev}
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-burnt-orange hover:border-burnt-orange transition-all duration-300 cursor-pointer"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-burnt-orange hover:border-burnt-orange transition-all duration-300 cursor-pointer"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Bottom indicator controls (Hidden on Mobile) */}
        <div className="absolute bottom-4 sm:bottom-8 left-6 sm:left-12 lg:left-16 right-6 sm:right-12 lg:right-16 hidden md:flex items-center justify-between z-20 font-heading">
          {/* Index Tracker */}
          <div className="text-[10px] sm:text-xs font-black tracking-widest text-white/30 flex items-center gap-3">
            <span className="text-burnt-orange text-xs sm:text-sm font-black">0{current + 1}</span>
            <span className="h-px w-4 sm:w-6 bg-white/10" />
            <span>0{slides.length}</span>
          </div>

          {/* Dash Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.75 transition-all duration-500 rounded-none cursor-pointer ${
                  i === current ? "w-8 sm:w-10 bg-burnt-orange" : "w-3 sm:w-4 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slayt ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Progress Timer Line (Smooth running at the bottom boundary) */}
        <div 
          className="absolute bottom-0 left-0 h-[2.5px] bg-burnt-orange shadow-[0_0_8px_rgba(197,168,128,0.3)] transition-all duration-305 ease-linear z-30"
          style={{ width: `${progress}%` }}
        />
      </div>

    </section>
  );
}
