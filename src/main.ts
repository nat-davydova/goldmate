import "virtual:svg-icons-register";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { initHeroCardsSlider } from "./modules/hero-cards-slider";

window.addEventListener("load", () => {
  initHeroCardsSlider();
});
