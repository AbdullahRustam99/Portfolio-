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
      <div className="flex flex-row-reverse justify-center items-center gap-20 max-sm:px-10 ">
        <div className="max-md:hidden">
          <Image src={Pic} alt="My pic" width={500} />
        </div>
        <div className="flex justify-center flex-col gap-7 max-md:gap-4   ">
          <h2 className=" uppercase text-[26px] font-semibold ">Hello ,</h2>
          <h1 className=" uppercase text-[37px] font-bold">
            I am Abdullah Rustam
          </h1>
          <h2 className=" uppercase text-[26px] font-semibold">
            senior web developer
          </h2>
          <div className="flex gap-4 mb-10   ">
            <Buttons
              text="Hire ME"
              style="py-4 px-10 text-white bg-gradient-to-tr from-blue-600 to-purple-700 font-semibold text-[16px] rounded-md max-sm:px-8"
            />
            <Buttons
              text="Get Cv"
              style="py-4  px-10 text-white bg-gradient-to-tr from-blue-600 to-purple-700 font-semibold text-[16px] rounded-md max-sm:px-8"
            />
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
