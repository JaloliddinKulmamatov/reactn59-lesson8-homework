let div = document.querySelector('div');
let btn = document.querySelector('button');

let divContent = div.textContent

btn.onclick = function () {
    divContent++; 
    div.textContent = divContent; 
};