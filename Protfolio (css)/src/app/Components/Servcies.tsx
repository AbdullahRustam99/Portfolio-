import React from "react";
import Image from "next/image";
import Img1 from "@/img/image.png";
import Img2 from "@/img/image copy.png";
import Img3 from "@/img/image copy 2.png";
import Img4 from "@/img/image copy 3.png";
const Services = () => {
  return (
    <section className="services-section">
      <div className="service-header">
        <h2 className="service-title">Service Offers</h2>
        <p className="service-description">
          Delivering top-notch web development, design, and SEO solutions to
          bring your digital vision to life.
        </p>
      </div>
      <div className="service-grid">
        <div className="service-item">
          <Image
          src={Img1}
          alt="WP Developing" className="service-image" />
          <h2 className="service-name">WP Developing</h2>
          <p className="service-text">
            Creeping for female light years that lesser can't evening heaven
            isnot bearing tree
          </p>
        </div>
        <div className="service-item">
          <Image
          src={Img2}
          alt="UI/UX Design" className="service-image" />
          <h2 className="service-name">UI/UX Design</h2>
          <p className="service-text">
            Creeping for female light years that lesser can't evening heaven
            isnot bearing tree
          </p>
        </div>
        <div className="service-item">
          <Image
          src={Img3}
          alt="Web Design" className="service-image" />
          <h2 className="service-name">Web Design</h2>
          <p className="service-text">
            Creeping for female light years that lesser can't evening heaven
            isnot bearing tree
          </p>
        </div>
        <div className="service-item">
          <Image
          src={Img4}
          alt="SEO Optimize" className="service-image" />
          <h2 className="service-name">SEO Optimize</h2>
          <p className="service-text">
            Creeping for female light years that lesser can't evening heaven
            isnot bearing tree
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
