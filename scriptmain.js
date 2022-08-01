const ligas = ["La Liga", "Primera División RFEF", "Serie A", "Ligue 1", "Premier League", "Primeira Liga Portugal", "Primera División de Argentina", "Serie B", "Eredivisie"]
const paises = ["Argentina", "Italia", "España", "Inglaterra", "Francia", "Portugal", "Paises Bajos"]
const decada = ["80s", "90s", "00s", "10s", "20s"]
const bufandas = []


const eqEspañoles = [
    new Equipo("Real Madrid", ligas[0], paises[2], "realMadrid", "Santiago Bernabéu", "40.45306", "-3.68835"),
    new Equipo("Barcelona", ligas[0], paises[2], "barcelona", "Camp Nou", "41.380833", "2.1225"),
    new Equipo("RC Celta de Vigo", ligas[0], paises[2], "celtaVigo", "Estadio de Balaídos", "42.211861", "-8.740328"),
    new Equipo("RC Deportivo de La Coruña", ligas[1], paises[2], "deporCoruna", "Estadio de Riazor", "43.368667", "-8.417372"),
    new Equipo("Sevilla Fútbol Club", ligas[0], paises[2], "sevilla", "Estadio Ramón Sánchez-Pizjuán", "37.383878", "-5.970467"),
]

const eqArgentina = [
    new Equipo("C.A. Independiente", ligas[6], paises[0], "independiente", "Estadío Libertadores de America", "-34.670267", "-58.370969")
]

const eqPaisesBajos = [
    new Equipo("AFC Ajax", ligas[8], paises[6], "ajax", "Johan Cruyff Arena", "52.314167", "4.941944"),
]

const equipos = eqEspañoles.concat(eqArgentina, eqPaisesBajos)

let selectorNombre = document.getElementById("nombre")
let selectorLiga = document.getElementById("selectorLigas")
let selectorPais = document.getElementById("selectorPais")
let selectorEscudo = document.getElementById("escudo")
let selectorEstadio = document.getElementById("estadio")
let seleccionLatitud = document.getElementById("latitud")
let seleccionLongitud = document.getElementById("longitud")
let ingresoClub = document.getElementById("btnIngreso")
let error = document.getElementsByClassName("error")

seleccionLiga = ""
ligas.forEach(element =>
    seleccionLiga += `<option value=${element.replace(/ /g, "")}>${element}</option>`)
selectorLiga.innerHTML = seleccionLiga

seleccionPais = ""
paises.forEach(element =>
    seleccionPais += `<option value=${element.replace(/ /g, "")}>${element}</option>`)
selectorPais.innerHTML = seleccionPais

function agregarEquipo(e) {
    e.preventDefault();
    const equipo = new Equipo(
        selectorNombre.value,
        selectorLiga.value,
        selectorPais.value,
        selectorEscudo.value,
        selectorEstadio.value,
        seleccionLatitud.value,
        seleccionLongitud.value,
    )
    equipos.push(equipo)
    alert("Se cargo el equipo con exito")
}

function corroborarForm(e) {
    nombre = selectorNombre.value
    liga = selectorLiga.value,
        pais = selectorPais.value,
        escudo = selectorEscudo.value,
        estadio = selectorEstadio.value,
        latitud = seleccionLatitud.value,
        longitud = seleccionLongitud.value,

        e.preventDefault();
    if (nombre === "" || nombre === null || escudo === "" || escudo === null || estadio === "" ||
        estadio === null || latitud === "" || latitud === null || longitud === "" || longitud === null) {
        alert("Error Papu")
    } else {
        const equipo = new Equipo(nombre,liga,pais,escudo,estadio,latitud,longitud)
        equipos.push(equipo)
    }

}

function checkValueVacio(input) {
    if (input !== "" || input !== null) {
        return input
    } else {
        return false
    }
}

ingresoClub.onclick = corroborarForm