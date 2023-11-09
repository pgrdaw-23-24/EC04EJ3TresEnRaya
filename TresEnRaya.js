function comprobarLimites(fila, columna) {
    if (fila < 0 || fila > 2 || columna < 0 || columna > 2) {
        throw '[ ERROR ] - Movimiento fuera del tablero'
    }
}

function comprobarVacio(fila, columna, tablero) {
    if (tablero[fila][columna] != '·') {
        throw '[ ERROR ] - Posición ya ocupada'
    }
}

class TresEnRaya {

    constructor() {
        this.tablero = [
            ['·', '·', '·'],
            ['·', '·', '·'],
            ['·', '·', '·']
        ]
        this.jugador = 'O'
    }

    jugar(fila, columna) {
        comprobarLimites(fila, columna)
        comprobarVacio(fila, columna, this.tablero)

        this.tablero[fila][columna] = this.jugador
        this.turno()
    }

    turno() {
        if (this.jugador = 'O') {
            this.jugador = 'X'
        } else {
            this.jugador = 'O'
        }
    }

    estado() {
        let estado = ""
        for (let f = 0; f <= 2; f++) {
            estado += "\n"
            for (let c = 0; c <= 2; c++) {
                estado += this.tablero[f][c] + '    '
            }
            estado += "\n"
        }
        return estado
    }
}

export default TresEnRaya