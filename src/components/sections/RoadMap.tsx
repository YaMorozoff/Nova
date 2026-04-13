import React from 'react';
import { useTranslation } from 'react-i18next';
import Image, { StaticImageData } from 'next/image';
import circle from '../../assets/icons/circle.svg';
import ok from '../../assets/icons/okarrow.svg';
import strippedline from '../../assets/icons/strippedline.svg';
import clsx from 'clsx';
import { Section } from '../ui/Section';
import { AncorIds } from '@/app/constants';

type RoadmapItem = {
  id: number;
  title: string;
  subtitle: string;
  icon?: StaticImageData;
  highlight?: boolean;
  direction?: 'ltr' | 'rtl' | 'rtb';
  position: string;
};

export const roadmapItems: RoadmapItem[] = [
  {
    id: 1,
    title: 'roadmap.q1.title',
    subtitle: 'roadmap.q1.subtitle',
    highlight: true,
    direction: 'ltr',
    position: 'lg:col-start-1 lg:row-start-1'
  },
  {
    id: 2,
    title: 'roadmap.q2.title',
    subtitle: 'roadmap.q2.subtitle',
    direction: 'ltr',
    position: 'lg:col-start-2 lg:row-start-1'
  },
  {
    id: 3,
    title: 'roadmap.q3.title',
    subtitle: 'roadmap.q3.subtitle',
    direction: 'ltr',
    position: 'lg:col-start-3 lg:row-start-1'
  },
  {
    id: 4,
    title: 'roadmap.q4.title',
    subtitle: 'roadmap.q4.subtitle',
    direction: 'rtb',
    position: 'lg:col-start-4 lg:row-start-1'
  },
  {
    id: 5,
    title: 'roadmap.q5.title',
    subtitle: 'roadmap.q5.subtitle',
    direction: 'rtl',
    position: 'lg:col-start-4 lg:row-start-2'
  },
  {
    id: 6,
    title: 'roadmap.q6.title',
    subtitle: 'roadmap.q6.subtitle',
    direction: 'rtl',
    position: 'lg:col-start-3 lg:row-start-2'
  },
  {
    id: 7,
    title: 'roadmap.q7.title',
    subtitle: 'roadmap.q7.subtitle',
    direction: 'rtl',
    position: 'lg:col-start-2 lg:row-start-2'
  },
  {
    id: 8,
    title: 'roadmap.q8.title',
    subtitle: 'roadmap.q8.subtitle',
    direction: 'rtl',
    position: 'lg:col-start-1 lg:row-start-2'
  }
];

export const RoadMap = () => {
  const { t } = useTranslation();
  return (
    <Section
      ancorId={AncorIds.RoadMap}
      className="scroll-mt-40"
      title={t('roadmap.title')}
      subtitle={t('roadmap.subtitle')}
    >
      <div className="relative z-0 grid h-fit grid-cols-1 gap-8 lg:grid-cols-4">
        {roadmapItems.map((item, i) => {
          return (
            <div key={item.id} className={clsx('relative z-20', item.position)}>
              <div
                className={clsx(
                  'relative z-40 flex h-fit w-[240px] flex-col gap-2 rounded-3xl border border-[#FFF]/10 bg-black p-5 lg:h-[240px]',
                  item.highlight ? 'card-shadow' : 'violet-gradient'
                )}
              >
                <span className="roadmap-title">{t(item.title)}</span>

                {item.highlight ? (
                  <div className="relative hidden w-fit lg:flex">
                    <Image src={circle} alt="circle" />
                    <Image src={ok} alt="ok" className="absolute top-[25%] left-[25%]" />
                  </div>
                ) : (
                  <Image
                    src={circle}
                    alt="circle"
                    className={clsx('hidden lg:flex', item.direction === 'rtl' && 'self-end')}
                  />
                )}

                <span className="roadmap-subtitle">{t(item.subtitle)}</span>
              </div>

              {i < roadmapItems.length - 1 && (
                <Image
                  src={strippedline}
                  alt="strippedline"
                  className={clsx(
                    'absolute z-10 rotate-90 lg:z-50',

                    item.direction === 'ltr' && 'lg:top-20 lg:left-16 lg:rotate-0',
                    item.direction === 'rtl' && 'lg:top-20 lg:right-16 lg:rotate-180',
                    item.direction === 'rtb' && 'lg:bottom-5 lg:left-20 lg:rotate-90'
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
