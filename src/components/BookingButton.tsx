import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';
import RoomSelectionDialog from './RoomSelectionDialog';

const BookingButton = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <RoomSelectionDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      
      {/* Desktop/Tablet - Inline CTA */}
      <div className="hidden md:block">
        <div className="section-padding bg-gradient-to-r from-terracota via-terracota-light to-terracota">
          <div className="container-casa text-center fade-in">
            <h2 className="text-marfil mb-4">{t('footer.book')}</h2>
            <p className="text-marfil/90 text-xl mb-8 font-serif">
              {t('footer.tagline')}
            </p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex items-center gap-2 bg-marfil text-terracota hover:bg-papel transition-all duration-300 px-8 py-4 rounded-lg text-lg font-medium shadow-[var(--shadow-glow)] hover-lift"
            >
              <Calendar className="w-5 h-5" />
              {t('booking.button')}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile - Fixed Bottom Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center justify-center gap-2 btn-hero w-full shadow-[var(--shadow-glow)]"
        >
          <Calendar className="w-5 h-5" />
          {t('booking.mobile')}
        </button>
      </div>
    </>
  );
};

export default BookingButton;
