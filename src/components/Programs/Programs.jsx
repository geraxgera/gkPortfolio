import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import { useState } from "react";

function Programs() {
  const [popupText, setPopupText] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = (text) => {
    setPopupText(text);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div
          className="caption"
          onClick={() =>
            openPopup(
              <p className="design">
                Als Webdesigner lege ich großen Wert auf Ästhetik und
                Benutzerfreundlichkeit. Mein Ziel ist es, visuell ansprechende
                und intuitive Designs zu erstellen, die nicht nur gut aussehen,
                sondern auch ein nahtloses Benutzererlebnis bieten. Ich arbeite
                eng mit meinen Kunden zusammen, um ihre Visionen in digitale
                Kunstwerke zu verwandeln, die ihre Marke repräsentieren und die
                Aufmerksamkeit ihrer Zielgruppe fesseln. Meine Designs sind
                responsive und für alle Endgeräte optimiert, sodass sie sowohl
                auf dem Desktop als auch auf mobilen Geräten perfekt dargestellt
                werden. Ich nutze aktuelle Designtrends und bewährte Methoden,
                um Websites zu gestalten, die sowohl zeitlos als auch modern
                sind.
              </p>
            )
          }
        >
          <img src={program_icon_1} alt="" />
          <h3>Web Design</h3>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div
          className="caption"
          onClick={() =>
            openPopup(
              <p className="design">
                In der Webentwicklung setze ich auf leistungsstarke Technologien
                wie HTML, CSS und JavaScript, um dynamische und interaktive
                Webseiten zu erstellen. Mit React entwickle ich fortschrittliche
                Frontend-Lösungen, die eine schnelle und reibungslose
                Benutzererfahrung ermöglichen. Tailwind CSS hilft mir dabei,
                maßgeschneiderte und flexible Layouts zu gestalten, die sowohl
                funktional als auch ästhetisch ansprechend sind. Dank meiner
                Erfahrung mit Node.js kann ich robuste Backend-Systeme
                entwickeln, die eine nahtlose Kommunikation zwischen Frontend
                und Server gewährleisten. Docker setze ich ein, um
                Entwicklungsumgebungen zu isolieren und die Bereitstellung von
                Anwendungen zu optimieren, was die Zuverlässigkeit und
                Skalierbarkeit meiner Projekte erhöht.
              </p>
            )
          }
        >
          <img src={program_icon_2} alt="" />
          <p>Development</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div
          className="caption"
          onClick={() =>
            openPopup(
              <p className="design">
                Neben den genannten Kerntechnologien arbeite ich mit einer
                Vielzahl weiterer Werkzeuge, um den Entwicklungsprozess zu
                optimieren und Projekte effizient zu realisieren. Ich nutze
                Versionierungstools wie Git, um Code sicher zu verwalten und die
                Zusammenarbeit im Team zu erleichtern. Mit CI/CD-Pipelines
                stelle ich sicher, dass Änderungen schnell und zuverlässig in
                Produktionsumgebungen überführt werden. Darüber hinaus
                beherrsche ich den Umgang mit verschiedenen APIs und bin in der
                Lage, diese nahtlos in Webprojekte zu integrieren. Mit einem
                breiten Spektrum an Tools und Technologien bin ich in der Lage,
                maßgeschneiderte Lösungen zu entwickeln, die exakt auf die
                Bedürfnisse meiner Kunden abgestimmt sind.
              </p>
            )
          }
        >
          <img src={program_icon_3} alt="" />
          <p>Weitere Tools</p>
        </div>
      </div>

      {/* Overlay */}
      {popupVisible && <div className="popup-overlay show" onClick={closePopup}></div>}

      {/* Popup */}
      {popupVisible && (
        <div className="popup show">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <p>{popupText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Programs;


