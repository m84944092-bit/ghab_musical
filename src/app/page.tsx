'use client';

import HeroSection from '@components/HeroSection';
import ProductsGrid from '@components/ProductsGrid';
import AboutSection from '@components/AboutSection';
import FAQ from '@components/FAQ';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <ProductsGrid />

      {/* Features Banner */}
      <motion.section
        className="py-12 bg-gradient-to-r from-primary-900 to-primary-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold text-xl mb-2">ضمانت 100% رضایت</h3>
              <p className="text-primary-200">اگر راضی نیستید، بازپرداخت کامل در 30 روز</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-xl mb-2">ارسال سریع</h3>
              <p className="text-primary-200">تحویل در 2-3 روز به سراسر ایران</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-xl mb-2">پشتیبانی 24/7</h3>
              <p className="text-primary-200">تیم ما همیشه آماده کمک است</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Banner */}
      <motion.section
        className="py-16 bg-accent-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">
            آماده برای تبدیل یادها به موسیقی؟
          </h2>
          <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
            سفارش کنید و گهواره ای از خاطرات پر از موسیقی دریافت کنید
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-l from-accent-gold to-accent-gold-dark text-primary-900 rounded-premium font-bold text-lg hover:shadow-luxury-lg transition-all transform hover:scale-105"
          >
            مشاهده کلکشن کامل
            <FiArrowLeft size={20} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
