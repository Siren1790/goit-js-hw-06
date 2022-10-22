// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data - length.

// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");
input.style.outline = "0"; // Видалив підсвічування input

const userName = () => {
   input.classList.add("invalid"); //Додав красну підсвітку
   if (input.value.length == input.dataset.length) {
      input.classList.replace("invalid", "valid"); // Замінив класи на зелену підсвітку
   } 
}

input.addEventListener("keyup", userName);
