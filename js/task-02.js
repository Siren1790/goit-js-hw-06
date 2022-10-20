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

// let ulIngredients = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++){  
  let li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add('item');
  document.querySelector("#ingredients").append(li);
}


