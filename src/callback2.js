const notas = [7.0, 7.1, 6.5, 3.9, 5.9, 9.0,]

// sem callback

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 
})

console.log(notasBaixas2)

// outro estil de callback

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
