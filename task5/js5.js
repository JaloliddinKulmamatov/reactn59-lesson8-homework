const toggleBtn = document.getElementById('toggleBtn');
const img = document.querySelectorAll('.container img');

toggleBtn.onclick = function () {
    img.forEach(img => {
        img.classList.toggle('hide');
    });
};