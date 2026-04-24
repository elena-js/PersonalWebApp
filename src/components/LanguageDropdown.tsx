import { useState } from "react";
import { useTranslation } from "react-i18next";
import IconLanguage from "../assets/icon_language.svg?react";
import '../styles/LanguageDropdown.css';

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const languages = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" }
  ];
  const current = languages.find(l => l.code === i18n.language) || languages[0];
  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="lang-dropdown">
      <button
        className="lang-trigger"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <IconLanguage className="icon" />
        {current.label}
      </button>

      {open && (
        <div className="lang-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-item ${i18n.language === lang.code ? "active" : ""}`}
              onClick={() => changeLang(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}