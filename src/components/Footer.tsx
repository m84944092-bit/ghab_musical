'use client';

import { FiPhone, FiMail, FiMapPin, FiInstagram } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';
import Link from 'next/link';
import { CONTACT_INFO } from '@utils/constants';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-l from-accent-gold to-white bg-clip-text text-transparent">
              غاب موسیقی
            </h3>
            <p className="text-primary-300 text-sm leading-relaxed">
              تبدیل یادها به موسیقی با قاب های QR شخصی شده
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">پیوندها</h4>
            <ul className="space-y-2 text-sm text-primary-300">
              <li><Link href="/" className="hover:text-accent-gold transition-colors">صفحه اصلی</Link></li>
              <li><Link href="/products" className="hover:text-accent-gold transition-colors">محصولات</Link></li>
              <li><Link href="/about" className="hover:text-accent-gold transition-colors">درباره ما</Link></li>
              <li><Link href="/contact" className="hover:text-accent-gold transition-colors">تماس</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">خدمات مشتری</h4>
            <ul className="space-y-2 text-sm text-primary-300">
              <li><Link href="/faq" className="hover:text-accent-gold transition-colors">سوالات متداول</Link></li>
              <li><Link href="/privacy" className="hover:text-accent-gold transition-colors">حریم خصوصی</Link></li>
              <li><Link href="/terms" className="hover:text-accent-gold transition-colors">شرایط و ضوابط</Link></li>
              <li><Link href="/returns" className="hover:text-accent-gold transition-colors">بازگشت و استرجاع</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-sm text-primary-300">
              <li className="flex items-center gap-2">
                <FiPhone size={16} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-accent-gold transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail size={16} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent-gold transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-300">
            © 2024 غاب موسیقی. تمام حقوق محفوظ است.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={`https://t.me/${CONTACT_INFO.telegram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-800 rounded-luxury transition-colors"
            >
              <SiTelegram size={20} />
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-800 rounded-luxury transition-colors"
            >
              <SiWhatsapp size={20} />
            </a>
            <a
              href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-800 rounded-luxury transition-colors"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
