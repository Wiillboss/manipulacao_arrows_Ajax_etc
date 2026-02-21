let numeros = [1, 2, 3, 4];
/* Como era feito antes
let outros = numeros;
outros.push();
*/

//abaixo está aproveirando o array números e o array OUTROS.
let outros = [...numeros, 5, 6, 7, 8, ...numeros];
console.log(outros);

//colocando apenas o nome do array sem a reticências, ele acrecenta o array
let outros2 = [numeros, 10, 24, 29, 52];
console.log(outros2);  

//acrescentando mais informações em um objeto
let info = {
    nome: 'Willian',
    sobrenome: 'Santos Silva',
    idade: 38
};

let novaInfo = {
    ...info,
    cidade: 'Cubatão',
    estado: 'São Paulo',
    pais: 'Brasil'
};
console.log(info);
console.log(novaInfo);

//daqui para baixo não ficou muito claro
function adicionar_info(infooo){
    let novasInfo2 = {
        ...infooo,
        statos: 0,
        token: 'mskxmlxsa',
        data_cadastro: '....'
    };
    return novasInfo2;
};


console.log(adicionar_info({Nome: 'Arthur', Sobrenome: 'Marques'}));