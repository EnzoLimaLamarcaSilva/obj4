class Piramide{
    constructor (aresta, apotema, altura){
this.aresta = aresta
this.apotema = apotema
this.altura = altura
}

areaBase(){
return ((this.aresta * this.aresta) * Math.sqrt(3)) / 4
}

areaLateral(){
return (this.perimetro() * this.apotema) / 2
}

perimetro(){
return 3 * this.aresta
}

areaTotalPiramide(){
return this.areaBase() + this.areaLateral()
}

volumePiramide(){
return (1/3) * this.areaBase() * this.altura
}
}

module.exports = Piramide