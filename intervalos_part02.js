let timer;

function rodar(){
    timer = setTimeout(function(){
    document.querySelector('.demo').innerHTML = 'Rodou!';
}, 2000);
}

function parar(){
    clearTimeout(timer);
}

// setTimeout vai esperar um tempo e rodar a função - ele roda uma única vez.
// setInterval vai de tempos em tempos rodar a função - ele não parar, a não ser que você para ele.