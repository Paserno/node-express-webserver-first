const express = require('express');
const app = express();
const port = 8080;

// Servir Contenido Estatico.   || middleware
app.use( express.static('public') )


app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su ruta')
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})