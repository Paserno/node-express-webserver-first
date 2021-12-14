> __Elemento Anterior 👀:__ __[Aplicación de Clima ⛅](https://github.com/Paserno/node-clima-app-terminal)__
# Creación de un Webserver
Esta es una aplicación donde se creara un __Webserver__ con __Node__, se utilizaron los siguientes elementos:
* __[Express](https://www.npmjs.com/package/express)__ - [Pagina Oficial](https://expressjs.com)
* __[Handlebars](https://github.com/pillarjs/hbs)__
* __[Doenv](https://www.npmjs.com/package/dotenv)__
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
Ahora creamos un nuevo `app.js`, para la solución de __express__
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
### 2.- Servir Contenido Estatico
Para esto nos creamos una nueva 📂carpeta llamada __public__ con un archivo `.html`.
* Inicializamos el archivo HTML y le introducimos un "Hola Mundo".
````
 <h1>Hola Mundo</h1>
    <hr>
````
En `app.js`:
* Luego para mostrar el contenido creado en __Public__ _(Usamos el Middleware)_.
* Y borramos el contenido que no se utilizara `app.get('/', (req, res) => {...}`, ya que no se podra llamar ya que se esta utilizando lo que viene por el __Public__ _(esto quiere decir que el contenido de __Public__ tiene prioridad sobre las rutas .get)_
````
app.use( express.static('public') )
````
Adicionalmente creamos en la 📂capeta __Public__ un archivo `404.html`, para todas las rutas adicionales:
* Agregamos elemento html
````
<h1>404 | Page not found</h1>
<a href="/"> Ir al Home </a>
````
En `app.js`:
* Remplazamos el elemento `res.send()`, por `res.sendFile()` para enviar un archivo.
* Utilizamos `__dirname` el cual es una __variable de entorno__ que le indica la ruta absoluta del directorio que contiene el archivo que se está ejecutando actualmente.
* Y le agregamos la direccion `/public/404.html` donde se encuentra el archivo.
````
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});
````
#
### 3.- Servir un sitio web completo
En esta parete descargamos una plantilla hecha de un sitio para utilizar y probar.
* Este sitio tiene diferentes elemento por ejemplo `index.html`, `generic.html` y `elements.html` la que le haremos redireccionamiento, para mostrar en nuestro servidor web.
* Para esto se creo redireccionamientos hacia esas rutas.
````
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html') 
});
````
#
### 4.- Handlebars 👨
Realizamos la instalacion de __Handlebars__ para __express.js__, para poder renderizar las vistas y reutilizar algunos elementos de esta. Para esto creamos una 📂carpeta llamada __views__ la cual utiliza __HBS__ y nos creamos el archivo `home.hbs`, en esta pegamos todo el contenido de la plantilla que utilizamos de  `index.html` anteriormente.
* Para su utilización por defecto deberemos requerirla con la siguiente line de codigo.
````
app.set('view engine', 'hbs');
````
* Establecemos la ruta por defecto, en este caso utilizando el archivo __Handlebars 👨__ recien creado.
````
app.get('/', (req, res) => {
    res.render('home');
});
````
#
### 5.- Argumentos desde el Controlador
Hay veces que necesitamos algunos argumentos que se envien desde el controlador y sean mostrados por pantalla, para esto HBS, tiene una forma de mostrarlo y esto lo veremos a continuación.
* Por ejemplo en este caso queremos enviar 2 argumentos, el __nombre__ y el __titulo__, y de esta manera se puenden enviar argumentos para luego recibirlo y rednerizarlo en las pantallas de HBS.
````
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Felipe Herreras',
        titulo: 'Aprendiendo Node.js'
    });
});
```` 
Vamos a `home.hbs`
* En el `<header>` queremos enviar el titulo, para esto hacemos doble llaves "{}" para recibir el argumento.
````
<title>{{ titulo }}</title>
````
* Tabien lo usaremos en la cabezera de la pagina, en este caso el __titulo__ y el __nombre__.
````
<div class="logo"><a href="/">{{ titulo }} <span>{{ nombre }}</span></a></div>
````
# 
### 6.- Usando parciales de HBS 👨
En el caso de querer reutilizar elementos como __navbar__, __header__, __footer__ y otros elementos se puede hacer con __HBS__, para esto lo mostraremos a continuación:
* Para reutilizar estos elementos, en la documentación nos sale una forma practica de hacerlo.
* Creando una 📂carpeta en `views/` llamada `partials/`, y aqui depositar los elementos a reutilizar.
* Para poder utilizar todos esots elementos tenemos que poder cargarlos.
````
hbs.registerPartials( __dirname + '/views/partials');
````
Creamos los archivos __navbar.hbs__, __header.hbs__ y __footer.hbs__ extrayendo el contenido de las paginas como `home.hbs` que creamos anteriormente _(cortamos los elementos __navbar__, __header__ y __footer__, para luego insertarlas en los nuevos archivos creados)_. Luego vamos a los archivos principales como `home.hbs`.
* Remplazamos el contenido que habia en la plantilla por lo siguiente `{{> header  }}` de esta manera renderizamos el contenido del archivo `header.hbs`, para que luego sea mostrado por pantalla.
````
    <!-- Header -->
    {{> header  }}

    <!-- Nav -->
    {{> navbar }}
````
#
## 7.- Preparando Webserver para subirlo a un hosting
Para esto volvimos a instalar __Doenv__ para guardar las variables de entorno, en este caso la del puerto.
````
PORT=8081
````
* Realizamos la importacion correspondiente de __Doenv__.
* Luego le asignamo el puerto a nuestra constante llamada `port`.
````
require('dotenv').config();

const port = process.env.PORT;
````
#
> __Elemento Posterior 👀:__ __[REST Server con Node.js y Express](https://github.com/Paserno/node-express-restserver-fst)__