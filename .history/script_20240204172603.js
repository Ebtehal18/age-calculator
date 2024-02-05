const inputEl = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");
const validDay = function (day) {
  if (day && day <= 31 && day > 0) {
    return true;
  }
};
const validMonth = function (month) {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};
const validYear = function (year) {
  if (year && 1930 >= year > 0) {
    return true;
  }
};
const calcAge = function (year, month, day) {
  const currentDay = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = currentDay.getFullYear() - birthDate.getFullYear();
  const monthDefferance = currentDay.getMonth() - birthDate.getMonth();
  if (
    monthDefferance < 0 ||
    (monthDefferance === 0 && currentDay.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const btnFunction = function () {
  const dayEl = document.querySelector(".card__input[name=day]").value;
  const monthEl = document.querySelector(".card__input[name=month]").value;
  const yearEl = document.querySelector(".card__input[name=year]").value;
  const result = document.querySelector(".card__resultValue");
  result.textContent = calcAge(yearEl, monthEl, dayEl);
};
btn.addEventListener("click", btnFunction);
inputEl.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    e.key === "Enter" && btnFunction();
  });
});
