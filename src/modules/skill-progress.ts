interface ICreateCustomProgressBarProps {
  value: string | null;
  max: string | null;
}

function createCustomProgressBar({
  max,
  value,
}: ICreateCustomProgressBarProps) {
  if (typeof value === null || Number.isNaN(Number(value)) || !Number(max)) {
    throw new Error("Progress max or value is not a number");
  }

  const progressValue = Math.round((Number(value) / Number(max)) * 100);

  const progress = document.createElement("div");
  progress.classList.add("progress");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress__bar");
  progressBar.setAttribute("data-progress-value", progressValue.toString());

  const progressPercentage = document.createElement("span");
  progressPercentage.textContent = `${progressValue}%`;

  progressBar.appendChild(progressPercentage);

  progress.appendChild(progressBar);

  return progress;
}

export function setSkillProgressBars(selector: string) {
  const skillsWrapper: HTMLElement | null = document.querySelector(
    `${selector}`,
  );

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
    const customProgress = createCustomProgressBar({ max, value });
    const progressParent = progressBar.parentElement;
    progressParent?.appendChild(customProgress);
  });
}
