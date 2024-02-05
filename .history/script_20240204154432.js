const inputEl = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const calcAge = function (year, month, day) {
  const currentDay = new Date(day);
  const birthDate = new Date(year, month - 1, day);
};
calcAge();
const btnFunction = function () {
  console.log("l");
};
btn.addEventListener("click", btnFunction);
