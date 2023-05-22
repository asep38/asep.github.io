import React, { useEffect, useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/img/ffp-1.png";
import HeaderSocial from "./headerSocial";
import { TweenMax, Power3 } from "gsap";

const Header = () => {
  let me = useRef(null);

  useEffect(() => {
    TweenMax.from(me, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Asep Zarkasih</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
