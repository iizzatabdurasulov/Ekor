import React from "react";
import { menuBar } from "../constants/data";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <ul className="flex gap-4 items-center">
      {menuBar.map(({ id, linkName, slug }) => {
        return (
          <li key={id}>
            <Link
              className="font-[600] text-[14px] text-[#203686] leading-[20px]
 "
              to={slug}
            >
              {linkName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
