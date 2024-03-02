import { PropsWithChildren, ReactNode } from 'react';

interface PropsWithMustChildren extends PropsWithChildren {
  type: 'submit' | 'button';
  name: string;
  value?: number;
  children: ReactNode;
  clickEvent?: () => void;
}
const Button = ({
  type,
  name,
  value,
  children,
  clickEvent,
}: PropsWithMustChildren) => {
  return (
    <button type={type} name={name} value={value} onClick={clickEvent}>
      {children}
    </button>
  );
};

export default Button;
