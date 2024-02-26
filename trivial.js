// Definir las preguntas y respuestas
const preguntasRespuestas = [
    {
      pregunta: "Cuál fue el detonante de la Primera Guerra Mundial?",
      respuesta: "El asesinato del archiduque Francisco Fernando de Habsburgo."
    },
    {
      pregunta: "Quién fue el primer presidente de Estados Unidos?",
      respuesta: "George Washington."
    },
    {
      pregunta: "Cuánto duró la Guerra de los Cien Años?",
      respuesta: "Esta guerra duró 116 años."
    },
    {
      pregunta: "Qué calavera no regresó tras el primer viaje de Colón a América?",
      respuesta: "La Santa María."
    },
    {
      pregunta: "Qué exploradores dieron la primera vuelta al mundo?",
      respuesta: "Magallanes y Elcano."
    },
    {
      pregunta: "En qué año se disolvió la Unión Soviética?",
      respuesta: "En 1991."
    },
    {
      pregunta: "En qué isla estuvo preso Napoleón?",
      respuesta: "En la isla de Santa Elena."
    },
    {
      pregunta: "En qué año se creó la Organización de las Naciones Unidas?",
      respuesta: "En 1945."
    },
    {
      pregunta: "En qué año pisó el hombre la luna por primera vez?",
      respuesta: "En el año 1969."
    },
    {
      pregunta: "Quién fue el primer presidente de la democracia española tras el franquismo?",
      respuesta: "Adolfo Suárez."
    }
  ];
  
  // Función para iniciar el juego
  function iniciarJuego() {
    // Mostrar la primera pregunta
    mostrarPregunta(0);
  }
  
  // Función para mostrar una pregunta y esperar la respuesta del jugador
  function mostrarPregunta(indice) {
    const preguntaActual = preguntasRespuestas[indice].pregunta;
    const respuestaCorrecta = preguntasRespuestas[indice].respuesta;
  
    const respuestaJugador = prompt(preguntaActual + '\nRespuesta: ');
    
    // Validar la respuesta 
    if (respuestaJugador === null) {
      
      window.location.href = "index.html";
      return;
    }
  
    if (respuestaJugador.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      // Respuesta correcta
      if (indice < preguntasRespuestas.length - 1) {
        mostrarPregunta(indice + 1);
      } else {
        alert("¡Felicidades, anque has tenido suerte");
      }
    } else {
      // Respuesta incorrecta
      alert("Respuesta incorrecta. Haber estudiado.");
      mostrarPregunta(indice);
    }
  }
  
  // Iniciar el juego
  iniciarJuego();
  
