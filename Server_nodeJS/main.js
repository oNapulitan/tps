const express = require('express'); //importazione libreria express
const app = express(); //oggetto 
const porta = 8001;

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/home.html');
});

app.get('/chi-siamo', (req, res) => {
  res.sendFile( __dirname + '/chi-siamo.html');
});

app.get('/cosa-facciamo', (req, res) => {
  res.sendFile( __dirname + '/cosa-facciamo.html');
});

app.get('/modulo-messaggio', (req, res) => {
  res.sendFile( __dirname + '/modulo-messaggio.html');
});


app.listen(porta, () => {
  console.log(`Ti sto aspettando nel localhost:${porta}`);
});