// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let longitudInput = 3;
let amigos = [];
let amigosSorteados = [];
let aleatorio = 0;
let amigo = document.getElementById("amigoNombre");


amigo.focus();

function agregarAmigo(){
    amigo.focus();
//verifica si ya se ha agregado el nombre
    if(amigos.includes(amigo.value)){
        alert("Ya se encuentra en la lista.");
        amigo.value = "";
        return
    }
//verifica que el nombre tenga almenos 3 caracteres
    if(amigo.value.trim().length <= longitudInput){
        alert("Minimo tres(3) caracteres.");
        return
    }else{//agrega el amigo a la lista y limpia el input
        amigos = [...amigos, amigo.value];
        //amigos.push(amigo.value)
        amigo.value = "";
    }

    imprimeAmigos();
}

let ul = document.getElementById('listaAmigos');
//muestra la lista de amigos 
const imprimeAmigos = () => {
    ul.innerHTML = "";
    amigos.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
}


const generarAleatorio = () => {

    let numeroGenerado =  Math.floor(Math.random()*amigos.length);
    
    //Si ya sorteamos todos los amigos
    if (amigosSorteados.length == amigos.length) {
        alert("No hay mas amigos para sortear.");
        return
    } else {
        //Si el numero generado está incluido en la lista 
        if (amigosSorteados.includes(numeroGenerado)) {
            return generarAleatorio();
        } else {
            amigosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

const sortearAmigo = () => {
    aleatorio = generarAleatorio();
    ul.innerHTML = '';
    
    if (amigos.length == 0) {
        alert('Primero agrega un anigo a la lista.')
        amigo.focus();
        return
    }else{
        const ul2 = document.getElementById('resultado');
        const li2 = document.createElement('li');
        li2.textContent = amigos[aleatorio];
        ul2.appendChild(li2);
    }
}