// selectros
const loginForm = document.getElementById('welcome-form');

const messagesSection = document.getElementById('messages-section');

const messagesList = document.getElementById('messages-list');

const addMessageForm = document.getElementById('add-messages-form');

const userNameInput = document.getElementById('username');

const messageContentInput = document.getElementById('message-content');

const socket = io();

socket.on('message', addMessage);
socket.emit('message', { author: 'John Doe', content: 'Lorem Ipsum' });
// global variable
let userName;

const login = e => {
  e.preventDefault();
  if (userNameInput.value === '') {
    console.log('empty value in the login input');
  }
  else {
    userName = userNameInput.value;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
  };
};

function addMessage(author, content) {
  const message = document.createElement('li');
  message.classList.add('message');
  message.classList.add('message--received');
  if (author === userName) message.classList.add('message--self');
  message.innerHTML = `
    <h3 class="message__author">${userName === author ? 'You' : author}</h3>
    <div class="message__content">
      ${content}
    </div>
  `;
  messagesList.appendChild(message);
}

function sendMessage(e) {
  e.preventDefault();

  let messageContent = messageContentInput.value;

  if (!messageContent.length) {
    alert('You have to type something!');
  }
  else {
    addMessage(userName, messageContent);
    socket.emit('message', { author: userName, content: messageContent })
    messageContentInput.value = '';
  }

}

loginForm.addEventListener('submit', login);
addMessageForm.addEventListener('submit', sendMessage)
