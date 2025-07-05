import Swiper from 'swiper';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const swiperIdea = () => {
  const thumbsSwiper = new Swiper('.post__slider-thumbs', {
    modules: [FreeMode],
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper('.post__slider', {
    modules: [Navigation, Thumbs],
    loop: true,
    spaceBetween: 22,
    slidesPerView: 1,
    navigation: {
      prevEl: '.post__slider-prev',
      nextEl: '.post__slider-next',
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
};
