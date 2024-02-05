const inputs = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const currentDate = new Date();
let age = currentDate.getFullYear();
const bithday = new Date(year, month - 1, day);
const calacAge = function () {
  const yearEl = document.querySelector(".card__input[name=year]");
  const mOnthEl = document.querySelector(".card__input[name=month]");
  const dayEl = document.querySelector(".card__input[name=day]");
  if (currentDate.getFullYear() > bithday.getFullYear()) {
  }
  const result = document.querySelector(".card__resultValue");
};
const btnfunction = function () {};
btn.addEventListener("click", btnfunction);
