function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");


const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", destroyBoxes);

function onCreateBtnClick(event) {
  createBoxes();
}

function createBoxes(amount) {
  boxes.textContent = "";
  amount = input.value;

  for (let i = 0; i < amount; i++){
  const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("newbox");
    box.style.width = `${30+i*10}px`;   
    box.style.height = `${30+i*10}px`;
    boxes.append(box);
  }
 }

function destroyBoxes() {
  boxes.textContent = "";
}
  

// удаление div по классу, работает только удаляя один
//  const boxAll = document.querySelectorAll(".newbox");
//   boxAll.remove();