//npm install --save readline-sync
//npm init -y

const rl = require("readline-sync")
const Prisma = require("./models/Prisma")
const Piramide = require("./models/piramide")

let op = 0 // 0 = programa continua e 0 fim de programa
// o programa fica rodando diferente de 0

do{
    console.log('|----------------------------|')
    console.log('|---- 0 - sair --------------|')
    console.log('|---- 1 - Prisma ------------|')
    console.log('|---- 2 - Pirâmide ----------|')
    console.log('|----------------------------|')
    console.log('\n')
    
    op = Number(rl.question('Qual a sua opcao:'))
    console.log(op)
    
    switch(op){
        case 1:
            let alturaPri = Number(rl.question('Qual o valor da altura do prisma:'))
            let lado = Number(rl.question('Qual o valor do lado do prisma:'))
            let prisma = new Prisma(alturaPri,lado)
            let areaBasePri = prisma.areaBase()
            let areaLateralPri = prisma.areaLateral()
            let areaTotalPrisma = prisma.areaTotalPrisma()
            let volumePri = prisma.volumePrisma()
            console.log('\n')
            
            console.log(`A área da base do prisma de raio ${alturaPri} e lado de ${lado} é: ${areaBasePri.toFixed(3)} cm²`)
            console.log(`A área Lateral do prisma de raio ${alturaPri} e lado de ${lado} é: ${areaLateralPri.toFixed(3)} cm²`)
            console.log(`A área Total do prisma de raio ${alturaPri} e lado de ${lado} é: ${areaTotalPrisma.toFixed(3)} cm²`)
            console.log(`O volume do prisma de raio ${alturaPri} e lado de ${lado} é: ${volumePri.toFixed(3)} cm³`)
            console.log('\n')
            break
            case 2:
                let aresta = Number(rl.question('Qual o valor da aresta da piramide:'))
                let apotema = Number(rl.question('Qual o valor do apotema da piramide:'))
                let alturaPir = Number(rl.question('Qual o valor da altura da piramide:'))
                let piramide = new Piramide(aresta,apotema,alturaPir)
                let areaBasePir = piramide.areaBase()
                let areaLateralPir = piramide.areaLateral()
                let areaTotalPiramide = piramide.areaTotalPiramide()
                let volumePir = piramide.volumePiramide()
                console.log('\n')
                
                console.log(`A área da base da pirâmide de aresta de ${aresta}, com o apótema de ${apotema} e de altura de ${alturaPir} é: ${areaBasePir.toFixed(3)} cm²`)
                console.log(`A área Lateral da pirâmide de aresta de ${aresta}, com o apótema de ${apotema} e de altura de ${alturaPir} é: ${areaLateralPir.toFixed(3)} cm²`)
                console.log(`A área Total da pirâmide de aresta de ${aresta}, com o apótema de ${apotema} e de altura de ${alturaPir} é: ${areaTotalPiramide.toFixed(3)} cm²`)
                console.log(`O volume da pirâmide de aresta de ${aresta}, com o apótema de ${apotema} e de altura de ${alturaPir} é: ${volumePir.toFixed(3)} cm³`)
                console.log('\n')
            break
    default:
        console.log('opção inválida! Digite novamente!')
}

}while(op !== 0)

    console.log('fim do programa')