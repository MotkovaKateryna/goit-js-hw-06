
const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);



const itemEl = document.querySelectorAll('.item');

itemEl.forEach(element => {
    console.log('Category:',element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length );

})
