import Image from "next/image";
import React from "react";
import Logo from "@/img/LOGO-removebg-preview.png";
import Link from "next/link";
const Header = () => {
  return (
    <footer className="footer">
      <footer className="footer">
        <div className="footer-logo">
          <Image
            src={ Logo}
            alt="logo"
            width="300"
            height="10"
          />
        </div>
        <div className="footer-links">
          <a href="/" className="active">
            Home
          </a>
          <a href="/About">About</a>
          <a href="/Projects">Projects</a>
          <a href="/Servicess">Services</a>
          <a href="/Contact-us">Contact Us</a>
        </div>
        <div className="footer-copyright">
          &copy; 2024 All rights reserved | This is made by ABDULLAH RUSTAM
        </div>
      </footer>
    </footer>
  );
};

export default Header;
