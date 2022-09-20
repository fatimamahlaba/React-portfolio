import "./HeroImgStyles.css";
import React from "react";

import IntroImg from "../assets/Frame 1.png"
import { Link } from "react-router-dom";

const HeroImg = () => {
    return <div className="hero">
       {/* <div className="mask">
          <img className="intro-img" src= {IntroImg} alt="IntroImg" />
       </div> */}
       <div className="content">
          <p>HI, I AM A FULL STACK DEVELOPER</p>
          {/* <Link img src="https://i.postimg.cc/jS3XFJHH/Fatima-Mahlaba-Resume.png" className="btn">View CV</Link> */}
          
       </div>
    </div>;
};

export default HeroImg;