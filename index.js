
// Datos Nombre y Apellido 
let nombre = prompt ("Escribe tu nombre");
let apellido = prompt ("Escribe tu apellido");

// Funcion saludar 
function saludar(){
    if((nombre ===" " || nombre === null) || (apellido ===" " || apellido === null))  {
        alert("Error: Ingresar nombre y apellido");
    } 
    else{ alert("Bienvenido " +nombre+" "+apellido+"."); }
}

saludar();

console.log("Nombre: " +nombre);
console.log("Apellido: " +apellido);

// Datos de la Edad
let age =parseInt (prompt ("Hola, cuanto años tienes"));


// Condicional Edad
switch (true) {
    case age <= 20: 
        alert("Eres Adolescente. ¡Vive la vida!");
        break;
    case age <= 55:
        alert("Eres Adulto. ¡Vive la vida!");
        break;
    case age <= 100:
        alert("Eres Adulto. ¡Vive la vida!");
        break;
    case age <= 55:
        alert("Eres Adulto. ¡Vive la vida!");
        break;
    default:
        alert("Puede ser que el dato sea incorrecto");
}
console.log("Edad: " +age);

// Datos para calcular el aguinaldo, Sueldo Bruto y Dias Trabajados
let sueldoBruto = parseInt (prompt("Ingresa tu mejor sueldo bruto."));
let  diasTranajados = parseInt (prompt("Ingresa el total de los dias trabajados en el semestre. Maximo 180"));

// Funcion aguinaldo 
function aguinaldo(sueldo, dias, semestre = 180 ){
    resultado = ((sueldo / 2)*dias)/semestre
}

aguinaldo(sueldoBruto,diasTranajados);

console.log("aguinaldo: " +resultado);

// Datos para calculas vacaciones, Antiguedad
let  antiguedad = parseInt (prompt("Ingresa tus años de antiguedad en tu trabajo."));

function vacaciones(antiguedad){
    if (antiguedad <= 5) { alert("Tienes 14 dias de vacaciones");}
        else if (antiguedad <= 10) { alert("Tienes 21 dias de vacaciones"); }
        else if (antiguedad <= 20) { alert("Tienes 28 dias de vacaciones");}
        else if (antiguedad > 20) { alert("Tienes 35 dias de vacaciones");}
        else { alert("Dato incorrecto");}
}

vacaciones(antiguedad);


// Lo que se muestra 
document.write("Hola " +nombre+" "+apellido+ ", gracias por visitar nuestro sitio. ");


// Contructor Persona
function Persona(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido 	 = apellido;
    this.edad 	 = edad;
    this.saludar = function(){ console.log("HOLA "+ this.nombre)}
}
const persona1 = new Persona("Ezequiel", "Lage", 27);
const persona2 = new Persona("Jose", "Lopez", 50);
persona1.saludar();
persona2.saludar();


console.log(persona1);
console.log(persona2);

// Contructor Datos Laborables
function DatosLaborales (owner, sueldoBruto ,diasTranajados, antiguedad) {
    this.owner = owner;
    this.sueldoBruto = sueldoBruto;
    this.diasTranajados = diasTranajados;
    this.antiguedad = antiguedad;
}

const DatosHaberes1 = new DatosLaborales(persona1, 40000, 90, 5);
const DatosHaberes2 = new DatosLaborales(persona2, 70000, 180, 24);

console.log(DatosHaberes1);
console.log(DatosHaberes2);



// Array Nombramientos Docentes
const nombramientosDocentes =  [{  id: 1,  cargo: "Direcor", horas: 25 },
{  id: 2,  cargo: "Profesor", horas: 30 },
{  id: 3,  cargo: "Jefe de Taller"  , horas: 35},
{  id: 4,  cargo: "Ayudante de docencia" , horas: 40}]; 

// Buscar cargo { id: 3,  producto: "Jefe de Taller"  , horas: 35}
const buscarCargo = nombramientosDocentes.find(cargo => cargo.id === 3); 
console.log(buscarCargo);


// Buscar cargo con menor carga horaria de 30
const menosHoras = nombramientosDocentes.filter(cargo => cargo.horas <= 30); 
console.log(menosHoras);

// Aumento de horas en los cargos
const aumentosDeHoras = nombramientosDocentes.map(cargo => cargo.horas += 2);
console.log(aumentosDeHoras);


// Push Agregar al final un nuevo cargo
nombramientosDocentes.push({  id: 5,  cargo: "Jefe de Trabajos Practicos" , horas: 45});
console.log(nombramientosDocentes);


// Slice filtramos cargos de mayor jerarquia
let cargosMenorJerarquia

cargosMenorJerarquia = nombramientosDocentes.slice(2,4);
console.log (cargosMenorJerarquia);


// Con que cargo se arranca. Utilizando forEach en array (Contenacion backticks ` alt96)
cargosMenorJerarquia.forEach (cargos => {
    console.log(`Se empiezan por estos cargos ${cargos.cargo}`);  
})