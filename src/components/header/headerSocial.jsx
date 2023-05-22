import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const headerSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/asep-zarkasih-noor-2553b524b/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/asep38" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default headerSocial;
