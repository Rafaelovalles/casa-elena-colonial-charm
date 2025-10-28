import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';
import BookingButton from '@/components/BookingButton';
import Footer from '@/components/Footer';
import LanguageSwitch from '@/components/LanguageSwitch';
import '../i18n/config';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <LanguageSwitch />
      <Hero />
      <Gallery />
      <AboutSection />
      <LocationSection />
      <BookingButton />
      <Footer />
    </div>
  );
};

export default Index;
