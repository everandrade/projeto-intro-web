const fruta1 = "laranja"
const peso1 = 110
const ehdoce1 = true
const letrinha1 = ["l", "a", "r", "a", "n", "j", "a"]

const fruta2 = "limão"
const peso2 = 140
const ehdoce2 = false
const letrinha2 = ["l", "i", "m", "ã", "o"]

const fruta3 = "abacaxi"
const peso3 = 1400
const ehdoce3 = true
const letrinha3 = ["a", "b", "a", "c", "a", "x", "i"]

const mediapeso = (peso1 + peso2 + peso3) / 3
console.log(`A média dos pesos das frutas é de: `, mediapeso, `gramas.`)

const saodoces = ehdoce1 && ehdoce2 && ehdoce3
console.log(`Todas as frutas são doces? \nR: `, saodoces)

console.log(fruta1.toUpperCase())
console.log(`O peso da fruta é de: `, peso1, `gramas.`)
console.log(`A fruta é doce: `, ehdoce1, `.`)
console.log(`Como se soletra: `,letrinha1)

console.log(fruta2.toUpperCase())
console.log(`O peso da fruta é de: `, peso2, `gramas.`)
console.log(`A fruta é doce: `, ehdoce2, `.`)
console.log(`Como se soletra: `,letrinha2)

console.log(fruta3.toUpperCase())
console.log(`O peso da fruta é de: `, peso3, `gramas.`)
console.log(`A fruta é doce: `, ehdoce3, `.`)
console.log(`Como se soletra: `,letrinha3)