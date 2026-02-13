let times = ['Curinthia', 'São Paulo', 'Palmeiras', 'Santos'];

delete times[1];  // O delete excluir o item do array, entretanto deixa o espaço vago

let res = times;

console.log(res);

let cores = ['Azul','Verde','Amarelo','Vermelho','roxo', 'cinza' ];

cores.splice(1, 3);

/*splice é usado para deletar de arrays e tem dois parametros
    1) O index que deseja remover (0, 1, 2, 3 ...)
    2) quantos itens deseja remover a partir do index.
*/

let arco_iris = cores;

console.log(arco_iris);

let carros_polular = ['Fiesta','Corsa','Fiurino','Gol','Uno','Tempra'];

let carros_luxo = ['Ferrari','Jaguar','Land Rover','Fusca'];

let concecionaria = carros_polular.concat(carros_luxo);//concat junta os arrays.

console.log(concecionaria);

let nomes = ['Pedro','Gael','Willian','Antonio','Zlatan','Cesar','Andre','Miguel','Arthur'];

nomes.sort(); //crescente

let colecao = nomes;

console.log(colecao);

colecao.reverse(); //decrecente

console.log(colecao);

