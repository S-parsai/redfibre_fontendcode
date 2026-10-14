import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Destinations from "./components/Destinations.jsx";
import Steps from "./components/Steps.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Partners from "./components/Partners.jsx";
import Subscribe from "./components/Subscribe.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>
      <div className="relative">
        <Navbar />
        <main id="main">
          <Hero />
          <Services />
          <Destinations />
          <Steps />
          <Testimonials />
          <Partners />
          <Subscribe />
        </main>
        <Footer />
      </div>
    </>
  );
}
