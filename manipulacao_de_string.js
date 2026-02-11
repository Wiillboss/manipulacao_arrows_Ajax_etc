let nome = 'Willian dos Santos Silva';

let resultado = nome.replace('Willian', "Zlatan");

console.log(`${nome} é o nome original, e a sua substituição: ${resultado}.`);

/*Replace é usado como metodo de substituição e tem dois parametros:
    1) O que se procura 
    2) Substitue o que estava procurando
    
    OBS: no exemplo, ele não altera o valor original da variável, somente a variável que recebe o resultado .*/

let maiuscula = nome.toUpperCase();
console.log(`Nome todo maiusculo: ${maiuscula}`);

let minuscula = nome.toLowerCase();
console.log(`Nome todo minusculo: ${minuscula}`);

let contatena = nome.concat(' Marques');
console.log(contatena);

// trim retira os espaços tanto do começo quanto do fim.

let identificar = nome.charAt(2);
let identificar2 = nome[0];
console.log(`No nome: ${nome}, o terceiro caracter é ${identificar}.`);
console.log(`No nome: ${nome}, o primeiro caracter é ${identificar2}.`);


let dividir = nome.split(' ');
console.log(dividir);
//o split faz uma divisão a partir do caracter informado como parametro e o gera um array