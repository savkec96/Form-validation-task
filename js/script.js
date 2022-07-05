'use strict';

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === '') {
    setErrorFor(firstname, 'First name cannot be empty');
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === '') {
    setErrorFor(lastname, 'Last name cannot be empty');
  } else {
    setSuccessFor(lastname);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty');
  } else if (!checkIsEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password);
  }

  if (
    checkSuccess(firstname) &&
    checkSuccess(lastname) &&
    checkSuccess(email) &&
    checkSuccess(password)
  ) {
    alert('Everything is entered correctly! 👏');
  }
}

function setErrorFor(input, message) {
  const formInput = input.parentElement;
  const smallText = formInput.querySelector('.alert-text');

  smallText.innerText = message;
  formInput.className = 'cta-form-input error';
}

function setSuccessFor(input) {
  const formInput = input.parentElement;
  formInput.className = 'cta-form-input success';
}

function checkIsEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function checkSuccess(input) {
  const formInput = input.parentElement;
  return formInput.classList.contains('success');
}
