/*
*Kauê Prestes
*
*/

//1. a = 10  b = 5

//2. a = 10  b = 10  c = 10

//2. perguntaHora    perguntaSalario

//4.

let nome
let idade
console.log(typeof nome);
console.log(typeof idade);
// porque nao foi definido string ou number para as variaveis
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual a sua idade?");

console.log(nome);
console.log(idade);
// foi definido o string e o number fazendo perguntas para o usuario
console.log("Olá", nome,"você tem", idade,"anos.")

//5.

let roupa
let cachorro
let gato

roupa = prompt("Você está usando uma roupa azul hoje?");
cachorro = prompt("Você gosta de cachorros?");
gato = prompt("Você gosta de gatos?");

console.log(roupa);
console.log(cachorro);
console.log(gato);

console.log( "Você está usando uma roupa azul hoje?", roupa);
console.log( "Você gosta de cachorros?", cachorro);
console.log( "Você gosta de gatos?", gato);

//6.

let a = 10;
let b = 25;
let c;
 c = a;
 a = b;
 b = c;

 console.log(a, b, c);
