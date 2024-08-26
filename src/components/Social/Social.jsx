// src/social.jsx
import React, { useState } from "react";
import "./Social.css";
import InstagramImg from "../../assets/instagram.png";
import LinkedinImg from "../../assets/linkedin.png";
import GithubImg from "../../assets/github.png";

const Social = () => {
  const slides = [
    { id: 1, url: InstagramImg, link: "https://www.instagram.com/geraxgera/" },
    { id: 2, url: LinkedinImg, link: "https://www.linkedin.com/in/german-konradi-962860206" },
    { id: 3, url: GithubImg, link: "https://github.com/geraxgera" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="social">
      <button className="social-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide">
        <a href={slides[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <img src={slides[currentIndex].url} alt={`Slide ${currentIndex + 1}`} />
        </a>
      </div>
      <button className="social-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Social;
