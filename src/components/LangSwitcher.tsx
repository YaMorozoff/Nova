'use client';

import { useTranslation } from 'next-i18next';

import Image from 'next/image';

import lang from '../assets/icons/lang.svg';
import { FC } from 'react';

export const LangSwitcher: FC<{ className?: string }> = ({ className }) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;
  const oppositeLang = currentLang === 'ru' ? 'en' : 'ru';

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={className}>
      <button className="flex cursor-pointer items-center justify-center p-2" onClick={changeLanguage}>
        <Image src={lang} alt="lang" />
        <span className="m-1 font-medium text-gray-500 uppercase">{oppositeLang.toUpperCase()}</span>
      </button>
    </div>
  );
};
