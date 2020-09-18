// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Создаем ссылку на элемент ingredients
const listOfIngredients = document.querySelector('#ingredients');

// Перебираем массив элементов
const elms = ingredients.map(item => {
  const itemOfIngredients = document.createElement('li'); //создаем все эелементы li
  itemOfIngredients.textContent = item; // каждому элементу списка присваиваем значение из массива
  return itemOfIngredients;
});

listOfIngredients.append(...elms); //добавляем элементы в список
