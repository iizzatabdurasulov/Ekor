import React from "react";
import { menuBar } from "../constants/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MenuBar() {
  const { t } = useTranslation();

  return (
    <ul className="flex gap-4 items-center">
      {menuBar.map(({ id, linkName, slug }) => (
        <li key={id}>
          <Link
            className="font-[600] text-[14px] text-[#203686] leading-[20px]"
            to={slug}
          >
            {t(linkName)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
