const personas =[
    new Persona("Leandro", "Bado"),
    new Persona("Luis", "Ricardo")
];

function mostrarPersona(){
    let texto = "";
    for(let persona of personas){
        console.log(persona);
        texto += ` <li> ${persona.nombre}, ${persona.apellido}</li>` 
    }
    document.getElementById("personas").innerHTML = texto;
    }


function agregarPersona(){
    const forma = document.getElementById("forma");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    if (nombre.value != "" && apellido.value!=""){
    const persona = new Persona(nombre.value, apellido.value)
    personas.push(persona);
    mostrarPersona();
    }
}