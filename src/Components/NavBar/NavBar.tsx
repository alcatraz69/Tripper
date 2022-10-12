import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import { Header } from "./styles";
const NavBar: FC = () => {
  return (
    <Header>
      <div>
        <Link to="/">
          <img className="w-32 md:w-40" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex md:w-60 justify-between">
        <div className="hidden mt-2.5 md:block">
          <p>About</p>
        </div>
        <div className="hidden mt-2.5 md:block">
          <p>Contact</p>
        </div>
        <div className="mt-2.5">
          <p>Login</p>
        </div>
      </div>
    </Header>
  );
};

export default NavBar;
