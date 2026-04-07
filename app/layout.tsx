import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Cary Kane PLLC | NYC Labor & Employment Lawyers',
  description:
    'New York City labor and employment lawyers for employees, unions, and benefit plans.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
