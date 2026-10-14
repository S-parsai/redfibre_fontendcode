// Small inline SVG icons (no extra dependency, tiny bundle size)
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const Plane = ({ className = "", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

export const Send = ({ className = "", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M2.5 11.2 20.8 3.3c.8-.3 1.6.5 1.3 1.3L14.2 21c-.4.8-1.5.8-1.8 0l-2.3-6.1-6.4-2.2c-.8-.4-.8-1.3.8-1.5zm8.6 3.4 8-9.4-10.7 7z" />
  </svg>
);

export const Navigation = ({ className = "", size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M3 11 21 3l-8 18-2-8-8-2z" />
  </svg>
);

export const Mail = ({ className = "", size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Heart = ({ className = "", size = 18, filled = false }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base} fill={filled ? "currentColor" : "none"}>
    <path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0 1 12 6a5.4 5.4 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9z" />
  </svg>
);

export const Chevron = ({ className = "", size = 18, dir = "down" }) => {
  const d = { down: "m6 9 6 6 6-6", up: "m6 15 6-6 6 6" }[dir];
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d={d} />
    </svg>
  );
};

export const Menu = ({ open }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" {...base} strokeWidth="2.2">
    {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

export const Users = ({ className = "", size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
    <path d="M4 20v-6M10 20V9M16 20v-9M21 20V5" />
  </svg>
);

export const Facebook = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
    <path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4 1.8-4 4v2H8v3.5h2V22h4v-10.5h2.8L17 8h-3z" />
  </svg>
);
export const Instagram = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...base} strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
export const Twitter = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" {...base} fill="currentColor" strokeWidth="1">
    <path d="M23 3a10.9 10.9 0 0 1-3.140 1.530 4.480 4.480 0 0 0-7.860 3v1A10.660 10.660 0 0 1 3 4s-4 9 5 13a11.640 11.640 0 0 1-7 2c9 5 20 0 20-11.500a4.500 4.500 0 0 0-.080-.830A7.720 7.720 0 0 0 23 3z" />
  </svg>
);

// Service icons (colored, sit on a cream tile)
export function ServiceIcon({ type }) {
  const p = { viewBox: "0 0 48 48", width: 44, height: 44, "aria-hidden": true, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "weather":
      return (
        <svg {...p}>
          <circle cx="30" cy="16" r="7" fill="#F1A501" />
          <path d="M14 36a7 7 0 0 1 1-13.900A9 9 0 0 1 32.500 24 6 6 0 0 1 33 36z" fill="#5E8BE6" stroke="#3d62b8" strokeWidth="1.500" />
        </svg>
      );
    case "flight":
      return (
        <svg {...p}>
          <path d="M44 6 6 22l10 4 4 12 5-7 9 5z" fill="#3aa0e8" stroke="#1d6fb0" strokeWidth="1.500" />
          <path d="M16 26 44 6 20 30" stroke="#1d6fb0" strokeWidth="1.500" />
        </svg>
      );
    case "events":
      return (
        <svg {...p}>
          <rect x="18" y="6" width="12" height="20" rx="6" fill="#3b3f58" />
          <path d="M12 22a12 12 0 0 0 24 0M24 34v8M18 42h12" stroke="#3b3f58" strokeWidth="3" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <circle cx="24" cy="24" r="7" stroke="#7d8bb0" strokeWidth="5" />
          <path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.500 10.500l4.200 4.200M33.300 33.300l4.200 4.200M10.500 37.500l4.200-4.200M33.300 14.700l4.200-4.200" stroke="#7d8bb0" strokeWidth="5" />
        </svg>
      );
  }
}

export function StepIcon({ type }) {
  const p = { viewBox: "0 0 24 24", width: 22, height: 22, "aria-hidden": true, fill: "none", stroke: "#fff", strokeWidth: 1.800, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "destination":
      return (
        <svg {...p}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M5 9h14M9 5v14" />
        </svg>
      );
    case "payment":
      return (
        <svg {...p}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18M7 15h3" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M4 16V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7M4 16h16M7 16v3M17 16v3M8 11h8" />
        </svg>
      );
  }
}
