var map = L.map('map').
    setView([20, 0],
        3);
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
    checkEscudos(currentZoom);
}

for (let i = 0; i < equipos.length; i++) {
    var myIcon = L.icon({
        iconUrl: equipos[i].escudo,
        iconAnchor: [5, 5],
        className: "escudosMapa"
    });
    var marker = L.marker([equipos[i].coordenadlat, equipos[i].coordenadlong], { icon: myIcon }).addTo(map);
}

var escudos = document.getElementsByClassName("escudosMapa")