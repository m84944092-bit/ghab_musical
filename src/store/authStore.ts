import { create } from 'zustand';
import { AdminUser } from '@types/index';

interface AuthStore {
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: AdminUser | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: async (email: string, password: string) => {
    // TODO: Implement authentication logic
    set({ isAuthenticated: true });
  },
  
  logout: () => set({ user: null, isAuthenticated: false }),
  
  setUser: (user) => set({ user, isAuthenticated: !!user }),
}));
