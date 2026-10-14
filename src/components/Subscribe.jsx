import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { Mail, Send } from "./Icons.jsx";

export default function Subscribe() {
  const [done, setDone] = useState(false);

  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-4xl rounded-[28px] bg-lilac px-6 py-16 text-center sm:px-12">
          {/* decorative rings */}
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-hidden rounded-[28px] text-violet/10" fill="none" stroke="currentColor">
            <circle cx="12%" cy="90%" r="140" />
            <circle cx="12%" cy="90%" r="100" />
            <circle cx="88%" cy="10%" r="110" />
          </svg>

          <motion.span
            aria-hidden="true"
            className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet text-white shadow-lg sm:-right-5 sm:-top-5"
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Send size={20} />
          </motion.span>

          <h2 className="relative mx-auto max-w-lg text-xl font-semibold leading-9 text-muted sm:text-2xl">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="relative mx-auto mt-10 flex max-w-md flex-col items-stretch gap-4 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">Your email</label>
            <div className="flex flex-1 items-center gap-3 rounded-md bg-white px-4 py-3 text-muted shadow-sm focus-within:ring-2 focus-within:ring-violet">
              <Mail size={16} />
              <input
                id="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent text-[12px] outline-none placeholder:text-slate-400"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="rounded-md bg-salmon px-7 py-3 text-[12px] font-semibold text-white shadow-[0_14px_28px_-12px_rgba(249,135,111,0.9)]"
            >
              {done ? "Subscribed ✓" : "Subscribe"}
            </motion.button>
          </form>
          {done && <p role="status" className="relative mt-4 text-xs text-muted">Thanks for subscribing!</p>}

          <div aria-hidden="true" className="absolute -bottom-6 -right-4 hidden grid-cols-5 gap-x-4 gap-y-3 text-[10px] text-slate-300 sm:grid">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className={i === 6 ? "text-coral" : i === 17 ? "text-violet" : ""}>+</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
