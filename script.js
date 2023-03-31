// Efecto del typewritter

const typewriter = document.getElementById("typewriter");
const text = "Conéctate con el futuro digital en Poblenou";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); 
    } else {
        i = 0; 
        typewriter.innerHTML = ""; 
        setTimeout(typeWriter, 150);
    }
}

typeWriter();

