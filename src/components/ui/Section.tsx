import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

type Props = {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  className?: string;
  ancorId?: string;
};

export const Section: FC<Props> = ({ title, subtitle, children, className, ancorId }) => {
  return (
    <section id={ancorId} className={clsx('my-10 flex w-full flex-col items-center gap-4 sm:gap-10', className)}>
      {title && <span className="text-title-main">{title}</span>}
      {subtitle && <span className="text-subtitle-main">{subtitle}</span>}
      {children}
    </section>
  );
};
