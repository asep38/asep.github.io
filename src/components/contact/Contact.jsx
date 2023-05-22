import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_eo1trwj",
      "template_acwli5o",
      form.current,
      "KJ_0_CIlQjy-UIJd8"
    );
    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMailOutline className="contact__option-icon" />
              <h4>Email</h4>
              <h5>asepzarkasihnoor38@gmail.com</h5>
              <a
                href="mailto:asepzarkasihnoor38@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                send a message
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>asepzarkasihnoor</h5>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                send a message
              </a>
            </article>
            <article className="contact__option">
              <ImWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+62 81311713953</h5>
              <a
                href="https://api.whatsapp.com/send?phone=08123456789"
                target="_blank"
                rel="noreferrer"
              >
                send a message
              </a>
            </article>
          </div>
          {/* end of contact */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              id=""
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
