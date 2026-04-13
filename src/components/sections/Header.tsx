'use client';
import Image from 'next/image';
import logo from '../../assets/icons/logo.svg';

import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { LangSwitcher } from '../LangSwitcher';
import { HeaderModal } from '../HeaderModal';
import clsx from 'clsx';
import { useScrollTrigger } from '@/hooks/UseScrollTrigger';
import { AncorIds } from '@/app/constants';

export const Header = () => {
  const { t } = useTranslation();

  const onClick = () => {};

  const isFixed = useScrollTrigger(200);

  return (
    <header
      className={clsx(
        'w-full overflow-hidden transition-all duration-300 ease-out',
        isFixed && 'fixed top-0 left-0 z-50 bg-[#040308] p-10 py-0 shadow-lg'
      )}
    >
      <div className="my-4 flex items-center justify-between gap-4">
        <div className="mr-0 min-w-[125px] cursor-pointer p-4 xl:mr-[10%]">
          <Image src={logo} alt="Logo" width={93} height={24} />
        </div>

        <div className="header-text hidden items-center justify-between gap-8 rounded-xl border border-white/30 px-8 py-2 lg:flex">
          <Link href={`#${AncorIds.GetCard}`}>{t('header.get')}</Link>
          <Link href={`#${AncorIds.Benefits}`}>{t('header.nova')}</Link>
          <Link href={`#${AncorIds.RoadMap}`}>{t('header.roadmap')}</Link>
          <Link href={`#${AncorIds.Faq}`}>{t('header.faq')}</Link>
        </div>
        <div className="relative hidden lg:flex">
          <LangSwitcher className="mr-2 ml-4 xl:mr-2" />
          <Button className="lg:!px-4 xl:!px-8" onClick={onClick}>
            {t('header.btn')}
          </Button>
        </div>
        <HeaderModal />
      </div>
      <hr className={clsx('text-white/30')} />
    </header>
  );
};
