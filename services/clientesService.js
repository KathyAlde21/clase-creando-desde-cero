//desde acá llamo a clientes.js que a su vez llama a customers.csv
const fs = require('fs');
const Cliente = require('../models/clientes'); //.. para subir un nivel

//Estructura de lectura de datos
const leerTodo = (nombreArchivo) => {
    const arregloClientes = []; //llamado en el if

    //como interpolación pongo datos, por eso `${}` - utf-8 es por ES6
    let datos = fs.readFileSync(`./datos/${nombreArchivo}.csv`, 'utf-8'); 
    //uso replace para \r (saltar al inicio de la línea) y \n (saltar hacia abajo).
    //el \r va entre // y la g (de global) para sacarlos todos
    datos = datos.replace(/\r/g, ''); 
    //para separar \n uso un ; y no un vacío ''
    //otra opción es un replaceAll y ''
    datos = datos.replaceAll('\n', ';');
    //uso split para eliminar el ; y separar los datos
    datos = datos.split(';');
   
    //console.log(datos); //usandolo valide que todo lo anterior funcionara

   //const cliente = new Cliente(datos[0], datos[1], datos[2]); //llamando tres datos
   //console.log(cliente);

    datos.forEach((element, indice) => {
        if((indice +1) % 3 == 0){
           //console.log(element, indice); //para validar que llama al tercero solamente
           //considerando que indice es el último dato de cada línea los otros se anotan en cuenta regresiva
           const cliente = new Cliente(datos[indice - 2], datos[indice - 1], datos[indice])
           //para llamarlos a todos creo un arreglo y lo llamo dentro del if
           arregloClientes.push(cliente);
        }
    });
    // console.log(arregloClientes);
    return arregloClientes;
}
//leerTodo('customers');

const leerPorId = (id, nombreArchivo) => {

}

const insertar = (cliente) =>{

}

const actualizar = (cliente) => {

}

const eliminar = (id) => {

}



//lo mando al index con:
module.exports = {
    leerTodo
}

