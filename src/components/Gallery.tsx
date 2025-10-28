import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import room1 from '@/assets/room-1.jpg';
import courtyard from '@/assets/courtyard.jpg';
import dining from '@/assets/dining.jpg';
import livingRoom from '@/assets/living-room.jpg';
import bathroom from '@/assets/bathroom.jpg';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    { src: room1, alt: 'Traditional bedroom' },
    { src: courtyard, alt: 'Courtyard with fountain' },
    { src: dining, alt: 'Dining room' },
    { src: livingRoom, alt: 'Living room' },
    { src: bathroom, alt: 'Bathroom with talavera' },
  ];

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-casa">
        <div className="text-center mb-12 fade-in">
          <h2 className="mb-4">{t('gallery.title')}</h2>
          <p className="text-xl text-muted-foreground font-serif">
            {t('gallery.subtitle')}
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-[var(--shadow-warm)] hover-lift">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-terracota text-marfil hover:bg-terracota-dark" />
          <CarouselNext className="hidden md:flex -right-12 bg-terracota text-marfil hover:bg-terracota-dark" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
