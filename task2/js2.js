//2

let ul = document.createElement('ul');
const fruits = ["apple", "orange", "banana", "grapes"];

fruits.forEach(el => {
    let li = document.createElement('li');
    li.textContent = el;
    ul.appendChild(li);
})


document.body.appendChild(ul)