/*05) Crie um componente chamado Filme que receba:
titulo
ano
genero
nota
Mostre todas as informações na tela.

Crie pelo menos 3 filmes diferentes.
*/

const Filme = ({ titulo, ano, genero, nota }) => {
    return (
        <div>
            <h2>{titulo}</h2>

            <p>Ano: {ano}</p>

            <p>Gênero: {genero}</p>

            <p>Nota: {nota}</p>
        </div>
    )
}

export default Filme