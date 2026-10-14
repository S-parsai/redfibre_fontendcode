import { motion } from "framer-motion";

// Reusable scroll-reveal wrapper: fades + slides in when scrolled into view.
export default function Reveal({ children, delay = 0, y = 32, x = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title, className = "", align = "center", eyebrowClass = "text-muted" }) {
  return (
    <Reveal className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <p className={`text-[13px] font-semibold uppercase tracking-wide ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[40px]">{title}</h2>
    </Reveal>
  );
}
