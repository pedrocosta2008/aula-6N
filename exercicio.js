/*
*Pedro Costa
*
*/

//Exercicios de interpretação

// 1. A=10 B=5

// 2. A=10 B=10 C=10

//3. Um nome melhor para Variavel(p) é "Horas de trabalho por dia"
//Um nome melhor para Variavel(t) é "Valor diario "

//Exercicios de escrita

// 1.


let nome;
let idade;


console.log(typeof nome);
console.log(typeof idade);



//foi escrito UNDEFINED pois não atribuimos um valor


nome = prompt("qual seu nome?");
idade = prompt("qual a sua idade?");

console.log(typeof nome);
console.log(typeof idade);

//Anotei a palavra "object"

console.log("ola", nome, "voce tem", idade);

let oculos;
let tenispreto;
let calcamarrom;

oculos = prompt("voce usa óculos?");
tenispreto = prompt("voce esta calçando um tenis preto?");
calcamarrom = prompt("voce esta usando uma calça marrom?");

let sim;
let nao;
//let nao;

console.log("voce usa óculos?", oculos, "voce esta calçando um tenis preto?", tenispreto, "voce esta usando uma calça marrom?", calcamarrom);

let A = 10
let B = 25  

console.log("a=", A);
console.log("b=", B);

let C = A
A = B
B = C

console.log("o novo valor de a é", A);
console.log("o novo valor de b é", B);
