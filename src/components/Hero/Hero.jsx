import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  const scrollToWorks = () => {
    const worksSection = document.getElementById("contact");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Hallo, mein Name ist <br /> German Konradi</h1>
        <p>Ich bin Web Developer</p>
        <button id="works-section" className="btn" onClick={scrollToWorks}>
          Kontaktiere mich <img src={dark_arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;


