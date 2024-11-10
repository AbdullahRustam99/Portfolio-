import Image from "next/image";
import React from "react";
import Logo from "@/img/LOGO-removebg-preview.png";
import Link from "next/link";
const Header = () => {
  return (
    <footer className="flex bg-gray-300 flex-col gap-10 justify-evenly p-8 items-center max-sm:flex-col max-sm:p-3">
      <div>
        <Image src={Logo} alt="logo" width={300} height={10} />
      </div>
      <div className="flex font-semibold flex-col items-center text-black justify-between gap-5 text-[16px] max-md:gap-5 max-sm:gap-5 max-sm:text-[16px]">
        <Link href="/" className="text-purple-700">
          Home
        </Link>
        <Link href="/About">About</Link>
        <Link href="/Projects">Project</Link>
        <Link href="/Servicess">Services</Link>
        <Link href="/Contact-us">Contact-US</Link>
      </div>
      <div>
        Copyright ©2024 All rights reserved | This is made by
        ABDULLAH RUSTAM
      </div>
    </footer>
  );
};

export default Header;
