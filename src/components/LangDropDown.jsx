import React, { useState, useRef, useEffect } from "react";
import { IoLanguage } from "react-icons/io5";
import { languages } from "../constants/data";
import i18n from "../i18n/i18n";

export default function LangDropDown() {
  const [isLang, setIsLang] = useState("RU");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeLang = (lang) => {
    setIsLang(lang);
    setIsOpen(false);

    i18n.changeLanguage(lang)
  };

  return (
    <div ref={dropdownRef} className="relative z-[11]">
      <ul>
        <li
          className="border-2 flex items-center gap-[10px] cursor-pointer hover:bg-blue-950 hover:border-blue-950 border-white rounded-sm py-[5px] px-[10px] text-white text-[14px] font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoLanguage /> <span className="uppercase">{isLang}</span>
        </li>
        {isOpen && (
          <ul className="absolute bg-[#203686] left-[50%] translate-x-[-50%] top-[48px]">
            {languages.map((lang, index) => (
              <li
                key={index}
                onClick={() => handleChangeLang(lang)}
                className={` uppercase text-[14px] text-white px-[30px] py-[10px] font-medium cursor-pointer ${
                  isLang === lang ? "bg-blue-950" : "hover:bg-blue-950"
                }`}
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
}
