// Product Types
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  reviews: number;
  features: string[];
  category: string;
  isNew: boolean;
  discount?: number;
}

export interface ProductOption {
  size: 'A5' | 'A4' | 'A3';
  color: 'white' | 'black';
  quantity: number;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  options: ProductOption;
  uploadedPhotos: string[];
  musicInfo: {
    songName: string;
    spotifyUrl?: string;
    mp3Url?: string;
  };
  price: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  customerInfo: CustomerInfo;
  totalPrice: number;
  status: 'pending' | 'in-production' | 'shipped' | 'delivered';
  createdAt: Date;
  updatedAt: Date;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  notes?: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  images?: string[];
  createdAt: Date;
}

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  discountType: 'percentage' | 'fixed';
  expiresAt: Date;
  minOrder?: number;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'moderator';
}

export interface SalesAnalytics {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  averageOrderValue: number;
  revenue: number;
}
