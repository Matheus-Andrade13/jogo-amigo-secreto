
let amigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome!");
        return;
    }

    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = "";
    atualizarListaAmigos();
}


function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Não há amigos para sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}`;
}

function reiniciarJogo() {
    amigos = [];

    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('amigo').focus();

    alert("O jogo foi reiniciado! Você pode adicionar novos amigos.");
}

 
