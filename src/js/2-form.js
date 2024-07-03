'use strict';

let formData = {
  email: '',
  message: '',
};

const saveToLocalStorage = () => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(formData)
  );
};

const loadFromLocalStorage = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    formData = JSON.parse(saveData);
    document.querySelector('[name="email"]').value = formData.email;
    document.querySelector('[name="message"]').value =
      formData.message;
  }
};

const handleInput = event => {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage();
};

const handleSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  event.target.reset();
};

document
  .querySelector('.feedback-form')
  .addEventListener('input', handleInput);

document
  .querySelector('.feedback-form')
  .addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
