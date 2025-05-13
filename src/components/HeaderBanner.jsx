import { FaWhatsapp } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../assets/image/headerBanner.png";
import img2 from "../assets/image/heaederBanner2.png";
import img3 from "../assets/image/headerBanner3.png";
import { styles } from "../styles/styles";
import Items from "./Items";
export default function HeaderBanner() {
  return (
    <>
      <div className={`${styles.container} pt-[20px] `}>
        <Swiper
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className={`${styles.headerBanner}`}
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="w-[600px] ">
                <h2 className="pb-[20px] text-[50px] font-[600] leading-[100%] text-white ">
                  1000 наименований продуктов питания оптом
                </h2>
                <p className="pb-[20px] text-[16px] font-[500] text-white leading-[120%] ">
                  для HoReCa, общепита, производителей
                </p>
                <button className="btn-primary">Получить прайс</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.headerBanner}`}
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="w-[600px] ">
                <h2 className="pb-[20px] text-[50px] font-[600] leading-[100%] text-white ">
                  Собственное производство по переработке рыбы и морепродуктов
                </h2>
                <p className="pb-[20px] text-[16px] font-[500] text-white leading-[120%] ">
                  Работайте с производителем напрямую
                </p>
                <button className="btn-primary">Получить прайс</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.headerBanner}`}
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="w-[600px] ">
                <h2 className="pb-[20px] text-[50px] font-[600] leading-[100%] text-white ">
                  Специализируемся на поставках рыбы и морепродуктов со всего
                  мира
                </h2>
                <p className="pb-[20px] text-[16px] font-[500] text-white leading-[120%] ">
                  для HoReCa, магазины «У дома», торговые сети
                </p>
                <button className="btn-primary">Получить прайс</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Items />
    </>
  );
}
