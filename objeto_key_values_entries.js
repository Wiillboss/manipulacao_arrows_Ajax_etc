// tanto array quando objeto são OBJETOS.

let lista = ['Ovo', 'Macarrão', 'Feijão', 'Pipoca'];

// Object.keys mostra os indice do array
console.log(Object.keys(lista));

// Object.values mostra os valores do array
console.log(Object.values(lista));

// Object.entries mostra o indice com o valo correspondente
console.log(Object.entries(lista));

let pessoa = {
    nome: 'Willian',
    sobrenome: "Santos Silva",
    idade: 38
};

// Object.keys quando se trata de um objeto, mostra suas chaves, atributos (nome: - sobrenome: - idade:)
console.log( Object.keys(pessoa));

// Object.values mostra os valores
console.log( Object.values(pessoa));

// Object.entries mostra o indice com o valo correspondente
console.log( Object.entries(pessoa));
