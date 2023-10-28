
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../public/logo.png'
export const Navbar = () => {
  return (
    <>
      <nav className=" w-full flex justify-between py-5 items-center px-8">
        <div>
         {/*  <Image
          src={Logo}
          height={80}
          width={80}
          alt="logo"
          /> */}
          <h1 className="font-bold  text-2xl border rounded-full p-2 bg-black text-white text-center">BP</h1>
        </div>
        <div className="  flex gap-5 items-center">
          <div className=" flex gap-4">
            <Link href={"/"} className=" text-lg">Find Homes</Link>
            <Link href={"/"} className=" text-lg">Animal Care</Link>
            <Link href={"/"}className=" text-lg">Adoption Center</Link>
            <Link href={"/"}className=" text-lg">Special Schools</Link>
          </div>

          <div className="flex gap-2  items-center">
            <button className="  px-5 rounded-full py-1 bg-black text-white">Sign In</button>
            <button className="px-5 rounded-full py-1 bg-black text-white">Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};
