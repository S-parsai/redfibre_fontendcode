import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data.js";
import { Chevron, Menu } from "./Icons.jsx";

export function Logo({ className = "" }) {
  return (
    <a href="#" className={`font-sans text-[28px] font-bold tracking-tight text-navy ${className}`} aria-label="Jadoo home">
      Jadoo
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-50"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 lg:px-8" aria-label="Main">
        <Logo />

        {/* Desktop */}
        <ul className="hidden items-center gap-9 text-[13px] font-medium text-navy lg:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition hover:text-coral">
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-4">
            <a href="#" className="transition hover:text-coral">Login</a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-[4px] border border-navy px-5 py-1.5 transition hover:bg-navy hover:text-white"
            >
              Sign up
            </a>
          </li>
          <li>
            <button className="flex items-center gap-1 transition hover:text-coral" aria-label="Change language">
              EN <Chevron size={14} />
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Menu open={open} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute inset-x-0 top-full overflow-hidden bg-white px-6 shadow-xl lg:hidden"
          >
            {[...navLinks.map((l) => l), { label: "Login", href: "#" }, { label: "Sign up", href: "#" }].map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3 text-sm font-medium">EN</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
