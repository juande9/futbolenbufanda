var map = L.map('map').
    setView([20, 0],
        3);

var currentZoom = parseInt(map.getZoom())

class Pais {
    constructor(nombre, puntCordenadas) {
        this.nombre = nombre
        this.puntCordenadas = puntCordenadas
    }
}

const coordenadas = [
    new Pais("España", L.polygon([
        [43.610, -8.591], [42.476, 2.993], [39.801, 4.404], [36.686, -2.124], [36.073, -5.472], [37.188, -7.353], [41.901, -6.226], [42.011, -8.794], [43.610, -8.591]]).addTo(map)),
    new Pais("Italia", L.polygon([
        [43.953, 7.586], [45.836, 6.993], [47.047, 12.069], [45.797, 13.461], [44.189, 12.442], [40.323, 18.322], [36.727, 14.899], [38.942, 8.718], [40.897, 8.784], [42.439, 11.069], [43.953, 7.586]]).addTo(map)),
]

coordenadas.forEach(pais =>
    pais.puntCordenadas.on("click", () => {
        map.fitBounds(pais.puntCordenadas.getBounds()),
            currentZoom = 5,
            checkEscudos(currentZoom)
    }))

var polygon = document.getElementsByClassName("leaflet-interactive")

for (const element of polygon) {
    element.style.stroke = "none";
    element.setAttribute("fill-opacity", "0")
}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 2,
    attribution: '© OpenStreetMap'
}).addTo(map);

let mapa = document.getElementById("map")

mapa.onwheel = (e) => {
    e.preventDefault()
    currentZoom += e.deltaY * -0.01;
    currentZoom = Math.min(Math.max(2, currentZoom), 9)
    checkEscudos(currentZoom);
}

equipos.forEach(elemento => {
    var myIcon = L.icon({
        iconUrl: elemento.escudo,
        iconAnchor: [5, 5],
        className: "escudosMapa"
    });
    L.marker([elemento.coordenadlat, elemento.coordenadlong], { icon: myIcon }).addTo(map);
})

var escudos = document.getElementsByClassName("escudosMapa")

function checkEscudos(zoom) {
    if (zoom <= 4) {
        for (const logo of escudos) {
            logo.style.display = 'none'
        }
    } else if (zoom === 5) {
        for (const logo of escudos) {
            logo.style.display = 'block'
            logo.style.height = "2.5em"
        }
    } else if (zoom === 6)
        for (const logo of escudos) {
            logo.style.height = '3.5em'
        }
}