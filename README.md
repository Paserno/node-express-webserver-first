# Creacion de un Webserver
Esta es una aplicación donde se creara un __Webserver__ con __Node__
* 1
* 2
* 3
#
#### Para reconstruir los modulos de node ejecute el siguiente comando.
````
npm install
````
#
### 1.- Para crear un server HTTP
En Node tenemos una forma de crear un servidor HTTP de una manera facil.
* Realizando la importación.
* Usando `.createServer()` podemos lograr crear el server respectivo. _(request: solicitud response: respuesta )_
````
const http = require('http');

http.createServer( (req, res) => {
    res.write('Hola mundo');
    res.end();
})
.listen( 8080 );
````
#
### 2.- Uso de Request y Response
En el caso que se quiera mandar un mensaje 404, en la pagina se puede mandar de la siguiente forma:
````
res.writeHead(404):

res.write('404 | Page not found' );
res.end();
````
Remplazando la demostración anterior...
* En este caso probaremos mandando un archivo que se puede leer en "excel".
* Para eso mandamos `setHeader()` para luego asignarle el nombre al archivo.
* Ademas de poner el __Content-Type__ para especificar el tipo de contenido.
````
res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
res.writeHead(200, {'Content-Type': 'applicatio/csv'});


res.write('id, nombre\n' );
res.write('1, Felipe\n' );
res.write('2, Tomas\n' );
res.write('3, Jason\n' );
res.write('4, Diego\n' );
res.end();
````