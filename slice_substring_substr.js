let nome = 'Willian dos Santos Silva';

/*slice serve basicamente retornar um intervalo entre duas posições.
    Tem dois parametros (inicio e o fim), mas caso deixe apenas um,
    indica que ele vai mostrar tudo para frente do ordenado.
    Usando um número NEGATIVO, ele começa a acontagem do fim */
let resultado = nome.slice(-14);

let resultado2 = nome.substring(-10);
/*substring faz basicamente a mesma coisa do slice, entretanto não é possível usar número negativo */

let resultado3 = nome.substr(-2, 5);
/*substr é semelhante ao slice e substring e faz uso de dois parametros.
    1) Primeiro parametro indica a posição inicial
    2) Segundo parametro indica a quantidade de caracteres que será pego
*/
console.log(resultado);
console.log(resultado2);
console.log(resultado3);