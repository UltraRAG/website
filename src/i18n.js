import { useLanguage } from './context/LanguageContext';

export function useIsZh() {
  const { lang } = useLanguage();
  return lang === 'zh';
}
