
let figuraAtributos = document.querySelector('#figure');


function cambiarColor(){
    const colorFigura = prompt('Ingrese su nuevo color en #HEX');
    figuraAtributos.style.backgroundColor= colorFigura;
}



document.querySelector('#btnHexColor').addEventListener('click', cambiarColor);