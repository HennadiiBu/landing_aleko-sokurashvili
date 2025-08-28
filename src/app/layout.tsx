import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

import { ModalProvider } from "@/components/context/ModalContext";
import { ModalWrapper } from "@/components/Modal/ModalWrapper";

export const metadata: Metadata = {
  title: "Aleko Sokurashvili",
  description: "Aleko Sokurashvili - секреты вирусный идей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" flex-col justify-center items-center  py-[51px] xl:py-[40px] overflow-x-hidden overflow-y-visible w-full relative">
        <ModalProvider>
          <header className="w-full flex justify-center  mb-[24px] xl:mb-[67px]">
            <Header />
          </header>
          <main className="flex flex-col justify-center items-center">
            {children}
          </main>
          <ModalWrapper />
        </ModalProvider>
      </body>
    </html>
  );
}

