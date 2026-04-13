'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import unionpay from '../../assets/icons/unionpay.svg';
import elo from '../../assets/icons/elo.svg';
import paypal from '../../assets/icons/paypal.svg';
import visa from '../../assets/icons/visa.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import { Section } from '../ui/Section';
import { AncorIds } from '@/app/constants';

export const Partners = () => {
  const { t } = useTranslation();

  return (
    <Section ancorId={AncorIds.Partners} className="my-10 flex scroll-mt-40 flex-col items-center gap-4">
      <span className="text-title-main">{t('partners.title')}</span>
      <div className="flex items-center gap-2 sm:gap-6 md:gap-10 lg:gap-20">
        <div className="flex h-fit w-fit items-center justify-center rounded-2xl bg-white p-2 sm:min-w-[152px] sm:p-4">
          <Image src={visa} alt="visa" className="w-[60px] sm:w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px]" />
        </div>

        <Image
          src={mastercard}
          alt="mastercard"
          className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] xl:w-[130px]"
        />
        <Image src={unionpay} alt="unionpay" className="w-[70px] sm:w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px]" />
        <Image src={elo} alt="elo" className="w-[60px] sm:w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px]" />
        <Image src={paypal} alt="paypal" className="w-[30px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px]" />
      </div>
    </Section>
  );
};
