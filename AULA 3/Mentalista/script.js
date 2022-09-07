let numeroAleatório = parseInt(Math.random() * 11)

function Chutar() {
    let getValue = parseInt(document.getElementById("valor").value)
    let resultadoElemento = document.getElementById("resultado")

    if (getValue == numeroAleatório) {
        resultadoElemento.innerHTML = `Você acertou!`
    } else if (getValue > 10 || getValue < 0) {
        resultadoElemento.innerHTML = `Por favor digite um numero de 1 a 10!`
    } else {
        resultadoElemento.innerHTML = `Você errou`
        if (getValue < numeroAleatório) {
            resultadoElemento.innerHTML += `<br>O número aleatório é maior`
        } else {
            resultadoElemento.innerHTML += `<br>O número aleatório é menor`
        }
    }
}