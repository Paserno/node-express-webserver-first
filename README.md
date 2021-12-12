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
### Para crear un server HTTP
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