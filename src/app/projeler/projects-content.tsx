"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "@/components/page-transition";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { projects } from "@/lib/data";

const categories = ["Tümü", "Konut", "Ticari", "Kamu", "Endüstriyel", "Turizm"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered =
    activeCategory === "Tümü"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      {/* Page Header Banner */}
      <BreadcrumbHeader title="PROJELERİMİZ" currentPage="PROJELER" />

      {/* Filter & Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-stone-gray text-navy hover:bg-navy/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-gray">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500" />
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 bg-burnt-orange px-3 py-1">
                    <span className="text-white text-xs font-semibold">
                      {project.year}
                    </span>
                  </div>
                  {/* Info box sliding up */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white p-6">
                      <span className="text-burnt-orange text-xs font-semibold tracking-widest uppercase">
                        {project.category}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-navy mt-2 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-navy/50 text-sm mt-1">
                        {project.location}
                      </p>
                      <p className="text-navy/40 text-xs mt-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Always visible on mobile */}
                <div className="lg:hidden bg-white p-4 border border-stone-gray-dark">
                  <span className="text-burnt-orange text-xs font-semibold tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-navy mt-1">
                    {project.title}
                  </h3>
                  <p className="text-navy/50 text-sm mt-1">
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
