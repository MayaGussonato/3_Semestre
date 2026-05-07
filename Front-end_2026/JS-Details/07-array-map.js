const hobbies = [
    "Correr",
    "Lutar",
    "Malhar",
    "Jogar Bola",
    "Jogar Futvolei",
    "Escutar Musica",
    "Tocar Guitarra",

    
];

//utilizando para iterar arrays e retornar um novo array, compondo um novo resultado para indice do array antigo, veja

const novosHobbies = hobbies.map((hob) =>{
   return `<p>${hob}</p>`;
});

console.log(novosHobbies);