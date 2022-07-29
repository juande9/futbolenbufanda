class Equipo {
    constructor(nombre, liga, pais, escudo, estadio, coordenadlat, coordenadlong) {
        this.nombre = nombre;
        this.liga = liga;
        this.pais = pais;
        this.escudo = `./img/escudos/${escudo}.svg`;
        this.estadio = estadio;
        this.coordenadlat = coordenadlat;
        this.coordenadlong = coordenadlong;
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