import { motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { services } from "../data.js";
import { ServiceIcon } from "./Icons.jsx";

// Decorative "+" grid shown at the top-right of the section
function PlusGrid() {
  const colored = { 1: "text-coral", 13: "text-violet" };
  return (
    <div aria-hidden="true" className="absolute right-6 top-0 hidden grid-cols-5 gap-x-4 gap-y-3 text-[10px] text-slate-300 lg:grid">
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i} className={colored[i] || ""}>+</span>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-10 py-16 lg:py-24">
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <PlusGrid />
        <SectionTitle eyebrow="Category" title="We Offer Best Services" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative h-full rounded-[28px] px-6 py-9 text-center transition-shadow hover:shadow-[0_24px_60px_-20px_rgba(20,24,62,0.25)] ${
                  s.highlight ? "bg-white shadow-[0_24px_60px_-20px_rgba(20,24,62,0.2)]" : ""
                }`}
              >
                {s.highlight && (
                  <span aria-hidden="true" className="absolute -bottom-5 -left-6 -z-10 hidden h-14 w-16 rounded-tr-[28px] bg-coral lg:block" />
                )}
                <div className="relative mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center">
                  <span className={`absolute bottom-0 right-0 h-10 w-10 rounded-xl ${s.tint}`} aria-hidden="true" />
                  <span className="relative"><ServiceIcon type={s.icon} /></span>
                </div>
                <h3 className="text-[15px] font-semibold text-navy">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-[200px] text-[12px] font-medium leading-6 text-muted">{s.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
