import React from "react";
import item from "../assets/image/item.png";
import { styles } from "../styles/styles";
import { FaWhatsapp } from "react-icons/fa";

export default function Items() {
  return (
    <div
      className={`${styles.container} flex justify-between items-center pt-[20px] `}
    >
      <div
        style={{ backgroundImage: `url(${item})` }}
        className="rounded-[20px] bg-center object-fill bg-no-repeat px-[20px] py-[20px]"
      >
        <h3 className="text-[24px] font-[600] leading-[120%] text-[#203686] ">
          Чат-бот цен на все наши продукты питания
        </h3>
        <p className="text-[14px] font-[500] leading-[130%] text-[#203686] pb-[24px] pt-[6px] ">
          Узнайте наши цены за пару секунд без писем и звонков менеджеру
        </p>
        <button className="bg-[#4ADD47] rounded-[10px] text-[14px] text-white font-[600] leading-[110%] px-[15.5px] py-[11.5px] cursor-pointer flex items-center gap-[8px]">
          <FaWhatsapp /> Whatsapp
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${item})` }}
        className="rounded-[20px] bg-center object-fill bg-no-repeat px-[20px] py-[20px]"
      >
        <h3 className="text-[24px] font-[600] leading-[120%] text-[#203686] ">
          Чат-бот цен на все наши продукты питания
        </h3>
        <p className="text-[14px] font-[500] leading-[130%] text-[#203686] pb-[24px] pt-[6px] ">
          Узнайте наши цены за пару секунд без писем и звонков менеджеру
        </p>
        <button className="bg-[#4ADD47] rounded-[10px] text-[14px] text-white font-[600] leading-[110%] px-[15.5px] py-[11.5px] cursor-pointer flex items-center gap-[8px]">
          <FaWhatsapp /> Whatsapp
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${item})` }}
        className="rounded-[20px] bg-center object-fill bg-no-repeat px-[20px] py-[20px]"
      >
        <h3 className="text-[24px] font-[600] leading-[120%] text-[#203686] ">
          Чат-бот цен на все наши продукты питания
        </h3>
        <p className="text-[14px] font-[500] leading-[130%] text-[#203686] pb-[24px] pt-[6px] ">
          Узнайте наши цены за пару секунд без писем и звонков менеджеру
        </p>
        <button className="bg-[#4ADD47] rounded-[10px] text-[14px] text-white font-[600] leading-[110%] px-[15.5px] py-[11.5px] cursor-pointer flex items-center gap-[8px]">
          <FaWhatsapp /> Whatsapp
        </button>
      </div>
    </div>
  );
}
