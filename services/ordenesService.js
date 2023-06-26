const fs = require('fs');
const Ordenes = require('../models/ordenes'); //.. para subir un nivel

//Estructura de lectura de datos
const leerTodo = (nombreArchivo) => {
    const arregloOrdenes = [];
    let datos = fs.readFileSync(`./datos/${nombreArchivo}.csv`, 'utf-8'); 
    datos = datos.replaceAll('\r', ''); 
    datos = datos.replaceAll('\n', ';');
    datos = datos.split(';');
    //console.log(datos);

    datos.forEach((element, indice) => {
        if((indice +1) % 7 == 0){
           const ordenes = new Ordenes(datos[indice - 6], datos[indice - 5],datos[indice - 4],datos[indice - 3],datos[indice - 2], datos[indice - 1], datos[indice])
           arregloOrdenes.push(ordenes);
        }
    });
    // console.log(arregloOrdenes);
    return arregloOrdenes;
}
//leerTodo('orders');

const leerPorId = (id, nombreArchivo) => {

}

const insertar = (empleado) =>{

}

const actualizar = (cliente) => {

}

const eliminar = (id) => {

}

//lo mando al index con:
module.exports = {
    leerTodo
}

