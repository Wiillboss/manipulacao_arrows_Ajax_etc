let lista = [45, 4, 9, 16, 25];
let lista2 = [];

//O map MAPEA, ele roda a função em todos os itens do array
lista2 = lista.map(function(item){
    return item * 2;
});

let res = lista2;

console.log(res);


// usando for

let lista3 = [20, 85, 21, 39, 66];
let lista4 = [];

for(let i in lista3){
    lista4.push(lista3[i] * 2);
}

let res1 = lista4;

console.log(res1);

//usando flter

let lista5 = [32, 96, 14, 22, 48];
let lista6 = [];

lista6 = lista5.filter(function(item2){
    if (item2 > 25){
        return true;
    }else{
        return false;
    };
});

let res2 = lista6;

console.log(res2);

// usando every que vai dar verdadeiro,apenas se todo array atender a necessidade, se caso estiver apenas um que não atenda, vai dar falso

let lista7 = [10, 23, 47, 36, 85, 77];
let lista8 = [];

lista8 = lista7.every(function(item3){
    if (item3 > 25){
        return true;
    }else{
        return false;
    }
});

let res3 = lista8;

console.log(res3);

//usando some que vai dar verdadeiro se pelo menos 1 dentro do array atender a necessidade

let lista9 = [10, 23, 47, 36, 85, 77];
let lista10 = [];

lista10 = lista9.some(function(item4){
    return (item4 > 80)? true : false; // if ternario
});

let res4 = lista10;

console.log(res4);