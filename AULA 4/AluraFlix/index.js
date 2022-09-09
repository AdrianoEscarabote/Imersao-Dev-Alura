let listaFilmes = []

let form = document.getElementById("formulario")
let nameFilm = document.getElementById("getName")
let button = document.getElementById("button")
let res = document.getElementById("res")

form.addEventListener('submit', function (e) {
    listaFilmes.push(nameFilm.value)
    e.preventDefault()
    console.log(listaFilmes)
    printer()
})

function printer() {
    let i = 0
    while (i < listaFilmes.length) {
        res.innerHTML += `<img src="${listaFilmes[i]}">`
        i++
    }
    listaFilmes.shift()
}