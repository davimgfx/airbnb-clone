import { create } from "zustand";

interface RegisterModalStore {
  state: { isOpen: boolean };
  actions: {
    onOpen: () => void;
    onClose: () => void;
  };
}

export const useRegisterModal = create<RegisterModalStore>((set) => ({
  state: { isOpen: false },
  actions: {
    onOpen: () => set({ state: { isOpen: true } }),
    onClose: () => set({ state: { isOpen: false } }),
  },
}));
