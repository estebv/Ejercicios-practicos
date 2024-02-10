
/*const calcularImc = () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = peso / (altura ** 2);


    document.getElementById('resultado').innerHTML = imc.toFixed(2);

    if(imc < 16){
        document.getElementById('imc').innerHTML = "delgadez severa";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/bajo-peso.PNG";
    }
    if(imc >=16 && imc < 17){
        document.getElementById('imc').innerHTML = "delgadez moderada";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/bajo-peso.PNG";
    }
    if(imc >= 17 && imc < 18.5){
        document.getElementById('imc').innerHTML = "delgadez aceptable";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/bajo-peso.PNG";
    }
    if(imc >= 18.5 && imc < 25){
        document.getElementById('imc').innerHTML = "peso normal";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/peso-normal.PNG";
    }
    if(imc >= 25 && imc < 30){
        document.getElementById('imc').innerHTML = "sobrepeso";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/sobrepeso.PNG";
    }
    if(imc >= 30 && imc < 35){
        document.getElementById('imc').innerHTML = "obesidad I";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/obesidad-uno.PNG";
    }
    if(imc >= 35 && imc < 40){
        document.getElementById('imc').innerHTML = "obesidad II";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/obesidad-dos.PNG";
    }
    if(imc >= 40 && imc < 50){
        document.getElementById('imc').innerHTML = "obesidad III ";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/obesidad-tres.PNG";
    }
    if(imc >= 50){
        document.getElementById('imc').innerHTML = "obesidad IV o extrema";
        document.getElementById('img').src = "/indice-masa-corporal/IMG - copia/obesidad-cuatro.PNG";
    }

}*/

const IMC_CATEGORIAS = [
    { max: 16, label: "delgadez severa"},
    { min: 16, max: 17, label: "delgadez moderada", img: "bajo-peso.PNG" },
    { min: 17, max: 18.5, label: "delgadez aceptable", img: "bajo-peso.PNG" },
    { min: 18.5, max: 25, label: "peso normal", img: "peso-normal.PNG" },
    { min: 25, max: 30, label: "sobrepeso", img: "sobrepeso.PNG" },
    { min: 30, max: 35, label: "obesidad I", img: "obesidad-uno.PNG" },
    { min: 35, max: 40, label: "obesidad II", img: "obesidad-dos.PNG" },
    { min: 40, max: 50, label: "obesidad III", img: "obesidad-tres.PNG" },
    { min: 50, label: "obesidad IV o extrema", img: "obesidad-cuatro.PNG" }
];

const calcularImc = () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = peso / (altura * 2);
    document.getElementById('resultado').innerHTML = imc.toFixed(2);

};


        




