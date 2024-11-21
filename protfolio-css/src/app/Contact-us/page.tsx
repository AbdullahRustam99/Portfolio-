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
      <section className="contact-section">
        <div className="contact-info">
          <div className="contact-item">
            <Image src={Email} alt="Email Icon" width="20" />
            <div>
              <p className="contact-detail">abdullahrustam12345@gmail.com</p>
              <p className="contact-note">Send us your query anytime!</p>
            </div>
          </div>
          <div className="contact-item">
            <Image src={Call} alt="Call Icon" />
            <div>
              <p className="contact-detail">0032320003230</p>
              <p className="contact-note">Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="contact-item">
            <Image src={Homes} alt="Location Icon" />
            <div>
              <p className="contact-detail">Karachi</p>
              <p className="contact-note">Pakistan</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <input type="text" className="input-field" placeholder="Name" />
          <input type="text" className="input-field" placeholder="Email" />
          <input type="text" className="input-field" placeholder="Subject" />
          <input type="text" className="input-field" placeholder="Message" />
          <button className="send-button">Send Message</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
