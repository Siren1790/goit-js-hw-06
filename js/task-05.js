// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const inputName = document.querySelector('#name-input');
const spanOutput = document.querySelector("#name-output");

const userName = () => {
   if (inputName.value.length == 0) {
      spanOutput.textContent = "Anonymous";
   } else {
      spanOutput.textContent = inputName.value;
   }   
}
inputName.addEventListener("keyup", userName);