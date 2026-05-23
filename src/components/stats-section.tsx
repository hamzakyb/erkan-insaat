"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Subtle architectural grid details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="text-center lg:px-6"
            >
              {/* Number stat */}
              <div className="font-heading text-5xl lg:text-6xl font-black text-burnt-orange tracking-tight leading-none">
                {stat.value}
              </div>
              
              {/* Description */}
              <div className="text-white/70 text-xs font-black tracking-widest uppercase mt-4 font-heading">
                // {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
