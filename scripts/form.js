const form = document.querySelector('form');

const submitBtn = document.querySelector('.contact-btn');

let isValid = false;

function validateForm() {
  isValid = form.checkValidity();
  if (isValid === false) {
    console.log('not valid form');
  } else if (isValid === true) {
    console.log('message sent');
  }
}

function submitForm(e) {
  e.preventDefault();

  const userName = document.querySelector('#name').value;
  const userSurname = document.querySelector('#surname').value;
  const userEmail = document.querySelector('#email').value;
  const userMessage = document.querySelector('#message').value;

  const userData = {
    name: userName,
    surname: userSurname,
    email: userEmail,
    message: userMessage,
  };

  validateForm();
  console.log(userData);
}

form.addEventListener('submit', submitForm);
