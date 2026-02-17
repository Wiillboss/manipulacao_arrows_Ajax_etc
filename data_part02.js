// new data pega a a data e horario atual, mas não atualiza.
// pegar somente o ano getFullYear 
// pegar somente o mês getMonth - OBS: lembrando que os meses são númerados de 0 (janeiro) a 11 (dezembro) 
// pegar somente o dia da semana getDay - OBS: lembrando que os dias da semana são númerados de 0 (domingo) a 6 (sábado)
// pegar somente o dia getDate
// pegar somente o hora getHours
// pegar somente o minuto getMinutes
// pegar somente os segundos getSeconds
// pegar somente os mili segundos getMilliseconds 
// O getTime (timeStamp) pega a quantidade de mili segundos desde a sua criação (00:00 de 1 de janeiro de 1970) até o momento atual
// Date.now faz o mesmo que getTime.

let d = new Date(); 
let novo_valor = d.getTime();

let valor_atual = Date.now();

console.log(novo_valor);
console.log(valor_atual);