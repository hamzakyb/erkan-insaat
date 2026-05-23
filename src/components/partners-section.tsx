"use client";

interface Partner {
  name: string;
  type: string;
  image?: string;
  svg?: JSX.Element;
}

const partners: Partner[] = [
  {
    name: "Faras İnşaat",
    type: "Ana İş Ortağı",
    image: "/images/faras-logo.jpg"
  },
  {
    name: "Aras Grup",
    type: "Stratejik İş Ortağı",
    image: "/images/aras-logo.png"
  },
  {
    name: "Arissa İnşaat",
    type: "Altyapı & Taahhüt",
    image: "/images/arissa-logo.png"
  },
  {
    name: "TAV Airports",
    type: "Altyapı & Havalimanı",
    image: "/images/tav-logo.jpg"
  },
  {
    name: "Dema Konut",
    type: "Konut Geliştirme",
    image: "/images/dema-logo.jpg"
  },
  {
    name: "Votorantim Cimentos",
    type: "Çimento & Hazır Beton",
    image: "/images/votorantim-logo.png"
  },
  {
    name: "Kandemir Beton",
    type: "Hazır Beton & Altyapı",
    image: "/images/kandemir-logo.png"
  },
  {
    name: "May İnşaat",
    type: "Endüstriyel Yapı",
    image: "/images/may-logo.jpg"
  },
  {
    name: "Fırat Life Style",
    type: "Konut & Yaşam",
    image: "/images/firat-logo.jpg"
  }
];

export default function PartnersSection() {
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-stone-gray border-t border-stone-gray-dark/35 relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(234,85,1,0.02)_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-burnt-orange text-xs font-black tracking-widest uppercase font-heading block">
            // İŞ ORTAKLARIMIZ
          </span>
          <h2 className="font-heading text-2xl lg:text-4xl font-black text-navy tracking-tight leading-tight uppercase">
            GÜÇLÜ İŞ BİRLİKLERİ, SAĞLAM GELECEK
          </h2>
        </div>

      </div>

      {/* Full-width Infinity Slider Container */}
      <div className="relative w-full overflow-hidden mt-4">
        {/* Left & Right gradient fade masks for high-end feel */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-stone-gray via-stone-gray/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-stone-gray via-stone-gray/70 to-transparent z-10 pointer-events-none" />

        {/* Scrolling flex row */}
        <div className="animate-marquee flex gap-6 py-6 px-4">
          {doubledPartners.map((partner, index) => (
            <div
              key={index}
              className="w-72 bg-navy border border-white/10 hover:border-burnt-orange/50 p-6 h-48 flex flex-col items-center justify-center relative overflow-hidden group select-none shadow-[0_15px_45px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_65px_rgba(21,22,28,0.35)] hover:-translate-y-2.5 transition-all duration-500 rounded-2xl border-b-4 border-b-white/5 hover:border-b-burnt-orange shrink-0 cursor-pointer"
            >
              {partner.image ? (
                // Premium White Badge for Image Logos (Fits perfectly, no overflow)
                <div className="bg-white/95 w-48 h-16 flex items-center justify-center p-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 group-hover:scale-105 group-hover:bg-white transition-all duration-500 mb-4 z-10">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ) : (
                // Vector Graphic Logo (Large scale centered with a gold theme)
                <div className="text-burnt-orange/55 group-hover:text-burnt-orange group-hover:scale-110 transition-all duration-500 mb-4 shrink-0 z-10">
                  {partner.svg}
                </div>
              )}

              {/* Text Information (Always readable in normal flow) */}
              <div className="z-10 text-center">
                {/* Partner Name */}
                <h3 className="font-heading text-sm font-black text-white uppercase tracking-widest leading-tight transition-colors duration-300 drop-shadow-md">
                  {partner.name}
                </h3>

                {/* Type Category Tag */}
                <span className="text-[9px] font-sans font-black text-burnt-orange uppercase tracking-widest mt-1.5 block leading-none drop-shadow-sm">
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
