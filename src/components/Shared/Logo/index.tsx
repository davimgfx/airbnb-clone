"use client";

import Image from "next/image";
import Link from "next/link";
import { logo, logoSmall } from "@/assets";
import { useMedia } from "./hooks/useMedia";

export const Logo = ({}) => {
  const isViewportMobile = useMedia("(min-width: 768px)");
  const logoImage = isViewportMobile ?  logo : logoSmall;

  return (
    <Link
      href="./"
      className="sm:block hidden cursor-pointer md:w-[6.4rem] w-[2rem]">
      <Image alt="logo airbnb" src={logoImage} priority={true}/>
    </Link>
  );
};
