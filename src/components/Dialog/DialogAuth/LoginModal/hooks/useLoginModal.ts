import { create } from 'zustand';

interface LoginModalStore {
  state: { isOpen: boolean };
  actions: {
    onOpen: () => void;
    onClose: () => void;
  };
}

export const useLoginModal = create<LoginModalStore>((set) => ({
  state: { isOpen: false },
  actions: {
    onOpen: () => set({ state: { isOpen: true } }),
    onClose: () => set({ state: { isOpen: false } }),
  },
}));


