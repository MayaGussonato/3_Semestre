let frutasVermelhas = new Array ();
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

let fuitRemovedFromFirstArray = frutasVermelhas.shift();
console.log(`${fuitRemovedFromFirstArray} foi removido da cesta!`)//REMOVE
console.log(frutasVermelhas);