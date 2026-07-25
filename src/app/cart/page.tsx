'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '@store/cartStore';
import Link from 'next/link';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import CartItemComponent from '@components/CartItem';
import { formatPrice } from '@utils/formatters';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleRemoveItem = (id: string) => {
    removeItem(id);
    toast.success('محصول از سبد حذف شد');
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'GHAB20') {
      setDiscount(getTotalPrice() * 0.2);
      toast.success('کوپن با موفقیت اعمال شد!');
    } else {
      toast.error('کوپن معتبر نیست');
    }
  };

  const subtotal = getTotalPrice();
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold-dark mb-6"
          >
            <FiArrowRight size={20} />
            بازگشت به محصولات
          </Link>
          <h1 className="text-4xl font-bold text-primary-900">سبد خریدتان</h1>
        </motion.div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <CartItemComponent
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveItem}
                  onEdit={() => toast.info('ویرایش محصول امکان‌پذیر است')}
                />
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              className="lg:sticky lg:top-20 h-fit"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-accent-light rounded-premium p-6 shadow-luxury">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">خلاصه سفارش</h2>

                {/* Subtotal */}
                <div className="flex justify-between mb-4 pb-4 border-b border-primary-200">
                  <span className="text-primary-700">جمع‌کل:</span>
                  <span className="font-bold text-primary-900">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {/* Coupon */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    کد تخفیف
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="کد را وارد کنید"
                      className="flex-1 px-3 py-2 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 bg-primary-900 text-white rounded-luxury hover:bg-primary-800 transition-colors font-medium"
                    >
                      اعمال
                    </button>
                  </div>
                </div>

                {/* Discount */}
                {discount > 0 && (
                  <div className="flex justify-between mb-4 pb-4 border-b border-primary-200 text-green-600">
                    <span>تخفیف:</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}

                {/* Total */}
                <div className="flex justify-between mb-6 pb-6 border-b border-primary-200">
                  <span className="text-lg font-bold text-primary-900">مبلغ قابل پرداخت:</span>
                  <span className="text-2xl font-bold text-accent-gold">
                    {formatPrice(total)}
                  </span>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="block w-full py-3 bg-gradient-to-l from-accent-gold to-accent-gold-dark text-primary-900 rounded-premium font-bold text-center hover:shadow-luxury-lg transition-all transform hover:scale-105"
                >
                  ادامه سفارش
                </Link>

                {/* Continue Shopping */}
                <Link
                  href="/products"
                  className="block w-full py-3 mt-3 border-2 border-primary-900 text-primary-900 rounded-premium font-bold text-center hover:bg-primary-900 hover:text-white transition-colors"
                >
                  ادامه خریدتان
                </Link>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FiShoppingBag className="mx-auto text-6xl text-primary-300 mb-6" />
            <h2 className="text-2xl font-bold text-primary-900 mb-4">سبد خریدتان خالی است</h2>
            <p className="text-primary-600 mb-8">محصولات را انتخاب کنید تا بتوانید سفارش دهید</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-gradient-to-l from-accent-gold to-accent-gold-dark text-primary-900 rounded-premium font-bold hover:shadow-luxury-lg transition-all"
            >
              مرور محصولات
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
