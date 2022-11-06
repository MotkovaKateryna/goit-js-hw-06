

const textInp = document.querySelector("#validation-input");

textInp.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    
    textInp.classList.add("invalid");
    if (event.currentTarget.value === '') {
     return alert("Please fill in the field!");
    }
        if (event.currentTarget.value.trim().length === Number(textInp.dataset.length)) {

        textInp.classList.remove("invalid");
        textInp.classList.add("valid"); 
    
    }    
} 



