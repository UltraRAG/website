import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './MegaMenu.module.css';

// 简单的 SVG 箭头图标
const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '4px', opacity: 0.5 }}>
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function MegaMenu({ label, items, position, to: triggerTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  // 处理延迟关闭，提供更好的用户体验
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      setIsOpen(false);
    }, 150); // 150ms 延迟
  };

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsHovered(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      className={clsx('navbar__item', styles.megaMenuContainer)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {triggerTo ? (
        <Link
          to={triggerTo}
          className={clsx('navbar__link', styles.megaMenuTrigger, {
            [styles.active]: isOpen
          })}
        >
          {label}
        </Link>
      ) : (
        <div 
          className={clsx('navbar__link', styles.megaMenuTrigger, {
            [styles.active]: isOpen
          })}
          role="button"
          tabIndex={0}
        >
          {label}
        </div>
      )}

      <div className={clsx(styles.megaMenuDropdown, { [styles.show]: isOpen })}>
        <div className={styles.dropdownContent}>
          {items.map((column, idx) => (
            <div key={idx} className={styles.menuColumn}>
              {column.title && <div className={styles.columnTitle}>{column.title}</div>}
              <ul className={styles.menuList}>
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx} className={styles.menuItem}>
                    <Link 
                      to={item.to || item.href} 
                      className={styles.menuLink}
                      target={item.target}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
