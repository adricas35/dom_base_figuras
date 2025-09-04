
let titulo = document.querySelector('#mainTitle');

function cambiarTitulo(){
    const nuevoTitulo = prompt('Ingrese su nuevo titulo');
    titulo.innerText = nuevoTitulo;
}


document.querySelector('#btnChangeTitle').addEventListener('click', cambiarTitulo);