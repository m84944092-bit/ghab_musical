'use client';

import { motion } from 'framer-motion';
import ProductCard from '@components/ProductCard';

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    image: 'https://via.placeholder.com/400x400?text=QR+Frame+1',
    title: 'قاب QR طلایی',
    description: 'قاب عکس QR طلایی با چاپ بولحول و طراحی لوکسانه',
    price: 750000,
    rating: 5,
    reviews: 120,
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/400x400?text=QR+Frame+2',
    title: 'قاب QR درباره',
    description: 'قاب عکس QR با رنگ روشن برای اتاق راهرو',
    price: 550000,
    rating: 4.8,
    reviews: 98,
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/400x400?text=QR+Frame+3',
    title: 'قاب QR تمام سیاه',
    description: 'طراحی مدرن برای اتاق خواب',
    price: 990000,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/400x400?text=QR+Frame+4',
    title: 'لوکسانه طلایی',
    description: 'گزینه با رنگ طلایی برای هدایا',
    price: 850000,
    rating: 4.7,
    reviews: 87,
  },
];

const ProductsGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">محصولات ما</h2>
          <p className="text-lg text-primary-600">انتخاب بهترین قاب های QR موسیقی</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
