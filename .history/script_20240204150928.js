const inputEl = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const calcAge = function (year) {
  const currentYear = new Date().getFullYear();
  console.log(`$${year - 555}`);
};
const btnFunction = function () {
  console.log("l");
};
btn.addEventListener("click", btnFunction);
