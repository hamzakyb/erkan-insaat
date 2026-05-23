"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

interface BreadcrumbHeaderProps {
  title: string;
  currentPage: string;
}

export default function BreadcrumbHeader({ title, currentPage }: BreadcrumbHeaderProps) {
  return (
    <section className="relative pt-36 pb-24 bg-navy text-white overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-2.png')" }}
        />
        {/* Navy charcoal high-contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(21,22,28,0.2)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 font-heading">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-l-4 border-burnt-orange pl-6 py-2">
          
          {/* Title Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-5xl font-black tracking-tight uppercase text-white leading-none">
              {title}
            </h1>
          </motion.div>

          {/* Breadcrumb Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2.5 text-xs font-black tracking-wider uppercase"
          >
            <Link 
              href="/" 
              className="flex items-center gap-1.5 text-white/70 hover:text-burnt-orange transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>ANA SAYFA</span>
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-burnt-orange">{currentPage}</span>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
