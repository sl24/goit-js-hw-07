// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

//создаем ссылку на инпут
const inputRef = document.querySelector('#name-input');

//создаем ссылку на спан
const outputRef = document.querySelector('#name-output');

//создаем функцию, которая сравнивает значение поля спана с введенным значением
inputRef.addEventListener('input', () => {
  outputRef.textContent = inputRef.value === '' ? 'незнакомец' : inputRef.value;
});
