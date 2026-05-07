import "./App.css"


import Saudacao from "./components/exercicio01/saudacao"
import Produto from "./components/exercicio02/produto"
import Perfil from "./components/exercicio03/perfil"
import Botao from "./components/exercicio04/botao"
import Filme from "./components/exercicio05/filme"
import Aluno from "./components/exercicio06/aluno"
import Card from "./components/exercicio07/card"
import Contato from "./components/exercicio08/contato"
import Jogo from "./components/exercicio09/jogo"
import ItemLoja from "./components/exercicio10/itemloja"
import Pessoa from "./components/desafioextra/pessoa"

import pessoa01 from "./assets/pessoa01.png"
import pessoa02 from "./assets/pessoa02.png"
import pessoa03 from "./assets/pessoa03.jpeg"


const App = () => {
  return (
    <>
<h1>EXERCICIO 01</h1>
      <Saudacao nome="Mayara" />
      <Saudacao nome="Sabryna" />
      <Saudacao nome="Maria Helena" />

<h1>EXERCICIO 02</h1>
      <Produto
        nome="Camisa Nike"
        preco="120,00"
        descricao="camisa branca lisa"
      />

      <Produto
        nome="Bermuda Nike"
        preco="250,00"
        descricao="bermuda preta"
      />

      <Produto
        nome="Moletom Nike"
        preco="350,00"
        descricao="Moletom Cinza "
      />

  <h1>EXERCICIO 03</h1>
      <Perfil
        nome="Mayara"
        idade="18"
        profissao="Desenvolvedora"
      />

      <Perfil
        nome="Eloysa"
        idade="17"
        profissao="Desenvolvedora"
      />

  <h1>EXERCICIO 04</h1>
      <Botao texto="Entrar" cor="green" />
      <Botao texto="Excluir" cor="red" />
      <Botao texto="Salvar" cor="blue" />

  <h1>EXERCICIO 05</h1>
      <Filme
        titulo="Vingadores"
        ano="2019"
        genero="Ação"
        nota="9.5"
      />

      <Filme
        titulo="Toy Story"
        ano="1995"
        genero="Animação"
        nota="8.9"
      />

      <Filme
        titulo="Avatar"
        ano="2022"
        genero="Ficção"
        nota="9.0"

      />

       <h1>EXERCICIO 06</h1>

      <Aluno
        nome="Mayara"
        curso="Desevolvimento de sistemas"
        imagem="https://avatars.githubusercontent.com/u/207037053?v=4"
      />

      <Aluno
        nome="Sabryna"
        curso="Redes"
        imagem="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/534429068_970195955720702_6265159021411963274_n.jpg?ccb=11-4&oh=01_Q5Aa4gFnLkBZ4g8YhML4LHRLMJ8Ht89b-QiL-BCmHcoel8BN8A&oe=6A09D684&_nc_sid=5e03e0&_nc_cat=104"
      />

      <Aluno
        nome="Luis"
        curso="Desenvolvimento de sistemas"
        imagem="https://avatars.githubusercontent.com/u/207036982?v=4"
      />

      <h1>EXERCICIO 07</h1>

      <Card>
        <h2>Título do Card</h2>
        <p>Texto dentro do card</p>
      </Card>

      <Card>
        <button>Clique Aqui</button>
      </Card>

      <h1>EXERCICIO 08</h1>

      <Contato
        nome="Mayara"
        telefone="11999999999"
        email="mayara@gmail.com"
      />

      <Contato
        nome="Sabryna "
        telefone="11888888888"
        email="Sabryna@gmail.com"
      />

      <Contato
        nome="Hugo"
        telefone="11777777777"
        email="hugo@gmail.com"
      />

      <Contato
        nome="Eloysa"
        telefone="11666666666"
        email="eloysa@gmail.com"
      />

      <Contato
        nome="Rebeca"
        telefone="11555555555"
        email="rebeca@gmail.com"
      />

      <h1>EXERCICIO 09</h1>

      <Jogo
        nome="Minecraft"
        plataforma="PC"
        preco="120,00"
        imagem="data:image/jpeg;base64,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"
      />

      <Jogo
        nome="GTA V"
        plataforma="Xbox"
        preco=" 299,90"
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iKopeA28c9to8uD7lvpG52sF0jdohW2UWw&s"
      />

      <Jogo
        nome="FIFA 26"
        plataforma="Playstation"
        preco="349,99"
        imagem="https://i.ytimg.com/vi_webp/qotjZp0VlQc/maxresdefault.webp"
      />

      <h1>EXERCICIO 10</h1>

      <ItemLoja
        nome="iPhone 17 Pro Max"
        preco="12,500"
        categoria="Eletrônicos"
        estoque={150}
      />

      <ItemLoja
        nome="MacBook Air M4"
        preco="7,246"
        categoria="Eletrônicos"
        estoque={50}
      />
      <ItemLoja
        nome="Apple Watch Series 10"
        preco="4,999"
        categoria="Eletrônicos"
        estoque={0}
      />
      <h1>DESAFIO EXTRA</h1>
      <Pessoa
        nome="Carlos"
        idade="25"
        profissao="Programador"
        imagem= {pessoa01}
      />

      <Pessoa
        nome="João"
        idade="30"
        profissao="Designer"
        imagem= {pessoa02}
      />

      <Pessoa
        nome="paula"
        idade="28"
        profissao="Desenvolvedora"
        imagem= {pessoa03}
      />
      
    </>
    
  )
}

export default App




