const inputs = document.querySelectorAll(".card__input");
const btn = document.querySelector(".card__button");

const isyearValid = function (year) {
  const currentYear = new Date().getFullYear();
  if (year && year > 0 && year <= currentYear) {
    return true;
  }
};
const ismonthValid = function (month) {
  if (month && month <= 12 && month > 0) {
    return true;
  }
};
const isdayValid = function (day) {
  if (day && day <= 31 && day > 0) {
    return true;
  }
};

const isValid = function (yearEl, monthEl, dayEl) {
  let arr = [false, false, false];
  if (isyearValid(yearEl.value)) {
    yearEl.classList.remove("card__input--error");
    arr[0] = true;
  } else {
    yearEl.classList.add("card__input--error");
  }
  if (ismonthValid(monthEl.value)) {
    monthEl.classList.remove("card__input--error");
    arr[1] = true;
  } else {
    monthEl.classList.add("card__input--error");
  }
  if (isdayValid(dayEl.value)) {
    dayEl.classList.remove("card__input--error");
    arr[2] = true;
  } else {
    dayEl.classList.add("card__input--error");
  }
  return arr.every((item) => item === true);
};
const calacAge = function (year, month, day) {
  const bithday = new Date(year, month - 1, day);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - bithday.getFullYear();
  const monthdifference = currentDate.getMonth() - bithday.getMonth();
  if (
    monthdifference < 0 ||
    (monthdifference === 0 && currentDate.getDate() > bithday.getDate())
  ) {
    age--;
  }
  return age;
};
const btnfunction = function () {
  const dayEl = document.querySelector(".card__input[name=day]");
  const monthEl = document.querySelector(".card__input[name=month]");
  const yearEl = document.querySelector(".card__input[name=year]");
  const result = document.querySelector(".card__resultValue");
  if (!isValid(yearEl, monthEl, dayEl)) {
    result.textContent = "--";
    return;
  }
  result.textContent = calacAge(yearEl.value, monthEl.value, dayEl.value);
};

btn.addEventListener("click", btnfunction);
inputs.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    e.key === "Enter" && btnfunction();
  });
});
