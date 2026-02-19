let pessoa = {
    nome: 'Willian',
    sobrenome: 'Santos Silva',
    idade: 38,
    social:{
        facebook: 'willFace',
        instagram: 'willInsta',
        linkeDin: {
            usuario: 'will_linkeDin',
            seguidores: 54,
            url: '@will_programador'
        },
        telegran:{
            nome_telegran: 'will_tele',
            seguindo: 173
        }
    }
};

//pegando objetos dentro de outro objeto
let {facebook} = pessoa.social;
console.log(facebook);

//pegando atributos normais e objetos dentro de objetos.
//lebrando que, deste caso o SOCIAL não é a variável, mas sim o INSTRAGRAM
let {nome, social:{instagram}} = pessoa;
console.log(nome,  instagram);

//pegando um objeto dentro de outro objeto dentro de OUTRO OBJETO
//pegando um objeto dentro de outro objeto dentro de OUTRO OBJETO e renomeando (não foi entendido e não funcionou)
//Com o objeto TELEGRAN, foi enviado o objeto com seus atributos 
let {idade, social:{linkeDin:{url, seguidores, usuario}}, social:{telegran}} = pessoa;
console.log(idade, url,seguidores, usuario, telegran);

//feito sem descontruir
function pegar_Nome_Completo(obj){
    return `${obj.nome} ${obj.sobrenome}`;
}
console.log(pegar_Nome_Completo(pessoa));

//usando função para descontruir no próprio parametro
function pegar_nome_completo_descontruindo({nome, sobrenome, sexo = 'Masculino'}){
    return `${nome} ${sobrenome} ${sexo}`;
}
console.log(pegar_nome_completo_descontruindo(pessoa));