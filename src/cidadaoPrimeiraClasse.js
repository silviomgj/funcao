// função em JS é first-class Object (citizens)
// high order function

// Criar de forma lliteral

function fun1() { }

// armazenar em uma variavel
const fun2 = function () { }

// armazenar em array
const array = [function (a, b) {return a + b}, fun1, fun2] 
console.log(array[0] (2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

// passar função como parametro 
function run(fun) {
    fun()
}

run(function () {console.log('executando...')})

//um função pode retornar/ conter função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(5)
const cincomais = soma (2, 3)
cincomais (5)