'use client';
import { useTranslation } from 'react-i18next';

import logo from '../../assets/icons/logo.svg';
import x from '../../assets/icons/x.svg';
import inst from '../../assets/icons/inst.svg';

import Image from 'next/image';
import { Socials } from '../Socials';
import { LangSwitcher } from '../LangSwitcher';
import { AncorIds } from '@/app/constants';
import Link from 'next/link';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-shadow mt-[100px] flex w-full items-center justify-center text-[16px] text-[#848895]">
      <div className="flex w-[65%] items-start justify-between gap-20 py-20">
        <div className="hidden flex-col gap-3 md:flex">
          <Image src={logo} alt="Logo" width={93} height={24} className="mr-0 xl:mr-[10%]" />
          <span className="text-white">{t('footer.title')}</span>
          <Socials />
          <span>{t('footer.subtitle')}</span>
        </div>
        <div className="flex items-start justify-between gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-white">{t('footer.nova.title')}</span>
            <Link href={`#${AncorIds.Benefits}`}>{t('footer.nova.t1')}</Link>
            <Link href={`#${AncorIds.Partners}`}>{t('footer.nova.t2')}</Link>
            <Link href={`#${AncorIds.RoadMap}`}>{t('footer.nova.t3')}</Link>
            <Link href={`#${AncorIds.App}`}>{t('footer.nova.t4')}</Link>
            <Link href={`#${AncorIds.Faq}`}>{t('footer.nova.t5')}</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">{t('footer.get.title')}</span>
            <Link href={''}>{t('footer.get.t1')}</Link>
            <Link href={`#${AncorIds.Ecosystem}`}>{t('footer.get.t2')}</Link>
            <Link href={`#${AncorIds.GetCard}`}>{t('footer.get.t3')}</Link>
          </div>
          <div className="hidden flex-col gap-2 md:flex">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};
