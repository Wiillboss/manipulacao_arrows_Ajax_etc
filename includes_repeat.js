// função includes serve tanto para string quanto para array e retorna true ou false. Seu objetivo é procurar algo

let lista = ['ovo', 'café', 'arroz', 'feijão', 'macarrão'];
/*
if(lista.includes == 'true'){
    return "Sim";
}else{
    return "Não";
};
*/
console.log(`A lista atual tem carne? ${lista.includes('carne')}`);
console.log(`A lista atual tem ovo? ${lista.includes('ovo')}`);


let nome = 'Willian';

console.log(`No nome Willian tem a letra 'a' minuscula? ${nome.includes('a')}`);
console.log(`No nome Willian tem a letra 'W' maiuscula? ${nome.includes('W')}`);
console.log(`No nome Willian tem a letra 'w' minuscula? ${nome.includes('w')}`);

//como fazer uma string se repetir 
console.log(`Repetindo a letra x 3 vezes: ${'x'.repeat(3)}.`);
console.log(`Repetindo a letra f 6 vezes: ${'f'.repeat(6)}.`);

let exemplo = 'GAEL';
console.log(`Repetindo o nome do GAEL 5 vezes: ${exemplo.repeat(2)}`);