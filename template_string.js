let nome = 'Willian';
let idade = 38;

//como era feito anteriormente
let frase = 'Meu nome é '+nome+' e '+idade+' anos tenho';
console.log(frase);

//como é feito com template string
console.log(`Meu nome é ${nome} e tenho ${idade} anos e em 2027, em maio vou fazer ${idade+1} anos.`);