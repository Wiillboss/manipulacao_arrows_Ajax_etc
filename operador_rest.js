
// Operador rest é uma retisência (...) e é indicado para mostra mais parametros (em formato de array) que o informado
function adicionar (...numeros){
    console.log(numeros);
}

adicionar(5, 6, 7, 8, 9);

function adicionar_nomes(...nomes){
    console.log(nomes);
}

adicionar_nomes('Willian', 'Arthur', 'Gael', 'Miguel', 'Roberta');


//usando mais de um rest é preciso dentro de um array
function adicionar3(lista_nomes, ...new_names){
    let new_conjuto =[
        ...lista_nomes,
        ...new_names
    ];
    return new_conjuto
}

let lista_nomes = ['Zlatan', 'Pirlo'];
let outros = adicionar3(lista_nomes, 'Kluivert', 'Batistuta', 'Nedved');

console.log(outros);