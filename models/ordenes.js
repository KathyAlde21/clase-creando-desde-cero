class Orden {
    constructor(idOrden, idCliente, idEmpleado, fechaOrden, fechaEnvio, fechaRequerida, carga){
        this._idOrden = idOrden;
        this._idCliente = idCliente;
        this._idEmpleado = idEmpleado;
        this._fechaOrden = fechaOrden;
        this._fechaEnvio = fechaEnvio;
        this._fechaRequerida = fechaRequerida;
        this._carga = carga;
    }
    // idOrden
    get idOrden(){
        return this._idOrden;
    }
    set idOrden(idOrden){
        this._idOrden = idOrden;
    }

    // idCliente
    get idCliente(){
        return this._idCliente;
    }
    set idCliente(idCliente){
        this._idCliente = idCliente;
    }

    // idEmpleado
    get idEmpleado(){
        return this._idEmpleado;
    }
    set idEmpleado(idEmpleado){
        this._idEmpleado = idEmpleado;
    }

    // fechaOrden
    get fechaOrden(){
        return this._fechaOrden;
    }
    set fechaOrden(fechaOrden){
        this._fechaOrden = fechaOrden;
    }

    // fechaEnvio
    get fechaEnvio(){
        return this._fechaEnvio;
    }
    set fechaEnvio(fechaEnvio){
        this._fechaEnvio = fechaEnvio;
    }

    // fechaRequerida
    get fechaRequerida(){
        return this._fechaRequerida;
    }
    set fechaRequerida(fechaRequerida){
        this._fechaRequerida = fechaRequerida;
    }

    // carga
    get carga(){
        return this._carga;
    }
    set carga(carga){
        this._carga = carga;
    }
}
module.exports = Orden;