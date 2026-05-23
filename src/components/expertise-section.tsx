"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Landmark, HardHat, ArrowDown, ArrowUpRight, Wrench, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { expertiseAreas } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  HardHat,
  Wrench,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ExpertiseSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Line Details */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-stone-gray-dark/20 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 left-2/4 w-px bg-stone-gray-dark/20 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 left-3/4 w-px bg-stone-gray-dark/20 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-3"
        >
          <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading flex items-center justify-center gap-2">
            // NELER YAPIYORUZ
            <ArrowDown className="w-3.5 h-3.5 text-burnt-orange animate-bounce" />
          </span>
          <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight uppercase">
            Tüm Dünyada Sektör Lideri Çözümler Sunuyoruz
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {expertiseAreas.map((area, index) => {
            const Icon = iconMap[area.icon];
            const numStr = `0${index + 1}`;
            return (
              <motion.div key={index} variants={cardVariants} className="h-full">
                <Card className="bg-stone-gray border border-stone-gray-dark/40 shadow-none hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-burnt-orange/40 transition-all duration-500 rounded-none group h-full relative overflow-hidden">
                  
                  {/* Giant Watermarked Background Text */}
                  <div className="absolute right-4 bottom-4 text-2xl lg:text-3xl font-black tracking-widest text-navy/[0.02] group-hover:text-burnt-orange/[0.03] transition-colors duration-500 font-heading select-none pointer-events-none uppercase">
                    HİZMET {numStr}
                  </div>

                  {/* Subtle top indicator border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-burnt-orange transition-colors duration-500" />
                  
                  <CardContent className="p-8 lg:p-12 flex flex-col items-start h-full relative z-10">
                    
                    {/* Icon block */}
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

                    {/* Button Wrap exactly mirroring reference */}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
