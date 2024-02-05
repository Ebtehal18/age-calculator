const inputEl = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const calcAge = function (year, month, day) {
  year = inputEl.values;
  const currentYear = new Date().getFullYear();
  console.log(`${currentYear - year}`);
};
calcAge();
const btnFunction = function () {
  console.log("l");
};
btn.addEventListener("click", btnFunction);
