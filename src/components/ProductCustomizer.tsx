'use client';

import { motion } from 'framer-motion';
import { PRICES, FRAME_SIZES, FRAME_COLORS } from '@utils/constants';
import { formatPrice } from '@utils/formatters';
import { useState } from 'react';
import ImageUpload from './ImageUpload';

interface ProductCustomizerProps {
  onCustomize?: (options: any) => void;
}

const ProductCustomizer = ({ onCustomize }: ProductCustomizerProps) => {
  const [selectedSize, setSelectedSize] = useState<'A5' | 'A4' | 'A3'>('A4');
  const [selectedColor, setSelectedColor] = useState<'white' | 'black'>('white');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [musicUrl, setMusicUrl] = useState('');
  const [songName, setSongName] = useState('');

  const currentPrice = PRICES[selectedSize];

  return (
    <motion.div
      className="bg-white rounded-premium shadow-luxury p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Size Selection */}
      <div>
        <h3 className="font-bold text-lg text-primary-900 mb-4">انتخاب سایز</h3>
        <div className="grid grid-cols-3 gap-3">
          {FRAME_SIZES.map((size) => (
            <button
              key={size.value}
              onClick={() => setSelectedSize(size.value as 'A5' | 'A4' | 'A3')}
              className={`p-3 rounded-luxury border-2 transition-all font-medium ${
                selectedSize === size.value
                  ? 'border-accent-gold bg-accent-light text-accent-gold'
                  : 'border-primary-200 text-primary-700 hover:border-accent-gold'
              }`}
            >
              <div>{size.value}</div>
              <div className="text-sm mt-1">
                {formatPrice(PRICES[size.value as 'A5' | 'A4' | 'A3'])}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="font-bold text-lg text-primary-900 mb-4">انتخاب رنگ</h3>
        <div className="grid grid-cols-2 gap-3">
          {FRAME_COLORS.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value as 'white' | 'black')}
              className={`p-3 rounded-luxury border-2 transition-all font-medium ${
                selectedColor === color.value
                  ? 'border-accent-gold'
                  : 'border-primary-200'
              }`}
              style={{
                backgroundColor:
                  color.value === 'white' ? '#ffffff' : '#212121',
                color: color.value === 'white' ? '#212121' : '#ffffff',
              }}
            >
              {color.label}
            </button>
          ))}
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <h3 className="font-bold text-lg text-primary-900 mb-4">آپلود عکس</h3>
        <ImageUpload
          onImagesSelected={(files) =>
            setUploadedImages([...uploadedImages, ...files.map((f) => f.name)])
          }
          selectedCount={uploadedImages.length}
        />
        {uploadedImages.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {uploadedImages.map((img, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-accent-light px-3 py-2 rounded-luxury text-sm"
              >
                <span>{img}</span>
                <button
                  onClick={() =>
                    setUploadedImages(
                      uploadedImages.filter((_, i) => i !== idx)
                    )
                  }
                  className="text-red-600 hover:text-red-900"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Music Information */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-primary-900">اطلاعات موسیقی</h3>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">
            نام آهنگ
          </label>
          <input
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            placeholder="نام آهنگ خود را وارد کنید"
            className="w-full px-4 py-2 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-light"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-700 mb-2">
            Spotify URL یا MP3 URL
          </label>
          <input
            type="url"
            value={musicUrl}
            onChange={(e) => setMusicUrl(e.target.value)}
            placeholder="https://open.spotify.com/track/..."
            className="w-full px-4 py-2 border border-primary-300 rounded-luxury focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-light"
          />
          <p className="text-xs text-primary-500 mt-2">
            یا لینک Spotify یا فایل MP3 را وارد کنید
          </p>
        </div>
      </div>

      {/* Total Price */}
      <div className="bg-accent-light p-4 rounded-premium">
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary-900">قیمت کل:،</span>
          <span className="text-3xl font-bold text-accent-gold">
            {formatPrice(currentPrice)}
          </span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() =>
          onCustomize?.({
            size: selectedSize,
            color: selectedColor,
            images: uploadedImages,
            musicUrl,
            songName,
          })
        }
        className="w-full py-3 bg-gradient-to-l from-accent-gold to-accent-gold-dark text-primary-900 rounded-premium font-bold text-lg hover:shadow-luxury-lg transition-all"
      >
        افزودن به سبد خرید
      </motion.button>
    </motion.div>
  );
};

export default ProductCustomizer;
