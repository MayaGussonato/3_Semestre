/*
03) Crie um componente chamado Perfil que receba:
nome
idade
profissao
O componente deve exibir os dados em formato de cartão.
*/

import "./perfil.css"

const Perfil = ({ nome, idade, profissao }) => {
    return (
        <div className="perfil">
            <h2>{nome}</h2>

            <p>Idade: {idade}</p>

            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Perfil