
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginBtn = document.querySelector('.btn-box');


form.addEventListener('submit', (e) => {
  e.preventDefault(); 


  if (emailInput.value !== '' && passwordInput.value !== '') {

    loginBtn.textContent = 'Logging in...';
    loginBtn.disabled = true;
    window.location.href = './details.html';

    setTimeout(() => {

      form.reset();
      loginBtn.textContent = 'Login';
      loginBtn.disabled = false;
    }, 2000);
  }
});


const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
  input.addEventListener('input', () => {

    if (emailInput.value !== '' && passwordInput.value !== '') {
      loginBtn.classList.add('active');
    } else {
      loginBtn.classList.remove('active');
    }
  });
});
