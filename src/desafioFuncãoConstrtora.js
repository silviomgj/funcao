function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('Junior')
p1.falar() 