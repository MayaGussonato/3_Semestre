import "./App.css";
import Paragrafo from "./componentes/paragrafo/paragrafo";
import Title from "./componentes/title/title";
function App() {
  return (
    <>
      <Title nome="Mayara" sobrenome="Gussonato" texto="Bem Vindo, sou Título" />
      <Title texto="Eu sou outro Título" />
      <Paragrafo textoParagrafo = "Lorem Ipsun dolor!!!" />
    </>
  );
}

export default App;
// criar um componente Title