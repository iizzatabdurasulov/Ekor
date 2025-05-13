import React from "react";
import { styles } from "../styles/styles";
import delivery from "../assets/image/delivery.png";
export default function Delivery() {
  return (
    <div className={`${styles.container} mt-[80px]`}>
      <div className="flex  justify-between ">
        <span className={`${styles.span}`}>Доставка</span>
        <div className=" flex flex-col w-[800px] justify-end">
          <h2 className={`${styles.h2Title}  text-[#203686]`}>
            Эффективная доставка
          </h2>
          <div className="flex gap-[10px] w-[680px]  mt-[10px]">
            <p className="font-[500] text-[14px] leading-[20px] text-[#203686] ">
              Наша служба доставки предлагает гибкие условия. Мы гарантируем
              быструю доставку в Москве и области на следующий день
              после оформления заказа.{" "}
            </p>
            <p className="font-[500] text-[14px] leading-[20px] text-[#203686] ">
              Технология GPS обеспечивает точный мониторинг вашего заказа,
              позволяя вам всегда быть в курсе его местоположения на карте.
            </p>
          </div>
          <ul className="flex justify-between my-[70px]">
            <li
              className={`${styles.li} relative border-t border-[#DDE1E6] pt-[28px]  font-[600] text-[18px] text-[#203686] leading-[120%]`}
            >
              Доставка от 50 кг по Мосвке и области
            </li>
            <li
              className={`${styles.li} relative border-t border-[#DDE1E6] pt-[28px]  font-[600] text-[18px] text-[#203686] leading-[120%]`}
            >
              Доставка от 50 кг по Мосвке и области
            </li>
            <li
              className={`${styles.li} relative border-t border-[#DDE1E6] pt-[28px]  font-[600] text-[18px] text-[#203686] leading-[120%]`}
            >
              Доставка от 50 кг по Мосвке и области
            </li>
          </ul>
          <img src={delivery} alt="" />
        </div>
      </div>
    </div>
  );
}
