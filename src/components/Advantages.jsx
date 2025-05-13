import React from "react";
import { styles } from "../styles/styles";
import { advantages } from "../constants/data";

export default function Advantages() {
  return (
    <div className={`${styles.container} mt-[80px]`}>
      <div className="flex gap-[141px] justify-between ">
        <span className={`${styles.span}`}>Преимущества</span>
        <h2 className={`${styles.h2Title}   text-[#203686]`}>
          Специальные предложения для новых клиентов
        </h2>
      </div>

      {advantages.map(({ id, title, description }) => {
        return (
          <div
            key={id}
            className="flex justify-between items-center mt-[40px] border-t border-[#20368633] pt-[16px]"
          >
            <span className="text-[#202329] font-[500] text-[12px] leading-[14px] ">
              0{id}
            </span>
            <div className="flex gap-[97px] items-center">
              <h4 className="font-[600] w-[384px] text-[18px] leading-[130%] text-[#203686] ">
                {title}
              </h4>
              <p className="font-[500] w-[351px] text-[#203686] leading-[130%] text-[14px] ">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
