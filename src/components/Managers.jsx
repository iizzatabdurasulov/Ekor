import React from "react";
import { styles } from "../styles/styles";
import { managers } from "../constants/data";

export default function Managers() {
  return (
    <div
      className={`${styles.container} bg-white flex gap-[25px] justify-between mt-[80px] rounded-[20px] p-[40px] `}
    >
      <div className="w-[413px]">
        <h4 className={`${styles.h2Title} text-[#203686]`}>
          Выберите себе менеджера
        </h4>
        <p className="font-[500] text-[14px] leading-[130%] text-[#203686] pt-[20px] pb-[124px] ">
          В нашем отделе продаж трудится более 20 высококвалифицированных
          сотрудников! Найдите своего персонального менеджера, который поможет
          вам сделать правильный выбор.
        </p>
        <button className={`${styles.buttonPrimary}`}>Заказать звонок</button>
      </div>
      <div className="grid grid-cols-4 gap-[30px]">
        {managers.map(({ id, name, image }) => {
          return (
            <div className="text-center " key={id}>
              <img src={image} alt="" />
              <h3 className="font-[600] text-[16px] pt-[10px] text-[#203686] leading-[120%] ">
                {name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
