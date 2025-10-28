import { useTranslation } from 'react-i18next';
import { Heart, Home, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-casa max-w-5xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="mb-6">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-terracota to-transparent mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center fade-in hover-lift" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracota/10 mb-4">
              <Home className="w-8 h-8 text-terracota" />
            </div>
            <h3 className="text-xl mb-2 font-serif">Tradicional</h3>
          </div>

          <div className="text-center fade-in hover-lift" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracota/10 mb-4">
              <Heart className="w-8 h-8 text-terracota" />
            </div>
            <h3 className="text-xl mb-2 font-serif">Acogedor</h3>
          </div>

          <div className="text-center fade-in hover-lift" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracota/10 mb-4">
              <Sparkles className="w-8 h-8 text-terracota" />
            </div>
            <h3 className="text-xl mb-2 font-serif">Auténtico</h3>
          </div>
        </div>

        <div className="prose prose-lg max-w-3xl mx-auto text-center fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            {t('about.content')}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-serif italic">
            {t('about.mission')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
