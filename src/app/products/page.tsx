'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@components/ProductCard';
import { FiFilter, FiSearch } from 'react-icons/fi';

const PRODUCTS = [
  {
    id: '1',
    image: 'https://via.placeholder.com/400x400?text=Premium+White',
    title: 'قاب QR سفید A4',
    description: 'قاب عکس QR سفید با چاپ بوتحول و طراحی لوکسانه',
    price: 750000,
    rating: 5,
    reviews: 120,
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/400x400?text=Classic+Black',
    title: 'قاب QR مشکی A5',
    description: 'قاب عکس QR با رنگ رویشن برای اتاق راهرو',
    price: 550000,
    rating: 4.8,
    reviews: 98,
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/400x400?text=Large+Gold',
    title: 'قاب QR A3 طلایی',
    description: 'طراحی مدرن برای اتاق خواب و نشیمن',
    price: 990000,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/400x400?text=Wedding+Special',
    title: 'قاب QR ازدواج',
    description: 'گزینه ویژه با رنگ طلایی برای هدایای ازدواج',
    price: 850000,
    rating: 4.7,
    reviews: 87,
  },
  {
    id: '5',
    image: 'https://via.placeholder.com/400x400?text=Anniversary',
    title: 'قاب QR سالگرد',
    description: 'طراحی خاص برای جشن سالگرد عشق',
    price: 920000,
    rating: 5,
    reviews: 143,
  },
  {
    id: '6',
    image: 'https://via.placeholder.com/400x400?text=Birthday',
    title: 'قاب QR تولد',
    description: 'هدیه بی‌نظیر برای روز تولد خاص',
    price: 720000,
    rating: 4.8,
    reviews: 76,
  },
  {
    id: '7',
    image: 'https://via.placeholder.com/400x400?text=Memorial',
    title: 'قاب QR یادبود',
    description: 'یادآوری محبتان با موسیقی در قالب هنری',
    price: 880000,
    rating: 4.9,
    reviews: 92,
  },
  {
    id: '8',
    image: 'https://via.placeholder.com/400x400?text=Custom+Design',
    title: 'قاب QR سفارشی',
    description: 'طراحی منحصربه‌فرد بر اساس نیاز شما',
    price: 1200000,
    rating: 5,
    reviews: 203,
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            مجموعه کامل محصولات
          </h1>
          <p className="text-lg text-primary-600">
            انتخاب بهترین قاب QR موسیقی برای هر مناسبت
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex gap-4 flex-col md:flex-row">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FiSearch className="absolute right-3 top-3 text-primary-400" size={20} />
              <input
                type="text"
                placeholder="جستجو در محصولات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-light"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold bg-white"
            >
              <option value="newest">جدیدترین</option>
              <option value="price-low">قیمت: کم به زیاد</option>
              <option value="price-high">قیمت: زیاد به کم</option>
              <option value="rating">پرامتیازترین</option>
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden px-4 py-3 border border-primary-300 rounded-luxury flex items-center gap-2 hover:bg-primary-100 transition-colors"
            >
              <FiFilter size={20} />
              فیلتر
            </button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-2xl font-bold text-primary-400 mb-2">
                محصولی یافت نشد
              </p>
              <p className="text-primary-600">لطفا شرایط جستجو را تغییر دهید</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
