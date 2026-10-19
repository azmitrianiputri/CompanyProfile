
import { useState } from "react";

const label = "mb-2 block text-[11px] uppercase tracking-[0.18em] text-neutral-400";
const field = "block w-full rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-neutral-600 transition focus:border-[#C2A46D] focus:outline-none focus:ring-1 focus:ring-[#C2A46D]";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setError("Semua kolom wajib diisi.");
      setSent(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Masukkan alamat email yang valid.");
      setSent(false);
      return;
    }

    setError("");
    setSent(true);
    form.reset();
  };

  return (
    <section className="min-h-screen bg-[#171717] px-4 pb-20 pt-28 text-[#EAE6DE] sm:px-8 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#C2A46D]">Narcisse Photography Studio</p>
          <h1 className="font-display text-4xl uppercase tracking-wide text-[#D8C49A] sm:text-5xl md:text-6xl">Get in Touch</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">Punya cerita untuk diabadikan? Mari wujudkan gagasan Anda menjadi karya visual yang penuh makna.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#C2A46D]">Let's Connect</p>
              <h2 className="mb-5 font-display text-2xl leading-snug text-white sm:text-3xl">Every great story begins with a conversation.</h2>
              <p className="max-w-md text-sm leading-7 text-neutral-400">Ceritakan ide, kebutuhan, atau konsep yang ingin Anda wujudkan. Kami siap membantu menciptakan karya fotografi yang sesuai dengan cerita Anda.</p>
            </div>

            <div className="mt-10 space-y-8">
              <div className="border-t border-white/10 pt-5">
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#C2A46D]">Studio Address</p>
                <p className="text-sm leading-7 text-neutral-300">Narcisse Creative Studio<br />Jl. Braga No. 13<br />Bandung, Jawa Barat, Indonesia</p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#C2A46D]">Social Media</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="transition hover:text-[#D8C49A]">Instagram ↗</a>
                  <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="transition hover:text-[#D8C49A]">Pinterest ↗</a>
                  <a href="https://www.behance.net/" target="_blank" rel="noreferrer" className="transition hover:text-[#D8C49A]">Behance ↗</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 bg-[#202020] p-6 sm:p-9">
            <div className="mb-8">
              <h2 className="font-display text-2xl text-[#D8C49A]">Send Us a Message</h2>
              <p className="mt-2 text-xs leading-6 text-neutral-500">Isi formulir di bawah ini dan ceritakan kebutuhan Anda.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className={label}>Nama Lengkap</label>
                <input type="text" id="name" name="name" className={field} placeholder="Masukkan nama Anda" autoComplete="name" required />
              </div>

              <div>
                <label htmlFor="email" className={label}>Email Address</label>
                <input type="email" id="email" name="email" className={field} placeholder="nama@email.com" autoComplete="email" required />
              </div>

              <div>
                <label htmlFor="message" className={label}>Pesan</label>
                <textarea id="message" name="message" rows={5} className={`${field} resize-y`} placeholder="Ceritakan ide atau kebutuhan Anda..." required />
              </div>

              {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
              {sent && <p role="status" className="text-sm text-[#D8C49A]">Pesan berhasil divalidasi! Terima kasih telah menghubungi Narcisse.</p>}

              <button type="submit" className="w-full rounded-sm border border-[#C2A46D] px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-[#D8C49A] transition duration-300 hover:bg-[#C2A46D] hover:text-[#171717]">Kirim Pesan <span className="ml-2">↗</span></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
