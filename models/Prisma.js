class Prisma{
    constructor (altura,lado){
    this.altura = altura
    this.lado = lado
}

calcularAreaBase(){
    return this.lado * this.lado * Math.sqrt(3) / 4
}

calcularVolume(){
    return this.calcularAreaBase * this.altura
}
}

module.exports = Prisma