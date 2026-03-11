class Prisma{
    constructor (altura,lado){
    this.altura = altura
    this.lado = lado
}

areaBase(){
    return (this.lado * this.lado * Math.sqrt(3)) / 4
}

areaLateral(){
    return 3 * this.lado * this.altura
}

areaTotalPrisma(){
    return 2 * this.areaBase() * this.areaLateral()
}

volumePrisma(){
    return this.areaBase() * this.altura
}
}

module.exports = Prisma