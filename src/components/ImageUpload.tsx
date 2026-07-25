'use client';

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FiUploadCloud } from 'react-icons/fi';
import { useCallback } from 'react';
import { validateImage } from '@utils/validation';
import { MAX_IMAGES } from '@utils/constants';

interface ImageUploadProps {
  onImagesSelected: (files: File[]) => void;
  maxFiles?: number;
  selectedCount?: number;
}

const ImageUpload = ({
  onImagesSelected,
  maxFiles = MAX_IMAGES,
  selectedCount = 0,
}: ImageUploadProps) => {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      processFiles(files);
    },
    []
  );

  const processFiles = (files: File[]) => {
    const validatedFiles: File[] = [];

    for (const file of files) {
      if (selectedCount + validatedFiles.length >= maxFiles) {
        toast.error(`حداکثر ${maxFiles} عکس می‌توانید آپلود کنید`);
        break;
      }

      const validation = validateImage(file);
      if (validation.valid) {
        validatedFiles.push(file);
      } else {
        toast.error(validation.error);
      }
    }

    if (validatedFiles.length > 0) {
      onImagesSelected(validatedFiles);
    }
  };

  return (
    <motion.div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-primary-300 rounded-premium p-8 text-center cursor-pointer hover:border-accent-gold transition-colors"
      whileHover={{ scale: 1.02 }}
    >
      <FiUploadCloud className="mx-auto text-4xl text-primary-400 mb-4" />
      <h3 className="font-bold text-lg mb-2">عکس های خود را بکشید و بیندازید</h3>
      <p className="text-primary-600 mb-4 text-sm">
        یا روی دکمه زیر کلیک کنید تا فایل ها را انتخاب کنید
      </p>
      <input
        type="file"
        multiple
        accept="image/jpeg,image/png,image/jpg"
        onChange={(e) => processFiles(Array.from(e.target.files || []))}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="inline-block px-6 py-2 bg-accent-gold text-primary-900 rounded-luxury font-medium hover:bg-accent-gold-dark transition-colors cursor-pointer"
      >
        انتخاب عکس ها
      </label>
      <p className="text-xs text-primary-500 mt-4">
        {selectedCount}/{maxFiles} عکس انتخاب شده | فرمت: JPG، PNG | حداکثر: 5MB
      </p>
    </motion.div>
  );
};

export default ImageUpload;
