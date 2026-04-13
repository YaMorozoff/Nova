'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import metamask from '../../assets/img/metamask.png';
import binance from '../../assets/img/binance.png';
import walletconnect from '../../assets/img/walletconnect.png';
import coinbase from '../../assets/img/coinbase.png';
import trust from '../../assets/img/trust.png';
import handuiGradient from '../../assets/icons/handuiGradient.svg';
import applePayCard from '../../assets/icons/applePayCard.svg';

import handen from '../../assets/img/handen.webp';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { AncorIds } from '@/app/constants';

export const VirtualCard = () => {
  const { t } = useTranslation();
  const onClick = () => {};
  return (
    <Section ancorId={AncorIds.GetCard} className="scroll-mt-40 md:flex-row">
      <span className="text-title-main md:hidden">{t('virtualCard.title')}</span>
      <div className="relative w-full max-w-[700px]">
        <Image src={handen} alt="handui" width={700} />
        <div className="card-shadow absolute bottom-[43%] left-[43%] w-[42%] transform rounded-xl">
          <Image src={applePayCard} alt="applePayCard" />
        </div>
        <Image src={handuiGradient} alt="handuiGradient" width={700} className="absolute bottom-0" />
      </div>

      <div className="flex flex-col items-center gap-4 md:items-start">
        <span className="text-title-main hidden text-left md:flex">{t('virtualCard.title')}</span>
        <span className="text-subtitle-main p-0 md:text-left">{t('virtualCard.subtitle')}</span>
        <div className="my-6 flex gap-4 md:my-10">
          <Image src={metamask} alt="metamask" className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px]" />
          <Image src={binance} alt="binance" className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px]" />
          <Image src={coinbase} alt="coinbase" className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px]" />
          <Image
            src={walletconnect}
            alt="walletconnect"
            className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px]"
          />
          <Image src={trust} alt="trust" className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px]" />
        </div>
        <span className="text-subtitle-main p-0 sm:text-left">{t('virtualCard.subtitle1')}</span>
        <Button shadow={true} onClick={onClick}>
          {t('virtualCard.btn')}
        </Button>
      </div>
    </Section>
  );
};
