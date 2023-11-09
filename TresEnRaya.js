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

function comprobarHorizontales(tablero) {
    for (let f = 0; f <= 2; f++) {
        if (tablero[f][0] != '·' &&
            tablero[f][0] == tablero[f][1] &&
            tablero[f][1] == tablero[f][2]) {
            return true
        }
    }
    return false
}

function comprobarVerticales(tablero) {
    for (let c = 0; c <= 2; c++) {
        if (tablero[0][c] != '·' &&
            tablero[0][c] == tablero[1][c] &&
            tablero[1][c] == tablero[2][c]) {
            return true
        }
    }
    return false
}

function comprobarDiagonales(tablero) {
    for (let d = 0; d <= 2; d++) {
        if (tablero[0][0] != '·' &&
            tablero[0][0] == tablero[1][1] &&
            tablero[1][1] == tablero[2][2]) {
            return true
        }
        if (tablero[2][0] != '·' &&
            tablero[2][0] == tablero[1][1] &&
            tablero[1][1] == tablero[0][2]) {
            return true
        }
    }
    return false
}


class TresEnRaya {

    constructor() {
        this.tablero = [['·', '·', '·'], ['·', '·', '·'], ['·', '·', '·']]
        this.jugador = 'O'
        this.ganador = ''
    }

    jugar(fila, columna) {
        comprobarLimites(fila, columna)
        comprobarVacio(fila, columna, this.tablero)
        this.turno()
        this.tablero[fila][columna] = this.jugador
    }

    turno() {
        if (this.jugador === 'O') {
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

    comprobarFinalizado() {
        if (comprobarHorizontales(this.tablero) ||
            comprobarVerticales(this.tablero) ||
            comprobarDiagonales(this.tablero)) {
            this.ganador = this.jugador
            return true
        } else {
            return false
        }
    }
}

export default TresEnRaya