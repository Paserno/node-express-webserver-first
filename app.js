const http = require('http');

//request response
http.createServer( (req, res) => {


    // res.writeHead(200, {'Content-Type': 'applicatio/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'applicatio/csv'});


    res.write('id, nombre\n' );
    res.write('1, Felipe\n' );
    res.write('2, Tomas\n' );
    res.write('3, Jason\n' );
    res.write('4, Diego\n' );
    res.end();
 
})
.listen( 8080 );


console.log('Escuchando el puerto', 8080);