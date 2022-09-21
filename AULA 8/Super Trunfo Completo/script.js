let carta1 = {
    nome: "Shiryu de dragão",
    imagem:
        "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

let carta2 = {
    nome: "Bulbasauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

let carta3 = {
    nome: "Darth Vader",
    imagem:
        "https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

let carta4 = {
    nome: "Sasuke",
    imagem:
        "https://criticalhits.com.br/wp-content/uploads/2019/09/sasuke-amaterasu.jpg",
    atributos: {
        ataque: 7,
        defesa: 9,
        magia: 10
    }
};

let carta5 = {
    nome: "Levi",
    imagem:
        "https://rollingstone.uol.com.br/media/_versions/levi-ackerman-attack-on-titan-melhores-momentos-foto-reproducao_widelg.jpg",
    atributos: {
        ataque: 10,
        defesa: 8,
        magia: 2
    }
};

let carta6 = {
    nome: "Saitama",
    imagem:
        "https://criticalhits.com.br/wp-content/uploads/2022/04/blob_7gmc.jpg",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 10
    }
};

let carta7 = {
    nome: "Naruto",
    imagem:
        "https://images.alphacoders.com/117/thumb-1920-1176885.png",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 9
    }
};

let carta8 = {
    nome: "Pikachu",
    imagem:
        "https://los40es00.epimg.net/los40/imagenes/2018/09/19/videojuegos/1537360830_157726_1537360880_noticia_normal.jpg",
    atributos: {
        ataque: 6,
        defesa: 5,
        magia: 4
    }
};


let cartaMaquina;
let cartaJogador;
let cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * 8);
    cartaMaquina = cartas[numeroCartaMaquina];

    let numeroCartaJogador = parseInt(Math.random() * 8);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 8);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName("atributo");
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    console.log("chamou");
    let atributoSelecionado = obtemAtributoSelecionado();
    let divResultado = document.getElementById("resultado");

    if (
        cartaJogador.atributos[atributoSelecionado] >
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
        cartaJogador.atributos[atributoSelecionado] <
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    let moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>";

    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type='radio' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaJogador.atributos[atributo] +
            "<br>";
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    let moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>";

    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p type='text' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaMaquina.atributos[atributo] +
            "</p>";
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}