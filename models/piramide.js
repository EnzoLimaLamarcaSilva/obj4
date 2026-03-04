class Piramide{
    constructor (altura,lado){
    this.altura = altura
    this.lado = lado
}

calcularAreaBase(){
    return this.lado * this.lado * Math.sqrt(3) / 4
}

calcularVolume(){
    return (1/3) * this.calcularAreaBase * this.altura
}
}

module.exports = Piramide