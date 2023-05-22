import React from "react";
import "./footer.css";
import { GrFacebook, GrInstagram, GrYoutube } from "react-icons/gr";

const footer = () => {
  return (
    <>
      <footer>
        <a href="#" className="footer__logo">
          Asep Zarkasih
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimoni">Testimoni</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebok.com/asep.laki.1" rel="noreferrer">
            <GrFacebook />
          </a>
          <a
            href="https://instagram.com/asepzarkasihnoor?igshid=MzRlODBiNWFlZA=="
            rel="noreferrer"
          >
            <GrInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCnOL7WkjPcMmRFuZM4j_KaQ"
            rel="noreferrer"
          >
            <GrYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Asep Zarkasih. All right Reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default footer;
