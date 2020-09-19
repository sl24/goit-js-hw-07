// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

//создаем переменную с текущим значением счетчика
let counterValue = 0;

//создаем ссылку на кнопку декремент
const decrementBtn = document.querySelector('button[data-action="decrement"]');

//создаем ссылку на спан
const counterEl = document.querySelector('#value');

//создаем ссылку на кнопку инкремент
const incrementBtn = document.querySelector('button[data-action="increment"]');

//создаем переменные для изменения счетчика
const increment = function () {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

const decrement = function () {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

//вешаем слушателя события при клике на увеличение счетчика
incrementBtn.addEventListener('click', increment);

//вешаем слушателя события при клике на уменьшение счетчика
decrementBtn.addEventListener('click', decrement);
