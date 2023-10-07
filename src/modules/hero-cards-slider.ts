import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const initHeroCardsSlider = () =>
  new Swiper(".hero-swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      delay: 4000,
    },
    loop: true,
    pagination: {
      type: "bullets",
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
