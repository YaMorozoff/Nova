'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import handui from '../../assets/img/handui.webp';
import handuiGradient from '../../assets/icons/handuiGradient.svg';
import limits from '../../assets/icons/limits.svg';
import card from '../../assets/icons/card.svg';
import transaction from '../../assets/icons/transaction.svg';
import { Section } from '../ui/Section';
import { AncorIds } from '@/app/constants';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <Section ancorId={AncorIds.App} className="relative my-40 scroll-mt-94 sm:my-70">
      <Image src={handui} alt="hand" width={500} unoptimized />
      <Image src={handuiGradient} alt="hand" className="absolute bottom-0" />
      <div className="absolute -top-[48%] left-[0%] hidden w-max items-center space-y-2 text-center sm:flex 2xl:-top-[25%] 2xl:left-[0%]">
        <Image src={limits} alt={'limits'} />
        <div className="flex flex-col items-start text-left">
          <span className="pay-text">{t('limits.t1.title')}</span>
          <span className="text-subtitle-main text-left">{t('limits.t1.subtitle')}</span>
        </div>
      </div>
      <div className="absolute -top-[22%] right-0 hidden w-max items-center space-y-2 text-center sm:flex 2xl:top-0 2xl:left-[60%]">
        <Image src={card} alt={'limits'} />
        <div className="flex flex-col items-start text-left">
          <span className="pay-text">{t('limits.t2.title')}</span>
          <span className="text-subtitle-main text-left">{t('limits.t2.subtitle')}</span>
        </div>
      </div>
      <div className="absolute -bottom-[20%] left-[15%] hidden w-max items-center space-y-2 text-center sm:flex lg:-bottom-[10%] lg:left-[25%]">
        <Image src={transaction} alt={'transaction'} />
        <div className="flex flex-col items-start text-left">
          <span className="pay-text">{t('limits.t3.title')}</span>
          <span className="text-subtitle-main text-left">{t('limits.t3.subtitle')}</span>
        </div>
      </div>

      <div className="card-shadow absolute -bottom-[3%] left-0 flex w-[240px] items-center justify-between rounded-2xl border-1 border-[#FFF]/10 bg-black px-4 pb-2 sm:bottom-[3%] lg:bottom-[55%] lg:left-[75%] xl:w-[330px]">
        <div className="flex flex-col">
          <span className="roadmap-title text-[15px]">Uber</span>
          <span className="roadmap-subtitle">Etherium *4vfg</span>
        </div>
        <span className="text-[#F22F5F]">
          - $ 30.<span className="text-[#F22F5FA3]/64">00</span>
        </span>
      </div>
      <div className="card-shadow absolute right-0 -bottom-[20%] flex h-fit w-[240px] items-center justify-between rounded-2xl border-1 border-[#FFF]/10 bg-black px-4 pb-2 sm:right-0 sm:-bottom-[27%] lg:top-[30%] lg:left-[0%] xl:w-[330px]">
        <div className="flex flex-col">
          <span className="roadmap-title text-[15px]">Apple inc.</span>
          <span className="roadmap-subtitle">Etherium *4vfg</span>
        </div>
        <span className="text-[#F22F5F]">
          - $ 124.<span className="text-[#F22F5FA3]/64">33</span>
        </span>
      </div>
      <div className="card-shadow absolute -top-[20%] flex w-[280px] items-center justify-between rounded-2xl border-1 border-[#FFF]/10 bg-black px-4 pb-2 sm:-top-[27%] sm:right-0 lg:top-[60%] lg:left-0 xl:w-[330px]">
        <div className="flex flex-col">
          <span className="roadmap-title text-[15px]">From Ethereum chain</span>
          <span className="roadmap-subtitle">Exchange rate 4166.01</span>
        </div>
        <span className="text-[#0FB46E]">
          + $ 1099.<span className="text-[#0FB46E80]/50">99</span>
        </span>
      </div>
    </Section>
  );
};
