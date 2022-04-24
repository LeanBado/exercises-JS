class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}
class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get marca (){
        return this._marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set marca(marca){
        this._marca = marca;
    }
    set tamaño (tamaño){
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}
class Computadora{
    static contadorComputadora = 0;
    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadora;
    }

    toString(){
        return `COMPUTADORA: \n idComputadora: ${this._idComputadora} \n nombre: ${this._nombre} \n monitor: ${this._monitor} \n teclado: ${this._teclado} \n raton: ${this._raton}]`;
    }
}
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let mostrar = " ";
        for(Computadora of this._computadoras){
            mostrar += `\n ${Computadora}`;
        }
        console.log(`IDorden: ${this._idOrden}  ${mostrar}`);
    }
}


let tecladonuevo = new Teclado("teclado","4tech");
let teclado2 = new Teclado("Teclado", "HP")
let mousenuevo = new Raton("mouse","logitech");
let monitornuevo = new Monitor("samsung",22);
let monitor2 = new Monitor("HP", 34);
let mouse2 = new Raton("raton","HP");
console.log(mousenuevo.toString())
let compu1 = new Computadora("Compu De Lea", monitornuevo, tecladonuevo, mouse2);
let compu2 = new Computadora("Compu de Pato", monitor2, tecladonuevo, mouse2);
let compu3 = new Computadora ("compu de RICARDO", monitor2,teclado2,mousenuevo);
let lea = new Orden();
let ric = new Orden();
lea.agregarComputadora(compu1);
lea.agregarComputadora(compu2);
lea.mostrarOrden()
ric.agregarComputadora(compu3);
ric.agregarComputadora(compu2);
ric.agregarComputadora(compu1);
ric.mostrarOrden()