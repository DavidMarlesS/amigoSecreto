# Proyecto - Amigo Secreto

Este proyecto implementa un **sorteo de amigo secreto** donde los usuarios pueden agregar nombres a una lista, realizar un sorteo aleatorio y asegurarse de que no haya repetidos. Además, el sistema muestra un mensaje cuando todos los amigos han sido sorteados.

## Funcionalidades

1. **Agregar amigos**: El usuario puede agregar nombres a la lista de amigos mediante un campo de texto. Al añadir un amigo, el campo de texto se limpia y el cursor se coloca al inicio para añadir el siguiente nombre.
2. **Mostrar la lista de amigos**: Una vez añadidos los amigos, la lista se actualiza y se muestra en la página.
3. **Sorteo aleatorio**: Los amigos se sortean aleatoriamente y el nombre de cada amigo seleccionado es mostrado en la interfaz.
4. **Evitar repeticiones**: Los amigos ya sorteados no pueden ser seleccionados de nuevo. El sistema asegura que todos los amigos sean sorteados sin duplicados.
5. **Mensaje final**: Cuando todos los amigos han sido sorteados, se muestra un mensaje indicando que ya todos tienen su amigo secreto.

## Requisitos

Este proyecto está diseñado para ejecutarse en cualquier navegador moderno que soporte JavaScript. No se requieren dependencias externas.

## Estructura de Archivos

- `index.html`: Contiene la estructura básica de la página.
- `style.css`: Archivo de estilos para la presentación del proyecto.
- `script.js`: Contiene la lógica principal de JavaScript para manejar el sorteo, agregar amigos y actualizar la lista.
- `assets/`: Carpeta opcional para agregar imágenes o íconos (por ejemplo, el ícono del botón de sorteo).

## Instrucciones de Uso

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/amigo-secreto.git
    ```

2. **Abrir el archivo HTML**:
    - Abre el archivo `index.html` en tu navegador favorito.

3. **Agregar amigos**:
    - Ingresa un nombre en el campo de texto y haz clic en el botón "Añadir" para agregarlo a la lista.
    - El campo de entrada se limpiará automáticamente y el cursor se ubicará al inicio para permitir ingresar el siguiente amigo.

4. **Realizar el sorteo**:
    - Haz clic en el botón "Sortear amigo" para seleccionar aleatoriamente un amigo de la lista.
    - Los amigos sorteados no se repetirán, y se mostrará el nombre del amigo secreto en la pantalla.

5. **Mensaje final**:
    - Cuando todos los amigos hayan sido sorteados, aparecerá un mensaje que indica que todos ya tienen su amigo secreto.

## Explicación del Código

### Estructura del código:

1. **HTML**:
    - El archivo `index.html` contiene la estructura básica de la página, incluyendo un formulario para agregar nombres y botones para realizar el sorteo.
    
2. **JavaScript**:
    - `script.js` contiene la lógica principal de la aplicación. Aquí se manejan las funciones para agregar amigos a la lista, realizar el sorteo aleatorio, y actualizar la interfaz de usuario.

3. **CSS**:
    - `style.css` define los estilos visuales del proyecto. Se pueden agregar más reglas de estilo para personalizar la apariencia.

### Funciones del código:

1. **`agregarAmigo()`**:
   - Esta función captura el nombre del campo de texto, valida si no está vacío, lo agrega al array `amigos`, y actualiza la lista de amigos mostrada en la interfaz.

2. **`actualizarLista()`**:
   - Esta función recorre el array `amigos` y actualiza la lista en la página, creando un `<li>` por cada amigo.

3. **`sortearAmigo()`**:
   - Esta función realiza el sorteo aleatorio de un amigo secreto. Se asegura de que los amigos no se repitan utilizando un array adicional llamado `amigosSorteados`. Si todos los amigos han sido sorteados, muestra un mensaje final.

## Tecnologías Usadas

- **HTML**: Para la estructura del contenido web.
- **CSS**: Para el diseño y estilo visual.
- **JavaScript**: Para la lógica de interacción, incluyendo el sorteo aleatorio y la validación de entradas.


