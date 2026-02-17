/* Caso use LET como declaração de variável, ele só pode ser usado dentro do contexto onde foi criado, 
    por esse motivo que ele foi criado fora da função, para que seja usado dentro de mais de uma função.*/
let timer;

function comecar(){
    timer = setInterval(showTime, 1000);
};
function parar(){
    clearInterval(timer);
};

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = `${h}:${m}:${s}`;

    document.querySelector('.demo').innerHTML = txt;     
}

// Fazendo um timer para rodar a função a cada um (1) segundo.
// let timer = setInterval(showTime, 1000);
// A função usado foi setInterval, ela tem dois (2) parametros:
// 1) A função que deseja rodar
// 2) O tempo que deseja que seja rodado. OBS: esse tempo é medido em mili segundos. 1 mili segundo equivala a 1 segundo.