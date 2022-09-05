const escrever = document.getElementById("res")
const media = document.getElementById("media")

let primeiroBimestre = 9
let segundoBimestre = 7
let terceitoBimestre = 4
let quartoBimestre = 2

let resultado = ((primeiroBimestre + segundoBimestre + terceitoBimestre + quartoBimestre) / 4).toFixed(1)
media.innerHTML = `A sua média foi de ${resultado}`

if (resultado >= 5) {
    escrever.innerHTML = "Parabêns você passou!"
} else {
    escrever.innerHTML = "Que pena você reprovou!"
}

// console.log(((primeiroBimestre + segundoBimestre + terceitoBimestre + quartoBimestre) / 4).toFixed(1))