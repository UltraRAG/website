import React from 'react';
import { LanguageProvider } from '@site/src/context/LanguageContext';

export default function Root({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
