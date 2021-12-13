require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Servir Contenido Estatico.   || middleware
app.use( express.static('public') );

//! Enviando argumentos del controlador.
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Paserno Rojas',
        titulo: 'Aprendiendo Node.js'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic');
});

app.get('/elements', (req, res) => {
    res.render('elements');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index2.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})