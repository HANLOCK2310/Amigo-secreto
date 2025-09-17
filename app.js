let amigos = [];

function agregarAmigo() {
    let inputAmigos = document.getElementById("amigo");
    let amigo = inputAmigos.value;
    
    if (amigo === "") {
        alert("ingresa un nombre valido ");
        return;
    }

    amigos.push(amigo);
    limpiarCaja();
    mostrarAmigo(); // se llama aqui
    console.log(amigos);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigo() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; //limpiar lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el <ul id="resultado">
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    const li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    li.style.fontWeight = "bold"; // opcional: resaltar
    li.style.color = "#2E8B57";   // opcional: color verde
    resultado.appendChild(li);
}
