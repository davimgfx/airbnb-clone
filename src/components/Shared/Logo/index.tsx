"use client"

import Image from "next/image";
import Link from "next/link";
import { logo, logoSmall } from "@/assets";
import { useMedia } from "./hooks/useMedia";

export const Logo = () => {
  const isViewportMobile = useMedia('(max-width: 768px)')
  const sizeOfImage = isViewportMobile ? 30: 100
  const logoImage = isViewportMobile ? logoSmall : logo

  return (
    <Link href="./">
      <Image
        alt="logo airbnb"
        className="cursor-pointer"
        src={logoImage}
        width={sizeOfImage}
        height={sizeOfImage}
      />
    </Link>
  );
};
