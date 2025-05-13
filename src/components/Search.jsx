import { AiOutlineSearch } from "react-icons/ai";
import React from "react";

export default function Search() {
  return (
    <div className="relative">
      <button className="absolute top-[14px] left-[10px] text-[#969BA8] text-[20px] ">
        <AiOutlineSearch />
      </button>
      <input
        className="bg-white border-none rounded-[8px] pl-[40px]  py-[13px] font-[500] text-[gray] text-[14px] leading-[130%] w-[375px] outline-none"
        type="text"
        placeholder="Поиск"
      />
    </div>
  );
}
