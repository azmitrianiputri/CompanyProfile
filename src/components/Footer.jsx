import { Link } from "react-router-dom";

const icon = "h-[18px] w-[18px] fill-none stroke-current";

const socials = [
  { label: "Instagram", url: "#", svg: <svg viewBox="0 0 24 24" className={icon} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></svg> },
  { label: "X", url: "#", svg: <svg viewBox="0 0 24 24" className={icon} strokeWidth="1.5"><path d="M4 4l16 16M20 4L4 20" /></svg> },
  { label: "YouTube", url: "#", svg: <svg viewBox="0 0 24 24" className={icon} strokeWidth="1.5"><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" /></svg> },
  { label: "Pinterest", url: "#", svg: <svg viewBox="0 0 24 24" className={icon} strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M11 17l1.5-7.5a2.2 2.2 0 11.8 3.6" /></svg> },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r bg-[#171717] text-rose-100">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-6 py-10 text-center md:grid-cols-[1fr_auto_1fr] md:px-8 md:text-left">
        {/* Kiri: logo */}
        <Link to="/" className="flex items-center justify-center gap-4 md:justify-self-start">
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[0.5em] text-white">NARCISSE</span>
            <span className="mt-2 block text-[7px] uppercase tracking-[0.3em] text-rose-200/70">Creative Photography Studio</span>
          </span>
        </Link>

        {/* Tengah: media sosial */}
        <div className="flex items-center justify-center gap-5">
          <span className="font-display text-sm text-rose-100/80">Follow Us</span>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className="text-rose-100/70 transition hover:text-white">{s.svg}</a>
          ))}
        </div>

        {/* Kanan: tagline */}
        <p className="flex items-center justify-center gap-4 font-display text-xs text-rose-100/70 md:justify-self-end">
          <i className="hidden h-px w-16 bg-rose-200/40 md:block" />Captured To Be Remembered.
        </p>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-[11px] tracking-wide text-rose-100/50">
        © {new Date().getFullYear()} Narcisse Creative Photography Studio
      </div>
    </footer>
  );
}