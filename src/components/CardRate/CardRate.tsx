import React from "react";
import BlackLight from "../BlackLight/BlackLight";
import { useModal } from "../context/ModalContext";

type Props = {
  bgColor: string;
  textColor: string;
  level: string;
  levelField?: string;
  price: string;
  oldPrice: string;
  servList: string[];
  bestSeller: boolean;
  buyBtnText: string;
  buyBtnBg: string;
};

const CardRate = (props: Props) => {
  const { openModal } = useModal();

  return (
    <div
      style={{ background: props.bgColor, color: props.textColor }}
      className="l:h-[466px] relative z-0 flex flex-col justify-between items-center gap-[22px] py-[22px] px-[24px] min-h-[430px] self-stretch rounded-[28px] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.20)]"
    >
      {props.bgColor === "#0C0117" && (
        <BlackLight additioanClassName={"left-[-86px] top-[358px]"} />
      )}
      <div className="flex flex-col gap-[29px]">
        <div className="flex justify-between items-center">
          <p className="font-raleway text-[16px] font-semibold uppercase">
            {props.level}
          </p>

          {props.levelField && (
            <div
              className={`${
                props.bgColor === "#FFFFFF" ? "bg-[#0C0117]" : "bg-white"
              } font-raleway text-[16px] font-bold uppercase flex w-[100px] h-[42px] px-[34px] py-[10px] justify-center items-center rounded-[18px] border border-current`}
            >
              <p className="bg-[linear-gradient(126deg,_#5BDBFD_16.95%,_#7375FF_79.54%,_#DF93FF_140.99%,_#E56F8C_172.25%)] bg-clip-text text-transparent ">
                {props.levelField}
              </p>
            </div>
          )}
        </div>

        <div className="h-[93px] w-[223px] flex gap-[22px] items-end-safe justify-between">
          <p className="h-[79px] font-manrope text-[64px] font-bold uppercase">
            {props.price}
          </p>
          <p className="font-manrope text-[20px] font-bold uppercase line-through opacity-70">
            {props.oldPrice}
          </p>
        </div>

        <ul className="space-y-2">
          {props.servList.map((item, index) => (
            <li key={index} className="flex gap-[14px] items-center">
              <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
              <div className="font-raleway text-[16px] font-semibold uppercase leading-[1.4]">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => openModal("feedback")}
        style={{ background: props.buyBtnBg, color: props.buyBtnText }}
        className={`cursor-pointer w-[248px]  font-manrope text-[14px] font-semibold flex h-[47px] justify-center items-center rounded-[18px]`}
      >
        Купить
      </button>

      {props.bestSeller && (
        <div
          style={{
            background:
              "linear-gradient(126deg,#5BDBFD 16.95%,#7375FF 79.54%,#DF93FF 140.99%,#E56F8C 172.25%)",
          }}
          className={`absolute -top-[21px] left-1/2 -translate-x-1/2 text-white font-raleway text-[16px] font-bold uppercase w-[169px] h-[42px] flex justify-center items-center rounded-[18px] shadow-[0_4px_16px_1px_rgba(0,0,0,0.25)]`}
        >
          Best seller
        </div>
      )}
    </div>
  );
};

export default CardRate;
