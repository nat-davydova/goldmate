// 2. insert into html
// 2.2 create new func
// 2.3 create wrapper
// 2.4 insert into wrapper
// 2.5 insert into html
// 3. fix 100% value

interface ICreateCustomProgressBarProps {
  value: string | null;
  max: string | null;
}

interface IInsertCustomProgressBarsIntoDOMProps {
  customProgressBars: HTMLElement[];
  parentElem: HTMLElement;
}

function createCustomProgressBar({
  max,
  value,
}: ICreateCustomProgressBarProps) {
  if (typeof value === null || Number.isNaN(Number(value)) || !Number(max)) {
    throw new Error("Progress max or value is not a number");
  }

  const progressValue = Math.round(Number(value) / Number(max)) * 100;

  const progress = document.createElement("div");
  progress.classList.add("progress");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress__bar");
  progressBar.setAttribute("data-progress-value", progressValue.toString());

  progress.appendChild(progressBar);

  return progress;
}

function insertCustomProgressBarsIntoDOM({
  customProgressBars,
  parentElem,
}: IInsertCustomProgressBarsIntoDOMProps) {
  console.log({ customProgressBars, parentElem });
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

  const customProgressBars: HTMLElement[] = [];

  progressBars.forEach((progressBar) => {
    const max = progressBar.getAttribute("max");
    const value = progressBar.getAttribute("value");
    progressBar.classList.add("js-hidden");
    const customProgress = createCustomProgressBar({ max, value });
    customProgressBars.push(customProgress);
  });

  insertCustomProgressBarsIntoDOM({
    customProgressBars,
    parentElem: skillsWrapper,
  });
}
