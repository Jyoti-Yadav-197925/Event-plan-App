import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu} from "react-icons/gi";
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
    <div className="logo" style={{ fontFamily: 'Alex Brush', color: 'black', fontWeight: 600, fontSize: '30px' }}>Event Planner</div>
     
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="home" spy = {true} smooth={true} duration={500}>HOME</Link>
          <Link to="services" spy = {true} smooth={true} duration={500}>SERVICES</Link>
          <Link to="about" spy = {true} smooth={true} duration={500}>ABOUT</Link>
          <Link to="contact" spy = {true} smooth={true} duration={500}>CONTACT</Link>

        </div>
      </div>

      <div className="hamburger" onClick={()=> setShow(!show)}>
        <GiHamburgerMenu />
      </div>
      

    </nav>
  );
}
