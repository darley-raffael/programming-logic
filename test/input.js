const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

rl.question('Qual a sua idade? ', (age)=>{
    console.log(`Sua idade é: ${age}`);
    rl.close()
})

