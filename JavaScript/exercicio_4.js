alert("Vamos fazer um exercicio?") 
const nomeUsuario = prompt("Olá! usuário, qual o seu nome?") 
alert("Olá, " + nomeUsuario + " , seja bem-vinde a esse exercício!")

alert("Dessa vez vamos calcular o perímetro do triângulo? possuem três lados então são três valores.")
const valorA = Number(prompt("Digite o primeiro valor do lado do triângulo"))
const valorB = Number (prompt("A vez do segundo valor do lado do triângulo"))
const valorC = Number(prompt("Por fim, o terceiro valor do lado do triângulo"))

const valorPerimetroT = valorA + valorB + valorC
console.log(valorPerimetroT)

alert("O resultado é" + valorPerimetroT)