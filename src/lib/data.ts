// Project data for Erkan İnşaat
export interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Erkan Towers Rezidans",
    location: "İstanbul, Ataşehir",
    category: "Konut",
    image: "/images/project-1.png",
    year: "2024",
    description: "22 katlı lüks rezidans projesi. 180 daire, fitness merkezi, yüzme havuzu ve çocuk oyun alanları ile donatılmıştır.",
  },
  {
    id: 2,
    title: "Kristal AVM",
    location: "Ankara, Çankaya",
    category: "Ticari",
    image: "/images/project-2.png",
    year: "2023",
    description: "45.000 m² kapalı alana sahip, 120 mağaza kapasiteli modern alışveriş merkezi.",
  },
  {
    id: 3,
    title: "Villa Serena Konutları",
    location: "Bodrum, Muğla",
    category: "Konut",
    image: "/images/project-3.png",
    year: "2024",
    description: "Ege kıyısında 12 adet lüks müstakil villa. Özel havuz, peyzaj ve akıllı ev sistemleri.",
  },
  {
    id: 4,
    title: "Erkan Sağlık Kampüsü",
    location: "İzmir, Bornova",
    category: "Kamu",
    image: "/images/project-4.png",
    year: "2022",
    description: "500 yatak kapasiteli, son teknoloji tıbbi altyapıya sahip entegre sağlık kampüsü.",
  },
  {
    id: 5,
    title: "Endüstri Park Lojistik",
    location: "Kocaeli, Gebze",
    category: "Endüstriyel",
    image: "/images/project-5.png",
    year: "2023",
    description: "30.000 m² çelik konstrüksiyon lojistik depo ve üretim tesisi.",
  },
  {
    id: 6,
    title: "The Azure Otel & Spa",
    location: "Antalya, Kemer",
    category: "Turizm",
    image: "/images/project-6.png",
    year: "2024",
    description: "5 yıldızlı, 250 odalı lüks tatil oteli. Özel plaj, spa merkezi ve kongre salonu.",
  },
];

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export const stats = [
  { value: "25+", label: "Yıllık Tecrübe" },
  { value: "180+", label: "Tamamlanan Proje" },
  { value: "1.2M", label: "m² İnşaat Alanı" },
  { value: "50+", label: "Uzman Mühendis" },
];

