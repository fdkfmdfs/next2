'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';

const MovieSwiper1 = () => {
  return (
   

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y ]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}>
       {/*  navigation={{clickable:true}} */}
      
      <SwiperSlide><img src="./img/banner01.jpng" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./img/banner02.jpng" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./img/banner03.jpng" alt="" /></SwiperSlide>
     
      ...
    </Swiper>

  )
}

export default MovieSwiper1