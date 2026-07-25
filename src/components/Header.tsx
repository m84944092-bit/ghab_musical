'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@store/cartStore';
import { FiShoppingCart, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useThemeStore } from '@store/themeStore';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const cartItems = useCartStore((state) => state.getTotalItems());
  const isDark = useThemeStore((state) => state.isDark);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'محصولات', href: '/products' },
    { label: 'سفارش شخصی', href: '/custom-order' },
    { label: 'سوالات متداول', href: '/faq' },
    { label: 'درباره ما', href: '/about' },
    { label: 'تماس', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolling
          ? 'bg-white shadow-luxury'
          : 'bg-white border-b border-primary-200'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-l from-accent-gold to-primary-900 bg-clip-text text-transparent">
              غاب
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary-700 hover:text-accent-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-primary-100 rounded-luxury transition-colors">
              <FiSearch size={20} />
            </button>

            <Link
              href="/cart"
              className="relative p-2 hover:bg-primary-100 rounded-luxury transition-colors"
            >
              <FiShoppingCart size={20} />
              {cartItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-accent-gold text-primary-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {cartItems}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-primary-100 rounded-luxury transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-primary-200"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-primary-700 hover:text-accent-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
