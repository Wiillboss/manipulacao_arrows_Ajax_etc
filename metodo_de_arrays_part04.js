let lista = [27, 86, 19, 60, 51];
let lista2 = [];

//find retorna o primeiro item que ele achar que satisfaça as condições informadas
lista2 = lista.find(function(item){
    return (item == 51) ? true : false; // if ternario
});


let res = lista2;

console.log(res);

//findIndex retorna a posição do item dentro do array
lista2 = lista.findIndex(function(item){
    return(item == 51) ? true : false;
})

let res2 = lista2;

console.log(res2);

let lista_nomes = [
    {id: 1, nome:'Willian', sobrenome: 'Santos', idade: 38},
    {id: 2, nome:'Arthur', sobrenome: 'Barbosa', idade: 18},
    {id: 3, nome:'Gael', sobrenome: 'Silva', idade: 4},
    {id: 4, nome:'Miguel', sobrenome: 'Ribeiro', idade: 1}
];

let pessoa = lista_nomes.find(function(item){
    return(item.idade == 4) ? true : false;
});

let posicao = lista_nomes.findIndex(function(item2){
    return(item2.idade == 4) ? true : false;
});


let resultado = pessoa;
let resultado2 = posicao;


console.log(resultado);
console.log(resultado2);
