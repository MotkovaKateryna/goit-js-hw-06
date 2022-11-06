function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.

{/* <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div> */}


///// 10 задача ще в процесі...

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
  amount = input.value;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.backgroundColor = getRandomHexColor();
    box.style.cssText = `width: ${size}px height:${size} px `;
    boxes.append(box);
  }
}

function destroyBoxes() {

  }

// for (let i = 0; i < amount; i++){
//   const box = document.createElement('div');
//   box.style.backgroundColor = getRandomHexColor();
//   box.style.width = '30px';   //// хочу дописати + i*10 а не знаю як правильно....
//   box.style.height = '30px';
//   boxes.append(box);