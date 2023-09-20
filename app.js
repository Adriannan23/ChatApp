// selectros
const loginForm = document.getElementById('welcome-form');

const messagesSection = document.getElementById('messages-section');

const messagesList = document.getElementById('messages-list');

const addMessageForm = document.getElementById('add-messages-form');

const userNameInput = document.getElementById('username');

const messageContentInput = document.getElementById('message-content');

// global variable
let userName;


const login = e => {
  e.preventDefault();

  if (userNameInput.value === '') {
    console.log('empty');
  }
  else {
    userName = userNameInput.value;
    loginForm.classList.remove('show');
    addMessageForm.classList.add('show');
    console.log('usuwam login, dodaje messageform');
  }

};

loginForm.addEventListener('submit', login);


