import React from "react";
import "./about.css";
import ME from "../../assets/img/ffp-2.png";
import { FaAward, FaUserFriends, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="saya" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              {/* <article className="about__card">
                <FaUserFriends className="about__icon" />
                <h5>Client</h5>
                <small>200+ World Wide</small>
              </article> */}

              <article className="about__card">
                <FaFolderOpen className="about__icon" />
                <h5>Project</h5>
                <small>100+ Project</small>
              </article>
            </div>

            <p>
              As a full-stack developer, I have gained proficiency in front-end
              technologies like HTML, CSS, and JavaScript, as well as back-end
              technologies like Node.js and databases. I am experienced in
              developing responsive web interfaces, building RESTful APIs, and
              deploying applications to cloud platforms.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
