// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

//создаем ссылку на инпут
const inputRef = document.querySelector('#validation-input');

//создаем переменную правильного количества символов
const validLength = Number(inputRef.dataset.length);

// создаем функцию для сравнения количества введенных симоволов с нужным нам значением
const makeValidation = inputRef.addEventListener('change', () => {
  if (inputRef.value.length === validLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});
