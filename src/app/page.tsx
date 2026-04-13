'use client';
import DefaultLayout from '../layouts/DefaultLayout';
import { Hero } from '../components/sections/Hero';

import '../lib/i18n';
import { Header } from '@/components/sections/Header';
import Image from 'next/image';
import { VirtualCard } from '@/components/sections/VitrualCard';
import { WhyCard } from '@/components/sections/WhyCard';
import { Partners } from '@/components/sections/Partners';
import { RoadMap } from '@/components/sections/RoadMap';
import { Features } from '@/components/sections/Features';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

import ellipseTop from '@/assets/img/ellipseTop.png';
import ellipseMiddle from '@/assets/img/ellipseMiddle.png';
import ellipseBottom from '@/assets/img/elipseBottom.png';

import lineTop from '@/assets/img/lineTop.png';
import lineMiddle from '@/assets/img/lineMiddle.png';
import lineBottom from '@/assets/img/lineBottom.png';

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex w-full max-w-[1920px] flex-col items-center px-8 md:px-12 lg:px-16 xl:px-20">
        <Header />
        <Hero />
        <VirtualCard />
        <WhyCard />
        <Partners />
        <RoadMap />
        <Features />
        <FAQ />
      </div>
      <Footer />
      <Image src={ellipseTop} alt="ellipse" className="absolute top-0 left-0 -z-10 w-full" />
      <Image src={ellipseMiddle} alt="ellipse" className="absolute top-[35%] left-0 -z-10" />
      <Image src={ellipseBottom} alt="ellipse" className="absolute top-[60%] right-0 -z-10" />
      <Image src={lineTop} alt="ellipse" className="absolute top-[20%] right-0 -z-10" />
      <Image src={lineMiddle} alt="ellipse" className="absolute top-[25%] right-0 -z-10" />
      <Image src={lineBottom} alt="ellipse" className="absolute top-[28%] right-0 -z-10" />
    </DefaultLayout>
  );
}
