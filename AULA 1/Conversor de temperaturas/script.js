function calcularFarenheit() {
    let f = document.getElementById("getFarenheit")
    let getValueF = Number(f.value)
    let res1 = document.getElementById("res1")
    res1.innerHTML = Number((getValueF * 1.8) + 32).toFixed(1) + "°F"
}

function calcularCelcius() {
    let c = document.getElementById("getCelcius")
    let getValueC = Number(c.value)
    let res2 = document.getElementById("res2")
    res2.innerHTML = Number((getValueC - 32) * 5/9).toFixed(1) + "°C"
}