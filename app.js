// 1. Crear un array para almacenar los nombres de los amigos
let amigos = []; // Este arreglo guardará todos los nombres que el usuario agregue

// 2. Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturamos el valor que el usuario escribió en el campo de texto con id="amigo"
    let input = document.getElementById("amigo"); // Obtenemos el elemento input
    let nombre = input.value.trim(); // Tomamos el texto y eliminamos espacios extra al inicio y al final

    // Validar que el campo no esté vacío
    if (nombre === "") { // Si el usuario no escribió nada
        alert("Por favor, inserte un nombre."); // Mostramos un mensaje de error
        return; // Salimos de la función sin hacer nada más
    }

    // Si el nombre es válido, lo agregamos al array amigos
    amigos.push(nombre); // .push() añade el elemento al final del array

    // Llamamos a la función que actualiza la lista en pantalla
    actualizarLista();

    // Limpiamos el campo de texto para que el usuario pueda escribir otro nombre
    input.value = ""; // Lo dejamos vacío
}

// 3. Función para actualizar la lista visual de amigos
function actualizarLista() {
    // Obtenemos el elemento <ul> que mostrará la lista de amigos
    let lista = document.getElementById("listaAmigos");

    // Limpiamos la lista antes de volver a llenarla, así evitamos duplicados
    lista.innerHTML = "";

    // Recorremos el array amigos para mostrar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Creamos un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignamos el nombre del amigo como texto
        lista.appendChild(li); // Lo agregamos dentro de la lista <ul>
    }
}

// 4. Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que haya al menos un nombre en el array
    if (amigos.length === 0) { // Si el array está vacío
        alert("Agrega al menos un nombre antes de sortear."); // Mostramos mensaje de error
        return; // Salimos de la función
    }

    // Generar un índice aleatorio entre 0 y el tamaño del array - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Usamos ese índice para obtener el nombre sorteado
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostramos el resultado en el elemento con id="resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
