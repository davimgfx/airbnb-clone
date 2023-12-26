"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components";

export const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer">Login In</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Login</DialogTitle>
          <DialogDescription>Welcome to Airbnb</DialogDescription>
          <p className="text-xs">Login into your account</p>
        </DialogHeader>
        <div className="flex flex-col gap-4"></div>
        <Button type="submit" className="bg-[#FF385C]">
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};
