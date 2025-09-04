let figura = document.getElementById('figure');


function circulo() {
    figura.style.borderRadius = '50%';
    figura.style.backgroundColor = 'orange';
}

document.getElementById('btnCircle').addEventListener('click', circulo);