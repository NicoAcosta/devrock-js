
class Helper {
    
    static cartas() {
        return [
        new Carta ('👺', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 1),
        new Carta ('🤡', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 2),
        new Carta ('👽', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 3),
        new Carta ('👾', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 4),
        new Carta ('🤖', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 5),
        new Carta ('🎃', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 6),
        new Carta ('😻', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 7),
        new Carta ('💋', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 8),
        new Carta ('👄', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 9),
        new Carta ('🦷', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 10),
        new Carta ('👅', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 11),
        new Carta ('🧠', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 12),
        new Carta ('👀', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 13),
        new Carta ('👁', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 14),
        new Carta ('👮‍♀️', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 15),
        new Carta ('👩‍🚒', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 16)
    ]

    }


    static cartaRandom() {
        let cartas = this.cartas()
        return cartas[Math.floor(Math.random()*cartas.length)]
    }

    static cartasRandom() {
        let carta1, carta2, carta3
        // do {
            carta1 = this.cartaRandom()
            carta2 = this.cartaRandom()
            carta3 = this.cartaRandom()
        // } while (carta1 == carta2 || carta2 == carta3 || carta1 == carta3)
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
            this.jugador1.cartaDiv(1),
            this.jugador1.cartaDiv(2),
            this.jugador1.cartaDiv(3),
            this.jugador2.cartaDiv(1),
            this.jugador2.cartaDiv(2),
            this.jugador2.cartaDiv(3)
        ]
    }

    match() {
        return this.jugador1.even == this.jugador2.even
    }

    emojiMatch() {
        if (this.match) return '👎'
        else return '👎'
    }

    resultadosDiv() {

        let div = document.createElement('div')
        div.classList.add('resultados')

        div.appendChild(this.jugador1.resultadosDiv())
        div.appendChild(this.jugador2.resultadosDiv())

        let match = document.createElement('h3')
        match.innerHTML = 'Match'
        div.appendChild(match)

        let matchEmoji = document.createElement('em')
        matchEmoji.innerHTML = this.emojiMatch()
        div.append(matchEmoji)

        return div

    }

    listItemDiv() {
        
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerHTML = this.titulo

        return li
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
        return this.cartas.map(a => a.puntaje).reduce((a, b) => a + b, 0)
    }

    emojis() {
        return cartas.map(carta => carta.emoji)
    }

    cartaDiv(numero) {
        
        let carta = this.cartas[numero - 1]

        let div = document.createElement('div')
        div.classList.add('carousel-item')
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

    resultadosDiv() {

        let div = document.createElement('div')
        div.classList.add('resultadosJugador')

        let name = document.createElement('h4')
        name.classList.add('resultadosNombre')
        name.innerHTML = this.nombre

        let emojisDiv = document.createElement('div')
        emojisDiv.classList.add('resultadosEmojis')

        let emoji1 = document.createElement('em')
        let emoji2 = document.createElement('em')
        let emoji3 = document.createElement('em')

        emoji1.innerHTML = this.cartas[0].emoji
        emoji2.innerHTML = this.cartas[1].emoji
        emoji3.innerHTML = this.cartas[2].emoji

        emojisDiv.appendChild(emoji1)
        emojisDiv.appendChild(emoji2)
        emojisDiv.appendChild(emoji3)

        div.appendChild(name)
        div.appendChild(emojisDiv)

        return div

    }
    


}