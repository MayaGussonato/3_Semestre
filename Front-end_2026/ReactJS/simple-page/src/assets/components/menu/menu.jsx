import CardPerfil from "../cardperfil/cardperfil";
import "./menu.css";

function Menu() {
    return(

 <nav class="menu">
        <a href="#" class="menu__item">Home</a>
        <a href="#" class="menu__item menu__item--success">Entrar</a>
        <a href="#" class="menu__item menu__item--button-default">cadastrar</a>
        <a href="#" class="menu__item">Contato</a>
        <a href="#" class="menu__item ">Quem Somos</a>
        

     <CardPerfil/>
     
    </nav>

    );
    
} 
 
export default Menu;