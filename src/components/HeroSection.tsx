'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-accent-light to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-900 opacity-5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-900 text-primary-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            یادها را به
            <span className="bg-gradient-to-l from-accent-gold to-accent-gold-dark bg-clip-text text-transparent">
              {' '}موسیقی{' '}
            </span>
            تبدیل کنید
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-primary-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            قاب های عکس QR شخصی شده ای که آهنگ های مورد علاقه شما را پخش می کنند
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-l from-accent-gold to-accent-gold-dark text-primary-900 rounded-premium font-bold text-lg hover:shadow-luxury-lg transition-all transform hover:scale-105"
            >
              مشاهده محصولات
            </Link>
            <Link
              href="/custom-order"
              className="px-8 py-4 border-2 border-primary-900 text-primary-900 rounded-premium font-bold text-lg hover:bg-primary-900 hover:text-white transition-all"
            >
              سفارش شخصی
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-primary-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-primary-900 font-bold">✓</div>
              <span>گارانتی کیفیت</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-primary-900 font-bold">✓</div>
              <span>ارسال سریع</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-primary-900 font-bold">✓</div>
              <span>پشتیبانی 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
