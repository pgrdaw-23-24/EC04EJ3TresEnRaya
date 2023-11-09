import TresEnRaya from './TresEnRaya.js'

let partida = new TresEnRaya
let errores = 0
/*partida.jugar(1, 1)
partida.jugar(2, 2)
partida.jugar(0, 2)
partida.jugar(2, 1)
partida.jugar(1, 2)
partida.jugar(2, 0)

console.log(partida.estado())*/

function jugada() {
    return Math.floor(Math.random() * 3)
}


do {
    try {
        partida.jugar(jugada(), jugada())
        console.log(partida.estado())
    } catch (error) {
        errores++
        if (errores > 20) throw '[ ERROR ] - Demasiadas jugadas erróneas'
    }
    
} while (!partida.comprobarFinalizado())
console.log('\nGanador:', partida.ganador, '\n')



