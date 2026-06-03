import IconEmail from "../assets/icon_email.svg?react";
import IconLinkedIn from "../assets/icon_linkedin.svg?react";
import IconLocation from "../assets/icon_location.svg?react";
import "../styles/Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-phrase">
          <h1>{t("contact.phrase")}</h1>
        </div>
        <div className="contact-item">
          <IconEmail className="icon" />
          <p>elenajuanaserrano@gmail.com</p>
        </div>
        <div className="contact-item">
          <IconLinkedIn className="icon" />
          <a href="https://www.linkedin.com/in/elena-juana-serrano-933a4b250/" target="_blank" 
          rel="noopener noreferrer"> {t("contact.linkedin")} </a>
        </div>
        <div className="contact-item">
          <IconLocation className="icon" />
          <p>{t("contact.location")}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;