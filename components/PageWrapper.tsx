import { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return <main>{children}</main>;
}
