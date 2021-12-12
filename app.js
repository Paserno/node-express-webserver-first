const express = require('express');
const app = express();
const port = 8080;

// TODO: require('hbs');
app.set('view engine', 'hbs');

// Servir Contenido Estatico.   || middleware
app.use( express.static('public') )

//! Enviando argumentos del controlador.
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Paserno Rojas',
        titulo: 'Aprendiendo Node.js'
    });
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html') 
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})