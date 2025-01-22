const input = document.getElementById('amigo'); 
const button = document.querySelector('.button-add'); 
const sortear = document.querySelector('.button-draw'); 
const listaParticipantes = document.getElementById('listaAmigos'); 
const result = document.getElementById('resultado'); 

// Lista para almacenar los nombres
const nombres = [];

// Escuchar el botón "Añadir"
button.addEventListener('click', () => {
    agregarNombre();
});

// Escuchar la tecla "Enter" en el campo de entrada
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        agregarNombre();
    }
});

// Escuchar el botón "Sortear", cuando existe mas de 1 participante
sortear.addEventListener('click', () => {

    if (nombres.length > 0) {
        const ganador = nombres[Math.floor(Math.random() * nombres.length)];
        mostrarResultado(ganador);
    }

    
    else {
       alert('No hay participantes en la lista.');
       
    }
});

// Función para validar y agregar un nombre
function agregarNombre() {
    const nombre = input.value.trim(); 

 
    if (nombre === '') {
        alert('El campo no puede estar vacío.');
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        return;
    }

   
    nombres.push(nombre);
    actualizarLista();
    input.value = ''; 
}

// Función para actualizar la lista en el DOM
function actualizarLista() {
  
    listaParticipantes.innerHTML = '';
    nombres.forEach((nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaParticipantes.appendChild(li);
    });

    sortear.disabled = nombres.length <= 1;
    
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(ganador) {
    result.innerHTML = ''; 
    const mensaje = document.createElement('h2');
    mensaje.textContent = `El ganador es: ${ganador}`;
    result.appendChild(mensaje);
}

window.onload = function() {
    alert("AMIGO SECRETO dice: ¡Bienvenido a la aplicación!");
};
