import { useTranslation } from 'react-i18next';
import { MapPin, ExternalLink } from 'lucide-react';

const LocationSection = () => {
  const { t } = useTranslation();

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2858676507826!2d-98.43555782529843!3d19.1144427826901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0c9f9f9f9f9%3A0x9f9f9f9f9f9f9f9f!2sCasa%20Elena!5e0!3m2!1ses!2smx!4v1234567890";

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-casa max-w-6xl">
        <div className="text-center mb-12 fade-in">
          <h2 className="mb-6">{t('location.title')}</h2>
          <div className="flex items-center justify-center gap-2 text-xl text-muted-foreground mb-4">
            <MapPin className="w-6 h-6 text-terracota" />
            <p>{t('location.address')}</p>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('location.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 fade-in">
            <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-warm)] aspect-video">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Casa Elena Location"
              />
            </div>
          </div>

          <div className="md:col-span-2 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-background rounded-xl p-8 shadow-[var(--shadow-soft)] hover-lift">
              <h3 className="text-2xl mb-4 font-serif">Pueblo Mágico</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Atlixco es conocido por su clima primaveral, mercados de flores y arquitectura colonial. Casa Elena te pone en el centro de todo.
              </p>
              <a
                href="https://maps.app.goo.gl/TYFz1vz8baXieo2H9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-terracota hover:text-terracota-dark font-medium transition-colors"
              >
                {t('location.directions')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
