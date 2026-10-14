import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./Reveal.jsx";
import { testimonials } from "../data.js";
import { Chevron } from "./Icons.jsx";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const n = testimonials.length;
  const go = (next) => {
    setDir(next > i || (i === n - 1 && next === 0) ? 1 : -1);
    setI((next + n) % n);
  };
  const t = testimonials[i];
  const nextT = testimonials[(i + 1) % n];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 lg:px-8">
        <div className="md:pl-8">
          <SectionTitle eyebrow="Testimonials" title={<>What People Say<br />About Us.</>} align="left" />
          <div className="mt-12 flex gap-3" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((x, idx) => (
              <button
                key={x.name}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => go(idx)}
                className={`h-2.5 rounded-full transition-all ${idx === i ? "w-2.5 bg-violet" : "w-2.5 bg-slate-200 hover:bg-slate-300"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-start gap-4 pb-14 pt-6">
          {/* peeking next card */}
          <div aria-hidden="true" className="absolute inset-x-4 bottom-0 top-10 rounded-2xl border border-slate-100 bg-white/60 px-6 pb-3 pt-[170px] shadow-sm">
            <p className="text-[12px] font-semibold text-navy">{nextT.name}</p>
            <p className="text-[10px] text-muted">{nextT.place}</p>
          </div>

          <div className="relative w-full">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={t.name}
                custom={dir}
                initial={{ opacity: 0, y: dir * 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: dir * -30 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-2xl bg-white px-7 pb-6 pt-14 shadow-[0_24px_60px_-20px_rgba(20,24,62,0.3)]"
              >
                <span className={`absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ring-white ${t.color}`} aria-hidden="true">
                  {t.initials}
                </span>
                <blockquote className="text-[12px] font-medium leading-6 text-muted">“{t.quote}”</blockquote>
                <figcaption className="mt-5">
                  <p className="text-[13px] font-semibold text-navy">{t.name}</p>
                  <p className="text-[10px] font-medium text-muted">{t.place}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 flex-col gap-6 text-muted sm:flex md:-right-10">
            <button aria-label="Previous testimonial" onClick={() => go(i - 1)} className="transition hover:text-navy"><Chevron dir="up" /></button>
            <button aria-label="Next testimonial" onClick={() => go(i + 1)} className="transition hover:text-navy"><Chevron dir="down" /></button>
          </div>

          {/* mobile arrows */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-6 text-muted sm:hidden">
            <button aria-label="Previous testimonial" onClick={() => go(i - 1)}><Chevron dir="up" /></button>
            <button aria-label="Next testimonial" onClick={() => go(i + 1)}><Chevron dir="down" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
