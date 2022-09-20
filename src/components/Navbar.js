import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
 
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">About</Link>
        </li>
        <li>
            <Link to="/about">Experience</Link>
        </li>
        <li>
            <Link to="/project">Work</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <Link to='https://fatimamahlaba.github.io'>
        <button className="button">Resume</button>
        </Link>
      </ul>
      
      <div className="hamburger" onClick= {handleClick}>
        {click ? ( 
          <FaTimes size={20} style={{ color: "#64ffda"}} />
        ) : (
          <FaBars size={20} style={{ color: "#64ffda"}} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
