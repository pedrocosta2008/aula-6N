let nome = prompt("qual seu nome?0");
let anoNascimento = prompt("qual o ano do seu nascimento?")
let anoatual = prompt("ano atual")

console.log("Nome:", nome)
console.log("idade:", (anoatual -anoNascimento))
console.log("é maior de idade?", ((anoatual - anoNascimento) >=18))
console.log("idade em 2050:", ((2050-anoNascimento)))
