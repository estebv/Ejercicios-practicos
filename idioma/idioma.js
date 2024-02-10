const saludar= () => {

    const nombre = (document.getElementById('name').value);
    const idioma = (document.getElementById('lenguage'));
    const idiomaSeleccionado = idioma.value;

    

    switch (idiomaSeleccionado) {
        case 'japones':
            saludo = '¡こんにちは！'; // Saludo en japonés
            break;
        case 'chino':
            saludo = '¡你好！'; // Saludo en chino
            break;
        case 'ingles':
            saludo = '¡hello!'; // Saludo en inglés
            break;
        default:
            saludo = 'No se reconoce el idioma seleccionado';
    }
    document.getElementById('hola').innerHTML = saludo + ' ' + nombre;
 
}