function AtualizarValor() {
    var total1 = Number(input1.value)
    var total2 = Number(input2.value)
    var total3 = Number(input3.value)
    var soma1 = total1 + total2 + total3
    totalCompras.innerHTML = soma1
    var total4 = Number(input4.value)
    var total5 = Number(input5.value)
    var soma2 = total4 + total5 + soma1
    totalGeraltd.innerHTML = soma2
}