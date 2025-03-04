// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Array para almacenar los índices de los amigos ya sorteados
let amigosSorteados = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturamos el valor del campo de texto y eliminamos espacios en blanco al inicio y final
    const nombre = document.getElementById('amigo').value.trim();
    
    // Validamos que el campo no esté vacío
    if (nombre === "") {
        // Si el campo está vacío, mostramos una alerta y detenemos la ejecución de la función
        alert("Por favor, inserte un nombre.");
        return;  // Terminamos la ejecución de la función si el campo está vacío
    }

    // Añadimos el nombre al array de amigos
    amigos.push(nombre);

    // Actualizamos la lista de amigos en la pantalla con los nuevos datos
    actualizarLista();

    // Limpiamos el campo de entrada y colocamos el cursor al principio para añadir el siguiente amigo
    const inputElement = document.getElementById('amigo');
    inputElement.value = "";  // Limpiar el campo
    inputElement.focus();  // Colocar el cursor al principio
}

// Función para actualizar la lista de amigos mostrada en la pantalla
function actualizarLista() {
    // Seleccionamos el contenedor de la lista de amigos en el HTML
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiamos la lista existente para evitar duplicados antes de actualizarla
    listaAmigos.innerHTML = "";

    // Iteramos sobre el array 'amigos' y creamos elementos <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        // Creamos un nuevo elemento de lista <li>
        const li = document.createElement("li");
        // Asignamos el nombre del amigo al contenido del <li>
        li.textContent = amigos[i];
        // Añadimos el <li> al contenedor de la lista de amigos
        listaAmigos.appendChild(li);
    }
}

// Función para realizar el sorteo aleatorio de un amigo secreto
function sortearAmigo() {
    // Validamos que haya al menos un amigo en la lista para sortear
    if (amigos.length === 0) {
        // Si no hay amigos, mostramos una alerta
        alert("No hay amigos para sortear.");
        return;  // Terminamos la ejecución de la función si no hay amigos
    }

    // Verificamos si todos los amigos ya han sido sorteados
    if (amigosSorteados.length === amigos.length) {
        // Si ya todos los amigos han sido sorteados, mostramos un mensaje final
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = "<li><strong>Ya todos tienen su amigo secreto!</strong></li>";
        return;  // Terminamos la función si todos los amigos han sido sorteados
    }

    // Variable para almacenar el índice aleatorio generado
    let indiceAleatorio;

    // Aseguramos que el amigo sorteado no se repita
    do {
        // Generamos un índice aleatorio entre 0 y el tamaño del array menos 1
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
    } while (amigosSorteados.includes(indiceAleatorio));  // Repetimos si el índice ya ha sido sorteado

    // Obtenemos el nombre del amigo sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Agregamos el índice sorteado al array de amigosSorteados para evitar repetidos
    amigosSorteados.push(indiceAleatorio);

    // Mostramos el resultado del sorteo en el área correspondiente
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

/* Explicación de los conceptos usados:

1. **Arrays**:
   - `let amigos = []`: Creamos un array vacío llamado `amigos` donde almacenamos los nombres de los amigos que participarán en el sorteo.
   - `let amigosSorteados = []`: Creamos un array vacío llamado `amigosSorteados` para almacenar los índices de los amigos que ya han sido sorteados. Esto nos asegura que no se repitan al momento del sorteo.

2. **Funciones**:
   - **`agregarAmigo()`**: Esta función se activa cuando el usuario hace clic en el botón para añadir un amigo. Captura el valor del campo de entrada, valida si no está vacío, lo agrega al array `amigos` y actualiza la lista visualmente en la página.
   - **`actualizarLista()`**: Esta función recorre el array `amigos` y genera dinámicamente un elemento `<li>` por cada amigo para mostrarlo en una lista HTML. Además, se asegura de limpiar la lista previa para no mostrar duplicados.
   - **`sortearAmigo()`**: Esta función selecciona un amigo aleatorio de la lista de amigos, asegurándose de que no se repitan los sorteos mediante el uso de un array adicional (`amigosSorteados`) que contiene los índices de los amigos ya sorteados. Si todos los amigos han sido sorteados, muestra un mensaje indicando que ya todos tienen su amigo secreto.

3. **Controles de flujo**:
   - **`if`**: Usamos `if` para verificar condiciones, como si el campo de texto está vacío o si todos los amigos han sido sorteados.
     - Ejemplo de validación para evitar que el campo de texto esté vacío:
       
       if (nombre === "") {
           alert("Por favor, inserte un nombre.");
           return;
       }
       
   - **`while`**: Usamos el bucle `while` para asegurar que el índice aleatorio generado no haya sido sorteado anteriormente. Si el índice ya existe en `amigosSorteados`, generamos uno nuevo hasta que sea único.
     
     do {
         indiceAleatorio = Math.floor(Math.random() * amigos.length);
     } while (amigosSorteados.includes(indiceAleatorio));
     

4. **Métodos nativos de JavaScript**:
   - **`document.getElementById()`**: Esta función se usa para acceder a elementos del DOM por su ID, como los campos de texto y los botones.
     - Ejemplo:
       
       document.getElementById('amigo').value
       
   - **`Math.random()`**: Devuelve un número aleatorio entre 0 y 1, que luego utilizamos para generar un índice aleatorio.
   - **`Math.floor()`**: Redondea hacia abajo el número generado por `Math.random()` para obtener un número entero.
    
     Math.floor(Math.random() * amigos.length);
    
   - **`alert()`**: Muestra un cuadro de mensaje en la pantalla con el texto proporcionado.

5. **Manipulación del DOM**:
   - **`createElement("li")`**: Crea un nuevo elemento `<li>`, que luego se añade al DOM para mostrarlo en la página.
   - **`innerHTML`**: Usado para insertar o actualizar contenido HTML dentro de un elemento en el DOM. Por ejemplo, mostramos el resultado del sorteo usando:
     
     resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
     

Este código permite gestionar un sorteo de amigo secreto asegurando que no haya repeticiones y mostrando un mensaje cuando todos los participantes han sido sorteados. */

