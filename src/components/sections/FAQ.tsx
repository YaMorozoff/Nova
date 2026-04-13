'use client';
import { useTranslation } from 'react-i18next';
import Accordion from '../ui/Accordion';
import { AncorIds } from '@/app/constants';
import { Section } from '../ui/Section';

const items = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' }
];

export const FAQ = () => {
  const { t } = useTranslation();

  return (
    <Section ancorId={AncorIds.Faq} className="flex w-full flex-col items-center gap-4">
      <span className="text-title-main">{t('faq.title')}</span>
      <span className="text-subtitle-main p-0">{t('faq.subtitle')}</span>
      <div className="flex w-full flex-col items-center rounded-2xl border-1 border-[#FFF]/10 p-10 px-2 md:w-[80%] md:py-10">
        {items.map(item => (
          <Accordion className="w-full border-t-1 border-[#FFF]/10 md:w-[90%]" key={item.q} title={t(item.q)}>
            {t(item.a)}
          </Accordion>
        ))}
      </div>
    </Section>
  );
};
