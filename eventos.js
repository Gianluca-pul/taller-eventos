const div = document.getElementById("contenedor");

div.addEventListener("click", function() {
  alert("Hola! Soy el div");
});

const boton = document.querySelector("button");

boton.addEventListener("click", function(event) {
  
  event.stopPropagation(); // Evita que el click llegue al div
});