import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 border-gray-400 ">
      <div class=" flex flex-wrap items-center   p-4  mx-auto">
        <a href="/" className="flex items-center">
          <img
            src={"/image/ableton-hallmark.ef5355379032.svg"}
            width={60}
            height={20}
            className="h-8  "
          />
        </a>
        
        <ul className=" font-bold text-base flex flex-col ml-[2rem] p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white" >
          <li className="">
            <Link href="/">Live</Link>
          </li>
          <li>
            <Link href="/">Push</Link>
          </li>
          <li>
            <Link href="/">Note</Link>
          </li>
          <li>
            <Link href="/">Link</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Packs</Link>
          </li>
          <li>
            <Link href="/">Help</Link>
          </li>
          <li className=" text-orange">
            <Link href="/">More +</Link>
          </li>
        </ul>
        <ul className="flex ml-[37.75rem] font-bold text-base  ">
          <li className=" pr-[2rem] text-blue">
            <Link href='/'>Try Live For Free</Link>
          </li>
          <li>
            <Link href='/'>Log in Or Register</Link>
          </li>
        </ul>
        </div>
     
    </nav>
  );
};

export default Navbar;
