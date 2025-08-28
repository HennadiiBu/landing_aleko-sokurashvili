"use client";
import BlackLight from "@/components/BlackLight/BlackLight";
import CardRate from "@/components/CardRate/CardRate";
import { useModal } from "@/components/context/ModalContext";

import SalesLogo from "@/components/SalesLogo/SalesLogo";
import Image from "next/image";

export default function Home() {
  const { openModal } = useModal();

  const dataForCard = [
    {
      id: 1,
      bgColor: "#0C0117",
      textColor: "#FFFFFF",
      level: "Базовый",
      price: "99$",
      oldPrice: "139$",
      servList: ["Базовый курс", "38 уроков"],
      bestSeller: false,
      levelField: "",
      buyBtnBg: "white",
      buyBtnText: "#0C0117",
    },
    {
      id: 2,
      bgColor: "#FFFFFF",
      levelField: "PRO",
      textColor: "#0C0117",
      level: "Продвинутий",
      price: "149$",
      oldPrice: "199$",
      servList: [
        "база",
        "дополнительные уроки",
        "48 уроков",
        "чат-комьюнити для создателей контента",
      ],
      bestSeller: true,
      buyBtnBg: "black",
      buyBtnText: "#FFFFFF",
    },
    {
      id: 3,
      bgColor:
        "linear-gradient(126deg,#5BDBFD 16.95%, #7375FF 79.54%, #DF93FF 140.99%, #E56F8C 172.25%)",
      textColor: "#FFFFFF",
      level: "ЭКСПЕРТ",
      levelField: "EXPERT",
      price: "299$",
      oldPrice: "500$",
      servList: [
        "дополнительные уроки",
        "48 уроков",
        "чат-комьюнити для создателей контента",
        "Разбор вашей страницы в формате видеозвонка",
      ],
      bestSeller: false,
      buyBtnBg: "black",
      buyBtnText: "#FFFFFF",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden flex justify-centermb-[132px] px-[40px] xl:px-[80px] xl:w-[1280px] w-full">
        <div className="flex flex-col l:flex-col l:gap-[42px] w-full  xl:w-[1280px] max-xl:items-center ">
          <div className=" l:flex l:gap-[40px]">
            <div className="relative">
              <div className="flex-shrink-0 rounded-[18px] w-[313px] h-[345px] xl:w-[644px] xl:h-[466px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_57.77%,rgba(0,0,0,0.7)_79.8%),url('/images/photo.webp')] bg-light-gray bg-center bg-cover bg-no-repeat"></div>
              <BlackLight
                additioanClassName={"right-[-50px] top-[75px]"}
                hidden={true}
              />
            </div>

            <BlackLight
              additioanClassName={"left-[-55px] top-[402px]"}
              hidden={true}
            />

            <div className="z-10 relative xl:flex xl:flex-col-reverse xl:gap-[15px]">
              <div className="mt-[-78px] l:mt-0 w-[313px]  xl:w-[396px] flex flex-col justify-center items-center l:flex-col-reverse">
                <div className="xl:flex xl:flex-col xl:ml-[0px]">
                  <p className="xl:text-left text-center font-raleway font-bold text-[20.926px] leading-normal not-italic self-stretch bg-[linear-gradient(91deg,#90E8FF_0.44%,#9C9EFF_69.99%,#E3A1FF_138.27%,#E56F8C_173.01%)] bg-clip-text text-transparent">
                    От 0 до 100,000 за 90 дней
                  </p>

                  <h1 className="xl:text-left xl:mb-0 xl:text-[96px] xl:not-italic xl:font-extrabold xl:leading-none text-white text-center font-raleway text-[48px] font-extrabold leading-normal uppercase not-italic mb-[32px]">
                    Секреты Вирусных Видео
                  </h1>
                </div>
                <p className=" xl:text-left w-[313px] xl:w-[396px] text-white text-center font-raleway text-[14px] xl:text-[18px] font-normal leading-normal not-italic mb-[44px]">
                  Станьте известным всего за 3 месяца без затрат на рекламу!
                  Узнайте ключ к созданию вирусного контента и превратите свои
                  идеи в миллионные просмотры.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col xl:items-center xl:justify-center">
              <button
                onClick={() => openModal("feedback")}
                className="cursor-pointer relative flex w-[313px] xl:w-[534px] h-[60px] xl:h-[74px] px-[17.276px] justify-center items-center gap-[8.638px] flex-shrink-0 rounded-[10796.277px] bg-white shadow-[inset_4.319px_6.478px_10.797px_4.319px_rgba(167,93,243,0.2)]"
              >
                <span className="text-[#000] font-raleway text-[14px] font-semibold leading-[21.595px] not-italic">
                  Купить со скидкой
                </span>
                <SalesLogo quantity={50} />
              </button>
              <div className="mt-[11px] flex gap-[10px] mx-auto xl:mx-0">
                <p className="  text-[#FF4A77] font-raleway text-[20px] font-semibold leading-[21.595px]">
                  2000 грн
                </p>
                <p className="  text-[#C5C5C5] font-raleway text-[14px] font-semibold leading-[21.595px] line-through">
                  1000 грн
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:relative flex  overflow-hidden flex-col items-center justify-center px-[40px] xl:px-[80px] xl:w-[1280px] w-full">
        <BlackLight
          additioanClassName={"right-[0px] top-[1000px]"}
          hidden={false}
        />
        <BlackLight
          additioanClassName={"left-[0px] top-[386px]"}
          hidden={false}
          zIndex={-2}
        />

        <Image
          src={"/images/ellipse.webp"}
          width={800}
          height={346}
          alt=""
          priority
          className="absolute right-0 top-[-200px] z-[-1] w-auto h-auto"
        />

        <h2 className="text-white text-center font-raleway text-[24px] font-bold leading-normal uppercase mb-[28px]">
          Тарифы
        </h2>
        <ul className="l:flex-row l:flex-wrap xl:flex-nowrap flex flex-col gap-[26px] items-center justify-center mb-[76px]  l:w-[768px]">
          {dataForCard.map((card) => (
            <li key={card.id} className="w-[313px] relative  xl:w-[360px]">
              <CardRate {...card} />
            </li>
          ))}
        </ul>
      </section>

      <section className="xl:max-h-[488px] relative  overflow-hidden flex flex-col items-center justify-center gap-[62px] xl:gap-[44px] pb-[144px] pt-[113px] xl:pb-[108px] xl:pt-[60px] border-t border-b border-[var(--gr-main,#5BDBFD)] xl:w-[1280px] w-full">
        <BlackLight
          additioanClassName={"left-[-221px] top-[-203px]"}
          type={"large"}
          hidden={true}
        />
        <BlackLight
          additioanClassName={"right-[-222px] top-[408px]"}
          type={"large"}
          hidden={true}
        />

        <Image
          src={"/images/unsplash.webp"}
          width={513}
          height={799}
          alt=""
          priority
          className="absolute left-[-14px] w-[613px] h-[699px] z-[-1] bottom-[-190px] bg-gray-300 bg-cover bg-no-repeat max-xl:hidden"
        />

        <Image
          src={"/images/line.webp"}
          width={800}
          height={600}
          alt=""
          priority
          className="absolute w-[800px] h-[600px]  bottom-0 right-0 z-[-2] max-xl:hidden"
        />

        <div
          className="w-[608px] h-[488px] flex-shrink-0 absolute z-[-2] right-0 bottom-0 max-xl:hidden"
          style={{
            background:
              "linear-gradient(112deg, #5BDBFD -33.31%, #7375FF 42.45%, #DF93FF 116.84%, #E56F8C 154.68%)",
          }}
        ></div>

        <div className=" max-xl:hidden z-[-1] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[712px] h-[1486px] rounded-[1486px] bg-[#0C0117] blur-[167.6px] flex-shrink-0"></div>

        <div className="flex flex-col gap-[20px] justify-center items-center max-w-[281px] xl:max-w-[447px]">
          <h2 className="xl:text-[36px] xl:w-[447px] w-[254px] text-white text-center font-raleway text-[20px] not-italic font-bold leading-normal uppercase">
            Узнай, как создавать контент, который
            <p className="xl:text-[36px] bg-[linear-gradient(90deg,_#5BDBFD_0.26%,_#7375FF_51.07%,_#DF93FF_100.96%,_#E56F8C_126.34%)] bg-clip-text text-transparent font-raleway text-[20px] font-bold not-italic leading-normal uppercase">
              покоряет аудитории
            </p>
          </h2>
          <p className="xl:text-[24px] text-white text-center font-raleway text-[14px] font-medium not-italic leading-normal">
            Материалы, способные стать вирусными и охватить тысячи людей!
          </p>
        </div>
        <button
          onClick={() => openModal("feedback")}
          className="cursor-pointer relative xl:w-[534px] xl:h-[74px] flex w-[313px] h-[60px] px-[17.276px] justify-center items-center gap-[8.638px] flex-shrink-0 rounded-[10796.277px] bg-[linear-gradient(126deg,_#5BDBFD_16.95%,_#7375FF_79.54%,_#DF93FF_140.99%,_#E56F8C_172.25%)] shadow-[inset_4.319px_6.478px_10.797px_4.319px_rgba(167,93,243,0.2)]"
        >
          <span className="text-[#fff] font-raleway text-[14px] font-semibold leading-[21.595px] not-italic">
            Купить со скидкой
          </span>
          <SalesLogo quantity={50} />
        </button>
      </section>
    </>
  );
}
