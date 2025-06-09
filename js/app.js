let amigos = [];

function adicionar() {
    let nome = document.getElementById("nome-amigo");
    if (nome.value == '') {
        alert('Por favor, digite o nome do amigo!');
        return;
    }
    if (amigos.includes(nome.value)) {
        alert('Amigo já adicionado!');
        nome.value = '';
        return;
    }
    let lista = document.getElementById("lista-amigos");
    amigos.push(nome.value);
    if (lista.textContent == '') {
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    nome.value = '';
}       

function sortear (){
if (amigos.length < 4) {
        alert('É necessário pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio")

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            
        } else sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[i + 1] + '<br>';
    }
       
 }

   
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = '';
    document.getElementById("lista-sorteio").innerHTML = '';
}
