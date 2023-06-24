class Producto{
    constructor(productoId, productoNombre, precioUnitario, unidadesEnStock, discontinuado){
        //todo lo de arriba con this._ para encapsular uso el _
        this._productoId = productoId;
        this._productoNombre = productoNombre;
        this._precioUnitario = precioUnitario;
        this._unidadesEnStock = unidadesEnStock;
        this._discontinuado = discontinuado;
   } 
   //los this. estan relacionados a los getter y setter, hago uno de c/u por c/u
   // productoId
   get productoId(){
    return this._productoId;
   }

   set productoId(productoId){
    this._productoId = productoId;
   }

   // productoNombre
   get productoNombre(){
    return this._productoNombre;
   }

   set productoNombre(productoNombre){
    this._productoNombre = productoNombre;
   }

   // precioUnitario
   get productoId(){
    return this._productoId;
   }

   set productoId(productoId){
    this._productoId = productoId;
   }
   
   // unidadesEnStock
   get precioUnitario(){
    return this._precioUnitario;
   }

   set precioUnitario(precioUnitario){
    this._precioUnitario = precioUnitario;
   }

   // discontinuado
   get discontinuado(){
    return this._discontinuado;
   }

   set discontinuado(discontinuado){
    this._discontinuado = discontinuado;
   }

}
module.exports = Producto;
