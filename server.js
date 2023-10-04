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

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});