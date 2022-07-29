var map = L.map('map').
    setView([20, 0],
        3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 3,
    attribution: '© OpenStreetMap'
}).addTo(map);

for (let i = 0; i < equipos.length; i++) {
    var myIcon = L.icon({
        iconUrl: equipos[i].escudo,
        iconAnchor: [5, 5],
        className: "escudosMapa"
    });
    var marker = L.marker([equipos[i].coordenadlat, equipos[i].coordenadlong],{icon: myIcon}).addTo(map);
}