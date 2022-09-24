const button = document.getElementById('button');
const toggle = document.getElementById('toggle-btn');
const body = document.getElementsByTagName("BODY")[0];

button.addEventListener('click', () => {
    button.classList.toggle('button-night')
    toggle.classList.toggle('toggle-btn-moon');
    body.classList.toggle('night');
})