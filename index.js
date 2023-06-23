/* validando que npm express funcione (npmjs.com/package/express)
voy a página oficial, luego copio - pego y edito */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8080); //significa que voy a usar localhost:8080

