import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5841efc3-e86f-4c61-936e-8e87a3badfc1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formular erfolgreich eingereicht");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Schick mir eine Nachricht <img src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          Wenn Sie Fragen oder Anregungen haben oder ein Projekt besprechen
          möchten, füllen Sie bitte das untenstehende Formular aus und ich werde
          mich so schnell wie möglich mit Ihnen in Verbindung setzen.
          <ul>
            <li>
              {" "}
              <img src={mail_icon} alt="" />
              gera.konradi@gmail.com
            </li>
            <li>
              {" "}
              <img src={phone_icon} alt="" />
              +4917632358381
            </li>
            <li>
              {" "}
              <img src={location_icon} alt="" />
              Deutschland, Bayern <br /> 94315, Straubing
            </li>
          </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Deine Name</label>
          <input
            type="text"
            name="name"
            placeholder="Schreib deine Name"
            required
          />
          <label>Telefonnummer</label>
          <input
            type="tel"
            name="phone"
            placeholder="Geben Sie Ihre Mobiltelefonnummer ein"
            required
          />
          <label>Schreib deine Nachrich hier</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Schreibe deine Nachricht hier"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Absenden <img src={white_arrow} alt="" />{" "}
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
