export default function About() {
  return (
    <main className="bg-[#171717] text-[#C2A46D]">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] flex-col justify-center overflow-hidden px-6 py-24 md:px-16 lg:px-24">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full border border-[#F5F0E8]/10 md:h-[500px] md:w-[500px]" />
        <div className="absolute -right-10 top-20 h-64 w-64 rounded-full border border-[#F5F0E8]/10 md:h-[400px] md:w-[400px]" />

        <div className="relative z-10 max-w-xl mt-10">
          <h1 className="font-serif text-xl leading-tight md:text-4xl lg:text-6xl">
            About Us
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            Narcisse adalah perusahaan kreatif yang bergerak di bidang jasa
            fotografi profesional dan produksi karya visual artistik. Kami
            berfokus pada fotografi portrait, editorial, dan visual storytelling
            untuk mengabadikan keindahan, identitas, serta ekspresi manusia
            melalui karya visual yang unik dan bermakna. Kami percaya bahwa
            setiap individu memiliki keunikan yang layak untuk dilihat,
            dihargai, dan diabadikan melalui perspektif fotografi yang artistik.
          </p>

          <a href="#our-story" className="mt-10 inline-block border-b border-[#B9A58A] pb-2 text-xs uppercase tracking-[0.2em] transition hover:text-[#B9A58A]">
            Discover Our Story ↗
          </a>
        </div>

        <p className="absolute bottom-8 right-8 text-[10px] tracking-[0.25em] text-white/40">
          EST. 2022 — CREATIVE PHOTOGRAPHY STUDIO
        </p>
      </section>

      {/* Our Story */}
      <section id="our-story" className="grid gap-12 border-t border-white/10 px-6 py-20 md:grid-cols-2 md:px-16 lg:px-24">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B9A58A]">
            Our Story
          </p>

          <h2 className="font-serif text-3xl leading-snug md:text-5xl">
            More Than<br />Just a Photograph.
          </h2>
        </div>

        <div className="space-y-5 text-sm leading-7 text-white/60">
          <p>
            Narcisse adalah studio fotografi kreatif yang berfokus pada
            portrait, editorial, dan visual storytelling. Kami percaya bahwa
            setiap individu memiliki keindahan unik yang layak untuk dilihat,
            dihargai, dan diabadikan.
          </p>

          <p>
            Berawal dari kecintaan terhadap seni visual, Narcisse hadir untuk
            mengeksplorasi hubungan antara keindahan, identitas, dan ekspresi
            manusia melalui perspektif fotografi yang artistik.
          </p>

          <p>
            Bagi kami, fotografi bukan sekadar menangkap gambar, melainkan
            menciptakan cerita yang meninggalkan kesan.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-t border-white/10 px-6 py-20 md:px-16 lg:px-24">
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B9A58A]">
            What We Believe
          </p>

          <h2 className="font-serif text-4xl md:text-6xl">
            Our Vision & Mission
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="border-t border-[#B9A58A]/50 pt-6">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#B9A58A]">
              01 — Our Vision
            </p>

            <p className="font-serif text-2xl leading-relaxed md:text-3xl">
              To create timeless visual art that celebrates beauty, identity,
              and individuality.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Menjadi studio fotografi kreatif yang menghadirkan karya visual
              artistik, autentik, dan bermakna.
            </p>
          </div>

          <div className="border-t border-[#B9A58A]/50 pt-6">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#B9A58A]">
              02 — Our Mission
            </p>

            <div className="space-y-5">
              {[
                "Menghasilkan karya fotografi dengan karakter visual yang kuat.",
                "Mengeksplorasi keindahan dan identitas manusia melalui pendekatan artistik.",
                "Menggabungkan estetika, emosi, dan storytelling dalam setiap karya.",
                "Menyediakan layanan fotografi profesional untuk berbagai kebutuhan kreatif.",
              ].map((mission, index) => (
                <div
                  key={index}
                  className="flex gap-5 border-b border-white/10 pb-4"
                >
                  <span className="text-xs text-[#B9A58A]">0{index + 1}</span>

                  <p className="text-sm leading-6 text-white/60">{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-t border-white/10 px-6 py-20 md:px-16 lg:px-24">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B9A58A]">
          The Principles Behind Our Work
        </p>

        <h2 className="mb-12 font-serif text-4xl md:text-6xl">Our Values</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Creativity",
              description:
                "Mengeksplorasi ide dan perspektif baru dalam setiap karya.",
            },
            {
              number: "02",
              title: "Authenticity",
              description: "Menghargai karakter dan keunikan setiap individu.",
            },
            {
              number: "03",
              title: "Quality",
              description:
                "Mengutamakan kualitas visual dan detail dalam setiap proses.",
            },
            {
              number: "04",
              title: "Timelessness",
              description:
                "Menciptakan karya yang tetap memiliki makna melampaui tren sesaat.",
            },
          ].map((value) => (
            <div key={value.number} className="border-t border-white/20 pt-5">
              <p className="mb-8 text-xs text-[#B9A58A]">{value.number}</p>

              <h3 className="mb-3 font-serif text-2xl">{value.title}</h3>

              <p className="text-sm leading-6 text-white/50">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-white/10 px-6 py-24 text-center md:px-16">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#B9A58A]">
          Narcisse Creative Photography Studio
        </p>

        <h2 className="font-serif text-4xl leading-tight md:text-6xl">
          Captured to Be
          <br />
          Remembered.
        </h2>

        <a
          href="/contact"
          className="mt-8 inline-block rounded-full border border-white/30 px-7 py-3 text-xs uppercase tracking-[0.15em] transition hover:border-[#B9A58A] hover:bg-[#B9A58A] hover:text-[#111110]"
        >
          Work With Us ↗
        </a>
      </section>
    </main>
  );
}
