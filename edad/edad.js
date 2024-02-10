const promediar=()=>{
const cantidadEdades =  parseInt(document.getElementById('contador').value);

let sumaEdades = 0;

for (let i = 1; i <= cantidadEdades; i++) {
   const edad = parseInt(prompt("ingrese edad : "));
    sumaEdades = sumaEdades + edad;
}

const promedio = sumaEdades / cantidadEdades;

document.getElementById('promedio').innerHTML = promedio;

}
