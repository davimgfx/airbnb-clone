import logo from "@/../public/logo.svg";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Image src={logo} alt="airbnb logo" width={130}/>
      <h2>Test</h2>
    </>
  );
}
