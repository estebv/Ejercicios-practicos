const calcular= () => {
    const diametro = parseFloat(document.getElementById('diametro').value);
    const radio = parseFloat(document.getElementById('radio').value);
    const area = (3.1416*radio);
    const perimetro =2*3.1416*diametro;

    document.getElementById('resultadoArea').innerHTML = area.toFixed(2);
    document.getElementById('resultadoPerimetro').innerHTML = perimetro.toFixed(2);
}