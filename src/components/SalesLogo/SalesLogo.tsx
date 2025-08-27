import React from "react";

type Props = {
  quantity: number;
};

const SalesLogo = (props: Props) => {
  return (
    <div className="absolute right-0 text-white font-raleway text-[20px] font-semibold leading-[25.521px] not-italic flex flex-col w-[59px] h-[60px] xl:w-[74px] xl:h-[74px] px-[6.448px] py-[10.551px] justify-center items-center gap-[5.861px] flex-shrink-0 rounded-[30px] bg-[#FF4A77]">{`-${props.quantity}%`}</div>
  );
};

export default SalesLogo;
