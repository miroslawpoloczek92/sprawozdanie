// Import modułu Express
const express = require('express');

// Utwórz instancję aplikacji Express
const app = express();

// Określ port, na którym aplikacja będzie nasłuchiwać (domyślnie 3000 lub dostosuj)
const port = process.env.PORT || 3000;

// Definiuj trasę dla podstawowego endpointa
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Uruchom nasłuchiwanie na określonym porcie
app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});
