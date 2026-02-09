import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useLanguage } from '@site/src/context/LanguageContext';

export default function HomeLink({ to, label, labelZh, position, ...props }) {
  const { lang } = useLanguage();
  const isZh = lang === 'zh';
  const displayLabel = isZh ? (labelZh || label) : label;

  return (
    <Link
      to={to || '/'}
      className={clsx('navbar__item', 'navbar__link')}
      {...props}
    >
      {displayLabel}
    </Link>
  );
}
