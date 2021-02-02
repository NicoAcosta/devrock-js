
class Helper {
    
    static cartas(array) {
        let cartas = []
        for (let data of array) {
            let carta = new Carta (data[0], data[1], data[3])
            cartas.push(carta)
        }
        return cartas
    }
    
    cartas = cartas (
        [
            ['👺', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 1],
            ['🤡', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 2],
            ['👽', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 3],
            ['👾', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 4],
            ['🤖', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 5],
            ['🎃', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 6],
            ['😻', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 7],
            ['💋', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 8],
            ['👄', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 9],
            ['🦷', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 10],
            ['👅', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 11],
            ['🧠', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 12],
            ['👀', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 13],
            ['👁', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 14],
            ['👮‍♀️', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 15],
            ['👩‍🚒', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 16]
        ]
    )

    static cartaRandom() {
        return this.cartas[Math.floor(Math.random()*myArray.length)]
    }

    static cartasRandom() {
        let carta1, carta2, carta3
        do {
            carta1 = this.cartaRandom()
            carta2 = this.cartaRandom()
            carta3 = this.cartaRandom()
        } while (carta1 == carta2 || carta2 == carta3 || carta1 == carta3)
        return [carta1, carta2, carta3]
    }

}

class Carta {
    constructor(emoji, description, puntaje) {
        this.emoji = emoji
        this.description = description
        this.puntaje = puntaje
    }
}


class Partida {

    constructor(nombre1, nombre2) {
        this.jugador1 = new Jugador (nombre1)
        this.jugador2 = new Jugador (nombre2)
        this.titulo = `${nombre1} y ${nombre2}`
        this.cartas = this.cartasDivs()
        this.match = this.match()
    }

    cartasDivs() {
        return [
            jugador1.cartaDiv(1),
            jugador1.cartaDiv(2),
            jugador1.cartaDiv(3),
            jugador2.cartaDiv(1),
            jugador2.cartaDiv(2),
            jugador2.cartaDiv(3)
        ]
    }

    match() {
        return jugador1.even == jugador2.even
    }

}

class Jugador {

    constructor(nombre) {
        this.nombre = nombre
        this.cartas = Helper.cartasRandom()
        this.puntaje = this.puntaje()
        this.even = this.puntaje % 2 == 0
    }

    puntaje() {
        return this.cartas(map(carta => carta.puntaje)).reduce((a, b) => a + b, 0)
    }

    cartaDiv(numero) {
        
        let carta = cartas[numero - 1]

        let div = document.createElement('div')
        div.classList.add('carta')

        let titulo = document.createElement('h3')
        titulo.innerHTML = `Carta ${numero}/3 de ${this.nombre}`

        let emoji = document.createElement('em')
        emoji.innerHTML = carta.emoji

        let description = document.createElement('p')
        description.innerHTML = carta.description

        div.appendChild(titulo)
        div.appendChild(emoji)
        div.appendChild(description)

        return div

    }
    


}