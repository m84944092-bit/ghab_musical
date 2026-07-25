import axios from 'axios';
import { ApiResponse } from '@types/globals';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for adding auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const api = {
  // Products
  getProducts: () => apiClient.get('/products'),
  getProduct: (id: string) => apiClient.get(`/products/${id}`),
  
  // Orders
  createOrder: (data: any) => apiClient.post('/orders', data),
  getOrder: (id: string) => apiClient.get(`/orders/${id}`),
  getOrders: () => apiClient.get('/orders'),
  
  // Coupons
  validateCoupon: (code: string) => apiClient.post('/coupons/validate', { code }),
  
  // Reviews
  getProductReviews: (productId: string) => apiClient.get(`/reviews/product/${productId}`),
  createReview: (data: any) => apiClient.post('/reviews', data),
  
  // Admin
  getAnalytics: () => apiClient.get('/admin/analytics'),
  getOrders: () => apiClient.get('/admin/orders'),
  updateOrderStatus: (orderId: string, status: string) =>
    apiClient.patch(`/admin/orders/${orderId}`, { status }),
};

export default apiClient;
