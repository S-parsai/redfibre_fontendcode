import { footerColumns } from "../data.js";
import { Facebook, Instagram, Twitter } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pb-10 pt-8">
      <div aria-hidden="true" className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <a href="#" className="text-[32px] font-semibold tracking-tight text-navy" aria-label="Jadoo home">Jadoo.</a>
            <p className="mt-3 max-w-[200px] text-[11px] font-medium leading-5 text-muted">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {footerColumns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="text-[13px] font-semibold text-navy">{c.title}</h3>
              <ul className="mt-5 space-y-3 text-[12px] font-medium text-muted">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-coral">{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy shadow-md transition hover:-translate-y-1"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white shadow-md transition hover:-translate-y-1"><Instagram /></a>
              <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy shadow-md transition hover:-translate-y-1"><Twitter /></a>
            </div>
            <p className="mt-5 text-[14px] font-medium text-muted">Discover our app</p>
            <div className="mt-3 flex gap-2">
              <a href="#" className="rounded-md bg-black px-3 py-1.5 text-[9px] font-semibold leading-3 text-white transition hover:opacity-80">
                <span className="block text-[7px] font-normal opacity-80">GET IT ON</span>Google Play
              </a>
              <a href="#" className="rounded-md bg-black px-3 py-1.5 text-[9px] font-semibold leading-3 text-white transition hover:opacity-80">
                <span className="block text-[7px] font-normal opacity-80">Download on the</span>App Store
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 text-center text-[10px] font-medium text-muted">All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
}
