import TresEnRaya from './TresEnRaya.js'

let partida = new TresEnRaya
partida.jugar(1,1)
partida.jugar(2,2)
partida.jugar(0,2)
partida.jugar(2,1)
partida.jugar(1,2)
partida.jugar(2,0)

console.log(partida.estado())
console.log(partida.finalizado())

