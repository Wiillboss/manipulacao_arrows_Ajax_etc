let nome = 'Willian dos Santos Silva';

let resultado = nome.length;

let especifico = nome.indexOf('dos'); 
// O indexOf mostra a pocição do que procura, caso o que procura, não existe, ele mostra -1

let espaco_branco = '';

if(nome.indexOf('Silva') > -1){
    espaco_branco = 'Achou!';
}else{
    espaco_branco = 'Não achou!'
}

console.log(`O nome ${nome} tem exatamente ${resultado} caracteres.`);
console.log(especifico);
console.log(espaco_branco);
