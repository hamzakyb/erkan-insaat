import Link from "next/link";
import Image from "next/image";
import { Building2, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative border-t border-white/5">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100%] pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-none p-1.5 shadow-md shrink-0">
                <Image 
                  src="/images/logo-black.png" 
                  alt="Saras İnşaat | Otomotiv" 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              <div className="font-heading">
                <span className="text-2xl font-black tracking-tight block leading-none text-white">
                  SARAS
                </span>
                <span className="text-[9px] font-black tracking-[0.18em] text-white/50 uppercase mt-1.5 block">
                  İNŞAAT | OTOMOTİV
                </span>
              </div>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-sans">
              25 yılı aşkın tecrübesiyle Türkiye&apos;nin önde gelen inşaat firmalarından biri. Güven, kalite ve yenilikçilik ilkelerimizle geleceğin sağlam temellerini atıyoruz.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-burnt-orange hover:text-white transition-all duration-300 flex items-center justify-center text-white/80" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="https://www.instagram.com/saras.insaat/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-burnt-orange hover:text-white transition-all duration-300 flex items-center justify-center text-white/80" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-burnt-orange hover:text-white transition-all duration-300 flex items-center justify-center text-white/80" aria-label="Linkedin">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-burnt-orange hover:text-white transition-all duration-300 flex items-center justify-center text-white/80" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-sm font-black tracking-widest uppercase text-white border-b border-white/10 pb-3">
              // HIZLI ERİŞİM
            </h3>
            <ul className="space-y-3 font-heading">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-burnt-orange transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-burnt-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="uppercase tracking-wider font-bold">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading text-sm font-black tracking-widest uppercase text-white border-b border-white/10 pb-3">
              // HİZMETLERİMİZ
            </h3>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              {["Konut Projeleri", "Ticari Yapılar", "Altyapı Projeleri", "Endüstriyel Tesisler", "Kamu Yatırımları"].map(
                (service) => (
                  <li key={service} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                    <span className="text-burnt-orange">•</span>
                    <span>{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="font-heading text-sm font-black tracking-widest uppercase text-white border-b border-white/10 pb-3">
              // İLETİŞİM
            </h3>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-burnt-orange mt-0.5 shrink-0" />
                <span className="text-white/60 leading-relaxed">
                  Mustafa Kemal Mahallesi, Dumlupınar Bulvarı, No: 274, C2 Blok 108 Numara, Ankara, Turkey
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <Phone className="w-5 h-5 text-burnt-orange shrink-0" />
                <a href="tel:+902123456789" className="text-white/60 hover:text-burnt-orange transition-colors">
                  +90 (212) 345 67 89
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail className="w-5 h-5 text-burnt-orange shrink-0" />
                <a href="mailto:info@sarasinsaat.com.tr" className="text-white/60 hover:text-burnt-orange transition-colors">
                  info@sarasinsaat.com.tr
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/10 relative z-10 bg-black/10 font-sans text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40">
            © {new Date().getFullYear()} Saras İnşaat. Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center gap-6 text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
