"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  // Let's feature the first 4 premium projects
  const featured = projects.slice(0, 4);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 lg:py-32 bg-stone-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block mb-3">
              // SON PROJELERİMİZ
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight uppercase">
              Tamamlanan Çalışmalarimizi İnceleyin
            </h2>
          </div>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 bg-navy text-white hover:bg-burnt-orange px-6 py-4 text-xs font-black tracking-widest uppercase transition-colors duration-300 rounded-none font-heading shrink-0"
          >
            Tüm Projeler
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Carousel Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {featured.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group cursor-pointer bg-white border border-stone-gray-dark/30 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
                    
                    {/* Project Image Box */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-navy/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Slide-Up Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                        <div className="text-white space-y-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          <span className="text-burnt-orange text-[10px] font-black tracking-widest uppercase font-heading">
                            {project.category}
                          </span>
                          <h3 className="font-heading text-lg lg:text-xl font-black tracking-tight text-white">
                            {project.title}
                          </h3>
                          <p className="text-white/70 text-xs font-sans">
                            {project.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Footer (Always Visible under the image for great fallback & mobile rendering) */}
                    <div className="bg-white p-6 border-t border-stone-gray-dark/30 relative z-10 flex items-center justify-between">
                      <div className="space-y-1.5">
                        <span className="text-burnt-orange text-[10px] font-black tracking-widest uppercase font-heading block">
                          {project.category}
                        </span>
                        <h3 className="font-heading text-base font-black text-navy tracking-tight group-hover:text-burnt-orange transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-xs font-sans">
                          {project.location}
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-stone-gray text-navy flex items-center justify-center group-hover:bg-burnt-orange group-hover:text-white transition-all duration-350 shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Carousel Navigation buttons */}
            <div className="flex items-center justify-end gap-2 mt-10">
              <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 w-12 h-12 rounded-none border-navy/20 text-navy hover:bg-burnt-orange hover:text-white hover:border-burnt-orange cursor-pointer" />
              <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 w-12 h-12 rounded-none border-navy/20 text-navy hover:bg-burnt-orange hover:text-white hover:border-burnt-orange cursor-pointer" />
            </div>
            
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}
