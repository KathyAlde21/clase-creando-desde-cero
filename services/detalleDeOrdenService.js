const fs = require('fs');
const DetalleDeOrden = require('../models/detalleDeOrden'); //.. para subir un nivel

//Estructura de lectura de datos
const leerTodo = (nombreArchivo) => {
    const arregloDetalleDeOrden = [];
    let datos = fs.readFileSync(`./datos/${nombreArchivo}.csv`, 'utf-8'); 
    datos = datos.replaceAll('\r', ''); 
    datos = datos.replaceAll('\n', ';');
    datos = datos.split(';');
    //console.log(datos);

    datos.forEach((element, indice) => {
        if((indice +1) % 5 == 0){
           const detalleDeOrden = new DetalleDeOrden(datos[indice - 4],datos[indice - 3],datos[indice - 2], datos[indice - 1], datos[indice])
           arregloDetalleDeOrden.push(detalleDeOrden);
        }
    });
    // console.log(arregloDetalleDeOrden);
    return arregloDetalleDeOrden;
}
//leerTodo('orderDetails');

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

