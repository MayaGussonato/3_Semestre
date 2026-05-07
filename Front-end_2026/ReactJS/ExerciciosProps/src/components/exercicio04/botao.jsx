import "./botao.css"

const Botao = ({ texto, cor }) => {
    return (
        <button
            className="botao"
            style={{ backgroundColor: cor }}
        >
            {texto}
        </button>
    )
}

export default Botao