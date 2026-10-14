import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { partners } from "../data.js";

export default function Partners() {
  return (
    <section aria-label="Our airline partners" className="py-10">
      <Reveal>
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 text-slate-700 lg:justify-between">
          {partners.map((p) => (
            <motion.li
              key={p.name}
              whileHover={{ scale: 1.1 }}
              className={`px-6 py-3 opacity-80 transition hover:opacity-100 ${p.className} ${
                p.featured ? "rounded-xl bg-white opacity-100 shadow-[0_16px_40px_-16px_rgba(20,24,62,0.3)]" : ""
              }`}
            >
              {p.name}
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
