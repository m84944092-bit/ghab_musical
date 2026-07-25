'use client';

import { motion } from 'framer-motion';
import ProductCustomizer from '@components/ProductCustomizer';
import ImageUpload from '@components/ImageUpload';
import { useState } from 'react';
import { useCartStore } from '@store/cartStore';
import toast from 'react-hot-toast';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const PRODUCT_DETAILS = {
  id: 'custom-frame',
  title: 'قاب عکس QR موسیقی سفارشی',
  description:
    'قاب عکس QR موسیقی سفارشی شده که موسیقی مورد علاقه شما را پخش می‌کند',
  images: [
    'https://via.placeholder.com/600x600?text=Product+View+1',
    'https://via.placeholder.com/600x600?text=Product+View+2',
    'https://via.placeholder.com/600x600?text=Product+View+3',
    'https://via.placeholder.com/600x600?text=Product+View+4',
  ],
  rating: 4.9,
  reviews: 324,
  features: [
    '✓ چاپ با بالاترین کیفیت 1200 DPI',
    '✓ کد QR مستقل و قابل اسکن',
    '✓ قاب MDF طلایی و محکم',
    '✓ سفارش شخصی‌سازی شده',
    '✓ بسته‌بندی لوکسانه',
    '✓ ضمانت کیفیت 2 سال',
  ],
};

const REVIEWS = [
  {
    author: 'فاطمه محمدی',
    rating: 5,
    text: 'بیش از حد انتظار عالی بود. هدیه سالگرد بسیار دوست‌داشتنی شد!',
    date: '1403/04/15',
  },
  {
    author: 'علی رضایی',
    rating: 5,
    text: 'کیفیت چاپ فوق‌العاده و سریع تر از موعد رسید.',
    date: '1403/04/10',
  },
  {
    author: 'سارا احمدی',
    rating: 4.5,
    text: 'محصول عالی است. تنها کمی زمان تحویل طول کشید.',
    date: '1403/04/05',
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [mainImage, setMainImage] = useState(0);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const addItem = useCartStore((state) => state.addItem);

  const handleCustomize = (options: any) => {
    const newItem = {
      id: `cart-item-${Date.now()}`,
      productId: PRODUCT_DETAILS.id,
      product: {
        ...PRODUCT_DETAILS,
        price: 750000,
        isNew: true,
      },
      options: {
        size: options.size,
        color: options.color,
        quantity: 1,
      },
      uploadedPhotos: options.images,
      musicInfo: {
        songName: options.songName,
        spotifyUrl: options.musicUrl,
      },
      price: 750000,
    };

    addItem(newItem);
    toast.success('محصول به سبد خریدتان اضافه شد!');
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          className="mb-8 flex items-center gap-2 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link href="/" className="text-primary-600 hover:text-accent-gold">
            صفحه اصلی
          </Link>
          <span className="text-primary-400">/</span>
          <Link
            href="/products"
            className="text-primary-600 hover:text-accent-gold"
          >
            محصولات
          </Link>
          <span className="text-primary-400">/</span>
          <span className="text-primary-900 font-medium">
            {PRODUCT_DETAILS.title}
          </span>
        </motion.div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-4">
              <div className="relative h-96 bg-primary-100 rounded-premium overflow-hidden mb-4">
                <Image
                  src={PRODUCT_DETAILS.images[mainImage]}
                  alt={PRODUCT_DETAILS.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {PRODUCT_DETAILS.images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setMainImage(idx)}
                  className={`h-20 rounded-luxury overflow-hidden border-2 transition-all ${
                    mainImage === idx
                      ? 'border-accent-gold'
                      : 'border-primary-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={img}
                    alt={`View ${idx + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold text-primary-900 mb-4">
              {PRODUCT_DETAILS.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-primary-200">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={20}
                    className={${
                      i < PRODUCT_DETAILS.rating
                        ? 'fill-accent-gold text-accent-gold'
                        : 'text-primary-300'
                    }}
                  />
                ))}
              </div>
              <span className="font-medium text-primary-900">
                {PRODUCT_DETAILS.rating} از 5
              </span>
              <span className="text-primary-600">
                ({PRODUCT_DETAILS.reviews} نظر)
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              {PRODUCT_DETAILS.description}
            </p>

            {/* Features */}
            <div className="bg-accent-light p-6 rounded-premium mb-6">
              <h3 className="font-bold text-lg mb-4">ویژگی‌های محصول</h3>
              <div className="space-y-2">
                {PRODUCT_DETAILS.features.map((feature, idx) => (
                  <p key={idx} className="text-primary-700">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Customizer Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-primary-900 mb-8">شخصی‌سازی محصول</h2>
          <ProductCustomizer onCustomize={handleCustomize} />
        </motion.div>

        {/* Reviews Section */}
        <motion.section
          className="py-12 border-t border-primary-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary-900 mb-8">نظرات مشتریان</h2>
          <div className="space-y-6">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                className="bg-accent-light p-6 rounded-premium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-primary-900">{review.author}</h3>
                  <span className="text-sm text-primary-600">{review.date}</span>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={${
                        i < Math.floor(review.rating)
                          ? 'text-accent-gold'
                          : 'text-primary-300'
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-primary-700">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
