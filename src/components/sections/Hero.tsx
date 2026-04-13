'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import card1 from '@/assets/img/physicalCard.png';
import card2 from '@/assets/img/virtualCard.png';
import apple from '@/assets/icons/apple.svg';
import google from '@/assets/icons/google.svg';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { AncorIds } from '@/app/constants';

export const Hero = () => {
  const { t } = useTranslation();
  const onClick = () => {};
  return (
    <Section
      ancorId={AncorIds.Ecosystem}
      title={
        <>
          NOVA Card <br />
          Best Web3 Payment Card
        </>
      }
      subtitle={t('hero.subtitle')}
      className="scroll-mt-40"
    >
      <div className="flex flex-col items-center justify-center gap-10 p-10 md:w-2/3 md:flex-row md:p-20">
        <Image src={card1} alt="card1" className="card-shadow hidden rounded-3xl md:flex" />
        <Image src={card2} alt="card2" className="card-shadow rounded-3xl" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="white-text">{t('hero.pay')}</span>
        <Image src={apple} alt="apple" width={24} />
        <span className="pay-text">Pay</span>
        <p className="text-gray-600">|</p>
        <Image src={google} alt="google" />
        <span className="pay-text">Pay</span>
      </div>

      <Button onClick={onClick} shadow={true}>
        {t('header.btn')}
      </Button>
    </Section>
  );
};
