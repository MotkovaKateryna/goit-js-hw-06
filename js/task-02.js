const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const elementsList = ingredients.map(element => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  itemEl.classList.add("item");
  return itemEl;
  
 
})




list.append(...elementsList);
