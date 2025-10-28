import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 btn-secondary group"
      aria-label="Switch language"
    >
      <Globe className="w-5 h-5 transition-transform group-hover:rotate-12" />
      <span className="font-medium uppercase text-sm">
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageSwitch;
