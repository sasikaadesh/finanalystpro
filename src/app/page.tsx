import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import About from '@/components/Introduction';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