export interface ExpertiseArea {
  title: string;
  slug: string;
  description: string;
  icon: "Building2" | "Landmark" | "HardHat" | "Wrench";
  imageUrl: string;
  longDescription: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Konut Projeleri",
    slug: "konut-projeleri",
    description: "Rezidanslardan villalara, modern yaşam alanları tasarlıyor ve inşa ediyoruz. Her projede konfor, estetik ve dayanıklılığı bir arada sunuyoruz.",
    icon: "Building2" as const,
    imageUrl: "/images/project-1.png",
    longDescription: "Erkan İnşaat olarak, konut projelerimizde sadece beton ve çelikten ibaret yapılar değil, içinde huzur ve güvenle yaşanacak yuvalar inşa ediyoruz. Modern mimari çizgileri, fonksiyonel iç mekân çözümleri ve çevre dostu yaklaşımları bir araya getirerek lüks rezidanslardan butik villalara kadar geniş bir yelpazede yüksek standartlı yaşam alanları üretiyoruz. Tüm projelerimiz deprem yönetmeliğine %100 uygun, yüksek kaliteli ısı ve ses yalıtımı ile akıllı ev otomasyon teknolojileriyle donatılmaktadır.",
    features: [
      "Deprem Yönetmeliğine Tam Uygun Statik Altyapı",
      "Akıllı Ev Otomasyonu ve Güvenlik Sistemleri",
      "A+ Sınıfı Enerji Verimliliği ve Isı Yalıtımı",
      "Özel Peyzaj Alanları, Yüzme Havuzları ve Sosyal Tesisler",
      "Çevre Dostu, Sürdürülebilir Yapı Malzemeleri"
    ],
    faqs: [
      {
        question: "Konut projelerinde hangi kalite standartları uygulanıyor?",
        answer: "Tüm konut projelerimiz, uluslararası ISO 9001 kalite standartlarında ve Türkiye deprem yönetmeliklerine tam uyumlu olarak inşa edilir. C35 ve üzeri mukavemette hazır beton ve yüksek dayanımlı inşaat çeliği tercih edilmektedir."
      },
      {
        question: "Ödeme kolaylıkları veya taksit imkanları sunuluyor mu?",
        answer: "Projelerimizin lansman dönemlerinde kişiye özel elden taksitlendirme seçenekleri, anlaşmalı bankalar aracılığıyla düşük faizli konut kredisi imkanları sunulmaktadır."
      },
      {
        question: "Akıllı ev sistemleri standart olarak sunuluyor mu?",
        answer: "Evet, rezidans ve villa projelerimizin tamamında aydınlatma, iklimlendirme, panjur kontrolü ve yangın/su sızıntısı dedektörlerini içeren merkezi akıllı ev sistemi standart paket olarak sunulur."
      }
    ]
  },
  {
    title: "Ticari Yapılar",
    slug: "ticari-yapilar",
    description: "Alışveriş merkezleri, ofis kuleleri ve karma kullanımlı projeler. İş dünyasının ihtiyaçlarına uygun, fonksiyonel ve prestijli yapılar.",
    icon: "Landmark" as const,
    imageUrl: "/images/project-2.png",
    longDescription: "İş dünyasının dinamik ve sürekli değişen ihtiyaçlarına yanıt veren, modern ve prestijli ticari alanlar inşa ediyoruz. Ofis kuleleri, iş merkezleri, büyük ölçekli alışveriş merkezleri ve karma kullanımlı mega yapı projelerinde edindiğimiz küresel birikimle, fonksiyonelliği ve estetiği bir arada sunuyoruz. Projelerimizde esnek kat planları, gelişmiş mekanik/havalandırma altyapısı, yüksek hızlı asansör sistemleri ve entegre iş merkezi otomasyonları standart olarak planlanmakta ve uygulanmaktadır.",
    features: [
      "Esnek Kat Planları ve Modüler Ofis Çözümleri",
      "Yüksek Kapasiteli Merkezi İklimlendirme ve Havalandırma",
      "Gelişmiş Kartlı Geçiş ve Entegre Bina Güvenlik Sistemleri",
      "Yüksek Hızlı, Akıllı Asansör İstasyonları",
      "Geniş Kapalı Otopark ve Vale Alanları"
    ],
    faqs: [
      {
        question: "Ticari projelerin enerji verimliliği (LEED vb.) sertifikası var mı?",
        answer: "Evet, yeni nesil tüm iş merkezi ve ticari yapı projelerimiz uluslararası yeşil bina standardı olan LEED Altın veya Platin sertifikalarına uygun olarak tasarlanıp inşa edilmektedir."
      },
      {
        question: "Binalarda modüler alan büyütme yapılabiliyor mu?",
        answer: "Tüm ticari yapılarımızda kolon-kiriş aks aralıkları modüler kullanıma uygun genişlikte planlanır. Bu sayede işletmeler ihtiyaç duyduklarında ofis alanlarını kolayca birleştirebilirler."
      }
    ]
  },
  {
    title: "Altyapı & Endüstri",
    slug: "altyapi-ve-endustri",
    description: "Köprüler, yollar, lojistik merkezleri ve endüstriyel tesisler. Büyük ölçekli projelerde güvenilir mühendislik çözümleri.",
    icon: "HardHat" as const,
    imageUrl: "/images/project-5.png",
    longDescription: "Büyük ölçekli endüstriyel yatırımlar, lojistik depolar ve kamu altyapı projeleri (yollar, köprüler, sanat yapıları) için üstün mühendislik gücümüzü sahaya yansıtıyoruz. Ağır sanayi tesislerinden yüksek depolama kapasiteli akıllı lojistik merkezlerine kadar, dayanıklılık ve iş sürekliliğini odağına alan çözümler geliştiriyoruz. Ağır yük kapasiteli zemin beton kaplamaları, geniş açıklıklı çelik konstrüksiyon çatı, yangın söndürme otomasyonları ve yüksek kapasiteli enerji trafo altyapıları ile endüstrinin ihtiyaç duyduğu tüm detayları kusursuzca teslim ediyoruz.",
    features: [
      "Geniş Açıklıklı Çelik Konstrüksiyon ve Prefabrik Çözümler",
      "Aşınmaya Dayanıklı, Ağır Yük Kapasiteli Özel Zemin Betonları",
      "Yüksek Kapasiteli Enerji ve Akışkan Altyapı Tesisatları",
      "Uluslararası İş Güvenliği Standartlarına Tam Uyumlu Şantiyeler",
      "Gelişmiş Yangın Algılama ve Otomatik Sprinkler Söndürme Sistemleri"
    ],
    faqs: [
      {
        question: "Endüstriyel zemin betonlarında hangi kaplamalar kullanılıyor?",
        answer: "Tesisin kullanım amacına göre kuvars agregalı yüzey sertleştiriciler, epoksi veya poliüretan kaplamalar kullanılarak darbe, aşınma ve kimyasal dayanımı yüksek zeminler oluşturulmaktadır."
      },
      {
        question: "Büyük açıklıklı çelik yapılarda rüzgar ve sismik dayanım nasıl hesaplanıyor?",
        answer: "Tüm çelik yapılarımız gelişmiş 3D sonlu elemanlar analiz programları (SAP2000 vb.) kullanılarak, ilgili bölgenin en yüksek sismik ve rüzgar yükü verilerine göre statik olarak projelendirilir."
      }
    ]
  },
  {
    title: "Makine & Ekipman Kiralama",
    slug: "makine-ekipman-kiralama",
    description: "Kule vinç kiralama, hidrolik beton dağıtıcı ve sabit beton pompası ağır şantiye makinelerini 81 ilde kurulum ve operatör desteğiyle sunuyoruz.",
    icon: "Wrench" as const,
    imageUrl: "/images/project-5.png",
    longDescription: "Erkan Group bünyesinde, inşaat ve altyapı projelerinin en kritik mekanik ihtiyaçlarından olan kule vinç, hidrolik beton dağıtıcı ve sabit beton pompası gibi ağır iş makinelerinin kiralama ve kurulum hizmetlerini sunuyoruz. Türkiye'nin 81 ilinde aktif lojistik ağımız, profesyonel operatör kadromuz ve 7/24 teknik bakım servisimiz ile projelerinize kesintisiz güç katıyoruz. Tüm filomuz düzenli olarak periyodik güvenlik denetimlerinden geçmekte, uluslararası standartlarda sertifikalı ekipmanlar ve yüksek tonaj kapasiteleriyle şantiyelerinizdeki verimliliği en üst seviyeye taşımaktadır.",
    features: [
      "Türkiye'nin 81 İlinde Aktif Kurulum ve Lojistik Hizmeti",
      "Yüksek Tonajlı ve Çeşitli Yükseklik Kapasiteli Kule Vinç Filosu",
      "Yüksek Katlı Yapılar İçin Profesyonel Hidrolik Beton Dağıtıcıları",
      "Uzun Mesafe ve Güçlü Basınçlı Sabit Beton Pompaları",
      "7/24 Yerinde Teknik Servis, Bakım ve Operatör Desteği"
    ],
    faqs: [
      {
        question: "Kiralama süresi ve kurulum lojistik süreçleri nasıl planlanıyor?",
        answer: "Kiralama talepleriniz projenizin süresine göre aylık veya yıllık olarak planlanır. Kule vinç ve beton ekipmanlarımızın kurulum, nakliye, montaj ve demontaj işlemleri uzman teknik ekiplerimiz tarafından anahtar teslim olarak gerçekleştirilir."
      },
      {
        question: "Ekipmanların periyodik bakımı ve arıza durumunda teknik servis desteği nasıl sağlanıyor?",
        answer: "Kiraladığımız tüm ekipmanların periyodik bakımları Erkan teknik personeli tarafından sahada düzenli olarak yapılır. Olası arıza durumlarında, 81 ildeki teknik servis ağımız sayesinde en geç 24 saat içinde müdahale edilerek şantiyenizin iş kaybı yaşamasının önüne geçilir."
      }
    ]
  }
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Yönetim Kurulu Başkanı",
    company: "Kristal Holding",
    content: "Erkan İnşaat ile gerçekleştirdiğimiz Kristal AVM projemiz, öngörülen bütçe ve zaman diliminde kusursuz bir şekilde tamamlandı. Mühendislik yaklaşımları ve detaylara verdikleri önem takdire şayan.",
    rating: 5,
  },
  {
    id: 2,
    name: "Zeynep Demir",
    role: "Yatırım Direktörü",
    company: "Vesta Gayrimenkul",
    content: "Konut projelerimizdeki iş ortaklığımızda Erkan İnşaat'ın sergilediği profesyonellik, dürüstlük ve teknik beceri sayesinde tüm hedeflerimize ulaştık. Kesinlikle güvenilir bir çözüm ortağı.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    role: "Genel Müdür",
    company: "Lojistik Park A.Ş.",
    content: "Gebze'deki endüstriyel lojistik merkezimizin çelik konstrüksiyon işlerini üstlenen Erkan ekibi, zorlu hava koşullarına ve kısa süreye rağmen inanılmaz bir disiplinle çalışarak projeyi zamanında teslim etti.",
    rating: 5,
  },
];

export interface Benefit {
  number: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    number: "01",
    title: "Profesyonel & Uzman Kadro",
    description: "Sektörde uzun yıllar deneyim kazanmış mimar, mühendis ve saha personellerimizle her projeyi yüksek hassasiyetle yönetiyoruz.",
  },
  {
    number: "02",
    title: "Zamanında & Eksiksiz Teslim",
    description: "Gelişmiş proje planlama araçlarımız ve disiplinli iş takibimiz sayesinde tüm taahhütlerimizi tam zamanında gerçekleştiriyoruz.",
  },
  {
    number: "03",
    title: "Üstün Kalite Standartları",
    description: "Uluslararası standartlarda malzeme seçimi ve sürekli kalite denetimleri ile yapıların dayanıklılığını ve güvenliğini garanti altına alıyoruz.",
  },
];

