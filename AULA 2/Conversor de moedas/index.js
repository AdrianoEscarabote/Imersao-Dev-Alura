function Converter() {
    let valorConvertido = document.getElementById("valorConvertido1")
    let getValue = document.getElementById("valor")
    let value = parseFloat(getValue.value)

    let newValue = `O preço em real é ${value * 5} R$`
    valorConvertido.innerHTML = newValue
    let bitcoin = document.getElementById("bitcoinDol")
    let valueBitcoin = `O valor em bitcoin: ${value * 0.00005064}`
    bitcoin.innerHTML = valueBitcoin
}

function ConverterEuro() {
    let valorConvertido = document.getElementById("valorConvertido2")
    let getValue = document.getElementById("valor2")
    let value = parseFloat(getValue.value)

    let newValue = `O preço em libra é € ${value / 5}` 
    valorConvertido.innerHTML = newValue
    let bitcoin = document.getElementById("bitcoinEur")
    let valueBitcoin = `O valor em bitcoin: ${value * 0.00000967}`
    bitcoin.innerHTML = valueBitcoin
}
