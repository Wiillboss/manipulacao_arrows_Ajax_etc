//new date pode ter ATÈ 7 parametros
//Em javascript, os meses começa do zero (0), sendo dezembro onze (11)
// abaixo segue essa ordem: ano, mês, dia, hora, minuto, segundo.
let d = new Date(2020, 0, 1, 12, 30, 12);

// outra forma: dataString
let d2 = new Date('2020-01-01 15:42:17');

// 2020 - março
let d3 = new Date(2020, 2);

let d4 = new Date(0);

console.log(d.toUTCString());
console.log(d2);
console.log(d3);
console.log(d4.toUTCString());