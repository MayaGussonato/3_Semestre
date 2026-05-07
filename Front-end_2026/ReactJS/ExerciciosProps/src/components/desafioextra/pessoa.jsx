import "./pessoa.css"

const Pessoa = ({ nome, idade, cidade, imagem }) => {
  return (
    <div className="pessoa-card">

      <img src={imagem} alt={nome} />

      <h2>{nome}</h2>

      <p>Idade: {idade}</p>

      <p>Cidade: {cidade}</p>

    </div>
  )
}

export default Pessoa