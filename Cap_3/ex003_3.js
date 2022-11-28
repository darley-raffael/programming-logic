const prompt = require('prompt-sync')();

const salary = Number(prompt(`Digite o seu salário: `))
const workYear = Number(prompt('Anos Trabalhados: '))

const quadrenniun = Math.floor(workYear / 4)

const correctedSalary = salary + (salary * (0.01 * quadrenniun))

console.log(`Você tem direito a ${quadrenniun} quadriênios. \n Seu salário final é de R$: ${correctedSalary.toFixed(2)}`)