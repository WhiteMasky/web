import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
