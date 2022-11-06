const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');


inputRange.addEventListener('input', onSizeChange)

let valueInp = 0;

function onSizeChange(event) {
    valueInp = Number(event.target.value);
    textSpan.style.fontSize = `${valueInp}px`;
}