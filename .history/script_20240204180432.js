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
  const currentYear = new Date().getFullYear();
  if (year && 1910 <= year && year <= currentYear) {
    return true;
  }
};
const isDatevalid = function (dayEl, monthEl, yearEl) {
  let isvalid = [false, false, false];
  if (!validDay(dayEl.value)) {
    dayEl.classList.add("card__input--error");
  } else {
    isvalid[0] = true;
    dayEl.classList.remove("card__input--error");
  }

  if (!validMonth(monthEl.value)) {
    monthEl.classList.add("card__input--error");
  } else {
    isvalid[1] = true;
    monthEl.classList.remove("card__input--error");
  }
  if (!validYear(yearEl.value)) {
    yearEl.classList.add("card__input--error");
  } else {
    isvalid[2] = true;
    yearEl.classList.remove("card__input--error");
  }
  return isvalid.every((item) => item === true);
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
  const dayEl = document.querySelector(".card__input[name=day]");
  const monthEl = document.querySelector(".card__input[name=month]");
  const yearEl = document.querySelector(".card__input[name=year]");
  const result = document.querySelector(".card__resultValue");
  if (!isDatevalid(dayEl, monthEl, yearEl)) {
    result.textContent = "--";
    return;
  }
  result.textContent = calcAge(yearEl.value, monthEl.value, dayEl.value);
};
btn.addEventListener("click", btnFunction);
inputEl.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    e.key === "Enter" && btnFunction();
  });
});
