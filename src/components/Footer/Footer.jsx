import React from "react";
import "./Footer.css";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>•2024 Konradi German. All rights reserved.•</p>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/geraxgera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/german-konradi-962860206"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
