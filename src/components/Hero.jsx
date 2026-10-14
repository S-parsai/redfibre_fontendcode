import { motion } from "framer-motion";
import { Plane, Navigation } from "./Icons.jsx";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 lg:pb-24">
      {/* soft purple glow (top-left) and cream blob (right), like the design */}
      <div aria-hidden="true" className="absolute -left-40 -top-20 h-96 w-96 rounded-full bg-violet/10 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-[560px] w-[52%] rounded-bl-[260px] bg-cream md:block"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-6 md:grid-cols-2 lg:px-8"
      >
        {/* Text */}
        <div className="md:pr-6">
          <motion.p variants={item} className="text-[13px] font-bold uppercase tracking-wide text-coral">
            Best destinations around the world
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-serif text-[44px] font-bold leading-[1.15] text-navy sm:text-6xl lg:text-[68px]"
          >
            Travel,{" "}
            <span className="relative inline-block">
              enjoy
              <svg
                viewBox="0 0 200 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-coral"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M2 9C40 3 100 2 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
                />
              </svg>
            </span>{" "}
            and live a new and full life
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-md text-[13px] font-medium leading-7 text-muted">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
            Park gate sell they west hard for the.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-8">
            <motion.a
              href="#destinations"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-[10px] bg-sun px-8 py-3.5 text-[13px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(241,165,1,0.8)]"
            >
              Find out more
            </motion.a>

            <button className="group flex items-center gap-4 text-[13px] font-medium text-muted" aria-label="Play demo video">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-coral text-white shadow-[0_10px_24px_-8px_rgba(223,105,81,0.9)] transition group-hover:scale-110">
                <span className="absolute inset-0 animate-ping rounded-full bg-coral/40 [animation-duration:2.4s]" />
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="relative ml-0.5" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Play Demo
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div variants={item} className="relative mx-auto w-full max-w-[520px] md:max-w-none">
          <div aria-hidden="true" className="absolute inset-4 rounded-[40px] bg-cream md:hidden" />
          <motion.img
            src="/images/hero.svg"
            alt="Traveler sitting on a suitcase"
            width="520"
            height="560"
            className="relative mx-auto h-auto w-full max-w-[480px] md:ml-auto"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-[4%] top-[18%] text-sky-500"
            animate={{ x: [0, 14, 0], y: [0, -10, 0], rotate: [45, 50, 45] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Plane size={40} className="rotate-45" />
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="absolute right-[2%] top-[34%] text-sky-500"
            animate={{ x: [0, -12, 0], y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Navigation size={30} className="rotate-12" />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
