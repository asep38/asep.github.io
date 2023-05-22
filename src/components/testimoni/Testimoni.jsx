import React from "react";
import "./testimoni.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// data avatar

const ava = [
  {
    id: 1,
    name: "clara",
    image: AVTR1,
    riview:
      "It has been an incredible experience working with Asep as a freelance web developer. I am extremely pleased with the outcome and would like to share this testimonial.",
  },
  {
    id: 2,
    name: "Joe",
    image: AVTR2,
    riview:
      "Thank you, Asep, for your dedication and hard work. I look forward to the possibility of working together again in the future",
  },
  {
    id: 3,
    name: "Mike",
    image: AVTR3,
    riview:
      "I wholeheartedly recommend Asep to anyone in search of a freelance web developer. They possess strong technical skills, a deep understanding of effective web design, and the ability to deliver solutions that meet client requirements",
  },
  {
    id: 4,
    name: "Karin",
    image: AVTR4,
    riview:
      "Furthermore, Asep has been highly responsive in communication. They patiently addressed my inquiries, provided regular updates, and kept me engaged in every step of the development process.",
  },
];

const Testimoni = () => {
  return (
    <>
      <section id="testimoni">
        <h5>Review From Client</h5>
        <h2>Testimoni</h2>

        <Swiper
          className="container testimoni__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {ava.map(({ id, image, name, riview }) => {
            return (
              <SwiperSlide key={id} className="testimoni">
                <div className="client__avatar">
                  <img src={image} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{riview}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimoni;
