import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const BookingButton = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Desktop/Tablet - Inline CTA */}
      <div className="hidden md:block">
        <div className="section-padding bg-gradient-to-r from-terracota via-terracota-light to-terracota">
          <div className="container-casa text-center fade-in">
            <h2 className="text-marfil mb-4">{t('footer.book')}</h2>
            <p className="text-marfil/90 text-xl mb-8 font-serif">
              {t('footer.tagline')}
            </p>
            <a
              href="https://www.airbnb.com/rooms/1305352057305304751?search_mode=regular_search&adults=1&category_tag=Tag%3A8678&check_in=2025-11-02&check_out=2025-11-07&children=0&infants=0&pets=0&photo_id=2043345861&source_impression_id=p3_1761694406_P3rIRd0Bs1mnS20U&previous_page_section_name=1000&federated_search_id=90fdc16a-859b-46ac-b262-d840fefbcce4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-marfil text-terracota hover:bg-papel transition-all duration-300 px-8 py-4 rounded-lg text-lg font-medium shadow-[var(--shadow-glow)] hover-lift"
            >
              <Calendar className="w-5 h-5" />
              {t('booking.button')}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile - Fixed Bottom Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <a
          href="https://www.airbnb.com/rooms/1305352057305304751?search_mode=regular_search&adults=1&category_tag=Tag%3A8678&check_in=2025-11-02&check_out=2025-11-07&children=0&infants=0&pets=0&photo_id=2043345861&source_impression_id=p3_1761694406_P3rIRd0Bs1mnS20U&previous_page_section_name=1000&federated_search_id=90fdc16a-859b-46ac-b262-d840fefbcce4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 btn-hero w-full shadow-[var(--shadow-glow)]"
        >
          <Calendar className="w-5 h-5" />
          {t('booking.mobile')}
        </a>
      </div>
    </>
  );
};

export default BookingButton;
