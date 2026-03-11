//npm install --save readline-sync
//npm init -y

const rl = require("readline-sync")

const Prisma = require("./models/Prisma")
const Piramide = require("./models/piramide")

let op = 0

do{
    console.log('|----------------------------|')
    console.log('|---- 1 - Prisma ------------|')
    console.log('|---- 2 - Pirâmide ----------|')
    console.log('|----------------------------|')
    console.log('\n')

    op = Number(rl.question('Qual a sua opcao:'))
console.log(op)

if(op === 1){
let altura = Number(rl.question('Qual o valor da altura:'))
let lado = Number(rl.question('Qual o valor do lado:'))
let prisma = new Prisma(altura,lado)
let areaBase = prisma.areaBase()
let areaLateral = prisma.areaLateral()
let areaTotalPrisma = prisma.areaTotalPrisma()
let volume = prisma.volumePrisma()

console.log(`A área da base do prisma de raio ${altura} e lado de ${lado} é: ${areaBase.toFixed(3)} cm²`)
console.log(`A área Lateral do prisma de raio ${altura} e lado de ${lado} é: ${areaLateral.toFixed(3)} cm²`)
console.log(`A área Total do prisma de raio ${altura} e lado de ${lado} é: ${areaTotalPrisma.toFixed(3)} cm²`)
console.log(`O volume do prisma de raio ${altura} e lado de ${lado} é: ${volume.toFixed(3)} cm³`)

}else if(op === 2){
let altura = Number(rl.question('Qual o valor da altura:'))
let lado = Number(rl.question('Qual o valor do lado:'))
let piramide = new Piramide(altura,lado)
let areaBase = piramide.calcularAreaBase()
let volume = piramide.calcularVolume()

console.log(`A área da base da pirâmide de raio ${altura} e altura ${lado} é: ${areaBase} cm²`)
console.log(`O volume da pirâmide de raio ${altura} e altura ${lado} é: ${volume} cm³`)


}else{
    console.log('Opção inválida! Digite novamente!')
}

}while(op !== 0)

    console.log('fim do programa')