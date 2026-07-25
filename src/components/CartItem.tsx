'use client';

import { motion } from 'framer-motion';
import { FiShoppingCart, FiTrash2, FiEdit2, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { formatPrice } from '@utils/formatters';
import { CartItem } from '@types/index';

interface CartItemComponentProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onEdit: (id: string) => void;
}

const CartItemComponent = ({
  item,
  onRemove,
  onEdit,
}: CartItemComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white rounded-premium shadow-luxury p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
    >
      <div className="flex-1">
        <h3 className="font-bold text-lg text-primary-900 mb-2">
          {item.product.title}
        </h3>
        <div className="text-sm text-primary-600 space-y-1">
          <p>سایز: {item.options.size}</p>
          <p>رنگ: {item.options.color}</p>
          <p>تعداد: {item.options.quantity}</p>
        </div>
      </div>

      <div className="text-2xl font-bold text-accent-gold">
        {formatPrice(item.price * item.options.quantity)}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(item.id)}
          className="p-2 hover:bg-primary-100 rounded-luxury transition-colors text-primary-600 hover:text-primary-900"
        >
          <FiEdit2 size={20} />
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 hover:bg-red-100 rounded-luxury transition-colors text-red-600 hover:text-red-900"
        >
          <FiTrash2 size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default CartItemComponent;
