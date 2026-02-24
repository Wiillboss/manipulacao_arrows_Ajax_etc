let telefone = '5';

//padEnd completa (no final) uma sequência com a quantidade desejada e com o que deseja completar respectivamente
console.log(telefone.padEnd(9, "*"));

let cpf = '58';
//padStart completa (no incio) uma sequência com a quantidade desejada e com o que deseja completar respectivamente
console.log(cpf.padStart(11, '-'));

//aplicação na prática
let cartao = '123123123123';
let ultimos_digitos = cartao.slice(-4); //pegando os ultimos 4 números do cartão
let cartao_mascarado = ultimos_digitos.padStart(12, '*'); //
console.log(`Este é o seu cartão: ${cartao_mascarado}?`);