var map = L.map('map').
    setView([20, 0],
        3);

var CoordPais = [españa]

var españa = L.polygon([
    [43.610, -8.591], [42.476, 2.993], [39.801, 4.404], [36.686, -2.124], [36.073, -5.472], [37.188, -7.353], [41.901, -6.226],[42.011, -8.794],
]).addTo(map);

CoordPais.forEach(pais =>
    map.on("click", (pais1) => {
        map.fitBounds(pais1.getBounds()),
            currentZoom = 5,
            checkEscudos(currentZoom)
    }))

/* map.on("click", () => {
    map.fitBounds(españa.getBounds()),
        currentZoom = 5,
        checkEscudos(currentZoom)
}) */


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 2,
    attribution: '© OpenStreetMap'
}).addTo(map);

var currentZoom = parseInt(map.getZoom())
console.log(currentZoom)

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