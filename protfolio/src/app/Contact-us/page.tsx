import React from "react";
import Header from "@/app/Components/Header";
import About from "@/app/Components/About";
import Card from "@/app/Components/Crad";
import Footer from "@/app/Components/Footer";
import Image from "next/image";
import Homes from "@/img/Home.jpg";
import Call from "@/img/Cal.jpg";
import Email from "@/img/Email.jpg";
import Buttons from "@/app/Components/Buttons";

const Home = () => {
  return (
    <>
      <Header />
      <Card text="Contact-Us" dir="Home - Contact-us" />
      <div className="flex p-10	 justify-center items-center gap-20 max-md:flex-col max-md:gap-10">
        <div>
          <div className="flex gap-2 items-center">
            <Image src={Email} alt="home" width={20} />
            <div>
              <p className="text-[19px] font-semibold">
                abdullahrustam12345@gmail.com
              </p>
              <p className="text-[16px]">Send us your query anytime!</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={Call} alt="home" />
            <div>
              <p className="text-[19px] font-semibold">0032320003230</p>
              <p className="text-[16px]">Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={Homes} alt="home" />
            <div>
              <p className="text-[19px] font-semibold"> Karachi</p>
              <p className="text-[16px]">Pakistan</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <input
              className="py-4 px-2 border-black border-2 rounded-md"
              type="text"
              placeholder="Message"
            />
            <input
              className="py-4 px-2 border-black border-2 rounded-md"
              type="text"
              placeholder="Message"
            />
            <input
              className="py-4 px-2 border-black border-2 rounded-md"
              type="text"
              placeholder="Message"
            />
            <input
              className="py-4 px-2 border-black border-2 rounded-md"
              type="text"
              placeholder="Message"
            />
          </div>

          <div className="mt-3">
            <Buttons
              text="Send Message"
              style="py-4 px-10 text-white bg-gradient-to-tr from-blue-600 to-purple-700 font-semibold text-[16px] rounded-md"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
