
const gallery = [
  { id: 1, title: "Stillness", category: "Artistic Portrait", year: "2026", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85", height: "aspect-[3/4]" },
  { id: 2, title: "Form & Feeling", category: "Editorial", year: "2026", image: "/assets/foto-5.jpeg", height: "aspect-[4/5]" },
  { id: 3, title: "Objects of Desire", category: "Commercial", year: "2025", image: "/assets/foto-8.jpeg", height: "aspect-[4/5]" },
  { id: 4, title: "The Quiet Gaze", category: "Artistic Portrait", year: "2025", image: "/assets/foto-6.jpeg", height: "aspect-[4/5]" },
  { id: 5, title: "Golden Hour", category: "Editorial", year: "2024", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85", height: "aspect-[3/4]" },
  { id: 6, title: "Moments in Exhibition", category: "Fine Art", year: "2024", image: "/assets/foto-7.jpeg", height: "aspect-[3/4]" },
  { id: 7, title: "Modern Muse", category: "Commercial", year: "2024", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85", height: "aspect-[4/5]" },
  { id: 8, title: "Golden Silence", category: "Fine Art", year: "2023", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85", height: "aspect-[4/5]" },
  { id: 9, title: "Objects in Light", category: "Commercial", year: "2022", image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85", height: "aspect-[4/5]" },
];

export default function Gallery() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#171717] text-[#EAE6DE]">
      {/* Hero */}
      <section className="relative flex min-h-[420px] items-center justify-center px-5 pb-16 pt-32 text-center sm:min-h-[480px] lg:min-h-[540px]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full border border-[#C2A46D]/10 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]"></div>
          <div className="absolute h-48 w-48 rounded-full border border-[#C2A46D]/10 sm:h-64 sm:w-64 lg:h-[340px] lg:w-[340px]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#C2A46D] sm:text-xs">Narcisse / Portfolio</p>
          <h1 className="font-display text-4xl uppercase leading-tight tracking-wide text-[#D8C49A] sm:text-6xl lg:text-7xl">The Art of <span className="block italic normal-case">Being Seen.</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">Kisah-kisah yang dituturkan melalui cahaya, identitas, dan emosi. Kumpulan momen yang diubah menjadi karya seni visual abadi.</p>
          <a href="#selected-works" className="mt-9 inline-flex items-center gap-3 border-b border-[#C2A46D]/60 pb-2 text-[10px] uppercase tracking-[0.2em] text-[#D8C49A] transition hover:border-[#D8C49A] hover:text-white">Explore Our Works <span>↓</span></a>
        </div>
      </section>

      {/* Gallery Heading */}
      <section id="selected-works" className="mx-auto max-w-7xl px-4 pb-24 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#C2A46D]">A Visual Collection</p>
            <h2 className="font-display text-3xl text-[#D8C49A] sm:text-4xl">Selected Works</h2>
          </div>
          <p className="text-xs tracking-wide text-neutral-500">{String(gallery.length).padStart(2, "0")} ARTWORKS · 2022—2026</p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-7">
          {gallery.map((item, index) => (
            <article key={item.id} className={`group mb-8 break-inside-avoid ${index % 3 === 1 ? "sm:mt-10 lg:mt-12" : ""}`}>
              <div className={`relative ${item.height} overflow-hidden bg-[#222222]`}>
                <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/10 to-transparent opacity-60 transition duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#D8C49A]">{item.category} / {item.year}</p>
                  <h3 className="font-display text-2xl text-white sm:text-3xl">{item.title}</h3>
                  <div className="mt-3 h-px w-10 bg-[#C2A46D] transition-all duration-500 group-hover:w-16"></div>
                </div>
                <span className="absolute right-4 top-4 text-[10px] tracking-widest text-white/80 transition-opacity group-hover:opacity-0">{String(item.id).padStart(2, "0")}</span>
              </div>
              <div className="flex items-center justify-between gap-3 border-b border-white/10 py-3 transition-colors group-hover:border-[#C2A46D]/40">
                <h3 className="font-display text-base text-[#D8C49A] sm:text-lg">{item.title}</h3>
                <span className="text-right text-[9px] uppercase tracking-[0.12em] text-neutral-500">{item.category}</span>
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
