let carta1 = {
    nome: "Levi",
    Atributos: {
        ataque: 10,
        defesa: 8,
        magia: 4
    }
};

let carta2 = {
    nome: "Saitama",
    Atributos: {
        ataque: 10,
        defesa: 10,
        magia: 0
    }
};

let carta3 = {
    nome: "Sasuke",
    Atributos: {
        ataque: 9,
        defesa: 8,
        magia: 10
    }
};

let cartas = [carta1, carta2, carta3];

let cartaDoComputador;
let cartaDoJogador;

function sortearCarta() {
    let numberMaquina = parseInt(Math.random() * 3);
    cartaDoComputador = cartas[numberMaquina];

    let numberJogador = parseInt(Math.random() * 3);
    while (numberMaquina == numberJogador) {
        numberJogador = parseInt(Math.random() * 3);
    }
    cartaDoJogador = cartas[numberJogador];
    console.log(cartaDoJogador);

    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnSortear").disabled = true;

    exibirOpcoes();
}

function exibirOpcoes() {
    let opcoes = document.getElementById("opcoes");
    let opcoesTexto = "";

    for (let atributo in cartaDoJogador.Atributos) {
        opcoesTexto +=
            `<input type='radio' name='atributo' value='${atributo}'>` + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");

    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let elementoResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaDoJogador.Atributos[atributoSelecionado];
    let valorCartaMaquina = cartaDoComputador.Atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu!";
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Você perdeu, a carta da maquina é maior :( ";
    } else {
        elementoResultado.innerHTML = "Empatou";
    }
    console.log(cartaDoComputador);
}
