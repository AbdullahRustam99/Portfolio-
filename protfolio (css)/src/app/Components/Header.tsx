import Image from "next/image";
import React from "react";
import Logo from "@/img/LOGO-removebg-preview.png";
import Link from "next/link";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Image src={Logo} alt="logo" width="100" height="10" />
        </div>
        <div className="nav-links">
          <a href="/" className="active">
            Home
          </a>
          <a href="/About">About</a>
          <a href="/Projects">Projects</a>
          <a href="/Servicess">Services</a>
          <a href="/Contact-us">Contact Us</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
