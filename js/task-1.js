//1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const itemsOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemsOfCategories.length} категории`);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

itemsOfCategories.forEach(item => {
  console.log(`Категория: ${item.querySelector(`h2`).textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
