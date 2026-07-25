// Price configuration
export const PRICES = {
  A5: 550000,
  A4: 750000,
  A3: 990000,
} as const;

// Frame colors
export const FRAME_COLORS = [
  { value: 'white', label: 'سفید' },
  { value: 'black', label: 'مشکی' },
] as const;

// Frame sizes
export const FRAME_SIZES = [
  { value: 'A5', label: 'A5 (148×210 میلی‌متر)' },
  { value: 'A4', label: 'A4 (210×297 میلی‌متر)' },
  { value: 'A3', label: 'A3 (297×420 میلی‌متر)' },
] as const;

// Contact information
export const CONTACT_INFO = {
  phone: '+98 (0)XX XXXX XXXX',
  telegram: '@M_SOUI',
  whatsapp: '+98 (0)XX XXXX XXXX',
  instagram: '@ghab_musical',
  email: 'info@ghab-musical.com',
  address: 'تهران، ایران',
} as const;

// Order statuses
export const ORDER_STATUS = {
  pending: 'درحال بررسی',
  'in-production': 'در حال تولید',
  shipped: 'ارسال شده',
  delivered: 'تحویل داده شد',
} as const;

// Supported image formats
export const SUPPORTED_IMAGE_FORMATS = ['jpg', 'jpeg', 'png'];
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_IMAGES = 10;

// Payment
export const CURRENCY = 'تومان';
export const CURRENCY_SYMBOL = '﷼';
