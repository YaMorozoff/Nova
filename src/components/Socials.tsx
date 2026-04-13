import x from '@/assets/icons/x.svg';
import inst from '@/assets/icons/inst.svg';

import Image from 'next/image';
export const Socials = () => {
  return (
    <div className="flex gap-2">
      <a href="https://x.com/novacardglobal" target="_blank">
        {' '}
        <Image src={x} alt="x" />
      </a>

      <a href="https://instagram.com/novacard.global" target="_blank">
        <Image src={inst} alt="inst" />
      </a>
    </div>
  );
};
