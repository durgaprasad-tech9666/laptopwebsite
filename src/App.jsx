import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventCategories from "./components/EventCategories";
import About from "./components/About";
import Events from "./components/Events";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#090909]">
      <Navbar />

      <main>
        <Hero />
        <EventCategories />
        <About />
        <Events />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;