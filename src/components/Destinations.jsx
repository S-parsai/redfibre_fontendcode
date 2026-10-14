import { motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { destinations } from "../data.js";
import { Navigation } from "./Icons.jsx";

function Spiral() {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 120" className="absolute -right-8 top-24 hidden h-28 text-slate-700 lg:block" fill="none" stroke="currentColor" strokeWidth="1">
      {Array.from({ length: 9 }).map((_, i) => (
        <ellipse key={i} cx={20 + i * 3} cy="60" rx={28 - i * 1.5} ry={46 - i * 2} />
      ))}
    </svg>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="scroll-mt-10 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle eyebrow="Top Selling" title="Top Destinations" />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.12} className="relative">
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_18px_50px_-18px_rgba(20,24,62,0.25)]"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    width="320"
                    height="330"
                    className="h-[220px] w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="px-5 pb-5 pt-4 text-[13px] font-medium text-muted">
                  <div className="flex items-center justify-between">
                    <h3>{d.name}</h3>
                    <span>{d.price}</span>
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-[12px]">
                    <Navigation size={13} className="text-navy" /> {d.days}
                  </p>
                </div>
              </motion.article>
              {i === destinations.length - 1 && <Spiral />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
