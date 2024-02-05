const inputs = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");

const calacAge = function (year, month, day) {
  const bithday = new Date(year, month - 1, day);
  const currentDate = new Date();
  let year = currentDate.getFullYear() - bithday.getFullYear();
  const monthdifference = currentDate.getMonth() - bithday.getMonth();
  if (
    monthdifference < 0 ||
    (monthdifference === 0 && currentDate.getDate() > bithday.getDate())
  ) {
    yaer--;
  }
  return yaer;
};

const btnfunction = function () {
  const dayEl = document.querySelector(".card__input[name=day]");
  const monthEl = document.querySelector(".card__input[name=month]");
  const yearEl = document.querySelector(".card__input[name=year]");
  const result = document.querySelector(".card__resultValue");
  result.textContent = calacAge(yearEl.value, monthEl.value, dayEl.value);
};

btn.addEventListener("click", btnfunction);
inputs.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    e.key === "Enter" && btnfunction();
  });
});
