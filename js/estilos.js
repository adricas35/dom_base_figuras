let figura = document.getElementById('figure');


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


document.getElementById('btnCircle').addEventListener('click', circulo);
document.getElementById('btnStar').addEventListener('click', estrella);
document.getElementById('btnGif').addEventListener('click', fondoGif);