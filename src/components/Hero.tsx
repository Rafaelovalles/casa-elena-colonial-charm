import { useTranslation } from 'react-i18next';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 container-casa fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Logo Placeholder - circular floral style */}
          <div className="mb-8 inline-flex items-center justify-center w-32 h-32 rounded-full bg-terracota/10 border-2 border-terracota/30 backdrop-blur-sm">
            <span className="text-4xl font-serif text-terracota">CE</span>
          </div>

          <h1 className="mb-6 text-foreground fade-in" style={{ animationDelay: '0.1s' }}>
            {t('hero.welcome')}
          </h1>
          
          <p className="text-2xl md:text-3xl font-serif text-muted-foreground mb-4 fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 fade-in" style={{ animationDelay: '0.3s' }}>
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://www.airbnb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero hover-lift"
            >
              {t('hero.cta')}
            </a>
            
            <button 
              onClick={scrollToGallery}
              className="btn-secondary hover-lift"
            >
              {t('gallery.title')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-terracota/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-terracota rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
