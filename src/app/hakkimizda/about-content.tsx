"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Target, Eye, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import PageTransition from "@/components/page-transition";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import CallToActionSection from "@/components/cta-section";
import { stats } from "@/lib/data";

const values = [
  {
    icon: Target,
    title: "Misyonumuz",
    description: "Sürdürülebilir, yenilikçi ve yüksek kaliteli inşaat çözümleri sunarak topluma ve çevreye değer katmak.",
  },
  {
    icon: Eye,
    title: "Vizyonumuz",
    description: "Türkiye'nin en güvenilir ve tercih edilen inşaat firması olarak, sektörde standartları belirleyen öncü konumumuzu korumak.",
  },
];

const certificates = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    subtitle: "Kalite Yönetim Sistemi",
    description: "Tüm tasarım, proje geliştirme ve şantiye yönetim işlerimizde sıfır hata toleransıyla çalışıyoruz."
  },
  {
    icon: ShieldCheck,
    title: "ISO 45001:2018",
    subtitle: "İş Sağlığı ve Güvenliği",
    description: "Sıfır kaza hedefiyle saha personelimizin can güvenliğini ve şantiye emniyetini en üst seviyede tutuyoruz."
  },
  {
    icon: HeartHandshake,
    title: "ISO 14001:2015",
    subtitle: "Çevre Yönetim Sistemi",
    description: "Gelecek nesillere daha yaşanabilir bir çevre bırakmak adına sürdürülebilir malzemeler tercih ediyoruz."
  }
];

const team = [
  {
    name: "Halil Saras",
    role: "Yönetim Kurulu Başkanı / İnşaat Mühendisi",
    image: "/images/project-1.png",
    bio: "25 yıllık sektörel birikimiyle Saras İnşaat'ın vizyoner kurucusu."
  },
  {
    name: "Murat Saras",
    role: "Genel Müdür Yardımcısı / Yüksek Mimar",
    image: "/images/project-2.png",
    bio: "Estetik ve çağdaş mimari akımların projelerimizdeki imzası."
  },
  {
    name: "Ayşe Yılmaz",
    role: "Proje Planlama Direktörü / İnşaat Mühendisi",
    image: "/images/project-3.png",
    bio: "Proje bütçe koordinasyonu ve zamanında teslimat süreçlerinin yöneticisi."
  }
];

export default function AboutContent() {
  return (
    <PageTransition>
      {/* Page Header Banner */}
      <BreadcrumbHeader title="HAKKIMIZDA" currentPage="HAKKIMIZDA" />

      {/* Main Corporate Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column: Image with Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-stone-gray-dark/30 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                <Image
                  src="/images/about.png"
                  alt="Saras İnşaat Kurumsal Yapı"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-6 -right-6 lg:right-6 bg-burnt-orange text-white p-8 shadow-xl max-w-[200px]">
                <div className="font-heading text-5xl font-black tracking-tight leading-none mb-1">
                  25+
                </div>
                <div className="text-[11px] font-black tracking-widest uppercase leading-snug text-white/90 font-heading">
                  YILLIK KURUMSAL BAŞARI
                </div>
              </div>
            </motion.div>

            {/* Right Column: Detailed info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
                  // YARIM ASIRLIK HEDEF
                </span>
                <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight uppercase">
                  Mühendislik Mükemmelliğiyle Geleceği Şekillendiriyoruz
                </h2>
              </div>

              <p className="text-muted-foreground font-sans text-base leading-relaxed">
                1999 yılında İstanbul&apos;da kurulan Saras İnşaat, çeyrek asrı aşan tecrübesiyle Türkiye genelinde nitelikli konut, ticari yapılar, endüstriyel tesisler ve altyapı projeleri inşa etmektedir. &quot;Güven ve Mükemmellik&quot; ilkelerimizden taviz vermeden 180&apos;den fazla büyük ölçekli taahhüdü başarıyla tamamladık.
              </p>

              {/* Bullet checklist */}
              <ul className="space-y-3 font-heading text-sm font-bold text-navy">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-burnt-orange/10 flex items-center justify-center text-burnt-orange shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Uluslararası standartlarda C35 ve üstü beton kalitesi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-burnt-orange/10 flex items-center justify-center text-burnt-orange shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>ISO 9001, 14001 ve 45001 entegre yönetim sistemi</span>
                </li>
              </ul>

              {/* Stats Inline block */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-gray-dark/50">
                {stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="bg-stone-gray p-6 border border-stone-gray-dark/30">
                    <div className="font-heading text-3xl font-black text-burnt-orange">
                      {stat.value}
                    </div>
                    <div className="text-navy/60 font-heading text-xs font-bold tracking-widest mt-1.5 uppercase">
                      // {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Corporate Values / Vision Grid */}
      <section className="py-24 bg-stone-gray border-y border-stone-gray-dark/35 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white border border-stone-gray-dark/45 p-8 lg:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col sm:flex-row gap-6">
                  <div className="w-14 h-14 bg-navy flex items-center justify-center text-white shrink-0 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-black text-navy uppercase tracking-wider">{v.title}</h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Expert Team Grid displaying members display */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
              // YÖNETİM & TEKNİK KADRO
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight uppercase">
              Uzman Yönetici Ekibimiz
            </h2>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              Her projeyi en üst düzey teknik bilgi, disiplin ve iş ahlakı ile koordine eden alanında yetkin kurumsal yöneticilerimiz.
            </p>
          </div>

          {/* Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <div 
                key={i}
                className="bg-stone-gray border border-stone-gray-dark/30 hover:border-burnt-orange/30 transition-all duration-500 shadow-none hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] group relative overflow-hidden"
              >
                {/* Photo box */}
                <div className="relative aspect-[4/5] overflow-hidden bg-navy/5">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Subtle hover stats info */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center p-6 text-center">
                    <p className="text-white/90 text-sm font-sans italic leading-relaxed">
                      &ldquo;{m.bio}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Info Text footer */}
                <div className="bg-white p-6 border-t border-stone-gray-dark/30 text-center space-y-1.5 relative z-10">
                  <h3 className="font-heading text-lg font-black text-navy group-hover:text-burnt-orange transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans tracking-wide">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Certificates & ISO quality standards */}
      <section className="py-24 bg-stone-gray border-t border-stone-gray-dark/35 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
              // YÜKSEK STANDARTLAR
            </span>
            <h2 className="font-heading text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight uppercase">
              Kalite ve Güven Sertifikalarımız
            </h2>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((c, i) => {
              const Icon = c.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white border border-stone-gray-dark/30 p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:border-burnt-orange/20 transition-all duration-350 border-t-4 border-t-navy hover:border-t-burnt-orange rounded-none text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-stone-gray text-navy flex items-center justify-center mx-auto rounded-none shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg font-black text-navy">{c.title}</h3>
                    <p className="text-xs text-burnt-orange font-heading font-black tracking-wider uppercase">{c.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground font-sans text-xs lg:text-sm leading-relaxed">{c.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA section Banner */}
      <CallToActionSection />
    </PageTransition>
  );
}
