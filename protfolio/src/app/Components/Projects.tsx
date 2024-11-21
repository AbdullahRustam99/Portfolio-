import React from "react";
import Buttons from "@/app/Components/Buttons";
import Image from "next/image";
import Img1 from "@/img/image.png";
import Img2 from "@/img/image copy.png";
import Img3 from "@/img/image copy 2.png";
import Img4 from "@/img/image copy 3.png";
const Project = () => {
  return (
    <div className="h-[150vh] flex flex-col justify-center items-center gap-10 text-center max-sm:h-[200vh] ">
      <div>
        <h2 className="text-[30px] font-bold uppercase">My Projects</h2>
        <p>
          Dive into my projects, each crafted with precision and passion to meet
          unique client needs. From concept to completion, my portfolio reflects
          a dedication to quality and innovation.
        </p>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 justify-center gap-10 p-5 max-sm:grid-cols-1 max-sm:grid-rows-1 max-sm:gap-5">
        <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 rounded-xl">
          <Image src={Img1} alt="Pic" />
          <h2 className="text-[25px] font-bold uppercase">Wp developing</h2>
          <Buttons
            text="View Live =>"
            style="py-4  px-10 text-white bg-gradient-to-tr from-blue-600 to-purple-700 font-semibold text-[16px] rounded-md"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 rounded-xl">
          <Image src={Img2} alt="Pic" />
          <h2 className="text-[25px] font-bold uppercase">UI/ux design</h2>
          <Buttons
            text="View Live =>"
            style="py-4  px-10 text-white bg-gradient-to-tr from-blue-600 to-purple-700 font-semibold text-[16px] rounded-md"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 rounded-xl">
          <Image src={Img3} alt="Pic" />
          <h2 className="text-[25px] font-bold uppercase">Web design</h2>
          <Buttons
            text="View Live =>"
            style="py-4  px-10 text-white bg-gradient-to-tr from-blue-600 to-purple-700 font-semibold text-[16px] rounded-md"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 rounded-xl">
          <Image src={Img4} alt="Pic" />
          <h2 className="text-[25px] font-bold uppercase">seo optimize</h2>
          <Buttons
            text="View Live =>"
            style="py-4  px-10 text-white bg-gradient-to-tr from-blue-600 to-purple-700 font-semibold text-[16px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
