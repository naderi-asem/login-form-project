const loginBtn = document.querySelector('.loginBtn');
const loginBox = document.querySelector('.login-box');
const closeBtn = document.querySelector('.close');


// event
document.addEventListener('DOMContentLoaded', () => loginBox.style.display = 'none');

loginBtn.addEventListener('click', () => {
    loginBox.style.display = 'flex';
    loginBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    loginBox.style.display = 'none';
    loginBtn.style.display = 'inline-block';
});
