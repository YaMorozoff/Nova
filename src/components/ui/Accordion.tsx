import { FC, MouseEventHandler, ReactNode, useState } from 'react';

import clsx from 'clsx';

type AccordionProps = {
  className?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
  icon?: ReactNode;
};

const Accordion: FC<AccordionProps> = ({
  className,
  title,
  children,
  isExpanded = false,
  onToggle,
  subtitle,
  icon
}) => {
  const [isOpen, setIsOpen] = useState(isExpanded);

  const handleToggle: MouseEventHandler<HTMLElement> = event => {
    event.preventDefault();
    setIsOpen(!isOpen);
    onToggle && onToggle();
  };

  return (
    <details className={className} open={isOpen}>
      <summary
        className="text-subtitle-main focus-visible:lk-focus focus-visible:rounded-2 flex cursor-pointer list-none items-center justify-between gap-4 px-2 py-4 text-left"
        onClick={handleToggle}
      >
        {icon}
        <div className={clsx({ 'text-subtitle-main flex flex-col gap-1': subtitle })}>
          {title}
          {subtitle && <p className="text-black/50">{subtitle}</p>}
        </div>
        {isOpen ? '-' : '+'}
      </summary>
      <div className="px-2 pt-4 pb-4 text-left">{children}</div>
    </details>
  );
};

export default Accordion;
