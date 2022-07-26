const ligas = ["LaLiga", "Primera División RFEF", "Serie A", "Ligue 1", "Premier League", "Primeira Liga Portugal", "Primera División de Argentina", "Serie B"]
const paises = ["Argentina", "Italia", "España", "Inglaterra", "Francia", "Portugal"]
const decada = ["80s", "90s", "00s", "10s", "20s"]
const equipos = []

class Equipo {
    constructor(nombre, liga, pais, escudo, estadio, coordenadas) {
        this.nombre = nombre;
        this.liga = liga;
        this.pais = pais;
        this.escudo = escudo;
        this.estadio = estadio;
        this.coordenadas = coordenadas;
    }
}

class Bufanda {
    constructor(equipo, decada, thumbnail) {
        this.equipo = equipo;
        this.decada = decada;
        this.thumbnail = thumbnail;
    }
}

/**
 * Se declaran equipos por defecto
 */
const realMadrid = new Equipo("Real Madrid", ligas[0], paises[2], "./img/escudos/realMadrid.png", "Santiago Bernabéu", "40°27′11″N 3°41′18″O")
const barcelona = new Equipo("Barcelona", ligas[0], paises[2], ".img/escudos/barca.png", "Camp Nou", "41°22′51″N 2°07′21″E")
const rcCelta = new Equipo("RC Celta de Vigo", ligas[0], paises[2], ".img/escudos/celta.png", "Estadio de Balaídos", "42°12′43″N 8°44′25″O")

/**Se pushean al array equipos */
equipos.push(realMadrid, barcelona, rcCelta)

/**
 * Sirve para agregar equipos al array equipos
 * @param {Array} Arrayequipos Es el array donde estan los 
 */
function agregarEquipo(Arrayequipos) {
    let nombre = prompt("Ingrese el nombre del equipo que desea agregar")
    let liga = prompt(`Ingrese la Liga: 0 "LaLiga", 1 "Primera División RFEF", 2 "Serie A", 3 "Ligue 1", 4 "Premier League", 5 "Primeira Liga Portugal", 6 "Primera División de Argentina", 7 "Serie B"`)
    let pais = prompt(`Ingrese el Pais: 0 "Argentina", 1 "Italia", 2 "España", 3 "Inglaterra", 4 "Francia" , 5 "Portugal"`)
    let escudo = prompt(`Ingrese el nombre del png`)
    let estadio = prompt(`Ingrese el nombre del estadio`)
    let coordenadas = prompt(`Ingrese las coordenadas del estadio`)

    const equipo = new Equipo(nombre, ligas[liga], paises[pais], `./img/escudos/${escudo}.png`, estadio, coordenadas)
    Arrayequipos.push(equipo)
}

/**
 * Selecciona si desea agregar equipos.
 */
let opcion = prompt("¿Desea agregar equipo?\nIngrese Si para agregar\nIngrese NO para salir.").toUpperCase()

while (opcion == "SI") {
    agregarEquipo(equipos);
    opcion = prompt("¿Desea agregar más equipos?\nIngrese NO para salir.").toUpperCase()
}

/**
 * Bufandas declaradas previamente
 */
const bufMadrid1 = new Bufanda(realMadrid.nombre, decada[2], "./img/buf/madrid1.png")
const bufBarca2 = new Bufanda(barcelona.nombre, decada[1], "./img/buf/barca1.png")