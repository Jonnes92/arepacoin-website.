// Animación de logo
document.querySelector('.logo').addEventListener('mouseover', function() {
    this.style.transform = 'rotate(360deg)';
    this.style.transition = 'transform 1s';
});

document.querySelector('.logo').addEventListener('mouseout', function() {
    this.style.transform = 'rotate(0deg)';
});

// Manejo del formulario de votación
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por votar! Tu respuesta ha sido registrada.');
});
