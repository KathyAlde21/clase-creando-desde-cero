class Empleado {
    constructor(idEmpleado, apellido, nombre, titulo, tituloDeCortesia, fechaDeNacimiento, fechaDeContratacion){
        this._idEmpleado = idEmpleado;
        this._apellido = apellido;
        this._nombre = nombre;
        this._titulo = titulo;
        this._tituloDeCortesia = tituloDeCortesia;
        this._fechaDeNacimiento = fechaDeNacimiento;
        this._fechaDeContratacion = fechaDeContratacion;
    }
    // idEmpleado
    get idEmpleado() {
        return this._idEmpleado;
    }
    set idEmpleado(idEmpleado){
        this._idEmpleado = idEmpleado;
    }

    // apellido
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    // nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    // titulo
    get titulo(){
        return this._titulo;
    }
    set titulo(titulo){
        this.titulo = titulo;
    }

    // tituloDeCortesia
    get tituloDeCortesia(){
        return this._tituloDeCortesia;
    }
    set tituloDeCortesia(tituloDeCortesia){
        this._tituloDeCortesia = tituloDeCortesia;
    }

    // fechaDeNacimiento
    get fechaDeNacimiento(){
        return this._fechaDeNacimiento;
    }
    set fechaDeNacimiento(fechaDeNacimiento){
        this._fechaDeNacimiento = fechaDeNacimiento;
    }

    // fechaDeContratacion
    get fechaDeContratacion(){
        return this._fechaDeContratacion;
    }
    set fechaDeContratacion(fechaDeContratacion){
        this._fechaDeContratacion = fechaDeContratacion;
    }
}
module.exports = Empleado;