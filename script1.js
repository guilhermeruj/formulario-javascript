//var mensagem = 'Olá';
//mensagem = 'Olá Guilherme';

//console.log(mensagem);

//Comentário de um alinha

/* Operadores logico

! = Negação
&& = E Lógico
|| ou lógico

+ na frente converte para número
Se usar + em string faz concatenação


Igualde
x == y -> Igual
x != y -> Diferente
x === y -> exatamente igual
x !== y -> Não exatamente igual

** -> elevado 

*/
var m = "olá"; // Variavel Global

function imprimaOla() {
  var nome = "guilherme"; //variavel interna
  console.log("Olá");
}
//imrprimaOla();

function somo(op1, op2) {
  return op1 + op2;
}

function menor(a, b) {
  var r = a < b ? a : b; // ternario
  return r;
}

var teste = ["testando", "se", "deu", "certo"];

function formataMes(mes) {
  switch (mes) {
    case 1:
      return teste;
      break;
    case 2:
      return "fevereiro";
    default:
      return "ainda não definido";
    // return 'Não implementado'
  }
}

console.log("imprimindo de 1 a 5 com while");

var contador1 = 1;
while (contador1 <= 5) {
  console.log(contador1);
  contador1++;
}
console.log("imprimindo de 1 a 5 com while");
// conta depois verifica
var contador2 = 1;
do {
  console.log(contador2);
  contador2++;
} while (contador2 <= 5);

console.log("imprimindo de 1 a 5 com for");
for (var contador3 = 1; contador3 <= 5; contador3++) {
  console.log(contador3);
}
