"use client";
import { useModal } from "../context/ModalContext";
import { navigationItems } from "../Header/Header";
import Modal from "./Modal";

export const ModalWrapper = () => {
  const { modalType, closeModal } = useModal();

  if (!modalType) return null;

  return (
    <>
      {modalType === "feedback" && (
        <Modal isOpen={true} onClose={closeModal}>
          <h2 className="text-white text-center font-raleway text-[24px] font-bold uppercase mb-[36px] xl:mb-[36px]">
            Укажите свои данные
          </h2>
          <div className="flex flex-col gap-[18px]">
            <input
              type="text"
              placeholder="Имя"
              className="bg-white h-[46px] rounded-[14px] pl-[20px]"
            />
            <input
              type="text"
              placeholder="Ник Telegram"
              className="bg-white h-[46px] rounded-[14px] pl-[20px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white h-[46px] rounded-[14px] pl-[20px]"
            />
          </div>
          <div className="rounded-[12px] w-[317px] h-[50px] mt-[366px] xl:mt-[40px] p-[2px] bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] to-[#E56F8C]">
            <button className="w-full h-full rounded-[10px] bg-white text-black text-[14px] font-semibold">
              Отправить
            </button>
          </div>
        </Modal>
      )}

      {modalType === "nav" && (
        <Modal isOpen={true} onClose={closeModal}>
          <nav className="flex flex-col ">
            <ul className="flex flex-col gap-[10px] items-center">
              {navigationItems.map((item) => (
                <li
                  key={item.id}
                  className="text-white text-base cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </nav>
        </Modal>
      )}
    </>
  );
};
