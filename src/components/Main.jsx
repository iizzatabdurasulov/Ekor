import React from "react";
import { main } from "../constants/data";
import { styles } from "../styles/styles";

export default function Main() {
  return (
    <div className={`${styles.container} mt-[80px]`}>
      <div className="flex gap-[141px] justify-between ">
        <span className={`${styles.span}`}>Самое главное</span>
        <h2 className={`${styles.h2Title}   text-[#203686]`}>
          Наш опыт и репутация — это самое главное
        </h2>
      </div>
      <div className="flex mt-[40px] flex-wrap justify-between gap-[20px]">
        {main.map((item) => (
          <div
            key={item.id}
            className={`${item.width}  bg-white rounded-[20px] p-[20px]`}
          >
            <span className="font-[500] text-[12px] leading-[14px] text-[#70798E] ">
              {item.id}
            </span>
            <h3 className="font-[600] mt-[8px] leading-[120%] text-[#203686] text-[24px]">
              {item.title}
            </h3>

            <p className="mt-[80px] font-[500] text-[14px] text-[#70798E] leading-[130%] ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
