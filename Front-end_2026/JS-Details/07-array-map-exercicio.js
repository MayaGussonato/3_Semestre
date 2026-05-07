const numeros = [
    50,
    67,
    200,
    42,
    10,
    99,
    500,
    18,
    134,
    250,
];

//rodar o map gerando novo array com o dobro dos numeros do original
const dobroNumeros = numeros.map((num) => {
 return num * 2;
})

console.log("Array modificado")

//apos exiba o valores do array dobro no console utilizando o foreach
let textoResultado = ``;
dobroNumeros.forEach((num) => {
    textoResultado += `${num} | `; //acumulando texto em uma string (sem pular linha)
});

//remove o ultimo pipe
//str.substring(0,str.length -1);
textoResultado = textoResultado.substring(0, textoResultado.length -3);
console.log(textoResultado);