'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '@store/cartStore';
import { formatPrice, generateOrderNumber } from '@utils/formatters';
import { validateEmail, validatePhoneNumber, validatePostalCode } from '@utils/validation';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      toast.error('نام خود را وارد کنید');
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.error('نام خانوادگی خود را وارد کنید');
      return false;
    }
    if (!validateEmail(formData.email)) {
      toast.error('ایمیل معتبر نیست');
      return false;
    }
    if (!validatePhoneNumber(formData.phone)) {
      toast.error('شماره تلفن معتبر نیست');
      return false;
    }
    if (!formData.address.trim()) {
      toast.error('آدرس خود را وارد کنید');
      return false;
    }
    if (!validatePostalCode(formData.postalCode)) {
      toast.error('کد پستی معتبر نیست (10 رقم)');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const newOrderNumber = generateOrderNumber();
      setOrderNumber(newOrderNumber);
      setOrderPlaced(true);
      toast.success('سفارش شما با موفقیت ثبت شد!');
    } catch (error) {
      toast.error('خطایی رخ داد. لطفا دوباره تلاش کنید');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-primary-900 mb-4">
            سبد خریدتان خالی است
          </h1>
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-accent-gold text-primary-900 rounded-premium font-bold hover:shadow-luxury transition-all"
          >
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="bg-accent-light rounded-premium p-12 mb-8">
              <div className="text-6xl mb-4">✓</div>
              <h1 className="text-4xl font-bold text-primary-900 mb-4">
                سفارش شما ثبت شد!
              </h1>
              <p className="text-lg text-primary-600 mb-6">
                از انتخاب شما متشکریم. سفارش شما در حال آماده‌سازی است.
              </p>
              <div className="bg-white p-6 rounded-premium mb-8 border-2 border-accent-gold">
                <p className="text-primary-600 mb-2">شماره سفارش:</p>
                <p className="text-3xl font-bold text-accent-gold">{orderNumber}</p>
              </div>
              <div className="bg-primary-100 p-6 rounded-premium mb-8">
                <h2 className="font-bold text-primary-900 mb-4">اطلاعات سفارش:</h2>
                <div className="text-right space-y-2 text-primary-700">
                  <p><strong>نام:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>ایمیل:</strong> {formData.email}</p>
                  <p><strong>تلفن:</strong> {formData.phone}</p>
                  <p><strong>آدرس:</strong> {formData.address}</p>
                  <p><strong>کد پستی:</strong> {formData.postalCode}</p>
                </div>
              </div>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block py-3 bg-gradient-to-l from-accent-gold to-accent-gold-dark text-primary-900 rounded-premium font-bold hover:shadow-luxury-lg transition-all"
                >
                  بازگشت به صفحه اصلی
                </Link>
                <p className="text-sm text-primary-600">
                  ایمیل تایید سفارش برای شما ارسال شده است
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold-dark mb-6"
          >
            <FiArrowRight size={20} />
            بازگشت به سبد خریدتان
          </Link>
          <h1 className="text-4xl font-bold text-primary-900">تکمیل خرید</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Personal Information */}
            <div className="bg-accent-light p-8 rounded-premium">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">اطلاعات شخصی</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="نام"
                  className="px-4 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="نام خانوادگی"
                  className="px-4 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-accent-light p-8 rounded-premium">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">اطلاعات تماس</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ایمیل"
                  className="w-full px-4 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="09123456789"
                  className="w-full px-4 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold"
                />
              </div>
            </div>

            {/* Address */}
            <div className="bg-accent-light p-8 rounded-premium">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">آدرس تحویل</h2>
              <div className="space-y-4">
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="آدرس کامل شامل استان، شهر و خیابان"
                  rows={3}
                  className="w-full px-4 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold resize-none"
                />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="��د پستی (10 رقم)"
                  className="w-full px-4 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="bg-accent-light p-8 rounded-premium">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">یادداشت‌های سفارش</h2>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="نکات خاصی برای ما (اختیاری)"
                rows={3}
                className="w-full px-4 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-l from-accent-gold to-accent-gold-dark text-primary-900 rounded-premium font-bold text-lg hover:shadow-luxury-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'در حال پردازش...' : 'تایید و ارسال سفارش'}
            </motion.button>
          </motion.form>

          {/* Order Summary */}
          <motion.div
            className="lg:sticky lg:top-20 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-accent-light rounded-premium p-6 shadow-luxury">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">خلاصه سفارش</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start py-3 border-b border-primary-200"
                  >
                    <div>
                      <h3 className="font-bold text-primary-900">
                        {item.product.title}
                      </h3>
                      <p className="text-sm text-primary-600">
                        سایز: {item.options.size} | رنگ: {item.options.color}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary-900">
                        {item.options.quantity}x
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-primary-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span>جمع‌کل:</span>
                  <span className="font-bold text-accent-gold">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
