import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [["Home", "/"], ["About", "/about"], ["Gallery", "/gallery"], ["Services", "/services"], ["Contact", "/contact"]];
const linkClass = ({ isActive }) => `relative px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-[#C2A46D] after:transition-transform after:duration-300 ${isActive ? "text-white after:scale-x-100" : "text-neutral-300 after:scale-x-0 hover:text-white hover:after:scale-x-100"}`;
const mobileClass = ({ isActive }) => `block border-t border-white/10 py-4 text-[11px] uppercase tracking-[0.18em] transition ${isActive ? "text-[#C2A46D]" : "text-neutral-300 hover:text-white"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-[#171717]">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-6 md:px-12">
        <Link to="/" onClick={() => setOpen(false)} className="justify-self-start leading-none">
          <span className="block font-display text-2xl tracking-[0.4em] text-white">NARCISSE</span>
          <span className="mt-1.5 block text-[7px] uppercase tracking-[0.3em] text-neutral-400">Creative Photography Studio</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-4 md:flex">
          {links.map(([label, to]) => <NavLink key={to} to={to} end={to === "/"} className={linkClass}>{label}</NavLink>)}
        </nav>

        {/* Tombol toggle (hanya mobile) */}
        <button type="button" onClick={() => setOpen(!open)} aria-label="Buka menu" aria-expanded={open} className="col-start-3 justify-self-end p-1 md:hidden">
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-px w-6 bg-white transition-all duration-300 ${open ? "top-[7px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[7px] h-px w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-px w-6 bg-white transition-all duration-300 ${open ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
          </span>
        </button>
      </div>

      {/* Menu mobile: membuka dan menutup dengan animasi tinggi */}
      <nav className={`grid transition-all duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden px-6">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)} className={mobileClass}>{label}</NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}