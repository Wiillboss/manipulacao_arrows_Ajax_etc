let lista = ['Ovo','Farinha','Corante','Massa',];

let res = lista;
let res2 = lista.toString();
let res3 = lista.join("---");
let res4 = lista.indexOf('Corante');
let res5 = lista.indexOf('Amendoas');


console.log(res);
console.log(`String: ${res2}.`);
console.log(res3);
console.log(res4);
console.log(res5);


let lista2 = ['Goleiro','Zagueiro','Lateral','Meia',];

console.log('Lista normal');
console.log(lista2);

console.log('Lista excluindo o ultimo');
lista2.pop();
console.log(lista2);

console.log('Lista excluindo o primeiro');
lista2.shift();
console.log(lista2);

console.log('Lista Adicionando');
lista2.push('Atacante');
console.log(lista2);


console.log('Lista alterando um');
lista2[0] = ('Xerife');
console.log(lista2);

console.log('Adicionando ao final');
lista2[lista2.length] = ('Volante');
console.log(lista2);