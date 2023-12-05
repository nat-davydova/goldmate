interface ICreateCustomProgressBarProps {
  value: string | null;
  max: string | null;
  className?: string;
}

interface ISetProgressBarsProps {
  parentSelector: string;
  className?: string;
}

const PROGRESS_CLASSNAME = "progress";

function createProgressElem(className?: string) {
  const progress = document.createElement("div");
  progress.classList.add(`${PROGRESS_CLASSNAME}`);

  if (className) {
    progress.classList.add(className);
  }

  return progress;
}

function createProgressBarElem(progressValue: number) {
  const reformattedProgressValue = progressValue.toString();

  const progressBar = document.createElement("div");
  progressBar.classList.add(`${PROGRESS_CLASSNAME}__bar`);
  progressBar.setAttribute("data-progress-value", reformattedProgressValue);
  progressBar.style.width = `${reformattedProgressValue}%`;

  return progressBar;
}

function createProgressPercentageElem(progressValue: number) {
  const progressPercentage = document.createElement("span");
  progressPercentage.classList.add("progress__percentage");
  progressPercentage.textContent = `${progressValue}%`;

  return progressPercentage;
}

function createCustomProgressBar({
  max,
  value,
  className,
}: ICreateCustomProgressBarProps) {
  if (typeof value === null || Number.isNaN(Number(value)) || !Number(max)) {
    throw new Error("Progress max or value is not a number");
  }

  const progressValue = Math.round((Number(value) / Number(max)) * 100);

  const progress = createProgressElem(className);
  const progressBar = createProgressBarElem(progressValue);
  const progressPercentage = createProgressPercentageElem(progressValue);

  progress.appendChild(progressPercentage);
  progress.appendChild(progressBar);

  return progress;
}

export function setProgressBars({
  parentSelector,
  className,
}: ISetProgressBarsProps) {
  const progressWrapper: HTMLElement | null = document.querySelector(
    `${parentSelector}`,
  );

  if (!progressWrapper) {
    throw new Error("skillsWrapper not found");
  }

  const progressBars = progressWrapper.querySelectorAll("progress");

  if (!progressBars) {
    return;
  }

  progressBars.forEach((progressBar) => {
    const max = progressBar.getAttribute("max");
    const value = progressBar.getAttribute("value");
    const customProgress = createCustomProgressBar({
      max,
      value,
      className,
    });
    const progressParent = progressBar.parentElement;
    progressParent?.appendChild(customProgress);
  });
}
