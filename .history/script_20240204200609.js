const inputs = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const currentDate = new Date();
const bithday = new Date(year, month - 1, day);
const monthdifference = currentDate.getMonth() - bithday.month();
const day = bithday.date();
const calacAge = function (yearEl, monthEl, dayEl) {
  yearEl = document.querySelector(".card__input[name=year]");
  monthEl = document.querySelector(".card__input[name=month]");
  dayEl = document.querySelector(".card__input[name=day]");
  if (yearEl.value && year.value > 0) {
    currentDate.getFullYear() - yearEl.value;
  }
};
console.log(calacAge(2000, 3, 1));
const btnfunction = function () {};
btn.addEventListener("click", btnfunction);
