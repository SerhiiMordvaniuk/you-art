import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation } from "swiper/modules";

const Sviper = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid2.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid3.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid4.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid5.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid6.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid7.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid8.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid8.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid9.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid1.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid10.jpg" alt="kid" width={320} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/public/img/kid11.jpg" alt="kid" width={320} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sviper;
