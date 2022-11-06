

const textInput = document.querySelector("#name-input");
const spanValue = document.querySelector("#name-output");

textInput.addEventListener('input', onInputChanges); 

function onInputChanges(event) {
    spanValue.textContent = 
      event.currentTarget.value.trim() !== ''
        ? event.currentTarget.value : 'Anonymous';  
  
}
