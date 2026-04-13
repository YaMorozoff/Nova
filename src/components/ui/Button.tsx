import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  shadow?: boolean;
};

export const Button = ({ children, onClick, className, shadow }: Props) => (
  <button
    onClick={onClick}
    className={clsx(
      className,
      'button header-text bg-gradient-to-b from-[#952BFF] to-[#451576] px-8',

      shadow && 'btn-shadow'
    )}
  >
    {children}
  </button>
);
