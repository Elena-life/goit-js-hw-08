import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state';

let formData = {};

const fillContactForm = () => {
  const serializedState = localStorage.getItem(FEEDBACK_FORM_STATE_KEY);

  formData = JSON.parse(serializedState) ?? {};

  const formDataKeys = Object.keys(formData);

  if (serializedState) {
    formDataKeys.map(key => {
      form.elements[key].value = formData[key];
    });
  }
};

const handleFormInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE_KEY, JSON.stringify(formData));
};

const handleContactFormSybmit = e => {
  e.preventDefault();

  localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);

  console.log(formData);
  e.currentTarget.reset();
};

fillContactForm();

form.addEventListener('input', throttle(handleFormInput, 500));
form.addEventListener('submit', handleContactFormSybmit);
