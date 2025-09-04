
let figuraAtributos = document.querySelector('#figure');


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



document.querySelector('#btnHexColor').addEventListener('click', cambiarColor);
document.querySelector('#btnChooseFigure').addEventListener('click', elegirFigura);