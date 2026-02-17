let d = new Date();
// Para poder setar datas, segue o mesmo principio da aula anterior, a unica alteração é o GET pelo SET.
/* Setando a data atual mais dias desejado:
    Dentro do parametro de setDate usar o getDate() mais a quantidade de dias desejado. Serve para horas também.
    É possível setar o quanto desejar, dependo da quantidade setada, pode alterar a data completa.*/
d.setDate(d.getDate() + 5);

let novo_valor = d;

console.log(novo_valor);