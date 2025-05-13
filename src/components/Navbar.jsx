import { AiOutlineHeart } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.svg";
import MenuBar from "./MenuBar";
import {  FaTelegram, FaWhatsapp } from "react-icons/fa";
import { styles } from "../styles/styles";
import Search from "./Search";
export default function Navbar() {
  return (
    <nav>
      <div className="py-[25px] ">
        <div className={`${styles.container} flex justify-between items-center`}>
          <div className="flex items-center gap-2">
            <Link className="flex gap-2 items-center" to={"/"}>
              <img src={logo} alt="" />
              <span className="w-[148px] font-[500] leading-[14px] text-[12px] text-[#70798E]">
                Поставщик продуктов для HoReCa
              </span>
            </Link>
          </div>
          <MenuBar />
          <ul className="flex gap-3 items-center">
            <li>
              <Link className="text-[24px] text-[#203686]">
                <FaTelegram />
              </Link>
            </li>
            <li>
              <Link className="text-[24px] text-[#203686]">
                <FaWhatsapp />
              </Link>
            </li>
            <li>
              <a
                href="tel:84956378228"
                className="text-[18px] font-[700] leading-[100%] text-[#203686]"
              >
                8 (495) 637-82-28
              </a>
              <span className="block text-[10px] text-[#70798E] font-[600] leading-[10%] mt-[5px]">
                заказать звонок
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-[#203686] py-[12px]">
        <div
          className={`${styles.container} flex justify-between items-center`}
        >
          <div className="flex items-center justify-between gap-[30px]">
            <button className=" flex items-center gap-3 text-[16px] text-white font-[600] leading-[120%] cursor-pointer">
              <CgMenuGridO />
              Каталог товаров
            </button>
            <Search/>
         
          </div>
          <ul className="flex items-center gap-[42px]">
            <li>
              <Link className="relative font-semibold flex items-center gap-1 text-white text-[16px] leading-[120%]">
                <AiOutlineHeart className="text-[24px]" />
                Избранное
                <span className="absolute top-[-16px] left-[10px] px-2 py-0.5 bg-yellow-400 text-black text-xs rounded-full">
                  0
                </span>
              </Link>
            </li>
            <li>
              <Link className="relative font-semibold flex items-center gap-1 text-white text-[16px] leading-[120%]">
                <AiOutlineHeart className="text-[24px]" />
                Избранное
                <span className="absolute top-[-16px] left-[10px] px-2 py-0.5 bg-yellow-400 text-black text-xs rounded-full">
                  0
                </span>
              </Link>
            </li>
            <button className=" ml-[32px] text-[16px] font-[600] leading-[120%] text-white cursor-pointer">
              Вход
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
