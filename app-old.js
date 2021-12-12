const http = require('http');

//request response
http.createServer( (req, res) => {


    // res.writeHead(200, {'Content-Type': 'applicatio/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'applicatio/csv'});

    res.write('Hola Mundo' );
    res.end();
 
})
.listen( 8080 );


console.log('Escuchando el puerto', 8080);