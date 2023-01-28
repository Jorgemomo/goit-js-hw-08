import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.log(form);
const storage = 'feedback-form-state';
const data = {};

updateRegister();

form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);

function inputForm(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem(storage, JSON.stringify(data));
  console.log(data);
}

function submitForm(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.target;

  if (email.value === '' || message.value === '') {
    return window.alert('¡Por Favor diligencie los campos!');
  }
  console.log({ Email: email.value, Message: message.value });
  form.reset();
  localStorage.removeItem(storage);
}

function updateRegister() {
  if (localStorage.getItem(storage) === null) {
    return;
  }
  const save = JSON.parse(localStorage.getItem(storage));
  Object.entries(save).forEach(([name, value]) => {
    data[name] = value;
    form.elements[name].value = value;
  });
}
