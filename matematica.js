// Math.round aredonda para cima ou para baixo (vai depender do número, depois do ponto (virgula), se for 5 ele arredonda para cima)
// Math.floor SEMPRE arredonda para baixo (independe do número após o ponto)
// Math.ceil SEMPRE arredonda para cima (independe do número após o ponto)
// Math.abs é o número absoluto (número positivo)
// Math.max identifica o maior número dentro de intervalo
// Math.min identifica o menor número dentro de intervalo
/* Math.radom retorna um número aleatório entre 0 e 1.
    Para determinar um intervalo:
    Multiple o Math.radom pelo limite desejado e arredonde para baixo para nunca passar do limite desejado 
*/

let valor = Math.floor(Math.random() * 100);

console.log(valor);