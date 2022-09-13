let listaFilme = []

function removerFilme() {
    let listaFilmes = document.getElementById("listaFilmes")
    listaFilmes.innerHTML = ""
    listaFilme.pop()
}

function adicionarFilme() {
    let nomeFilme = document.getElementById("nomeFilme").value
    let getFilme = document.getElementById("filme").value
    if (getFilme.endsWith(".jpg")) {
        listarFilmeNaTela(nomeFilme ,getFilme)
        listaFilme.push(getFilme)
    } else {
        alert("Insira uma imagem de formato jpeg")
    }
    document.getElementById("filme").value = ""
    document.getElementById("nomeFilme").value = ""
}

function listarFilmeNaTela(nome ,filme) {
    let elementoNome = document.getElementById("nomeFilmes")
    let elementoFilmeFavorito = `<img src="${filme}">`
    elementoNome.innerHTML += nome
    let listaFilmes = document.getElementById("listaFilmes")
    listaFilmes.innerHTML += elementoFilmeFavorito
    console.log(listaFilme)
}