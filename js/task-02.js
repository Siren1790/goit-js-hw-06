const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

let listRef = document.querySelector("#ingredients");
const listItems = ingredients.map(item => {
  let li = document.createElement("li"); //Створив елемент <li></li>
  li.textContent = item; // додав текс в середину елемента li
  li.classList.add('item'); // додава клас до елемента li
  return li; // записав елемент в масив.
});

listRef.append(...listItems); // Вивів на сторінку HTML.

