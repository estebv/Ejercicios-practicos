

const calcular= () => {
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    const area = largo*ancho;
    const perimetro = 2*(largo+ancho);


    document.getElementById('resultadoArea').innerHTML = area.toFixed(2);
    document.getElementById('resultadoPerimetro').innerHTML = perimetro.toFixed(2);

}

