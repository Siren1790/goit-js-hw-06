// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const xxx = document.querySelector('#name-input');

let stringSpan = "";
const userName = (event) => {
   // console.log(event);
   // if (event.key === "Backspase") {
   //    stringSpan.substring(0, stringSpan.length - 1);  
   // }else {
      stringSpan += event.key;
      document.querySelector("#name-output").textContent = stringSpan;
      console.log(stringSpan);
   // }
}

xxx.addEventListener("keydown", userName);