console.log(soma (3, 4))

// function declariation  posso chamar antes da função
function soma (x, y) {
    return x + y
}

// function expression executar comando depois da função
const sub = function (x, y) {
    return x - y
}

console.log(sub (10, 3))

// named funtion expression executar comando depois da função
const mult = function mult (x, y) {
    return x * y
}

console.log(mult(3, 4))
