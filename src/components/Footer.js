import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-copyright">
        ©︎ 2021 Yuichiro Toyama - All Rights Reserved
      </div>
      <div class="footer-links">
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
