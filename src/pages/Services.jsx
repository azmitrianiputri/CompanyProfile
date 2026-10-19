
const services = [
  {
    number: "01",
    title: "Artistic Portrait",
    description: "Sesi pemotretan individu dengan pendekatan artistik yang menonjolkan karakter, ekspresi, dan keunikan setiap subjek.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    category: "PORTRAIT PHOTOGRAPHY",
  },
  {
    number: "02",
    title: "Editorial Photography",
    description: "Produksi foto untuk majalah, publikasi, fashion editorial, dan proyek visual dengan konsep yang terarah.",
    image: "/assets/foto-5.jpeg",
    category: "FASHION & EDITORIAL",
  },
  {
    number: "03",
    title: "Commercial & Branding",
    description: "Fotografi produk dan kampanye visual untuk membantu brand membangun identitas serta menyampaikan pesan kepada audiens.",
    image: "/assets/foto-8.jpeg",
    category: "BRAND PHOTOGRAPHY",
  },
  {
    number: "04",
    title: "Art Collection & Exhibition",
    description: "Kurasi dan penataan karya fotografi untuk portofolio, koleksi visual, dan pameran seni.",
    image: "/assets/foto-7.jpeg",
    category: "VISUAL CONCEPT & ART DIRECTION",
  },
  {
    number: "05",
    title: "Creative Direction",
    description: "Pengembangan ide, moodboard, konsep visual, dan arahan artistik untuk menghasilkan pemotretan yang konsisten dan berkarakter.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=85",
    category: "VISUAL CONCEPT & ART DIRECTION",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#EAE6DE]">
      {/* Header */}
      <section className="px-6 py-20 text-center md:px-16 md:py-28">
        <p className="mb-5 text-xs tracking-[0.4em] text-[#C2A46D]">WHAT WE DO</p>
        <h1 className="font-serif text-5xl leading-tight text-[#D8C49A] md:text-7xl">Our Services</h1>
        <div className="mx-auto mt-10 h-px w-20 bg-[#C2A46D]/60" />
      </section>

      {/* Services List */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-16">
        <div className="space-y-20 md:space-y-28">
          {services.map((service, index) => (
            <article key={service.number} className="grid items-center gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
              {/* Description */}
              <div className={`order-2 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <p className="mb-6 text-xs tracking-[0.3em] text-[#C2A46D]">{service.category}</p>
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-serif text-2xl text-[#C2A46D]/70">{service.number}</span>
                  <div className="h-px flex-1 bg-[#C2A46D]/30" />
                </div>
                <h2 className="font-serif text-3xl leading-tight text-[#D8C49A] md:text-4xl lg:text-5xl">{service.title}</h2>
                <p className="mt-6 max-w-lg text-sm leading-8 text-[#A5A19A] md:text-base">{service.description}</p>
                <a href="/contact" className="group mt-8 inline-flex items-center gap-3 border-b border-[#C2A46D]/50 pb-3 text-xs uppercase tracking-[0.2em] text-[#D8C49A] transition hover:border-[#D8C49A]">
                  Work With Us
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </a>
              </div>

              {/* Image */}
              <div className={`order-1 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <div className="group relative overflow-hidden bg-[#222222]">
                  <img src={service.image} alt={service.title} className="h-[320px] w-full object-cover grayscale-[25%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0 md:h-[440px] lg:h-[500px]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
                  <span className="absolute bottom-5 left-5 text-xs tracking-[0.25em] text-white/80">NARCISSE — {service.number}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-[#C2A46D]/20 px-6 py-20 text-center">
        <p className="mb-5 text-xs tracking-[0.35em] text-[#C2A46D]">YOUR VISION, OUR LENS</p>
        <h2 className="font-serif text-3xl text-[#D8C49A] md:text-5xl">Let's Create Something Timeless.</h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#A5A19A]">Punya cerita untuk diabadikan? Mari wujudkan gagasan Anda menjadi karya visual yang penuh makna.</p>
        <a href="/contact" className="mt-8 inline-block border border-[#C2A46D] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#D8C49A] transition hover:bg-[#C2A46D] hover:text-[#171717]">Get in Touch ↗</a>
      </section>
    </main>
  );
}