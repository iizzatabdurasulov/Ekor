import React from "react";
import { supplies } from "../constants/data";
import { styles } from "../styles/styles";

export default function Supplies() {
  return (
    <div className={`${styles.container} mt-[40px]`}>
      <div className="flex gap-[141px] justify-between ">
        <span className={`${styles.span}`}>Универсальные поставки</span>
        <h2 className={`${styles.h2Title} w-[800px]  text-[#203686]`}>
          Мы специализируемся на поставках для различных сфер бизнеса
        </h2>
      </div>
      <div className="grid bg-white p-[20px] rounded-[20px] mt-[40px] grid-cols-2 gap-[20px]">
        {supplies.map(({ id, title, img }) => {
          return (
            <div key={id} className="flex  gap-[20px]">
              <img
                className=" border-b-[1px] border-[#DDE1E6] pb-[20px] "
                src={img}
                alt={title}
              />
              <div className="flex p-[20px] flex-col justify-between  border-l-[1px] border-r-[1px] border-[#DDE1E6] ">
                <span className="font-[500] text-[14px] leading-[20px] text-[#70798E] ">
                  0{id}
                </span>
                <h3 className="font-[600] text-[18px] text-[#203686] leading-[120%] ">
                  {title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
