
//Variable global
let figura = document.getElementById('figure');

//Variables para la function animación
let angulo = 0;
const velocidad = 1;


function circulo() {
    figura.style.borderRadius = '50%';
    figura.style.backgroundColor = 'orange';
}

function estrella(){
    figura.style.clipPath = 'polygon(50% 0%, 61% 35%,98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%,  39% 35% )';
    figura.style.backgroundColor = 'green';
}

function fondoGif(){
    figura.style.backgroundImage= "url('img/minions.gif')";
    figura.style.backgroundSize= '100% 100%';
    figura.style.backgroundRepeat= 'no-repeat';
}

function animacion(){
    angulo = (angulo + velocidad) % 360; 
    figura.style.transform = `rotate(${angulo}deg)`;
    requestAnimationFrame(animacion); 
    figura.style.backgroundColor = 'grey';
}

function moverArriba(){
    figura.style.transform = 'translateY(-50px)';
    figura.style.backgroundColor = 'purple';
}

function moverAbajo(){
    figura.style.transform = 'translateY(50px)';
    figura.style.backgroundColor = 'violet';
}

function moverIzq(){
    figura.style.transform = 'translateX(-50px)';
    figura.style.backgroundColor = 'yellow';
}

function moverDer(){
    figura.style.transform = 'translateX(50px)';
    figura.style.backgroundColor = 'orange';
}


document.getElementById('btnCircle').addEventListener('click', circulo);
document.getElementById('btnStar').addEventListener('click', estrella);
document.getElementById('btnGif').addEventListener('click', fondoGif);
document.getElementById('btnAnim').addEventListener('click', animacion);
document.getElementById('btnMoveUp').addEventListener('click', moverArriba);
document.getElementById('btnMoveDown').addEventListener('click', moverAbajo);
document.getElementById('btnMoveLeft').addEventListener('click', moverIzq );
document.getElementById('btnMoveRight').addEventListener('click', moverDer);