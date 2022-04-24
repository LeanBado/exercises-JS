class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
    this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `id Producto: ${this._idProducto} \n nombre: ${this._nombre} \n precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        } else{
            console.log("no se pueden agregar mas de 5 productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0
        for(let producto of this._productos){
        totalVenta += producto.precio;
        }  
     return totalVenta; 
    }
    mostrarOrden(){
        let productosOrden = " ";
        for( let producto of this._productos){
            productosOrden += producto.toString()+ " ";
        } 
        console.log(`orden: ${this._idOrden} total: ${this.calcularTotal()}, productos: ${productosOrden}`);
    }
}

let producto1 = new Producto ("Camisa", 200);
let producto2 = new Producto ("pantalon", 300);
let producto3 = new Producto ("Campera de cuero", 500);
let producto4 = new Producto ("Buzo", 100);
let producto5 = new Producto ("Medias",20);
let producto6 = new Producto ("Hoodie", 120);


let orden1 = new Orden ();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto6);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto3);

orden1.mostrarOrden();
