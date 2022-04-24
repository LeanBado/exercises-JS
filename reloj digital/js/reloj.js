function cargaReloj(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    document.getElementById("hora").innerHTML =  `${hora}:${min}:${seg}`; 

    let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    let diaCOmpleto = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();

    document.getElementById("fecha").innerHTML = `${diaCOmpleto}, ${fecha.getDay()} ${mes} del año ${año}`;
}
setInterval(cargaReloj,1000);