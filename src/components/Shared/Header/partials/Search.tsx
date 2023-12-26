import { search } from "@/assets"
import Image from "next/image"

export const Search = () => {
  return (
    <div className="p-2 rounded-full bg-[#FF385C] cursor-pointe">
      <Image src={search} alt="search icon" width={16} height={16} />
    </div>
  )
}
