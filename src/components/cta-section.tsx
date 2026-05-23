"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(234,85,1,0.06)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          
          {/* Left: Headline info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-4"
          >
            <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
              // BİZİMLE ÇALIŞIN
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase">
              Aklınızda Bir Proje mi Var? <br />
              <span className="text-burnt-orange">Bugün Bizimle İletişime Geçin</span>
            </h2>
          </motion.div>

          {/* Right: Quick actions (Stretches to full width on mobile, floats elegantly on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            {/* Phone link block */}
            <a 
              href="tel:+902123456789" 
              className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-4 bg-navy-light border border-white/10 px-6 sm:px-8 py-5 group hover:border-burnt-orange transition-all duration-350"
            >
              <div className="w-12 h-12 bg-burnt-orange/15 text-burnt-orange flex items-center justify-center group-hover:bg-burnt-orange group-hover:text-white transition-all duration-350 shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] sm:text-xs text-white/60 block uppercase font-sans tracking-wider leading-none mb-1.5">Müşteri Hattı</span>
                <span className="text-base sm:text-lg font-black tracking-wider text-white font-heading block leading-none">+90 (212) 345 67 89</span>
              </div>
            </a>

            {/* Quote Action Button */}
            <Link
              href="/iletisim"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-burnt-orange text-white px-9 py-5 text-xs font-black tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-navy rounded-none font-heading h-[74px] shrink-0"
            >
              TEKLİF ALIN →
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
