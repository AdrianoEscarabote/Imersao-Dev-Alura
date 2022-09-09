let listaFilmes = ["Harry Potter", "Click", "Intocaveis"]

listaFilmes.push("Marley e eu")
listaFilmes.push("Interestelar")
listaFilmes.push("Irmão urso")

for (let i = 0; i < listaFilmes.length; i++) {
    document.write(`<p> ${listaFilmes[i]} está no indice ${i} </p>`)
}