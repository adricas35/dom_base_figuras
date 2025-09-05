
let figuraAtributos = document.querySelector('#figure');
let imagen = document.querySelector('#mainImage');
const listaImg = ['img/imagen.jpg', 'img/imagen2.jpg','img/imagen3.jpg'];
let indexImg = 0;
const url = document.querySelector('#mainLink');



function cambiarColor(){
    const colorFigura = prompt('Ingrese su nuevo color en #HEX');
    figuraAtributos.style.backgroundColor= colorFigura;
}

function elegirFigura(){
    const figura= prompt('Elige entre círculo, estrella o cuadrado');
    switch (figura) {
        case 'estrella':
            figuraAtributos.style.clipPath = 'polygon(50% 0%, 61% 35%,98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%,  39% 35% )';            
            break;

        case 'círculo':
            figuraAtributos.style.clipPath = 'circle(50%)';
            figuraAtributos.style.backgroundColor = 'orange';
            break;
        case'cuadrado':
            figuraAtributos.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            default:
            break;
    }  
}

function cambiarImg(){
    if (indexImg < 2) {
        indexImg++;
    }else{
        indexImg = 0;
    }

    const nuevaImg = listaImg[indexImg];
    imagen.setAttribute('src', nuevaImg);
}


function cambiarImgAnterior(){
    if (indexImg > 0) {
        indexImg--;
    }else{
        indexImg = 2;
    }

    const nuevaImg = listaImg[indexImg];
    imagen.setAttribute('src', nuevaImg);
}

function mostrarOcultar(){
  imagen.classList.toggle('oculto');
}

function cambiarAtributo(){
    const nuevoTextoAlt = prompt('Ingresa el nuevo texto alternativo para la imagen:');
    imagen.setAttribute('alt', nuevoTextoAlt);
}

function cambiarEnlace(){
    let nuevaUrl = prompt('Ingresa la nueva URL');
    url.setAttribute('href', nuevaUrl);
}








document.querySelector('#btnHexColor').addEventListener('click', cambiarColor);
document.querySelector('#btnChooseFigure').addEventListener('click', elegirFigura);
document.querySelector('#btnChangeImageNext').addEventListener('click', cambiarImg);
document.querySelector('#btnChangeImagePrev').addEventListener('click', cambiarImgAnterior);
document.querySelector('#btnToggleImage').addEventListener('click', mostrarOcultar);
document.querySelector('#btnChangeAlt').addEventListener('click', cambiarAtributo);
document.querySelector('#btnChangeLink').addEventListener('click', cambiarEnlace);