import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper';

const HighPerformanceBrands = () => (
  <Swiper
    modules={[Pagination, Autoplay]}
    loop
    pagination={{ clickable: true }}
    className="mySwiper"
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {HomeSliderData.map((data) => (
      <SwiperSlide key={data.id}>
        <HeroSection data={data} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default HighPerformanceBrands;
