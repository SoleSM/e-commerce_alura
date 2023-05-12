import Button from "./Button";
import logo from "../assets/imgs/Logo.png";

const Header = () => {
  return (
    <div >
      <img src={logo} />
      <input placeholder="¿Qué desea buscar?"/>
      <Button titleButton="Login" />
    </div>
  );
};

export default Header;
