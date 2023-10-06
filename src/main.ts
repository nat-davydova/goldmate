import "virtual:svg-icons-register";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".hero-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay],
  autoplay: {
    delay: 3000,
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
