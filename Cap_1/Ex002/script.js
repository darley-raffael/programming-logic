const dayFly = Number(prompt('Nº de dias de viagem: '))
const hoursFly = Number(prompt('Nº de horas de viagem: '))

let dayFlytoHours = dayFly * 24
let countHours = hoursFly + dayFlytoHours

alert(`A quantidade horas de viagem é de: \n
${countHours}
`)