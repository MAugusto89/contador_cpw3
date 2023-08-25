import { Link } from "react-router-dom"

import style from "./style.module.css"
import about from "../../assets/img/about.png";
import contact from "../../assets/img/contact.png";
import home from "../../assets/img/home.png";

const Header = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Olá mundo</h1>
      <Link to='/' className={style.navLink}>
        <img src={home} alt="Home" />
      </Link>
      <Link to='/about' className={style.navLink}>
        <img src={about} alt="Sobre" />
      </Link>
      <Link to='/contact' className={style.navLink}>
        <img src={contact} alt="Contato" />
      </Link>
    </div>
  );
};
export default Header;
