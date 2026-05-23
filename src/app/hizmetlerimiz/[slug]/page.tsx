import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Building2, Landmark, HardHat, FileText, Download, Check, PhoneCall, HelpCircle } from "lucide-react";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import CallToActionSection from "@/components/cta-section";
import PageTransition from "@/components/page-transition";
import { expertiseAreas } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find current service details
  const currentService = expertiseAreas.find((s) => s.slug === slug);
  if (!currentService) {
    notFound();
  }

  return (
    <PageTransition>
      {/* Page Header Banner */}
      <BreadcrumbHeader title={currentService.title} currentPage={currentService.title.toUpperCase()} />

      {/* Main Service Details Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Service Content Details (8 Columns) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Featured Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-stone-gray-dark/30 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
                <Image
                  src={currentService.imageUrl}
                  alt={currentService.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              {/* Service Title & Long Description */}
              <div className="space-y-6">
                <h2 className="font-heading text-3xl lg:text-4xl font-black text-navy uppercase tracking-tight">
                  {currentService.title} Kapsamında Neler Sunuyoruz?
                </h2>
                <p className="text-muted-foreground font-sans text-base lg:text-lg leading-relaxed font-sans">
                  {currentService.longDescription}
                </p>
              </div>

              {/* Core Features list */}
              <div className="space-y-6 bg-stone-gray p-8 lg:p-10 border border-stone-gray-dark/30">
                <h3 className="font-heading text-lg lg:text-xl font-black text-navy uppercase tracking-wider border-b border-stone-gray-dark/60 pb-3">
                  // ANAHTAR KAZANIMLAR & ÖZELLİKLER
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-heading text-xs lg:text-sm font-bold text-navy">
                  {currentService.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-burnt-orange/10 flex items-center justify-center text-burnt-orange shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Accordion block */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-burnt-orange shrink-0" />
                  <h3 className="font-heading text-xl lg:text-2xl font-black text-navy uppercase tracking-tight">
                    Sıkça Sorulan Sorular
                  </h3>
                </div>

                <Accordion className="w-full space-y-4">
                  {currentService.faqs.map((faq, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`item-${i}`} 
                      className="border border-stone-gray-dark/40 px-6 bg-stone-gray/50 rounded-none"
                    >
                      <AccordionTrigger className="font-heading text-sm lg:text-base font-black text-navy hover:text-burnt-orange text-left hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-5 pt-1">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

            </div>

            {/* RIGHT COLUMN: Sidebar Navigation & Action Widgets (4 Columns) */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              
              {/* Active Services List Menu */}
              <div className="bg-stone-gray border border-stone-gray-dark/30 p-8 space-y-6">
                <h3 className="font-heading text-sm font-black tracking-widest uppercase text-navy border-b border-stone-gray-dark/60 pb-3">
                  // DİĞER HİZMETLERİMİZ
                </h3>
                <div className="space-y-3 font-heading text-sm">
                  {expertiseAreas.map((area) => {
                    const isCurrent = area.slug === slug;
                    return (
                      <Link
                        key={area.slug}
                        href={`/hizmetlerimiz/${area.slug}`}
                        className={`flex items-center justify-between px-6 py-4 transition-all duration-300 font-bold border rounded-none ${
                          isCurrent
                            ? "bg-burnt-orange text-white border-burnt-orange shadow-md"
                            : "bg-white text-navy border-stone-gray-dark/50 hover:bg-navy hover:text-white hover:border-navy"
                        }`}
                      >
                        <span className="uppercase tracking-wider">{area.title}</span>
                        <span>→</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Downloads widget */}
              <div className="bg-stone-gray border border-stone-gray-dark/30 p-8 space-y-6">
                <h3 className="font-heading text-sm font-black tracking-widest uppercase text-navy border-b border-stone-gray-dark/60 pb-3">
                  // BELGELER & KATALOGLAR
                </h3>
                <div className="space-y-4 font-heading text-xs">
                  <a
                    href="#"
                    className="flex items-center justify-between bg-white border border-stone-gray-dark/50 p-4 hover:border-burnt-orange transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-burnt-orange shrink-0" />
                      <span className="font-black text-navy uppercase tracking-wider">HİZMET KATALOĞU (PDF)</span>
                    </div>
                    <Download className="w-4 h-4 text-navy/55 group-hover:text-burnt-orange" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between bg-white border border-stone-gray-dark/50 p-4 hover:border-burnt-orange transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-burnt-orange shrink-0" />
                      <span className="font-black text-navy uppercase tracking-wider">TEKNİK ŞARTNAME (DOC)</span>
                    </div>
                    <Download className="w-4 h-4 text-navy/55 group-hover:text-burnt-orange" />
                  </a>
                </div>
              </div>

              {/* Help & Quick CTA box */}
              <div className="bg-navy text-white p-8 space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(234,85,1,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                <h3 className="font-heading text-xl font-black tracking-tight text-white uppercase relative z-10 leading-snug">
                  Yardıma mı İhtiyacınız Var?
                </h3>
                <p className="text-white/70 text-xs font-sans leading-relaxed relative z-10">
                  Uzman mühendislerimiz ve mimarlarımız aklınızdaki tüm teknik soruları yanıtlamak ve projenize değer katmak için hazır bekliyor.
                </p>
                <div className="w-12 h-1 bg-burnt-orange relative z-10" />

                <a
                  href="tel:+902123456789"
                  className="flex items-center gap-3.5 pt-4 group relative z-10"
                >
                  <div className="w-11 h-11 bg-burnt-orange/15 text-burnt-orange flex items-center justify-center group-hover:bg-burnt-orange group-hover:text-white transition-all duration-350 shrink-0">
                    <PhoneCall className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase block font-sans tracking-wider">Hemen Arayın</span>
                    <span className="text-base font-black tracking-wider text-white font-heading">+90 (212) 345 67 89</span>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <CallToActionSection />
    </PageTransition>
  );
}
