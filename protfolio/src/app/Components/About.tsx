import React from "react";
import Buttons from "@/app/Components/Buttons";
import Image from "next/image";
import Aboust from "@/img/About.png";
const About = () => {
  return (
    <div className=" flex justify-center items-center gap-16 max-md:pb-6 max-sm:px-10 max-sm:justify-start">
      <div className="max-md:hidden">
        <Image src={Aboust} alt="About Pic" width={500} />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" uppercase text-[29px] font-bold">
          Lets
          <br /> Interduce About <br /> Myself
        </h2>
        <p className="w-[460px] max-sm:w-[400px]">
          As a passionate web developer, I bring creativity and precision to
          each project. My expertise spans front-end development, where I turn
          complex ideas into intuitive user experiences, and back-end
          development, ensuring robust, scalable functionality. I believe that
          every line of code has a purpose, contributing to a seamless and
          impactful digital experience. Driven by a commitment to quality, I
          focus on building websites that are visually captivating, responsive,
          and optimized for performance. Lets create something amazing together,
          where design meets functionality in perfect harmony.
        </p>
        <Buttons
          text="Download Cv"
          style="py-4 px-10 text-white bg-gradient-to-tr from-blue-600 to-purple-700 font-semibold text-[16px] rounded-md"
        />
      </div>
    </div>
  );
};

export default About;
