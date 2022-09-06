import "./FooterStyles.css";
import React from "react"; 
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        <div>
                        <p>Cape Town, Western Cape</p>
                        </div>
                     </div>
                     <div className="phone">
                       <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +27 72 382 7244</h4>
                     </div>
                     <div className="email">
                       <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> fatimamahlaba@gmail.com</h4>
                     </div>
                    <div className="right">
                        <div className="social">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </div>
                        <div className="social">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </div>
                        <div className="social">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Footer;