var num1 = 10;
var num2 = 15;
var num3 = 2;
console.log( num1 > num2 );      //devolve com false
console.log( num1 < num3 );      //devolve com false
// condição if=se - else=senão - simbolos dos operadores de condição  : and=&&  -  or=||  - not= !
  if ( num1 > num2 ) {console.log(`o número ${num1} é maior que o número ${num2}`)} 
  else { console.log(`O número ${num1} é menor que o número ${num2}`) } ; 
// Exemplo de and (&&)
  if ( num2 > num1 && num1 > num3 ) {console.log(`o número ${num2} é maior que o número ${num1} e o número ${num1} é maior que que o número ${num3}`) } 
  else  { console.log(`O número ${num1} é menor que o número ${num2}`)} ;
// Exemplo de and (||)
console.log( num1 > num2 );  //devolve com false
console.log( num1 > num3 );  //devolve com true
if ( num3 > num1 || num2 > num1 ) { console.log(`1 - ${num1} ${num2} ${num3}`)}
 else  { console.log(`2 - ${num1} ${num2} ${num3}`)};