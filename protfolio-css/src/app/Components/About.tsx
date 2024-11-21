import React from "react";
import Buttons from "@/app/Components/Buttons";
import Image from "next/image";
import Aboust from "@/img/About.png";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-image">
        <Image src={Aboust} alt="About Pic"  />
      </div>
      <div className="about-content">
        <h2 className="about-heading">
          Let's <br />
          Introduce About <br />
          Myself
        </h2>
        <p className="about-text">
          As a passionate web developer, I bring creativity and precision to
          each project. My expertise spans front-end development, where I turn
          complex ideas into intuitive user experiences, and back-end
          development, ensuring robust, scalable functionality. I believe that
          every line of code has a purpose, contributing to a seamless and
          impactful digital experience. Driven by a commitment to quality, I
          focus on building websites that are visually captivating, responsive,
          and optimized for performance. Let's create something amazing
          together, where design meets functionality in perfect harmony.
        </p>
        <a href="path/to/cv.pdf" className="download-button">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
