let btn1 = document.getElementById('btn__1');
let btn2 = document.getElementById('btn__2')
let div = document.querySelector('div');

const createP = (text) => {
    let p = document.createElement('p');
    p.textContent = text;
    return div.appendChild(p); 
}

let paragraph = div.querySelector('p')

btn1.onclick = function() {
    createP("salom");
};

btn2.onclick = function () {
    const paragraphs = div.querySelectorAll('p');
      paragraphs.forEach(paragraph => {
        div.removeChild(paragraph);
    });
}

//yoki

// btn1.onclick = createP("salom");