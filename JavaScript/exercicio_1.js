alert("Vamos fazer um exercicio?") 
const nomeUsuario = prompt("Olá! usuário, qual o seu nome?") 
alert("Olá, " + nomeUsuario + " , seja bem-vinde a esse exercício!")

alert("Vamos calcular área do retângulo") 
const nomeAltura = Number(prompt ("Olá! " + nomeUsuario + ", digite o valor da altura do retângulo"))
const nomeBase = Number(prompt("Agora, digite o valor da base do retângulo"))

const valorAreaQ = nomeAltura * nomeBase 
console.log(valorAreaQ)

alert("O resultado é" + valorAreaQ)

alert("Agora , " + nomeUsuario + " , digite os números para calcular  o perímetro do retângulo")
const nomeAlturaP = Number(prompt ("Olá! " + nomeUsuario + ", digite o valor da altura do retângulo"))
const nomeBaseP = Number(prompt("Agora, digite o valor da base do retângulo"))

const valorPerimetroR = 2 * (nomeAltura + nomeBase)
console.log(valorPerimetroR)

alert("O resultado é" + valorPerimetroR)
