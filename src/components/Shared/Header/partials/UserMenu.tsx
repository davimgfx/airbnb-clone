"use client"

import { User, Menu } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  RegisterModal,
  LoginModal
} from "@/components";

export const UserMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-row items-center gap-3 rounded-full border-[#DDDDDD] border-2 px-4 py-2 cursor-pointer md:border-r-2 ">
          <Menu />
          <User
            className="hidden
            md:block"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="md:w-60 w-40" align="end">
        <div className="flex flex-col gap-7 text-sm ">
          <RegisterModal />
          <LoginModal />
        </div>
      </PopoverContent>
    </Popover>
  );
};
