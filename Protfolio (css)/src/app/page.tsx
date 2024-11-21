import React from "react";
import Header from "@/app/Components/Header";
import Buttons from "@/app/Components/Buttons";
import Image from "next/image";
import Pic from "@/img/My Pic.png";
import About from "@/app/Components/About";
import Services from "@/app/Components/Servcies";
import Project from "@/app/Components/Projects";
import Footer from "@/app/Components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="intro-container">
          <div className="image-container">
            <Image src={Pic} alt="My Pic" width="500" />
          </div>
          <div className="text-content">
            <h2 className="greeting">Hello,</h2>
            <h1 className="name">I am Abdullah Rustam</h1>
            <h2 className="position">Senior Web Developer</h2>
            <div className="button-group">
              <button className="button">Hire Me</button>
              <button className="button">Get CV</button>
            </div>
          </div>
        </div>
      </main>
      <About />
      <Services />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
