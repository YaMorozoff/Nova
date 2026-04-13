'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import security from '../../assets/icons/security.svg';
import innovation from '../../assets/icons/innovation.svg';
import integration from '../../assets/icons/integration.svg';
import comfort from '../../assets/icons/comfort.svg';
import convertation from '../../assets/icons/convertation.svg';
import cashback from '../../assets/icons/cashback.svg';
import global from '../../assets/icons/globals.svg';
import nobank from '../../assets/icons/nobank.svg';
import { Section } from '../ui/Section';
import { AncorIds } from '@/app/constants';

const items = [
  { image: innovation, title: 'choose.innovation.title', description: 'choose.innovation.subtitle' },
  { image: comfort, title: 'choose.comfort.title', description: 'choose.comfort.subtitle' },
  { image: convertation, title: 'choose.convertation.title', description: 'choose.convertation.subtitle' },
  { image: global, title: 'choose.global.title', description: 'choose.global.subtitle' },
  { image: security, title: 'choose.security.title', description: 'choose.security.subtitle' },
  { image: integration, title: 'choose.integration.title', description: 'choose.integration.subtitle' },
  { image: cashback, title: 'choose.cashback.title', description: 'choose.cashback.subtitle' },
  { image: nobank, title: 'choose.nobank.title', description: 'choose.nobank.subtitle' }
];

export const WhyCard = () => {
  const { t } = useTranslation();

  return (
    <Section
      ancorId={AncorIds.Benefits}
      className="scroll-mt-40"
      title={t('choose.title')}
      subtitle={t('choose.subtitle')}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 text-center md:flex-row">
            <Image src={item.image} alt={item.title} />
            <div className="flex flex-col items-center md:items-start">
              <span className="pay-text text-[20px] md:text-left">{t(item.title)}</span>
              <span className="text-subtitle-main md:text-left md:text-[16px] lg:text-[20px]">
                {t(item.description)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-shadow header-text hidden w-[260px] cursor-pointer rounded-xl bg-gradient-to-b from-[#952BFF] to-[#451576] px-6 py-2 hover:from-[#451576] hover:to-[#952BFF] sm:block">
        {t('choose.btn')}
      </button>
    </Section>
  );
};
