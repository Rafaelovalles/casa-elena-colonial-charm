import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 py-12 px-4">
      <div className="container-casa text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracota/10 border border-terracota/30 mb-4">
            <span className="text-2xl font-serif text-terracota">CE</span>
          </div>
          <p className="text-lg font-serif text-muted-foreground">
            Casa Elena
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {currentYear} {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
