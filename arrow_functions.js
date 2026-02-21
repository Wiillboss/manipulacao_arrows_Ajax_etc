//primeira forma de se fazer uma função
function somar(x,y){
    return x+y;
}

//segunda forma de se fazer uma função
let subtrair = function(w,z){
    return w - z;
}

//terceira forma de se fazer uma função = arrow function
let multi = (a,b) =>{
    return a * b;
}

//terceira forma de se fazer uma função = arrow function sem chaves
let dividir = (c,d) => c/d;


// as duas funções a seguir fazem a mesma coisa de forma diferentes.
let letrasNome = (nome) =>{
    return nome.length;
}

let letraSobreNome = (sobreNome) =>sobreNome.length;

console.log(somar(10,5));
console.log(subtrair(10, 5));
console.log(multi(10, 5));
console.log(dividir(10, 5));
console.log(letrasNome('willian'));
console.log(letraSobreNome('Silva'));

//arrow function também é chamada de função anonima, a diferença entre ambas é que arrow funciton não temos o objeto THIS 