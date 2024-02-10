const calcularn= () => {

    const matematicas = parseFloat(document.getElementById('matematicas').value);
    const artistica = parseFloat(document.getElementById('artistica').value);
    const sociales = parseFloat (document.getElementById('sociales').value);
    const español =  parseFloat(document.getElementById('español').value);
    const tecnologia =  parseFloat(document.getElementById('tecnologia').value);

    const nota = ((matematicas+artistica+sociales+español+tecnologia)/5);


  
        document.getElementById('nota').innerHTML = nota.toFixed(2);
   

}