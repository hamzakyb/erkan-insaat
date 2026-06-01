"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { benefits } from "@/lib/data";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-stone-gray overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Title and Process Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="text-burnt-orange text-xs font-black tracking-widest uppercase flex items-center gap-2 font-heading">
                // AVANTAJLARIMIZ 
                <ArrowDown className="w-3.5 h-3.5 text-burnt-orange animate-bounce" />
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
                Neden Bizi Seçmelisiniz?
              </h2>
            </div>
            
            <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-lg">
              Erkan İnşaat olarak, her projemizde taahhüt ettiğimiz güvence, kalite ve şeffaflığı tam olarak yansıtmak adına son teknoloji çözümler ve uzman kadromuzla yanınızdayız.
            </p>

            {/* Featured Process Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-stone-gray-dark/40 shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
              <Image
                src="/images/project-2.png"
                alt="İnşaat Süreci"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Column: Giant Watermark & Steps List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Giant Watermark Text */}
            <div className="absolute right-0 top-0 text-[10rem] lg:text-[14rem] font-black text-navy/[0.02] tracking-widest leading-none pointer-events-none select-none font-heading uppercase hidden md:block">
              AVANTAJ
            </div>

            {/* Steps Grid */}
            <div className="space-y-8 relative z-10 mt-6 lg:mt-0">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-6 items-start bg-white p-8 border border-stone-gray-dark/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] group border-l-4 hover:border-l-burnt-orange border-l-transparent"
                >
                  {/* Step Number Badge */}
                  <div className="font-heading text-4xl lg:text-5xl font-black text-burnt-orange/20 group-hover:text-burnt-orange transition-colors duration-300 leading-none">
                    {benefit.number}
                  </div>
                  
                  {/* Step Details */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg lg:text-xl font-black text-navy group-hover:text-burnt-orange transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
