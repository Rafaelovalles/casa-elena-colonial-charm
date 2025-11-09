import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, MapPin, Users, Bed } from 'lucide-react';

interface Room {
  number: number;
  location: string;
  capacity: number;
  bedType: string;
  airbnbUrl: string;
}

interface RoomSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RoomSelectionDialog = ({ open, onOpenChange }: RoomSelectionDialogProps) => {
  const { t } = useTranslation();

  const rooms: Room[] = [
    {
      number: 1,
      location: t('rooms.groundFloor'),
      capacity: 2,
      bedType: t('rooms.doubleBed'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1324912696463004610'
    },
    {
      number: 2,
      location: t('rooms.groundFloor'),
      capacity: 2,
      bedType: t('rooms.doubleBed'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1292210104865039863'
    },
    {
      number: 3,
      location: t('rooms.groundFloor'),
      capacity: 2,
      bedType: t('rooms.doubleBed'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1305417685904886053'
    },
    {
      number: 4,
      location: t('rooms.groundFloor'),
      capacity: 2,
      bedType: t('rooms.doubleBed'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1305285874528200752'
    },
    {
      number: 5,
      location: t('rooms.groundFloor'),
      capacity: 1,
      bedType: t('rooms.singleBed'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1305286379058169531'
    },
    {
      number: 6,
      location: t('rooms.upperFloor'),
      capacity: 4,
      bedType: t('rooms.twoDoubleBeds'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1305315281157730468'
    },
    {
      number: 7,
      location: t('rooms.upperFloor'),
      capacity: 2,
      bedType: t('rooms.doubleBed'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1305329939909720732'
    },
    {
      number: 8,
      location: t('rooms.upperFloor'),
      capacity: 2,
      bedType: t('rooms.doubleBed'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1305339297736131314'
    },
    {
      number: 9,
      location: t('rooms.upperFloor'),
      capacity: 2,
      bedType: t('rooms.doubleBed'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1305352057305304751'
    },
    {
      number: 10,
      location: t('rooms.upperFloor'),
      capacity: 6,
      bedType: t('rooms.twoKingBeds'),
      airbnbUrl: 'https://www.airbnb.com/rooms/1305395094933917643'
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-terracota">
            {t('rooms.title')}
          </DialogTitle>
          <DialogDescription>
            {t('rooms.description')}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 mt-4">
          {rooms.map((room) => (
            <div
              key={room.number}
              className="border border-border rounded-lg p-4 hover:border-terracota/50 transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t('rooms.roomNumber', { number: room.number })}
                  </h3>
                  
                  <div className="grid gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-terracota" />
                      <span>{room.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-terracota" />
                      <span>
                        {t('rooms.capacity', { count: room.capacity })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-terracota" />
                      <span>{room.bedType}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={room.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-terracota text-marfil hover:bg-terracota-dark transition-all duration-300 px-6 py-3 rounded-lg font-medium whitespace-nowrap hover-lift"
                >
                  {t('rooms.bookRoom')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoomSelectionDialog;
