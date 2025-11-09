import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import patio from '@/assets/patio.jpg';
import room1 from '@/assets/room-1.jpg';
import room2 from '@/assets/room-2.jpg';
import room3 from '@/assets/room-3.jpg';
import room4 from '@/assets/room-4.jpg';
import room5 from '@/assets/room-5.jpg';
import reception from '@/assets/reception.jpg';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    { src: patio, alt: 'Patio central de Casa Elena / Central courtyard of Casa Elena' },
    { src: room1, alt: 'Habitación con cama y TV / Bedroom with bed and TV' },
    { src: room2, alt: 'Habitación colonial con vigas de madera / Colonial bedroom with wooden beams' },
    { src: room3, alt: 'Habitación espaciosa con techo de teja / Spacious room with tile ceiling' },
    { src: room4, alt: 'Habitación amplia con pisos de mosaico / Large room with mosaic floors' },
    { src: room5, alt: 'Habitación con pared roja / Bedroom with red accent wall' },
    { src: reception, alt: 'Recepción con pared de ladrillo / Reception with brick wall' },
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
