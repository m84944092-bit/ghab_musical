import { create } from 'zustand';
import { CartItem } from '@types/index';

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateItem: (itemId: string, item: Partial<CartItem>) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
  })),
  
  removeItem: (itemId) => set((state) => ({
    items: state.items.filter((item) => item.id !== itemId),
  })),
  
  updateItem: (itemId, updates) => set((state) => ({
    items: state.items.map((item) =>
      item.id === itemId ? { ...item, ...updates } : item
    ),
  })),
  
  clearCart: () => set({ items: [] }),
  
  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.options.quantity, 0);
  },
  
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.options.quantity, 0);
  },
}));
