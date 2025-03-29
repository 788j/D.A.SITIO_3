function cambiarColor() {
    // Genera un color aleatorio en formato hexadecimal
    let colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Aplica el color al fondo del body
    document.body.style.backgroundColor = colorAleatorio;
}
