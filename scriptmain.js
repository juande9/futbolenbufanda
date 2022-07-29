const ligas = ["LaLiga", "Primera División RFEF", "Serie A", "Ligue 1", "Premier League", "Primeira Liga Portugal", "Primera División de Argentina", "Serie B","Eredivisie"]
const paises = ["Argentina", "Italia", "España", "Inglaterra", "Francia", "Portugal", "Paises Bajos"]
const decada = ["80s", "90s", "00s", "10s", "20s"]
const equipos = []
const bufandas = []

/* Equipos Españoles*/

const realMadrid = new Equipo("Real Madrid", ligas[0], paises[2], "realMadrid", "Santiago Bernabéu", "40.45306", "-3.68835")
const barcelona = new Equipo("Barcelona", ligas[0], paises[2], "barcelona", "Camp Nou", "41.380833", "2.1225")
const rcCelta = new Equipo("RC Celta de Vigo", ligas[0], paises[2], "celtaVigo", "Estadio de Balaídos", "42.211861", "-8.740328")
const deporCoruña = new Equipo("RC Deportivo de La Coruña",ligas[1],paises[2],"deporCoruna","Estadio de Riazor","43.368667","-8.417372")
const sevilla = new Equipo("Sevilla Fútbol Club",ligas[0],paises[2],"sevilla","Estadio Ramón Sánchez-Pizjuán","37.383878","-5.970467")

/* Argentinos */
const independiente = new Equipo("C.A. Independiente", ligas[6], paises[0], "independiente", "Estadío Libertadores de America", "-34.670267", "-58.370969")

/*Paises Bajos*/
const ajax = new Equipo("AFC Ajax",ligas[8],paises[6],"ajax","Johan Cruyff Arena","52.314167","4.941944")

equipos.push(realMadrid, barcelona, rcCelta, independiente,ajax,deporCoruña,sevilla)

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

const bufMadrid1 = new Bufanda(realMadrid.nombre, decada[2], "./img/buf/madrid1.png")
const bufBarca2 = new Bufanda(barcelona.nombre, decada[1], "./img/buf/barca1.png")
bufandas.push(bufMadrid1, bufBarca2)