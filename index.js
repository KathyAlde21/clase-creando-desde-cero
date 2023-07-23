/* validando que npm express funcione (npmjs.com/package/express)
voy a página oficial, luego copio - pego y edito */
/* const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8080); //significa que voy a usar localhost:8080 */

/* ------------- */

//Para probar si esta funcionando tomo uno de los js de models y lo ejecuto
/*const Cliente = require('./models/clientes');

const clienteUno = new Cliente('Hola', 'Adios', 'que tal');
console.log(clienteUno);*/

/* ------------- */

//llamando Services.js
/*const { leerTodo } = require('./services/clientesService');
console.log(leerTodo('customers'));*/

/*const { leerTodo } = require('./services/empleadosService');
console.log(leerTodo('employees'));*/

/*const { leerTodo } = require('./services/detalleDeOrdenService');
console.log(leerTodo('orderDetails'));*/

/*const { leerTodo } = require('./services/productosService');
console.log(leerTodo('products'));*/

/*const { leerTodo } = require('./services/ordenesService');
console.log(leerTodo('orders'));*/

/* ------------- */

/* validando que npm express funcione (npmjs.com/package/express)
voy a página oficial, luego copio - pego y edito */
const express = require('express');
const app = express();

app.get('/clientes', (req, res) => {
    res.send('clientes.html');
});

app.get('/empleados', (req, res) => {
    res.send('empleados');
});

app.get('/detalleDeOrden', (req, res) => {
    res.send('detalle de orden');
});

app.get('/ordenes', (req, res) => {
    res.send('ordenes');
});

app.get('/productos', (req, res) => {
    res.send('productos');
});

app.listen(8080); //significa que voy a usar localhost:8080
