const inputEl = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const calcAge = function (year, month, day) {
  const currentDay = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = currentDay.getFullYear() - birthDate.getFullYear();
  const monthDefferance = currentDay.getMonth() - birthDate.getMonth();
  if (
    monthDefferance < 0 ||
    (monthDefferance === 0 && currentDay.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const btnFunction = function () {
  const dayEl = document.querySelector(".card__input[name=day]");
  const monthEl = document.querySelector("");
};
btn.addEventListener("click", btnFunction);
