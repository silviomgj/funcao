function novoProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(novoProduto('notebook', 3000))
console.log(novoProduto('tv', 5000))
