import { SUPPORTED_IMAGE_FORMATS, MAX_IMAGE_SIZE } from './constants';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Iranian phone number validation
  const phoneRegex = /^(\+98|0)?9\d{9}$/;
  return phoneRegex.test(phone.replace(/[-\s]/g, ''));
};

export const validatePostalCode = (postalCode: string): boolean => {
  // Iranian postal code: 10 digits
  const postalRegex = /^\d{10}$/;
  return postalRegex.test(postalCode.replace(/[-\s]/g, ''));
};

export const validateImage = (file: File): { valid: boolean; error?: string } => {
  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  
  if (!fileExtension || !SUPPORTED_IMAGE_FORMATS.includes(fileExtension)) {
    return { valid: false, error: 'فرمت تصویر پشتیبانی نمی‌شود' };
  }
  
  if (file.size > MAX_IMAGE_SIZE) {
    return { valid: false, error: 'حجم تصویر بیشتر از 5 مگابایت است' };
  }
  
  return { valid: true };
};

export const validateSpotifyUrl = (url: string): boolean => {
  try {
    const spotifyRegex = /^https:\/\/open\.spotify\.com\/track\/\w+/;
    return spotifyRegex.test(url);
  } catch {
    return false;
  }
};
