import TresEnRaya from './TresEnRaya.js'

let partida = new TresEnRaya
let errores = 0

function jugada() {
    return Math.floor(Math.random() * 3)
}

function partidaAutomatica() {
    do {
        try {
            partida.jugar(jugada(), jugada())
            console.log(partida.estado())
        } catch (error) {
            errores++
            if (errores > 50) throw '[ ERROR ] - Demasiadas jugadas erróneas'
        }

    } while (!partida.comprobarFinalizado())
    console.log('\nGanador:', partida.ganador, '\n')
}

partidaAutomatica()