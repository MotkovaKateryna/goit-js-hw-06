function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



const btnBodyChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');


btnBodyChangeColor.addEventListener("click", (event) => {
  const bodyColor = getRandomHexColor();
  body.style.backgroundColor = bodyColor;
  spanColor.textContent = bodyColor;
})