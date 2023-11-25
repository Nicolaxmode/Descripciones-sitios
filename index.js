import { madrid, tokio, roma, berlin } from './informacion.js'

//Seleccionamos los elementos del DOM
let links = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('Subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let boton = document.getElementById('boton')

links.forEach(function (link){
    link.addEventListener('click', function(){

        links.forEach(function(link){
            link.classList.remove('active')
        })

        link.classList.add('active')

        let contenidoMostrar = obtenerContenido(this.textContent)
        boton.style.display = 'block'
        tituloElemento.innerHTML = contenidoMostrar.nombre  
        subtituloElemento.innerHTML = contenidoMostrar.subtitulo
        parrafoElemento.innerHTML = contenidoMostrar.parrafo
    })
})

function obtenerContenido(link){
    let contenido = {
        'Madrid' : madrid,
        'Tokio' : tokio,
        'Roma' : roma,
        'Berlín' : berlin
    }
    return contenido[link]
}