
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

let amoutItem = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${ amoutItem.length }`);
console.log("_____________________________________")

// 2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

for (let i = 0; i < amoutItem.length; i++) {
   let titleText = amoutItem[i].querySelector("h2").innerHTML;
   let allLi = amoutItem[i].querySelectorAll("li").length;
   console.log(`Category: ${ titleText }`);
   console.log(`Elements: ${ allLi }`);
   console.log("_____________________________________")
}

// Done
// _____________________________________________________________________________