import { setProgressBars } from "../ui/progress";

export function setSkillProgressBars() {
  setProgressBars({
    parentSelector: ".about-skills",
    className: "skill__progress",
  });
}
