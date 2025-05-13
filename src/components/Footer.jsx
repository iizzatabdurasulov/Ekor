import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import React from "react";
import { styles } from "../styles/styles";
import { Link } from "react-router-dom";
import logo from "../assets/image/whiteLogo.svg";
import { footerLinks } from "../constants/data";
export default function Footer() {
  return (
    <div className="bg-[#203686] mt-[80px] py-[60px]">
      <div className={`${styles.container} `}>
        <div className="flex justify-between ">
          <div className="flex flex-col gap-[32px]">
            <Link className=" w-[385px] flex gap-[10px] font-500] text-[12px] leading-[120%] text-[#fff] ">
              <img src={logo} alt="Ekor" />
              Поставки продуктов питания оптом для ресторанов, маркетов,
              оптовиков
            </Link>
            <span className=" font-[400] text-[16px] leading-[145%] text-white ">
              Адрес: г. Москва, Открытое шоссе, 13, стр. 1
            </span>
            <span className=" font-[400] text-[16px] leading-[145%] text-white ">
              E-mail: info@ekorfish.ru
            </span>
            <span className="font-[700] text-[24px] leading-[24px] text-white ">
              +7 (495) 637-82-28
            </span>
            <div className="flex gap-[10px]">
              <FaTelegram className="text-[24px] text-[#fff]" />
              <IoLogoWhatsapp className="text-[24px] text-[#fff]" />
            </div>
          </div>
          {footerLinks.map(({ id, title, links }) => {
            return (
              <div key={id}>
                <h5 className="font-[500] text-[16px] leading-[145%] text-[#F4F7FB]">
                  {title}
                </h5>
                <ul className="flex flex-col gap-[16px] mt-[24px]">
                  {links.map(({ id, name }) => {
                    return (
                      <li key={id}>
                        <Link className="font-[500] text-[16px] leading-[145%] text-[#F4F7FB]">
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
