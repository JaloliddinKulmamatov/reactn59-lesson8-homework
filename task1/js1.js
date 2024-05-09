const input = document.getElementById('input');
const button = document.getElementById('btn');
const heading = document.getElementById('heading');

button.onclick = function () {
    heading.textContent = input.value;
};