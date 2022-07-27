const ligas = ["LaLiga", "Primera División RFEF", "Serie A", "Ligue 1", "Premier League", "Primeira Liga Portugal", "Primera División de Argentina", "Serie B"]
const paises = ["Argentina", "Italia", "España", "Inglaterra", "Francia", "Portugal"]
const decada = ["80s", "90s", "00s", "10s", "20s"]
const equipos = []
const bufandas = []

/*Clases*/
class Equipo {
    constructor(nombre, liga, pais, escudo, estadio, coordenadas) {
        this.nombre = nombre;
        this.liga = liga;
        this.pais = pais;
        this.escudo = escudo;
        this.estadio = estadio;
        this.coordenadas = coordenadas;
    }
    agregarBufanda(bufandas) {
        let id = prompt("¿Que Id le quiere poner?")
        let equipo = this.nombre;
        let decada = prompt(`Ingrese la decada:\n0 "80s"\n1 "90s"\n2 "00s"\n3 "10s"\n4 "20s"`)
        let thumbnail = prompt("Ingrese la ruta de la img")

        const nuevaBufanda = new Bufanda(id, equipo, decada, thumbnail)
        bufandas.push(nuevaBufanda)
    }
}

class Bufanda {
    constructor(id, equipo, decada, thumbnail) {
        this.id = id;
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
equipos.push(realMadrid, barcelona, rcCelta)

/**
 * Sirve para agregar equipos al array equipos
 * @param {Array} Arrayequipos Es el array donde estan los 
 */
function agregarEquipo(Arrayequipos) {
    let nombre = prompt("Ingrese el nombre del equipo que desea agregar")
    let liga = prompt(`Ingrese la Liga:\n0 "LaLiga"\n1 "Primera División RFEF"\n2 "Serie A"\n3 "Ligue 1"\n4 "Premier League"
                        \n5 "Primeira Liga Portugal"\n6 "Primera División de Argentina"\n7 "Serie B"`)
    let pais = prompt(`Ingrese el Pais:\n0 "Argentina"\n1 "Italia"\n2 "España"\n3 "Inglaterra"\n4 "Francia"\n5 "Portugal"`)
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
 * Metodo dentro de Equipos que genera bufandas y las pushea al array homónimo.
 * Se generan por defecto dos bufandas.
 */
const bufMadrid1 = new Bufanda(realMadrid.nombre, decada[2], "./img/buf/madrid1.png")
const bufBarca2 = new Bufanda(barcelona.nombre, decada[1], "./img/buf/barca1.png")
bufandas.push(bufMadrid1,bufBarca2)

let opcionBuf = prompt(`¿Desea agregar nueva bufanda al ${realMadrid.nombre}?\nIngrese Si para agregar\nIngrese NO para salir.`).toUpperCase()

while (opcionBuf == "SI") {
    realMadrid.agregarBufanda(bufandas)
    opcionBuf = prompt("¿Desea agregar más bufandas?\nIngrese NO para salir.").toUpperCase()
}