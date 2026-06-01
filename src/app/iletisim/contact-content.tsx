"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageTransition from "@/components/page-transition";
import BreadcrumbHeader from "@/components/breadcrumb-header";

const branches = [
  {
    title: "Merkez Ofis",
    phone: "+90 (352) 345 67 89",
    mail: "info@erkaninsaat.com.tr",
    hours: "Pzt - Cmt 08:30 - 18:30",
    address: "Erenköy Mah. Gürle Cd. 1497.Sk, Talas, Kayseri 38030"
  },
  {
    title: "Ankara İrtibat Ofisi",
    phone: "+90 (312) 987 65 43",
    mail: "ankara@erkaninsaat.com.tr",
    hours: "Pzt - Cum 09:00 - 18:00",
    address: "Mustafa Kemal Mahallesi, Dumlupınar Bulvarı, No: 274, C2 Blok 108 Numara, Ankara, Turkey"
  },
  {
    title: "İzmir Şantiye Ofisi",
    phone: "+90 (232) 555 44 33",
    mail: "izmir@erkaninsaat.com.tr",
    hours: "Pzt - Cmt 08:00 - 18:00",
    address: "Bornova Cad. Sanayi Sitesi No:102 Bornova / İzmir"
  }
];

export default function ContactContent() {
  return (
    <PageTransition>
      {/* Page Header Banner */}
      <BreadcrumbHeader title="İLETİŞİM" currentPage="İLETİŞİM" />

      {/* 3-Column Office Branch Cards Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
              // ŞUBELERİMİZ
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight uppercase">
              Bize Yakından Ulaşın
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((b, i) => (
              <div 
                key={i}
                className="bg-stone-gray border border-stone-gray-dark/30 hover:border-burnt-orange/30 p-8 lg:p-10 shadow-none hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] transition-all duration-500 rounded-none relative group border-t-4 border-t-navy hover:border-t-burnt-orange flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Branch Title */}
                  <h3 className="font-heading text-xl font-black text-navy uppercase tracking-wider group-hover:text-burnt-orange transition-colors">
                    {b.title}
                  </h3>

                  {/* Branch Address */}
                  <div className="flex items-start gap-3 text-xs text-muted-foreground font-sans leading-relaxed">
                    <MapPin className="w-4.5 h-4.5 text-burnt-orange shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>

                  {/* Phone & Mail */}
                  <div className="space-y-2.5 font-heading text-xs lg:text-sm font-bold text-navy">
                    <a href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 hover:text-burnt-orange transition-colors">
                      <Phone className="w-4 h-4 text-burnt-orange shrink-0" />
                      <span>{b.phone}</span>
                    </a>
                    <a href={`mailto:${b.mail}`} className="flex items-center gap-3 hover:text-burnt-orange transition-colors">
                      <Mail className="w-4 h-4 text-burnt-orange shrink-0" />
                      <span>{b.mail}</span>
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="mt-8 pt-4 border-t border-stone-gray-dark/60 flex items-center gap-3 text-xs text-muted-foreground font-sans">
                  <Clock className="w-4 h-4 text-burnt-orange shrink-0" />
                  <span>{b.hours}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Form & details section */}
      <section className="py-24 bg-stone-gray border-t border-stone-gray-dark/35 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Form on the left (8 cols) */}
            <div className="lg:col-span-8 bg-white border border-stone-gray-dark/30 p-8 lg:p-14 relative overflow-hidden">
              <div className="space-y-3 mb-10">
                <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
                  // BİZE YAZIN
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl font-black text-navy uppercase tracking-tight">
                  Projeniz Hakkında Mesaj Gönderin
                </h3>
              </div>

              <form className="space-y-6 font-heading text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy font-bold uppercase tracking-wider">
                      Ad Soyad
                    </Label>
                    <Input
                      id="name"
                      placeholder="Adınız Soyadınız"
                      className="rounded-none border-stone-gray-dark/50 focus:border-burnt-orange focus:ring-burnt-orange h-13 font-sans text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-bold uppercase tracking-wider">
                      E-posta
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ornek@email.com"
                      className="rounded-none border-stone-gray-dark/50 focus:border-burnt-orange focus:ring-burnt-orange h-13 font-sans text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-navy font-bold uppercase tracking-wider">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+90 (5XX) XXX XX XX"
                      className="rounded-none border-stone-gray-dark/50 focus:border-burnt-orange focus:ring-burnt-orange h-13 font-sans text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-navy font-bold uppercase tracking-wider">
                      Konu
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Proje teklifi, bilgi talebi..."
                      className="rounded-none border-stone-gray-dark/50 focus:border-burnt-orange focus:ring-burnt-orange h-13 font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-navy font-bold uppercase tracking-wider">
                    Mesajınız
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Mesajınızı buraya yazın..."
                    rows={6}
                    className="rounded-none border-stone-gray-dark/50 focus:border-burnt-orange focus:ring-burnt-orange resize-none font-sans text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-burnt-orange text-white hover:bg-navy rounded-none h-14 px-10 text-xs font-black tracking-widest uppercase transition-colors duration-300 gap-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    MESAJI GÖNDER
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Contact info card on the right (4 cols) */}
            <div className="lg:col-span-4 bg-navy text-white p-8 lg:p-10 space-y-6 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(234,85,1,0.05)_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
              
              <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
                // İLETİŞİM HATLARI
              </span>
              <h3 className="font-heading text-xl lg:text-2xl font-black text-white uppercase tracking-tight relative z-10 leading-snug">
                Hızlı Destek & Danışmanlık Alın
              </h3>
              <p className="text-white/70 text-xs font-sans leading-relaxed relative z-10">
                Aklınızdaki projeyi anlatın, mühendislerimiz ve proje planlama uzmanlarımız sizin için en uygun teknik ve mali bütçelendirmeyi en kısa sürede hazırlasın.
              </p>
              <div className="w-12 h-1 bg-burnt-orange relative z-10" />

              <div className="space-y-6 relative z-10 pt-4 font-heading">
                <a href="tel:+903523456789" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-burnt-orange/15 text-burnt-orange flex items-center justify-center group-hover:bg-burnt-orange group-hover:text-white transition-all duration-350 shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase block font-sans tracking-wider">Telefon Hattı</span>
                    <span className="text-sm font-black tracking-wider text-white">+90 (352) 345 67 89</span>
                  </div>
                </a>

                <a href="mailto:info@erkaninsaat.com.tr" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-burnt-orange/15 text-burnt-orange flex items-center justify-center group-hover:bg-burnt-orange group-hover:text-white transition-all duration-350 shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase block font-sans tracking-wider">E-posta</span>
                    <span className="text-sm font-black tracking-wider text-white">info@erkaninsaat.com.tr</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-width Map Section */}
      <section className="h-[450px] w-full bg-stone-gray overflow-hidden relative border-t border-stone-gray-dark/35">
        <iframe
          src="https://maps.google.com/maps?q=Erenk%C3%B6y%20Mahallesi%2C%20G%C3%BCrle%20Caddesi%201497.Sokak%2C%20Talas%2C%20Kayseri%2038030%2C%20Turkey&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Erkan İnşaat Konum"
          className="absolute inset-0"
        />
      </section>
    </PageTransition>
  );
}
