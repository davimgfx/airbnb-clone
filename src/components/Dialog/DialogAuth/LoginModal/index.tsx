"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  FormLogin,
  useLoginModal
} from "@/components";

export const LoginModal = () => {
  const {
    state: { isOpen },
    actions: { onClose, onOpen },
  } = useLoginModal();

  const handleModalControl = () => (isOpen ? onClose() : onOpen());
  return (
    <Dialog open={isOpen} onOpenChange={handleModalControl}>
      <DialogTrigger asChild>
        <p className="cursor-pointer">Login</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Login</DialogTitle>
          <DialogDescription>Welcome to Airbnb</DialogDescription>
          <p className="text-xs">Login into your account</p>
        </DialogHeader>
        <FormLogin />
      </DialogContent>
    </Dialog>
  );
};
