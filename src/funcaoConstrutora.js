function carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0
    
    // atributo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
   // metodo publico 2
    // this deixa o codigo publico
    
    this.getVelocidadeAtual = function () {
    return velocidadeAtual
    }

}

const uno = new carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new carro (350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof Ferrari)
