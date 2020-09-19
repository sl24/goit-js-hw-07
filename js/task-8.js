// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('#controls>input');

const renderBtn = document.querySelector('button[data-action="render"]');

const destroyBtn = document.querySelector('button[data-action="destroy"]');

const renderDiv = document.querySelector('#boxes');

renderBtn.addEventListener('click', () => {
  createBoxes(Number(inputRef.value));
});

destroyBtn.addEventListener('click', () => {
  renderDiv.innerHTML = '';
});

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const createBoxes = amount => {
  const divs = [];

  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement('div');

    element.style.width = element.style.height = String(30 + i * 10) + 'px';
    element.style.backgroundColor = `rgb(${getRandomInt(
      0,
      255,
    )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    divs.push(element);
  }

  renderDiv.append(...divs);
};
