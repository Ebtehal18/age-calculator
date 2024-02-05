const inputEl = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const calcAge = function (year, month, day) {
  const currentDay = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = currentDay.getFullYear() - birthDate.getFullYear();
  const month = currentDay.getMonth() - birthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDay.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const btnFunction = function () {
  console.log("l");
};
btn.addEventListener("click", btnFunction);
