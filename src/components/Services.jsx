import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Img1 from "../assets/3.jpg";
import Img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div >
      <Carousel 
      infiniteLoop 
      autoPlay 
      showStatus={false} 
      showArrows={false}
      showThumbs={false}
      interval={1000}
      >
        <div>
          <img src={Img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img src={Img2} alt="Item2" />
          <p className="legend">Peer-to-Peer support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
