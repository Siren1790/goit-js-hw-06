// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const decrement = () => {
   counterValue -= 1;
   document.querySelector("#value").textContent = counterValue;
}

const increment = () => {
   counterValue += 1;
   document.querySelector("#value").textContent = counterValue;
}

decrementBtn.addEventListener("click", decrement);

incrementBtn.addEventListener("click", increment);



// const saveBtn = document.querySelector('button[data-action="save"]');