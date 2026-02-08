import React from 'react';
import { useLanguage } from '@site/src/context/LanguageContext';

export function En({ children }) {
  const { lang } = useLanguage();
  if (lang !== 'en') return null;
  return <>{children}</>;
}

export function Zh({ children }) {
  const { lang } = useLanguage();
  if (lang !== 'zh') return null;
  return <>{children}</>;
}
