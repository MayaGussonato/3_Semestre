const produtos = [
    {  
        descricao: "Camisa Polo",
        cor: "Preta",
        preco: 49.99,
        perfil: "M",
        quantidade: 15,
        promocao: false
    },
    {  
        descricao: "Camisa Polo",
        cor: "Rosa",
        preco: 29.99,
        perfil: "M",
        quantidade: 30,
         promocao: true
    },
    {  
        descricao: "Camisa Polo",
        cor: "Branca",
        preco: 49.99,
        perfil: "M",
        quantidade: 150,
        promocao: false
    },
    {  
        descricao: "Camisa Polo",
        cor: "Vinho",
        preco: 29.99,
        perfil: "F",
        quantidade: 150,
         promocao: true
    },
    {  
        descricao: "Camisa Polo",
        cor: "Azul",
        preco: 49.99,
        perfil: "F",
        quantidade: 50,
         promocao: false
    },
    {  
        descricao: "Camisa Polo",
        cor: "Laranja",
        preco: 49.99,
        perfil: "F",
        quantidade: 40,
        promocao: false
    }
];

//RETORNA TODAS AS CAMISETAS DO PERFIL F
//const camisetasFem = produtos.filter((p) => {

    //const perfil = p.perfil; // pega o perfil do produto
    //return perfil == "F"; // retorna apenas os que são F
//});

//console.log(camisetasFem);

//RETORNAR TODOAS EM PROMOCAO
let qtdPromocao = 0
const emPromocao = produtos.filter((p) => {
if(p.promocao == true){
    qtdPromocao += p.quantidade;
}
    return p.promocao == true; // retorna apenas os que estão em promoção
});

console.log(`Quantidade total em Promocao: ${qtdPromocao}`);

console.log(emPromocao);