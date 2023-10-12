import "virtual:svg-icons-register";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { initHeroCardsSlider } from "./modules/hero-cards-slider";
import { setSkillProgressBars } from "./modules/skill-progress.ts";

window.addEventListener("load", () => {
  initHeroCardsSlider();
  setSkillProgressBars(".about-skills");
});
