const password = document.getElementById('password');
const form = document.querySelector('form');
const eye = document.getElementById('eye');

window.onload = () => {
  password.focus();
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

eye.addEventListener('mousedown', (event) => {
  event.target.src = 'https://www.svgrepo.com/show/535373/eye.svg';
  password.type = 'text';
});

eye.addEventListener('mouseup', (event) => {
  event.target.src = 'https://www.svgrepo.com/show/535376/eye-slash.svg';
  password.type = 'password';
});
