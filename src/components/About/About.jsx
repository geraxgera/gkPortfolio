import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpeg";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>Über mich</h3>
        <p>
          Mein Name ist German Konradi. Ich habe mein Studium/Diploma als
          Webdesigner-/entwickler beim SAE Institute München absolviert. In
          meiner Freizeit lese ich gerne, fotografiere und informiere mich noch
          tiefer über das Coding. Ich bin verheiratet und habe ein Kind. Seit
          meiner Kindheit versuchte ich immer der Berufswünsche meiner Eltern,
          so wie es die meisten machen, zu folgen. Dadurch habe ich viele
          verschiedene Bereiche ausprobiert, war aber nie richtig zufrieden mit
          dem was ich mache und kam zu dem Entschluss, meinen eigenen Träumen zu
          folgen und startete somit das Studium.
        </p>
        <a href="mailto:gera.konradi@gmail.com">
          <h1 className="email">gera.konradi@gmail.com</h1>
        </a>
      </div>
    </div>
  );
};

export default About;
