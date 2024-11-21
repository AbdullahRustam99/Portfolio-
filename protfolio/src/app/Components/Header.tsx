import Image from 'next/image';
import React from 'react'
import Logo from "@/img/LOGO-removebg-preview.png";
import Link from 'next/link';
const Header = () => {
  return (
    <nav className="flex  justify-evenly p-8 items-center max-sm:flex-col max-sm:p-3 ">
      <div>
        <Image src={Logo} alt="logo" width={100} height={10} />
      </div>
      <div className="flex font-semibold text-black justify-between gap-10 text-[16px] max-md:gap-5 max-sm:gap-2 max-sm:text-[14px] ">
        <Link href="/" className='text-purple-700'> Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Projects">Project</Link>
        <Link href="/Servicess">Services</Link>
        <Link href="/Contact-us">Contact-US</Link>
      </div>
    </nav>
  );
}

export default Header