let amigos = [];

const botonAñadir = document.querySelector('.button-add');
botonAñadir.addEventListener('click', () => {añadirAmigos()});

const botonSortear = document.querySelector('.button-draw');
botonSortear.addEventListener('click', () => {sortearAmigo()});


function añadirAmigos() {
    const nuevoAmigo = document.querySelector('#amigo').value;
    if (nuevoAmigo == "") {
        alert('Por favor ingrese un nombre.');
    } else {
        amigos.push(nuevoAmigo);
        document.querySelector('#amigo').value = "";
        actualizarAmigos();
    };
};

function actualizarAmigos() {
    const listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const elemento = document.createElement('li');
        elemento.textContent = amigo;
        listaAmigos.appendChild(elemento);
    });
};

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    if (amigos.length == 0) {
        alert('No hay amigos para sortear');
    } else {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = `Tu amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong>`;
    };
};