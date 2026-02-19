let info = ['Willian dos Santos', 'Willian', 'dos Santos', '@willFotoinstagram', 'Masculino', 'Palmeiras'];

// pulando valores dentro de um array
let [ , , sobrenome, , sexo, time, cor] = info;


console.log( sexo, time, sexo);
                                
let [NOME, SOBRENOME] = ['Zlatan', 'Ibrahimovic'];

console.log(NOME, SOBRENOME);

function criar(){
    return [1,2,3];
}

let [a,b,c] = criar();
console.log(a,b,c);