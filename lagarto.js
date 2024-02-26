// Función para obtener la elección aleatoria de la computadora desde la API
async function obtenerEleccionComputadora() {
  try {
    const response = await fetch('https://rps101.pythonanywhere.com/api');
    const data = await response.json();
    return data.choice;
  } catch (error) {
    console.error('Error al obtener la elección de la computadora:', error);
  }
}

// Función para determinar el resultado
function determinarResultado(jugador, computadora) {
  if (jugador === computadora) {
    return '¡Es un empate!';
  } else if (
    (jugador === 'piedra' && (computadora === 'tijeras' || computadora === 'lagarto')) ||
    (jugador === 'papel' && (computadora === 'piedra' || computadora === 'spock')) ||
    (jugador === 'tijeras' && (computadora === 'papel' || computadora === 'lagarto')) ||
    (jugador === 'lagarto' && (computadora === 'papel' || computadora === 'spock')) ||
    (jugador === 'spock' && (computadora === 'piedra' || computadora === 'tijeras'))
  ) {
    return '¡Ganaste!';
  } else {
    return '¡Sheldon gana!';
  }
}

// Función para mostrar el resultado
function mostrarResultado(resultado) {
  document.getElementById('result').innerText = resultado;
}

// Función para mostrar emojis 
function mostrarEmoji(resultado) {
  let emoji;
  if (resultado === '¡Ganaste!') {
    emoji = '😃';
  } else if (resultado === '¡Sheldon gana!') {
    emoji = '😞';
  } else {
    emoji = '😐';
  }
  document.getElementById('result').innerText += ' ' + emoji;
}

// Función principal para jugar una partida
async function jugar(jugador) {

  const computadora = await obtenerEleccionComputadora();
  
  // Determinar el resultado del juego
  const resultado = determinarResultado(jugador, computadora);

  // Mostrar el resultado en la interfaz de usuario
  mostrarResultado(resultado);

  // Mostrar emojis 
  mostrarEmoji(resultado);
}

// Botones de opciones
document.getElementById('piedra').addEventListener('click', () => jugar('piedra'));
document.getElementById('papel').addEventListener('click', () => jugar('papel'));
document.getElementById('tijeras').addEventListener('click', () => jugar('tijeras'));
document.getElementById('lagarto').addEventListener('click', () => jugar('lagarto'));
document.getElementById('spock').addEventListener('click', () => jugar('spock'));

// Función para reiniciar 
function reiniciarJuego() {
  document.getElementById('result').innerText = ''; // Limpiar el resultado anterior
}

// Función principal para jugar una partida
async function jugar(jugador) {
  // Obtener la elección aleatoria de la computadora
  const computadora = await obtenerEleccionComputadora();
  
  // Determinar el resultado del juego
  const resultado = determinarResultado(jugador, computadora);

  // Mostrar el resultado en la interfaz de usuario
  mostrarResultado(resultado);

  // Mostrar emojis 
  mostrarEmoji(resultado);

  // reiniciar el juego
  const reiniciarBoton = document.createElement('button');
  reiniciarBoton.textContent = 'Jugar de nuevo';
  reiniciarBoton.addEventListener('click', reiniciarJuego);
  document.getElementById('result').appendChild(reiniciarBoton);
}
