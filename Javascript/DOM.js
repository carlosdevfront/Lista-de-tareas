// Obtener elementos del DOM
const taskInput = document.getElementById('input-tarea'); // Se llama taskInput correctamente
const addTaskBtn = document.getElementById('agregar-tarea');
const taskList = document.getElementById('lista-tareas');

// Función para añadir una tarea
function addTask() {
  const textoTarea = taskInput.value.trim(); // Aquí se debe usar taskInput

  if (textoTarea === '') {
    alert('Por favor, escribe una tarea.');
    return;
  }

  // Crear un elemento <li>
  const taskItem = document.createElement('li');
  taskItem.textContent = textoTarea;

  // Botón de eliminar con un icono de Bootstrap
const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn'); // Clase para los estilos del botón

const deleteIcon = document.createElement('i'); 
deleteIcon.classList.add('bi', 'bi-trash'); // Clases de Bootstrap Icons
deleteBtn.appendChild(deleteIcon); // Añadir el icono al botón

// Evento para eliminar la tarea
deleteBtn.addEventListener('click', () => {
  taskItem.remove();
});

// Añadir botón al elemento <li>
taskItem.appendChild(deleteBtn);

  // Añadir la tarea a la lista
  taskList.appendChild(taskItem);

  // Limpiar el campo de entrada
  taskInput.value = ''; // Aquí también debe ser taskInput
}

// Evento para el botón "Añadir"
addTaskBtn.addEventListener('click', addTask);

// Evento para detectar "Enter" en el campo de entrada
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
