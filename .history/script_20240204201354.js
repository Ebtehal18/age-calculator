const inputs = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");

// const monthdifference = currentDate.getMonth() - bithday.month();
// const day = bithday.date();
const calacAge = function (year, month, day) {
  const bithday = new Date(year, month - 1, day);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - bithday.getFullYear();
  const monthdifference = currentDate.getMonth() - bithday.getMonth();
  if (age && age > 0) {
    return true;
  }
};

const btnfunction = function () {
  const dayEl = document.querySelector(".card__input[name=day]");
  const monthEl = document.querySelector(".card__input[name=month]");
  const yearEl = document.querySelector(".card__input[name=year]");
  const result = document.querySelector(".card__resultValue");
};

btn.addEventListener("click", btnfunction);
