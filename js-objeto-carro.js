let carro = {marca: 'Fiat', ano: 2003, cor:'roxo'} /* criação de objetos */
console.log(carro)

console.log(`Marca atual do carro: ${carro.marca}`)

carro.marca = 'Mercedes' /* alterando os valores do objeto */
carro.cor = 'Amarelo'

console.log('A marca e a cor alteradas', carro)

console.log(`A placa desse carro é a: ${carro.placa}`) /* Aqui, a placa não existia */

carro.placa = 'AC1520BR'
console.log(`A placa do carro é a: ${carro.placa}`) /* Nesta parte, a placa já estava atribuída */

console.log(`A marca do carro é: ${carro.marca} `)
console.log(`A cor do carro é: ${carro['cor']}`) /* Essa é uma forma diferente, de chamar o objeto */