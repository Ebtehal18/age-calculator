const inputs = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");

// const monthdifference = currentDate.getMonth() - bithday.month();
// const day = bithday.date();
const calacAge = function (year, month, day) {
  const bithday = new Date(year, month - 1, day);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - bithday.getFullYear();
};

const btnfunction = function () {};
btn.addEventListener("click", btnfunction);
