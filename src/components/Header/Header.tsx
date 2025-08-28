"use client";
import React from "react";
import { useModal } from "../context/ModalContext";

export const navigationItems = [
  { id: 1, title: "Структура" },
  { id: 2, title: "Обо мне" },
  { id: 3, title: "Плюсы" },
  { id: 4, title: "Отзывы" },
  { id: 5, title: "FAQ" },
];

const languageItems = [
  { id: 1, title: "RU" },
  { id: 2, title: "EN" },
];

const Header = () => {
  
   const { openModal } = useModal();

  return (
    <div className="flex justify-between items-center py-[8.5px]  px-[40px] xl:px-[80px] max-w-[393px] xl:max-w-[1280px] l:max-w-[768px] w-full">
      <div className="flex gap-[2px]">
        <p className="font-logo text-base font-bold uppercase text-white">
          Aleko
        </p>
        <p className="text-center font-logo font-bold text-base uppercase bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#E56F8C] bg-clip-text text-transparent">
          Sokurashvili
        </p>
      </div>
      <nav className="min-xs:hidden min-l:block">
        <ul className="flex xl:gap-[28px] l:gap-[16px] items-center">
          {navigationItems.map((item) => (
            <li key={item.id} className="text-white text-base cursor-pointer">
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <select name="lang" className="text-white">
        {languageItems.map((item) => (
          <option
            key={item.id}
            value={item.title}
            className="  text-black font-bold text-sm leading-[20px] bg-black/0"
          >
            {item.title}
          </option>
        ))}
      </select>
      <button
      onClick={() => openModal("nav")}
        aria-label="menu button"
        className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer l:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={31}
          height={21}
          viewBox="0 0 31 21"
          fill="none"
        >
          <path
            d="M2.375 1.75H28.625M2.375 10.5H28.625M2.375 19.25H28.625"
            stroke="white"
            strokeWidth={2.91667}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={() => openModal("feedback")}
        className="cursor-pointer max-xl:hidden flex w-[190px] h-[40px] px-4 justify-center items-center gap-2 rounded-full bg-[linear-gradient(90deg,#5BDBFD_0.26%,#7375FF_51.07%,#DF93FF_100.96%,#E56F8C_126.34%)] text-white font-raleway text-[12px] font-semibold leading-5"
      >
        Купить со скидкой
      </button>
    </div>
  );
};

export default Header;
