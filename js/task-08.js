
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//  а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.





// 1 спосіб

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
     if (email.value === "" || password.value === "" ) {
    return alert("Please fill in all the fields!");}
    console.log(`email: ${email.value},`,`password: ${password.value}`);
    
    form.reset();
});

//  2 спосіб(тільки є проблема: два alert з'являється коли обидва поля не заповнені)

// const form = document.querySelector('.login-form');

//    form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//                 if (value === "" ) {
//     return alert("Please fill in all the fields!");
//                 }
//         console.log('name:', name);
//         console.log('value:', value);
//     })
//     form.reset();
// }

