import { barcelona,roma,paris,londres } from "./ciudades.js";

let elementos = document.querySelectorAll("a");
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let parrafo = document.getElementById("parrafo");
let precio = document.getElementById('precio');

elementos.forEach(
    function(elemento){
        elemento.addEventListener('click', function(){
        elementos.forEach(function(elemento){
            elemento.classList.remove('active');
        })
        this.classList.add('active');

        let contenido = verContenido(this.textContent)

        titulo.innerHTML = contenido.titulo;
        subtitulo.innerHTML = contenido.subtitulo;
        parrafo.innerHTML = contenido.parrafo;
        precio.innerHTML = contenido.precio;
        })
    }
)

function verContenido(elemento){
    let contenido ={
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[elemento]
}
