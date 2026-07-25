'use client';

import { Toaster } from 'react-hot-toast';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayoutContent({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}
