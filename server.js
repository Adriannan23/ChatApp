const express = require('express');
const path = require('path');
const app = express();

const messages = [];

const clientPath = path.join(__dirname, 'client');

app.get('/', (req, res) => {
  // Ustalenie ścieżki do pliku index.html
  const indexPath = path.join(__dirname, 'client', 'index.html');
  res.sendFile(indexPath);
});

app.use('/client', express.static(clientPath));

const server = app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

const socket = require('socket.io');

const io = socket(server);

io.on('connection', (socket) => {
  console.log('New client! Its id – ' + socket.id);
  socket.on('message', (message) => {
    console.log('Oh, I\'ve got something from ' + socket.id)
    messages.push(message);
    socket.broadcast.emit('message', message);
  });
  socket.on('disconnect', () => { console.log('Oh, socket ' + socket.id + ' has left') });
  console.log('I\'ve added a listener on message event \n');
});

