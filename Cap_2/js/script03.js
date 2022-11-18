const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

form.addEventListener("submit", event => {
    const veiculo = form.inVeiculo.value // conteúdo do campo
    const preco = Number(form.inPreco.value)

    const entrada = preco * 0.5
    const parcelas = entrada / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+ 12x de R$: ${parcelas.toFixed(2)}`

    event.preventDefault() // evita o envio do formulário
})