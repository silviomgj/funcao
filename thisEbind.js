const pessoa = {
    saudacao: 'bom dia !',
    falar() {
        console.log (this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar () // conflito entree paradigmas e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar
falar2()