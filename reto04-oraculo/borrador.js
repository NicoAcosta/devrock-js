

function cargarCartas() {

    let cartas = aleatorio()

    let titulos = document.getElementByClass('h4-titulos')
    let emojis = document.getElementByClass('h6-emojis')
    let descripciones = document.getElementByClass('p-descripciones')

    let puntaje = 0
    
    for (let i = 0; i < 6; i++) {

        if (i < 3) let nombre = nombre1
        else let nombre = nombre2
        titulos[i].innerHTML = `Carta ${i + 1}/3 de ${nombre}`
        emojis[i].innerHTML = cartas[i].emoji
        descripciones[i].innerHTML = cartas[i].descripcion

        puntaje += cartas[i].puntos

    }

}
