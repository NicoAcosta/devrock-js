function PromesaA() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10, 'Pepe')
    })
}

function PromesaB(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10, 'Name: ' + nombre)
    })
}


PromesaA().then(PromesaB).then(console.log)