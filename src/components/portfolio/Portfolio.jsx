import React from "react";
import "./portfolio.css";

// import { useNavigate } from "react-router-dom";

// img
import IMG1 from "../../assets/img-portfolio/sepatu-2.png";
import IMG2 from "../../assets/img-portfolio/hajj-2.png";
import IMG3 from "../../assets/img-portfolio/dreamhouse-2.png";

// portfolio

// do not use the image in product

const data = [
  {
    id: 1,
    image: IMG1,
    tittle: "Landing Page E-Commers Shoes",
    github: "https://github.com/asep38/joyboy.github.io",
    demo: "https://asep38.github.io/joyboy.github.io/",
  },
  {
    id: 2,
    image: IMG2,
    tittle: "Tour Hajj & Umroh",
    github: "https://github.com/asep38/tourhajj.github.io",
    demo: "https://asep38.github.io/tourhajj.github.io/",
  },
  {
    id: 3,
    image: IMG3,
    tittle: "Dream House",
    github: "https://github.com/asep38/house.github.io.git",
    demo: "https://asep38.github.io/house.github.io/",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, tittle, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{tittle}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
