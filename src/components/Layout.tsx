'use client';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-white text-primary-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
