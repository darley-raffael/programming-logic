const prompt = require('prompt-sync')();

const weight = Number(prompt('Peso da Ração(kg): '))
const consume = Number(prompt('Comsumo diário(gr): '))

const weightGr = weight * 1000

const consumeDay = Math.floor(weightGr / consume)

const rest =  weightGr % consume

console.log(`
Duração: ${consumeDay} dias.
Sobra: ${rest != 0 ? rest + 'gr' : 'Sem sobras'}
`);






