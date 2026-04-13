import React, { useState } from 'react';
import menu from '@/assets/icons/menu.svg';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import close from '@/assets/icons/close.svg';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { LangSwitcher } from './LangSwitcher';
import { Socials } from './Socials';

import ellipseTop from '@/assets/img/ellipseTop.png';
export const HeaderModal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setIsMenuOpen(prev => !prev);
  };
  const onClick = () => {};
  return (
    <>
      <div className="flex cursor-pointer p-4 lg:hidden" onClick={handleClick}>
        <Image src={menu} alt="menu" />
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex w-full items-start">
          <div className="absolute inset-0 w-full bg-black/60 backdrop-blur-sm" onClick={handleClick} />

          <div className="relative z-10 flex w-full flex-col items-center bg-[#040308] p-4 px-8 shadow-xl md:px-12 lg:px-16 xl:px-20">
            <Image src={ellipseTop} alt="ellipse" className="absolute top-0 left-0 -z-10 w-full" />
            <div className="mb-4 flex w-full items-center justify-between gap-4">
              <div className="mr-0 p-4 xl:mr-[10%]">
                <Image src={logo} alt="Logo" width={93} height={24} />
              </div>
              <div className="flex cursor-pointer p-4 lg:hidden" onClick={handleClick}>
                {' '}
                <Image src={close} alt="close" />
              </div>
            </div>
            <hr className="w-full text-white/30" />
            <Button onClick={onClick} className="my-10 w-fit py-0">
              {t('virtualCard.btn')}
            </Button>
            <div className="flex flex-col items-center gap-4">
              <Link href="/#getCard" onClick={handleClick}>
                {t('header.get')}
              </Link>
              <Link href="/#nova" onClick={handleClick}>
                {t('header.nova')}
              </Link>
              <Link href="/#roadmap" onClick={handleClick}>
                {t('header.roadmap')}
              </Link>
              <Link href="/#faq" onClick={handleClick}>
                {t('header.faq')}
              </Link>
            </div>
            <div className="my-10 flex w-full justify-between">
              <div className="flex flex-col gap-2">
                <a href="mailto:hi@novacard.com">hi@novacard.com</a>
                <Socials />
              </div>

              <LangSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
