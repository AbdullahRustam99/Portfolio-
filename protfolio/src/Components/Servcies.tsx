import React from "react";
import Image from "next/image";
import Img1 from "@/img/image.png";
import Img2 from "@/img/image copy.png";
import Img3 from "@/img/image copy 2.png";
import Img4 from "@/img/image copy 3.png";
const Services = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-20 text-center bg-gradient-to-tr from-blue-600 to-purple-900 text-white max-md:h-[170vh] max-md:gap-10 max-sm:h-[200vh]">
      <div>
        <h2 className="text-[30px] font-bold uppercase">service offers </h2>
        <p>
          Delivering top-notch web development, design, and SEO solutions to
          bring your digital vision to life.
        </p>
      </div>
      <div className="grid grid-rows-1 grid-cols-4 justify-center gap-10 p-10 text-black max-md:grid-rows-2 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 ">
        <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 rounded-xl">
          <Image src={Img1} alt="Pic" />
          <h2 className="text-[25px] font-bold uppercase">Wp developing</h2>
          <p>
            Creeping for female light years that lesser cant evening heaven
            isnot bearing tree
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 rounded-xl">
          <Image src={Img2} alt="Pic" />
          <h2 className="text-[25px] font-bold uppercase">UI/ux design</h2>
          <p>
            Creeping for female light years that lesser cant evening heaven
            isnot bearing tree
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 rounded-xl">
          <Image src={Img3} alt="Pic" />
          <h2 className="text-[25px] font-bold uppercase">Web design</h2>
          <p>
            Creeping for female light years that lesser cant evening heaven
            isnot bearing tree
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 rounded-xl">
          <Image src={Img4} alt="Pic" />
          <h2 className="text-[25px] font-bold uppercase">seo optimize</h2>
          <p>
            Creeping for female light years that lesser cant evening heaven
            isnot bearing tree
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
