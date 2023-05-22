import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Landing Page</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Premium Landingpage Design (Custom Design)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>SEO On Page</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Security SSL (https)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Integration FB Pixel (optional)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Free after sales consultation via WhatsApp</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Can revise content</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Free hosting 1 year</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Free domain .com 1 year</p>
              </li>
            </ul>
          </article>
          {/* end of UI/UX */}
          {/* <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article> */}
          {/* end of Web Development */}
          <article className="service">
            <div className="service__head">
              <h3>Web Invitation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Invitation Cover</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Free to enter guest name</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Love Story</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Music Free Request</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Input 10 Foto</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Event Countdown</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Marriage Quotes</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Location Navigation</p>
              </li>
            </ul>
          </article>
          {/* end of Content Creator */}
        </div>
      </section>
    </>
  );
};

export default Services;
