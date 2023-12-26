"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  FormRegister,
} from "@/components";

import { useRegisterModal } from "./hooks/useRegisterModal";

export const RegisterModal = () => {
  const {
    state: { isOpen },
    actions: { onClose, onOpen },
  } = useRegisterModal();

  const handleModalControl = () => (isOpen ? onClose() : onOpen());

  return (
    <Dialog open={isOpen} onOpenChange={handleModalControl}>
      <DialogTrigger asChild>
        <p className="cursor-pointer">Sign Up</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Register</DialogTitle>
          <DialogDescription>Welcome to Airbnb</DialogDescription>
          <p className="text-xs">Create your Account</p>
        </DialogHeader>
        <FormRegister />
      </DialogContent>
    </Dialog>
  );
};
