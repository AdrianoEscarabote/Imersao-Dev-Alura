let adriano = { nome: "Adriano", vitorias: 2, empates: 1, derrotas: 2, pontos: 0 }
let giulia = { nome: "Giulia", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }
let nath = { nome: "Nath", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }

function calculaPontos(jogador) {
    let pontos = jogador.vitorias * 3 + jogador.empates
    return pontos
}

giulia.pontos = calculaPontos(giulia)
adriano.pontos = calculaPontos(adriano)
nath.pontos = calculaPontos(nath)

let jogadores = [adriano, giulia, nath]

function exibeJogadoresNaTela(jogadores) {
    let elemento = ""
    for (let i = 0; i < jogadores.length; i++) {
        elemento += "<tr>"
        elemento += "<td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    }

    let tabelaDeJogadores = document.getElementById("tabelaJogadores")
    tabelaDeJogadores.innerHTML = elemento
    console.log(elemento)
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    let jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}


function zerarPontos() {
    for (let i = 0; i < jogadores.length; i++) {
        jogadores[i].derrotas = 0
        jogadores[i].empates = 0
        jogadores[i].pontos = 0
        jogadores[i].vitorias = 0
    }
    exibeJogadoresNaTela(jogadores)
}

