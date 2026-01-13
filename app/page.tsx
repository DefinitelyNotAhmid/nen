import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Properties from '@/components/Properties';
import PropertySearch from '@/components/PropertySearch';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Properties />
        <PropertySearch />
        <Testimonials />
        <LogoMarquee />
        <Contact />
      </main>
      <LocationMap />
      <Footer />
    </>
  );
}
