
let carouselCartasItems = document.getElementById('carouselCartasItems')
let pantallaInicial = document.getElementById('inicial')
let pantallaAnimacion = document.getElementById('animacion')
let pantallaVerCartas = document.getElementById('verCartas')
let pantallaVerResultados = document.getElementById('resultados')

let partidas = []
let partidaActual = null



function jugar() {

    let nombre1 = document.getElementById('nombre1').value
    let nombre2 = document.getElementById('nombre2').value

    let partida = new Partida (nombre1, nombre2)
    partidas.push(partida)
    partidaActual = partida

    let cartas = partida.cartas

    carouselCartasItems.appendChild(cartas[0])
    carouselCartasItems.appendChild(cartas[1])
    carouselCartasItems.appendChild(cartas[2])
    carouselCartasItems.appendChild(cartas[3])
    carouselCartasItems.appendChild(cartas[4])
    carouselCartasItems.appendChild(cartas[5])

    pantallaInicial .classList.add('oculto')
    pantallaAnimacion.classList.remove('oculto')

    setTimeout(function() {

        cartas[0].classList.add('active')

        pantallaAnimacion.classList.add('oculto')
        pantallaVerCartas.classList.remove('oculto')

      }, 3000);


    


}

function verResultados() {

    let resultadosDiv = partidaActual.resultadosDiv()
    pantallaVerResultados.appendChild(resultadosDiv)

    pantallaVerCartas .classList.add('oculto')
    pantallaVerResultados.classList.remove('oculto')

}