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
let ingresoClub = document.getElementById("ingresoClub")
let error = document.getElementsByClassName("error")
let tabla = document.getElementById("listadoEquipos")
let estadoCarga = document.getElementById("estadoCarga")

seleccionLiga = ""
ligas.forEach(element =>
    seleccionLiga += `<option value=${element.replace(/ /g, "")}>${element}</option>`)
selectorLiga.innerHTML = seleccionLiga

seleccionPais = ""
paises.forEach(element =>
    seleccionPais += `<option value=${element.replace(/ /g, "")}>${element}</option>`)
selectorPais.innerHTML = seleccionPais

function mostrarEquiposTabla() {
    tabla.innerHTML = ""
    equipos.forEach((element, i) =>
        tabla.innerHTML += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${element.nombre}</td>
        <td>${element.liga}</td>
        <td>${element.pais}</td>
        <td>${element.estadio}</td>
        <td>${element.coordenadlat}</td>
        <td>${element.coordenadlong}</td>
        <td><img class="escudoTabla" src=${element.escudo}></td>
        </tr>`)
}

mostrarEquiposTabla()

function agregarEquipo(e) {
    e.preventDefault();
    nombre = checkVacio(selectorNombre.value)
    liga = checkVacio(selectorLiga.value)
    pais = checkVacio(selectorPais.value)
    escudo = checkVacio(selectorEscudo.value)
    estadio = checkVacio(selectorEstadio.value)
    latitud = checkVacio(checkLatitud(seleccionLatitud.value))
    longitud = checkVacio(checkLongitud(seleccionLongitud.value))
    if (nombre && liga && pais && escudo && estadio && latitud && longitud) {
        const equipo = new Equipo(nombre, liga, pais, escudo, estadio, latitud, longitud)
        equipos.push(equipo)
        estadoCarga.innerText = `El equipo ${nombre} cargado correctamente.`
        estadoCarga.style.color = "green"
        mostrarEquiposTabla()
    } else {
        estadoCarga.innerHTML = "Hubo un error al cargar el equipo. Intente nuevamente."
        estadoCarga.style.color = "red"
    }
}

function checkVacio(valor) {
    if (valor !== "") {
        return valor
    } else {

        return false
    }
}

function checkLatitud(numero) {
    let errorLatitud = document.getElementById("errorlatitud");
    if (numero <= 90 && numero >= -90) {
        errorLatitud.innerHTML = ""
        return numero
    } else {
        errorLatitud.innerHTML = "<b>El numero debe ser entre -90º y 90º</b>"
        seleccionLatitud.value = ""
    }
}

function checkLongitud(numero) {
    let errorLongitud = document.getElementById("errorlongitud");
    if (numero <= 180 && numero >= -180) {
        errorLongitud.innerHTML = ""
        return numero
    } else {
        errorLongitud.innerHTML = "<b>El numero debe ser entre -180º y 180º</b>"
        seleccionLongitud.value = ""
    }
}

ingresoClub.onsubmit = agregarEquipo

function ordenarTabla() {
    equipos.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    })
    ordenarEquipo.innerHTML = `Nombre <i id="inverso" class="bi bi-arrow-up-short"></i>`
    mostrarEquiposTabla()
}

ordenarEquipo = document.getElementById("ordenarEquipo")
ordenarEquipo.onclick = ordenarTabla
ordenarEquipo.style.cursor = "pointer"
