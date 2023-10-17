import { PropsWithChildren } from 'react';
import '@/assets/scss/style.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Dining',
  description: '',
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
