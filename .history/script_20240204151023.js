const inputEl = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const calcAge = function (year) {
  let year = 2015;
  const currentYear = new Date().getFullYear();
  console.log(`$${currentYear - year}`);
};
const btnFunction = function () {
  console.log("l");
};
btn.addEventListener("click", btnFunction);
