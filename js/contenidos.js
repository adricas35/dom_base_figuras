
let titulo = document.querySelector('#mainTitle');
let parrafo = document.querySelector('#mainParagraph');
const agregarParrafo = document.querySelector('#extraParagraphs');


function cambiarTitulo(){
    const nuevoTitulo = prompt('Ingrese su nuevo titulo');
    titulo.innerText = nuevoTitulo;
}

function cambiarParrafo(){
    const nuevoParrafo = prompt('Ingrese su nuevo parrafo');
    parrafo.innerText = nuevoParrafo;
}

function adicionarParrafo(){
    const textoNuevo = prompt('Ingrese su nuevo párrafo');
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.setAttribute('id', 'newP');
    nuevoParrafo.innerText = textoNuevo;
    agregarParrafo.appendChild(nuevoParrafo);
}




document.querySelector('#btnChangeTitle').addEventListener('click', cambiarTitulo);
document.querySelector('#btnChangeParagraph').addEventListener('click', cambiarParrafo);
document.querySelector('#btnAddParagraph').addEventListener('click', adicionarParrafo);

