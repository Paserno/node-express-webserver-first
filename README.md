# Creacion de un Webserver
Esta es una aplicación donde se creara un __Webserver__ con __Node__
* __[Express](https://www.npmjs.com/package/express)__ - [Pagina Oficial](https://expressjs.com)
* 2
* 3
#
#### Para reconstruir los modulos de node ejecute el siguiente comando.
````
npm install
````
#
## Uso solamente Node.js 🟩
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
#
## Uso de Express 🔲
### 1.- Hola mundo con express
* El primer "Hola Mundo", dada por __Express__.
````
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(8080)
````
* Ahora para cubrir mas direcciones como `/hola-mundo` creamos una ruta especial para este.
* En el caso que queramos cubrir rutas no declaradas usamos `get('*',...)`, de esta manera mandar un error __404__.
````
app.get('/', (req, res) => {
    res.send('Home Page')
});
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su ruta')
});
app.get('*', (req, res) => {
    res.send('404 | Page not Found')
});
````
Ademas podemos asignar en una constante el puerto en la cual estaremos corriendo el servidor.
* Para esto declaramos una constante `const port = 8080;` con el puerto que utilizaremos.
* Luego Creamos un __Callback__ donde utilizaremos el puerto que estaremos escuchando, con su mensaje por consola.
````
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
````
#