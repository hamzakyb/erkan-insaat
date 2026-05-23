"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Building2, 
  Menu, 
  X 
} from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Topbar: Hidden on mobile, hides on scroll, transparent at top of page */}
      <div 
        className={`bg-transparent text-white text-xs transition-all duration-350 overflow-hidden hidden md:block ${
          scrolled ? "h-0 opacity-0" : "h-10 opacity-100 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between font-sans">
          {/* Left Info: Contact details */}
          <div className="flex items-center gap-6">
            <a href="tel:+903129876543" className="flex items-center gap-2 hover:text-burnt-orange transition-colors">
              <Phone className="w-3.5 h-3.5 text-burnt-orange" />
              <span>+90 (312) 987 65 43</span>
            </a>
            <a href="mailto:info@sarasinsaat.com.tr" className="flex items-center gap-2 hover:text-burnt-orange transition-colors">
              <Mail className="w-3.5 h-3.5 text-burnt-orange" />
              <span>info@sarasinsaat.com.tr</span>
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-burnt-orange" />
              <span>Ankara, Türkiye</span>
            </div>
          </div>

          {/* Right Info: Working Hours & Socials */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-3.5 h-3.5 text-burnt-orange" />
              <span>Pzt - Cmt: 08:30 - 18:30</span>
            </div>
            <div className="w-px h-3.5 bg-white/20" />
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-burnt-orange transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="https://www.instagram.com/saras.insaat/" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-orange transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-burnt-orange transition-colors" aria-label="Linkedin">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="hover:text-burnt-orange transition-colors" aria-label="Twitter">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Akıllı Şeffaf Navbar:
          On top: transparent background with no border
          On scroll / mobile menu open: smooth transition to semi-transparent glassmorphic luxury Navy */}
      <nav 
        className={`w-full transition-all duration-300 ${
          (scrolled || mobileOpen)
            ? "bg-navy/90 backdrop-blur-md border-b border-white/5 shadow-[0_4px_25px_rgba(0,0,0,0.15)] py-3" 
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-navy flex items-center justify-center group-hover:bg-burnt-orange transition-colors duration-500 rounded-none p-1.5 shadow-md shrink-0 border border-white/5">
                <Image 
                  src="/images/logo-black.png" 
                  alt="Saras İnşaat | Otomotiv" 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              <div className="font-heading">
                <span className="text-2xl font-black tracking-tight text-white block leading-none">
                  SARAS
                </span>
                <span className="text-[9px] font-bold tracking-[0.18em] text-white/60 uppercase mt-1.5 block">
                  İNŞAAT | OTOMOTİV
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 font-sans">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-xs font-semibold tracking-[0.16em] uppercase transition-colors duration-300 py-2 ${
                      isActive 
                        ? "text-burnt-orange" 
                        : "text-white/80 hover:text-burnt-orange"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-burnt-orange"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Actions / CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/iletisim"
                className="relative overflow-hidden bg-burnt-orange text-white px-7 py-3.5 text-xs font-black tracking-widest uppercase transition-all duration-350 hover:bg-white hover:text-navy flex items-center gap-2 rounded-none"
              >
                <span>TEKLİF ALIN</span>
                <span className="text-base">→</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white hover:text-burnt-orange transition-colors"
              aria-label="Menü"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-navy border-t border-white/5 overflow-hidden font-heading"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 text-base font-bold tracking-wider uppercase ${
                        isActive 
                          ? "text-burnt-orange border-l-4 border-burnt-orange pl-3" 
                          : "text-white/80 hover:text-burnt-orange pl-0"
                      } transition-all duration-200`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-burnt-orange text-white py-4 text-sm font-black tracking-widest uppercase text-center mt-6 hover:bg-white hover:text-navy transition-colors rounded-none"
                >
                  TEKLİF ALIN
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
