
let titulo = document.querySelector('#mainTitle');
let parrafo = document.querySelector('#mainParagraph');

function cambiarTitulo(){
    const nuevoTitulo = prompt('Ingrese su nuevo titulo');
    titulo.innerText = nuevoTitulo;
}

function cambiarParrafo(){
    const nuevoParrafo = prompt('Ingrese su nuevo parrafo');
    parrafo.innerText = nuevoParrafo;
}


document.querySelector('#btnChangeTitle').addEventListener('click', cambiarTitulo);
document.querySelector('#btnChangeParagraph').addEventListener('click', cambiarParrafo);
