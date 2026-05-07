let frutasVermelhas = new Array ();
let frutasCitricas = ["Limão","Abacaxi","Maracujá","Tangerina","Acerola"];


//frutasCitricas[0]
frutasVermelhas.push("Morango");
frutasVermelhas.push("Amora");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Mirtilo");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Açaí");
frutasVermelhas.push("Cranberry");


console.log(frutasVermelhas);
//console.log(frutasCitricas);

let frutaRemovida = frutasCitricas.pop();//REMOVE
console.log(frutaRemovida);//EXIBE FRUTA REMOVIDA
console.log(frutasCitricas); // EXIBE O ARRAY ATUALIZADO

let frutaRemovidaInicio = frutasCitricas.shift();//REMOVE
console.log(frutaRemovida);//EXIBE FRUTA REMOVIDA
console.log(frutasCitricas); // EXIBE O ARRAY ATUALIZADO