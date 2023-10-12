// !!!! 1. найти все прогрессы в переданной обертке
// !!!! 2. спрятать найденные прогрессы
// 3. создать новый прогресс-элемент
// 3.1 общая обертка
// 3.2 закрашенная область
// 3.3 значение прогресса
// 4. вставить в разметку

interface ICreateCustomProgressBarProps {
  value: string | null;
  max: string | null;
}

function createCustomProgressBar({
  max,
  value,
}: ICreateCustomProgressBarProps) {
  console.log(max, value);
}

export function setSkillProgressBars(selector: string) {
  const skillsWrapper = document.querySelector(`${selector}`);

  if (!skillsWrapper) {
    throw new Error("skillsWrapper not found");
  }

  const progressBars = skillsWrapper.querySelectorAll("progress");

  if (!progressBars) {
    return;
  }

  progressBars.forEach((progressBar) => {
    const max = progressBar.getAttribute("max");
    const value = progressBar.getAttribute("value");
    progressBar.classList.add("js-hidden");
    createCustomProgressBar({ max, value });
  });
}
