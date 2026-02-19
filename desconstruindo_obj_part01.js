//Desconstrução ou desistruração: significa pegar e acessar informações especificas de um objeton e transformar em uma variável. 
let pessoa = {
    nome: 'Willian',
    sobrenome: 'Santos Silva',
    idade: 38,
    social:{
        facebook: 'willFace',
        instagram: 'willInsta'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

// antes era feito da forma que segue abaixo

let nomeAntes = pessoa.nome;
let sobrenomeAntes = pessoa.sobrenome;
let idadeAntes = pessoa.idade;
let instagramAntes = pessoa.social.instagram;
console.log(`Meu nome é: ${nomeAntes}. Sobrenome: ${sobrenomeAntes}. Idade: ${idadeAntes}. Instragram: ${instagramAntes}.`);

// Agora usando a desconstrução
// Abaixo dentro das chaves estão variáveis indepedentes do objeto pessoa. A var nome está sendo renomeada para 'papapa'
// O atributo profissão não existe dentro do objeto, ele está sendo criado agora como uma var padrão.
// Caso o atributo existe no objeto e tenta atribuir um novo valor, o que vai valer é o valor do atributo dentro do objeto.

let {nome:papapa, sobrenome, idade = 0 , profissao = "Programador"} = pessoa;
console.log(papapa, sobrenome, idade, profissao);