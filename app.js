const http = require('http');

//request response
http.createServer( (req, res) => {

    res.write('Hola mundo, soy paserno');
    res.end();
 
})
.listen( 8080 );


console.log('Escuchando el puerto', 8080);