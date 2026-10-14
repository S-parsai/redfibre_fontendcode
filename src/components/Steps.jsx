import { useState } from "react";
import { motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { steps } from "../data.js";
import { StepIcon, Heart, Users, Navigation } from "./Icons.jsx";

function TripCard() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="relative mx-auto w-full max-w-[360px] pb-10 pr-6 sm:pr-10">
      <div aria-hidden="true" className="absolute -right-6 -top-10 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />

      {/* main card */}
      <motion.div
        whileHover={{ y: -6 }}
        className="relative rounded-[24px] bg-white p-4 shadow-[0_24px_60px_-20px_rgba(20,24,62,0.3)]"
      >
        <img src="/images/greece.svg" alt="Santorini, Greece" loading="lazy" width="320" height="180" className="h-[150px] w-full rounded-[18px] object-cover" />
        <h3 className="mt-4 text-[14px] font-semibold text-navy">Trip To Greece</h3>
        <p className="mt-1 text-[12px] font-medium text-muted">14-29 June | by Robbin jk</p>
        <div className="mt-4 flex gap-3 text-muted" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
              <Navigation size={11} />
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-[12px] font-medium text-muted">
          <span className="flex items-center gap-2"><Users size={14} /> 24 people going</span>
          <button
            onClick={() => setLiked((l) => !l)}
            aria-pressed={liked}
            aria-label="Like this trip"
            className={`transition ${liked ? "text-coral" : "text-violet"}`}
          >
            <motion.span whileTap={{ scale: 1.4 }} className="block">
              <Heart filled={liked} />
            </motion.span>
          </button>
        </div>
      </motion.div>

      {/* floating progress card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 flex w-[190px] items-start gap-3 rounded-[18px] bg-white p-4 shadow-[0_20px_50px_-18px_rgba(20,24,62,0.35)]"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-coral to-sun text-[11px] font-bold text-white">R</span>
        <div className="w-full text-[11px] font-medium">
          <p className="text-muted">Ongoing</p>
          <p className="text-[13px] font-semibold text-navy">Trip to rome</p>
          <p className="mt-2 text-muted"><span className="text-violet">40%</span> completed</p>
          <div className="mt-1 h-[3px] w-full rounded bg-slate-200">
            <motion.div
              className="h-full rounded bg-violet"
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Steps() {
  return (
    <section id="booking" className="scroll-mt-10 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 lg:px-8">
        <div className="md:pl-8">
          <SectionTitle eyebrow="Easy and Fast" title={<>Book Your Next Trip<br />In 3 Easy Steps</>} align="left" eyebrowClass="text-navy capitalize !text-[13px] !font-medium" />
          <ul className="mt-9 space-y-7">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12} x={-24} y={0}>
                <li className="flex items-start gap-5">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${s.color}`}>
                    <StepIcon type={s.icon} />
                  </span>
                  <div>
                    <h3 className="text-[13px] font-semibold text-navy">{s.title}</h3>
                    <p className="mt-1 max-w-xs text-[12px] font-medium leading-5 text-muted">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal x={40} y={0}>
          <TripCard />
        </Reveal>
      </div>
    </section>
  );
}
