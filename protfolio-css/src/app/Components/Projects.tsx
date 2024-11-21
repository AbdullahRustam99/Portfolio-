import React from "react";
import Buttons from "@/app/Components/Buttons";
import Image from "next/image";
import Img1 from "@/img/image.png";
import Img2 from "@/img/image copy.png";
import Img3 from "@/img/image copy 2.png";
import Img4 from "@/img/image copy 3.png";
const Project = () => {
  return (
    <section className="project-section">
      <div className="projects-section">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-description">
            Dive into my projects, each crafted with precision and passion to
            meet unique client needs. From concept to completion, my portfolio
            reflects a dedication to quality and innovation.
          </p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <Image
              src={Img1}
              alt="WP Developing"
              className="project-image"
            />
            <h2 className="project-name">WP Developing</h2>
            <button className="project-button">View Live &rarr;</button>
          </div>
          <div className="project-card">
            <Image
              src={Img2}
            
              alt="UI/UX Design"
              className="project-image"
            />
            <h2 className="project-name">UI/UX Design</h2>
            <button className="project-button">View Live &rarr;</button>
          </div>
          <div className="project-card">
            <Image
              src={Img3}
             
              alt="Web Design"
              className="project-image"
            />
            <h2 className="project-name">Web Design</h2>
            <button className="project-button">View Live &rarr;</button>
          </div>
          <div className="project-card">
            <Image
              src={Img4}
             
              alt="SEO Optimize"
              className="project-image"
            />
            <h2 className="project-name">SEO Optimize</h2>
            <button className="project-button">View Live &rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
