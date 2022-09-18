alert("Vamos fazer um exercicio?") 
const nomeUsuario = prompt("Olá! usuário, qual o seu nome?") 
alert("Olá, " + nomeUsuario + " , seja bem-vinde a esse exercício!")

alert("Muito bem!" + nomeUsuario + " , vamos calcular o perímetro de um circulo?")
const nomePerimetroC = Number(prompt("Por favor , " + nomeUsuario + " , digite o valor do raio do círculo"))

const valorPerimetroC = 2 * 3.14 * nomePerimetroC
console.log(valorPerimetroC)

alert("O resultado é" + valorPerimetroC)

alert("Vamos, para a vez da área do círculo" + nomeUsuario)
const nomeAreaC = Number(prompt("Por favor , " + nomeUsuario + " , digite o valor do raio do círculo"))

const valorAreaC = 3.14 * nomeAreaC * nomeAreaC
console.log(valorAreaC)

alert("O resultado é" + valorAreaC)