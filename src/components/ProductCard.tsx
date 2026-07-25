'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';
import { formatPrice } from '@utils/formatters';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
}

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  rating,
  reviews,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-premium overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-primary-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
            className="absolute inset-0 bg-black/30 flex items-center justify-center"
          >
            <Link
              href={`/products/${id}`}
              className="flex items-center justify-center w-12 h-12 bg-accent-gold rounded-full text-primary-900 hover:scale-110 transition-transform"
            >
              <FiEye size={20} />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-primary-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-primary-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < Math.floor(rating)
                    ? 'text-accent-gold'
                    : 'text-primary-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-primary-600">({reviews})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-accent-gold">
            {formatPrice(price)}
          </div>
          <Link
            href={`/products/${id}`}
            className="px-4 py-2 bg-primary-900 text-white rounded-luxury hover:bg-primary-800 transition-colors text-sm font-medium"
          >
            جزئیات
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
