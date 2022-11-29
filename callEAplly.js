function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4000,
    desc: 0.20,
    getPreco
}

global.preco = 20
global.desc = 0.2
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 50000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.20, 'R$'))
console.log(getPreco.apply(global[0.20, 'R$']))
