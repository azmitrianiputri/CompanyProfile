
import { Link } from "react-router-dom";

const pill = "rounded-full border border-white/50 px-6 py-2.5 text-[11px] tracking-wide text-white transition hover:border-[#C2A46D] hover:bg-[#C2A46D]";

const images = [
  { src: "/assets/foto-7.jpeg", alt: "Man working with laptop", className: "col-span-2" },
  { src: "/assets/foto-8.jpeg", alt: "Team working together", className: "col-span-1" },
  { src: "/assets/foto-3.jpeg", alt: "Creative workspace", className: "col-span-1" },
  { src: "/assets/foto-4.jpeg", alt: "Woman working in cafe", className: "col-span-1" },
  { src: "/assets/foto-5.jpeg", alt: "Team discussion", className: "col-span-2" },
  { src: "/assets/foto-6.jpeg", alt: "Office interior", className: "col-span-1" },
];

export default function Hero() {
  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#171717] text-[#C2A46D] md:h-screen">
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 text-center md:px-12">
          <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-neutral-200">Creative Photography Studio</p>
          <h1 className="font-display text-5xl font-light uppercase leading-[1.05] md:text-7xl">Captured to Be<br />Remembered.</h1>
          <p className="mx-auto mt-8 max-w-xs font-display text-base leading-relaxed text-neutral-200">Perusahaan kreatif yang bergerak di bidang fotografi artistik, khususnya portrait photography, editorial photoshoot, dan visual storytelling.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/gallery" className={pill}>Explore Our Works →</Link>
            <Link to="/about" className={pill}>Our Philosophy</Link>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#171717] border-t border-white/10 px-6 py-10 md:px-16 lg:px-24">
        <h2 className="font-serif text-4xl md:text-6xl text-[#C2A46D]">
        Our Portfolio
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-10">
          {images.map((image, index) => (
            <div key={index} className={`${image.className} h-40 overflow-hidden rounded-lg md:h-[238px]`}>
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
