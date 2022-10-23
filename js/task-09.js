function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const btnColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnColor.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  spanColor.textContent = hexColor;
})

