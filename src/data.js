// All content lives here. To use the real Figma images, export them from Figma
// into /public/images and update the paths below (e.g. "/images/rome.jpg").

export const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Hotels", href: "#services" },
  { label: "Flights", href: "#services" },
  { label: "Bookings", href: "#booking" },
];

export const services = [
  {
    icon: "weather",
    title: "Calculated Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
    tint: "bg-cream",
  },
  {
    icon: "flight",
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
    tint: "bg-cream",
    highlight: true,
  },
  {
    icon: "events",
    title: "Local Events",
    text: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    tint: "bg-cream",
  },
  {
    icon: "custom",
    title: "Customization",
    text: "We deliver outsourced aviation services for military customers",
    tint: "bg-cream",
  },
];

export const destinations = [
  { name: "Rome, Italty", price: "$5,42k", days: "10 Days Trip", image: "/images/rome.svg" },
  { name: "London, UK", price: "$4.2k", days: "12 Days Trip", image: "/images/london.svg" },
  { name: "Full Europe", price: "$15k", days: "28 Days Trip", image: "/images/europe.svg" },
];

export const steps = [
  {
    title: "Choose Destination",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-sun",
    icon: "destination",
  },
  {
    title: "Make Payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-coral",
    icon: "payment",
  },
  {
    title: "Reach Airport on Selected Date",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-deep",
    icon: "airport",
  },
];

export const testimonials = [
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike taylor",
    place: "Lahore, Pakistan",
    initials: "MT",
    color: "bg-sky-500",
  },
  {
    quote:
      "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
    name: "Chris Thomas",
    place: "CEO of Red Button",
    initials: "CT",
    color: "bg-coral",
  },
  {
    quote:
      "Engrossed listening. Park gate sell they west hard for the. We deliver outsourced aviation services for military customers.",
    name: "Sara Khan",
    place: "Travel Blogger",
    initials: "SK",
    color: "bg-deep",
  },
];

// Plain text wordmarks (replace with the exported logos from Figma)
export const partners = [
  { name: "Axon", className: "font-serif italic tracking-widest text-xl" },
  { name: "Jetstar", className: "font-sans font-bold text-xl" },
  { name: "Expedia", className: "font-sans font-semibold text-2xl text-[#1b3a7a]", featured: true },
  { name: "QANTAS", className: "font-sans font-bold tracking-wider text-lg" },
  { name: "Alitalia", className: "font-sans font-bold italic text-xl" },
];

export const footerColumns = [
  { title: "Company", links: ["About", "Careers", "Mobile"] },
  { title: "Contact", links: ["Help/FAQ", "Press", "Affilates"] },
  { title: "More", links: ["Airlinefees", "Airline", "Low fare tips"] },
];
