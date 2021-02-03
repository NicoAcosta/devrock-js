
let carouselCartasItems = document.getElementById('carouselCartasItems')
let pantallaInicial = document.getElementById('inicial')
let pantallaAnimacion = document.getElementById('animacion')
let pantallaVerCartas = document.getElementById('verCartas')
let pantallaVerResultados = document.getElementById('resultados')

let partidas = {} // Dict -> "Pepe y Juan": partida
let partidaActual = null

function mostrar(element) {
    if (element.className.includes('oculto')) element.classList.remove('oculto')
}

function ocultar(element) {
    if (!element.className.includes('oculto')) element.classList.add('oculto')
}


function nuevaPartida() {

    let inputNombre1 = document.getElementById('nombre1')
    let inputNombre2 = document.getElementById('nombre2')

    let nombre1 = inputNombre1.value
    let nombre2 = inputNombre2.value

    tirar(nombre1, nombre2)

    ocultar(pantallaInicial)

    inputNombre1.value = ''
    inputNombre2.value = ''

}

function tirar(nombre1, nombre2) {

    let partida = new Partida (nombre1, nombre2)
    partidaActual = partida

    verPartida()

}

function verPartida() {

    mostrar(pantallaAnimacion)

    let cartas = partidaActual.cartas

    carouselCartasItems.appendChild(cartas[0])
    carouselCartasItems.appendChild(cartas[1])
    carouselCartasItems.appendChild(cartas[2])
    carouselCartasItems.appendChild(cartas[3])
    carouselCartasItems.appendChild(cartas[4])
    carouselCartasItems.appendChild(cartas[5])

    setTimeout(function() {

        cartas[0].classList.add('active')

        ocultar(pantallaAnimacion)
        mostrar(pantallaVerCartas)

    }, 3000);

}

function volverATirar() {

    carouselCartasItems.innerHTML = ''

    let nombre1 = partidaActual.jugador1.nombre
    let nombre2 = partidaActual.jugador2.nombre

    ocultar(pantallaVerCartas)
    tirar(nombre1, nombre2)

}


function verResultados() {

    let resultadosDiv = partidaActual.resultadosDiv()
    pantallaVerResultados.appendChild(resultadosDiv)

    ocultar(pantallaVerCartas)
    mostrar(pantallaVerResultados)

    carouselCartasItems.innerHTML = ''

}

function guardarYCerrar() {
    guardar()
    cerrarPartida()
}

function cerrarPartida() {

    ocultar(pantallaVerResultados)
    mostrar(pantallaInicial)

    pantallaVerResultados.innerHTML = ''

}

function guardar() {

    partidas[partidaActual.titulo] = partidaActual

    mostrar(partidasAnteriores)
    listaPartidas.appendChild(partidaActual.listItemDiv())

}

listaPartidas.addEventListener('click', function(e) {

    if (e.target.className.includes('list-group-item')) {
        let li = e.target

        partidaActual = partidas[li.innerHTML]

        ocultar(pantallaInicial)

        verPartida()

    }

})
