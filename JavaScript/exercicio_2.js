alert("Vamos fazer um exercicio?") 
const nomeUsuario = prompt("Olá! usuário, qual o seu nome?") 
alert("Olá, " + nomeUsuario + " , seja bem-vinde a esse exercício!")

alert(nomeUsuario + " , agora vamos calcular a área do quadrado?")
const nomeLado = Number(prompt("Por favor , " + nomeUsuario + " , digite o valor dos lados do quadradro"))

const valorQuadradoA = nomeLado * nomeLado
console.log(valorQuadradoA)

alert("O resultado é" + valorQuadradoA)

alert(nomeUsuario + " , agora vamos calcular o perímetro do quadrado?")
const nomeLadoQ = Number (prompt("Por favor , " + nomeUsuario + " , digite o valor dos lados do quadradro"))
const nomeQuadradoP = 4 * nomeLadoQ
console.log(nomeQuadradoP)

alert("O resultado é" + nomeQuadradoP)