"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
            // YORUMLARIMIZ
          </span>
          <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
            Müşterilerimizin Erkan Hakkındaki Değerlendirmeleri
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-stone-gray border border-stone-gray-dark/50 p-8 lg:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.03)] min-h-[380px] flex flex-col justify-between">
          {/* Decorative quotes background icon */}
          <div className="absolute right-12 top-12 text-navy/[0.03] pointer-events-none select-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 lg:space-y-8"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-burnt-orange text-burnt-orange" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg lg:text-xl font-medium text-navy/85 leading-relaxed font-sans italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-stone-gray-dark/60 max-w-xs">
                <div>
                  <h4 className="font-heading text-base font-black text-navy">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    {testimonials[current].role}, <span className="font-semibold text-burnt-orange">{testimonials[current].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-stone-gray-dark/60">
            {/* Index Tracker */}
            <div className="text-xs font-black tracking-widest text-navy/40 font-heading">
              0{current + 1} / 0{testimonials.length}
            </div>

            {/* Prev/Next buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 bg-white border border-stone-gray-dark flex items-center justify-center text-navy hover:bg-burnt-orange hover:text-white hover:border-burnt-orange transition-all duration-300 rounded-none cursor-pointer"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 bg-white border border-stone-gray-dark flex items-center justify-center text-navy hover:bg-burnt-orange hover:text-white hover:border-burnt-orange transition-all duration-300 rounded-none cursor-pointer"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
