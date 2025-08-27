"use client";

import { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // отключаем скролл
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 xl:bg-black/90"
      onClick={handleBackdropClick}
    >
      <div className="xl:shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)] z-10 overflow-hidden  bg-[#0C0117] rounded-2xl xl:rounded-[28px] shadow-xl w-[393px] xl:w-[410px] relative px-[42px] pb-[41px] xl:pb-[73px] pt-[157px] xl:pt-[90px]">
        <button
          onClick={onClose}
          className="absolute top-[32px] right-[28px] text-white hover:text-black text-3xl font-bold"
        >
          ✕
        </button>
        {children}
        <div
          className="absolute bottom-[41px] right-[-100px] xl:hidden"
          style={{
            width: "184.357px",
            height: "173.591px",
            flexShrink: 0,
            background: "#A75DF3",
            filter: "blur(144.6593px)",
            borderRadius: "50%",
          }}
        ></div>
        <div
          className="absolute top-[221px] left-[-131px] xl:hidden"
          style={{
            width: "184.357px",
            height: "173.591px",
            flexShrink: 0,
            background: "#13B8FF",
            filter: "blur(144.6593px)",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
}
