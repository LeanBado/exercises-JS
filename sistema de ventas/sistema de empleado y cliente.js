class Persona{
    static contadorPersonas = 0;
    constructor (nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona (){
        return this._idPersona;
    }
    get nombre (){
        return this._nombre;
    }
    get apellido (){
        return this._apellido;
    }
    get edad (){
        return this._edad;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
    set edad (edad){
        this._edad = edad;
    }
    toString(){
        return "Id n°: "+this._idPersona + ", " + this._nombre + " " + this._apellido + ", edad: " + this._edad + " ";
    }
}
class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados ;
        this._sueldo = sueldo;
    }
    get idEmpleado (){
        return this._idEmpleado;
    }
    get sueldo (){
        return this._sueldo;
    }
    set sueldo (sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString()+"Id empleado n°"+this._idEmpleado+"sueldo $"+this._sueldo;
    }
}
class Cliente extends Persona {
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return  super.toString()+ "cliente: " + this._idCliente + " fecha de registro: " + this._fechaRegistro;
    }

}

let persona1 = new Persona("Leandro", "Bado", 29);
console.log(persona1.toString())
let persona2 = new Persona("Gimena", "Fernandez", 50);
console.log(persona2.toString())
let persona3 = new Empleado("Jorge","Alvarez", 30, 50000);
console.log(persona3.toString());
let persona4 = new Empleado("Carlos","Alcaraz", 56, 100000);
console.log(persona4.toString());
let persona5 = new Cliente("Omar","Gimenez", 30, new Date());
console.log(persona5.toString());
let persona6 = new Cliente ("Lucas","Gomez",77, new Date());
console.log(persona6.toString())

console.log(typeof(persona1))