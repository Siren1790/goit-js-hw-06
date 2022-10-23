function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3.Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector('#controls > input')
const createBtnRef = document.querySelector('button[data-create]');

function createBoxes(amount) {
  const arrDivs = [];
  let size = 10;
  for (let i = 0; i < amount; i += 1){
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;
    arrDivs.push(div);
  }
  divBoxesRef.append(...arrDivs);
}

function destroyDivs() {
  document.querySelector("#boxes").innerHTML = "";
}

createBtnRef.addEventListener("click", e => {
  const value = Number(inputRef.value);
  createBoxes(value);
});

destroyBtn.addEventListener("click", destroyDivs);